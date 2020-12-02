const express = require('express');
const app = express();
const path = require('path');
const {con} = require('./db_connection.js');
const {findMostRecentNote} = require("./query_functions.js");
const superpitch = require("../public/main.js");

var most_recent_beat;
var pitch = superpitch.superpitch;
//console.log(pitch);

app.use(express.static(path.join(__dirname, "../public")));

/*app.get('/',function(req,res){
  //__dirname : It will resolve to your project folder.
  // ****read
});
*/
console.log('Running at Port 3000');

app.post('/save', function(req, res) { 
  // ****write
  // when the browser posts onto /save
  // create/update/delete row with buttons
  // do stuff with res after mysql.connection 
  con.query('SELECT * FROM notes', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("All the notes: ", result);
    res.send(result);
  });
});

// Remove most recent note (biggest note id)
app.post('/remove', function(req, res) { 
  // ****write
  con.query('DELETE FROM notes ORDER BY id DESC LIMIT 1;', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("removed: ", result);
    res.send(result);
  });
});

app.post('/update', function(req, res) { 
  // ****write
  console.log("superpitch: " + superpitch);
  console.log("pitch: " + pitch);
  //console.log(superpitch.pitch);
  //console.log(superpitch.octave);
  con.query('UPDATE notes SET pitch = ? ORDER BY id DESC LIMIT 1;', [pitch], function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("updated: ", result);
    res.send(result);
  });
});

app.post('/insert', function(req, res) { 
  // ****write
  most_recent_beat = findMostRecentNote()[0].beat;
  con.query('INSERT INTO notes VALUES (NULL, 2, 4, 9, 16, "A2");', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("inserted: ", result);
    res.send(result);
  });
});

app.listen(process.env.port || 3000);
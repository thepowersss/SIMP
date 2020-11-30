const express = require('express');
const app = express();
const path = require('path');
const con = require('./db_connection.js').connection;

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

app.post('/remove', function(req, res) { 
  console.log("here");
  // ****write
  con.query('DELETE FROM notes WHERE (pitch = "G2" AND measureNumber = 16);', function(error, result, fields) {
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
  con.query('UPDATE notes SET pitch = "G2" WHERE id = 99;', function(error, result, fields) {
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
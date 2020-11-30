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
      throw error;
    }
    console.log("The solution is: ", result);
  });
});

app.listen(process.env.port || 3000);
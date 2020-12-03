const express = require('express');
const app = express();
const path = require('path');
const {con} = require('./db_connection.js');
// const {findMostRecentNote} = require("./query_functions.js"); // file is unused
//const {superpitch} = require("../public/main.js");

// turns the mysql export query into csv
const fastcsv = require("fast-csv");
const fs = require("fs");
var ws1 = fs.createWriteStream("notes.csv");
var ws2 = fs.createWriteStream("piece.csv");
var ws3 = fs.createWriteStream("staff.csv");
var ws4 = fs.createWriteStream("measure.csv");

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json()); // express.json() returns a javascript object that parses the body into json
/*
app.get('/',function(req,res){
  //__dirname : It will resolve to your project folder.
  // ****read
});
*/

console.log('Running at Port 3000');

app.post('/export', function(req, res) { 
  // ****write
  // when the browser posts onto /save
  // create/update/delete row with buttons
  // do stuff with res after mysql.connection 

  var dummyResult;

  // notes table to csv
  con.query('SELECT * FROM notes', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    ws1 = fs.createWriteStream("notes.csv");
    const jsonData = JSON.parse(JSON.stringify(result));
    console.log("All the notes: ", jsonData);
    //console.log("All the notes: ", result);
    //res.send(result); //duplicate
    fastcsv
      .write(jsonData, { headers: false })
      .on("finish", function() {
        console.log("Write to notes.csv successfully!");
      })
      .pipe(ws1);
  });

  // piece table to csv
  con.query('SELECT * FROM piece', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    ws2 = fs.createWriteStream("piece.csv");
    const jsonData = JSON.parse(JSON.stringify(result));
    console.log("Piece title + composer: ", jsonData);
    //console.log("All the notes: ", result);
    //res.send(result); duplicate
    fastcsv
      .write(jsonData, { headers: false })
      .on("finish", function() {
        console.log("Write to piece.csv successfully!");
      })
      .pipe(ws2);
  });

  // staff table to csv
  con.query('SELECT * FROM staff', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    ws3 = fs.createWriteStream("staff.csv");
    const jsonData = JSON.parse(JSON.stringify(result));
    console.log("staffs: ", jsonData);
    //console.log("All the notes: ", result);
    //res.send(result); duplicate
    fastcsv
      .write(jsonData, { headers: false })
      .on("finish", function() {
        console.log("Write to staff.csv successfully!");
      })
      .pipe(ws3);
  });

  // measure table to csv
  con.query('SELECT * FROM measure', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    ws4 = fs.createWriteStream("measure.csv");
    const jsonData = JSON.parse(JSON.stringify(result));
    console.log("staffs: ", jsonData);
    //console.log("All the notes: ", result);
    fastcsv
      .write(jsonData, { headers: false })
      .on("finish", function() {
        console.log("Write to measure.csv successfully!");
      })
      .pipe(ws4);

    //res.send(result);
    dummyResult = result;
  });

  // shell commands to execute the data flow
  const execSync = require('child_process').execSync;
  const output1 = execSync('python csv_to_ly.py', { encoding: 'utf-8' });
  console.log('Running python script csv_to_ly.py\n', output1);
  
  var file_name = "Minuet in G major.ly"; // hardcoded, change to user input later
  const output2 = execSync('lilypond ' + file_name, { encoding: 'utf-8' });
  console.log('Running lilypond\n', output2);
  const output3 = execSync('mv "Minuet in G major.pdf" public', { encoding: 'utf-8' });
  console.log('moving result file to correct folder\n', output3);

  res.send(dummyResult);
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
  /* some jiggling needs to be done with 'measure' table, but code should still work without this
  con.query('DELETE FROM measure ORDER BY measureNum DESC LIMIT 1;', function(error, result, fields) {
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("removed: ", result);
    res.send(result);
  });
  */
});

app.post('/update', function(req, res) { 
  // ****write
  var superpitch = req.body.superpitch; // gives request body in object form
  console.log("superpitch: " + superpitch);
  con.query('UPDATE notes SET pitch = ? ORDER BY id DESC LIMIT 1;', [superpitch], function(error, result, fields) {
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
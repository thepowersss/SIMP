const {con} = require('./db_connection.js');

function findMostRecentNote() {
    con.query('SELECT * FROM notes ORDER BY id DESC LIMIT 1;', function(error, result, fields) { // select note with biggest id
    if (error) {
      console.error(error);
      throw error;
    }
    console.log("Most recent note: ", result);
    return result;
  });
}

module.exports = { 
    findMostRecentNote
}
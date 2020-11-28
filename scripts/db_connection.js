/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "140.82.49.189",
  user: "guestuser",
  password: "password",
  database: "simp_notes"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to jame server!");
});

con.query('SELECT * FROM notes', function(error, result, fields) {
    if (error) throw error;
    console.log("The solution is: ", result);
});

con.end();
*/
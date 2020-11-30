/* talk to mySQL here */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "140.82.49.189", //read documentation for host, need port?
    port: "3306",
    user: "sherwine",
    password: "password", // read from password.txt, load into environment variable?
    database: "simp_notes",
    insecureAuth: true
});

con.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});

con.query('SELECT * FROM notes', function(error, result, fields) {
    if (error) {
    	throw error;
    }
    console.log("The solution is: ", result);
});

con.end();
/* talk to mySQL here */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "140.82.49.189",
    port: "3306",
    user: "sherwine",
    password: "password", // read from password.txt, load into environment variable?
    database: "simp_db",
    insecureAuth: true
});

con.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});

module.exports = {
    con
}
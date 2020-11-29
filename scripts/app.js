const http = require('http'); //what web framework?

const hostname = '140.82.49.189';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});

/* talk to mySQL here */
var mysql = require('mysql');

// read from password.txt, load into environment variable

var con = mysql.createConnection({
  host: "140.82.49.189", //read documentation for host, need port?
  user: "guestuser",
  password: "password", // remember to message james
  database: "simp_notes"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

con.query('SELECT * FROM notes', function(error, result, fields) {
    if (error) throw error;
    console.log("The solution is: ", result);
});

con.end();
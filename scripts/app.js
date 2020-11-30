const http = require('http'); //what web framework?

const hostname = '140.82.49.189';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* talk to mySQL here */
var mysql = require('mysql');

// read from password.txt, load into environment variable
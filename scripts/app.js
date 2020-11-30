const express = require('express');
const app = express();
const path = require('path');

app.get('/',function(req,res){
  res.sendFile('/root/sherwin_SIMP/simp.html');
  //__dirname : It will resolve to your project folder.
  // ****read
  // serve
});

console.log('Running at Port 3000');

app.post('/save', function(req, res) { 
  // ****write
  // when the browser posts onto /save
  // create/update/delete row with buttons
  // do stuff with res after mysql.connection 
});

app.listen(process.env.port || 3000);
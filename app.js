var express = require('express')
var app = express()

app.use(middleWare);
 
app.get('/', function (req, res) { 
  console.log(req.serverName);
  res.send('Express.js simple demo example from ' + req.serverName );
})
 
app.listen(8000)

function middleWare(req, res, next){
    console.log("I will modify req object");
    req.serverName = 'upgrad demo server';
    next();
}

 
app.listen(8000)

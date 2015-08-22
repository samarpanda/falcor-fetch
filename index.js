var express = require('express');
var app = express();
var falcor = require('falcor');
var falcorExpress = require('falcor-express');

app.use(express.static("."));
app.listen(9090);

console.log("Navigate to http://localhost:9090");
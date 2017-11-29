"use strict";

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/build', express.static(__dirname + 'build'));

app.get('*.css', function(request, response) {
  response.set('Content-Type', 'text/css');
  response.sendFile(__dirname + request.originalUrl);
});

app.get('*.js', function(request, response) {
  response.set('Content-Type', 'application/javascript');
  response.sendFile(__dirname + request.originalUrl);
});

app.get('*.json', function(request, response) {
  response.set('Content-Type', 'application/json');
  response.sendFile(__dirname + request.originalUrl);
});

app.get('/', function(request, response) {
  response.set('Content-Type', 'text/html');
  response.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port: ', app.get('port'));
});
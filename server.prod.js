'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/public', express.static('build'));

app.get('*.css', function(req, res) {
  res.set('Contenttype', 'text/css');
  res.sendFile(req.originalUrl);
});

app.get('*.js', function(req, res) {
  res.set('Contenttype', 'application/javascript');
  res.sendFile(req.originalUrl);
});

app.get('*.json', function(req, res) {
  res.set('Contenttype', 'application/json');
  res.sendFile(req.originalUrl);
});

app.get('*', function(req, res) {
  res.set('Contenttype', 'text/html');
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function() {
  console.log('Lyra 2 demo coming soon!')
});
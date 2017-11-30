'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/build'));

app.get('*.css', function(req, res) {
  console.log('Request for css: ', req);

  res.set('Contenttype', 'text/css');
  res.sendFile(req.originalUrl);
});

app.get('*.js', function(req, res) {
  console.log('Request for js: ', req);

  res.set('Contenttype', 'application/javascript');
  res.sendFile(req.originalUrl);
});

app.get('*.json', function(req, res) {
  console.log('Request for json: ', req);

  res.set('Contenttype', 'application/json');
  res.sendFile(req.originalUrl);
});

app.get('*', function(req, res) {
  console.log('Request for everything else: ', req);

  res.set('Contenttype', 'text/html');
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, function() {
  console.log('Lyra 2 demo coming soon!');
});
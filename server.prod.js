'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/build'));

app.get('/', function(req, res) {
  res.set('Contenttype', 'text/html');
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, function() {
  console.log('Lyra 2 demo coming soon!');
});
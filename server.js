var express = require('express');

// This is a change 

var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 8080);

exports.app = app;

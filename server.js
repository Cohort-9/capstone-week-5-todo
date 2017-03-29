var express = require('express');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// a change
app.use('/', express.static('public'));

app.get('/hi', (req, res) => {
  res.send("Yoyoyoyo");
});

app.listen(process.env.PORT || 8080);

exports.app = app;

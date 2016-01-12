var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('App 1');
});

app.listen(process.env.PORT, function () {
  console.log(`App 1 listening on port ${process.env.PORT}`);
})
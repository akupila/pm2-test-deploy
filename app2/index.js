var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('App 2');
});

app.listen(process.env.PORT, function () {
  console.log(`App 2 listening on port ${process.env.PORT}`);
})
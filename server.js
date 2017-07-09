var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.all('/templates/*', function(req, res) {
  res.sendFile(__dirname + "/public/templates/errorTemplate.html")
});

app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});

app.listen(8000, function() {
  console.log("what do you want from me! get me on 8000 ;-)");
});

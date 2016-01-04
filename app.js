// Import dependencies
var express = require('express');
var multer = require('multer');
var upload = multer();
var app = express();

// Initialize server
var port = process.env.PORT || 9000;
app.listen(port);
console.log('Listening on port ' + port);

// Setup routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', upload.single('file'), function(req, res){
  res.json({
    size: req.file.size
  });
});

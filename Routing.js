var express = require('express');
var app = express();

app.post('/ra', function(req, res) {
    res.send("Hello! I am rajnish and this code is to learn routing in express.js");
});

app.get('/', function(req, res) {
    res.send("<h1>Hello! I am rajnish and this code is to learn routing in express.js</h1>");
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
});
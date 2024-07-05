var express = require('express');
var app = express();

app.get('/ra', function(req, res) {
    res.send("hello! I am rajnish");
});

app.listen(3000);

//to run this code run "http://localhost:3000/ra" in chrome

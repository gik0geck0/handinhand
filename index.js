var express = require('express');

// Prepare ExpressJS
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Prepare Routes
app.get('/', function(req, res) {
    res.render("home");
});

// Start the server

// HTTP listener
var httpPort = process.env.PORT || 5000;
var http = require('http');
http.createServer(app).listen(httpPort, function() {
    console.log("Started on HTTP port", httpPort);
});

// TODO: HTTPS listener
// Generate a key & crt
// read those files in
// use https to start a listener

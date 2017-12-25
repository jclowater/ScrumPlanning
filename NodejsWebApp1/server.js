'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));


app.get("/", function (request, response) { //root dir
    response.send("Hello!!");
    response.end();
});

app.listen(port);



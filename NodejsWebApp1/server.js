
var http = require('http');
var port = process.env.PORT || 1337;

var express = require("express");
var app = express();

var options = {
    dotfiles: 'ignore',
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static(__dirname + "/public", options));

app.engine('html', require('ejs').renderFile);

app.get("/", function (request, response) {
   response.render('planning.html')
    response.end();
});

app.listen(port);



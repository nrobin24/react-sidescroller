var PORT = process.env.PORT || 8080;
var express = require("express");

var app = express();

app.use(express.static(__dirname + "/"));

app.listen(PORT);

var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./src/route/route");
var cors = require("cors");

var app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

module.exports = app;

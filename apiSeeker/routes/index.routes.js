const express = require('express');

var app = express();


app.use("/api", require("./user.routes"));

module.exports = app;
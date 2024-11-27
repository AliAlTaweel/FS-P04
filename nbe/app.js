const config = require("./utils/config");
const logger = require("./utils/logger");
const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("<h2>Hello from app</h2>");
});

module.exports = app;

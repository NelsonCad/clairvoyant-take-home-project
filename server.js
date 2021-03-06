const express = require("express");
const logger = require("morgan");
const router =require("express").Router();
const bodyParser = require("body-parser");
const path = require("path");
const chartInfo = require("./dataTonic");

const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger("dev"));

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Routes

//API routes start with [siteName]:PORT
app.get("/api", function (req, res) {
  return res.json(chartInfo)
});
//if no API routes are hit, send React app
router.use(function (req, res) {
  res.sendFile('*', path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
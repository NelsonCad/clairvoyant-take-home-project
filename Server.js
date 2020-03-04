const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3001;

//middleware
app.use(bodyParser.urlencoder({extended: false}));
app.use(bodyParser.json());

app.use(logger("dev"));

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
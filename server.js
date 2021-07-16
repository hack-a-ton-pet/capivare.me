const express = require("express");
const compression = require("compression");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "./build")));
app.use(favicon(path.join(__dirname, "./public", "favicon.ico")));
app.use(compression());

app.use((req, res) => {
  if (req.protocol !== "https") {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(port);

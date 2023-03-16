const express = require("express");

const app = express();

// Which station listen to
// Callback when listen works
app.listen(3000, function () {
  console.log("That's awesome, server started...");
});

app.get("/", function (req, res) {
  // I can console.log req properties and values
  res.send("<h1><em>Ron did it</em></h1>");
});

app.get("/contact", function (req, res) {
  // I can console.log req properties and values
  res.send("Contact me on LinkdIn");
});

app.get("/about", function (req, res) {
  // I can console.log req properties and values
  res.send("<h1>About us</h1>");
});

app.get("/hobbies", function (req, res) {
  // I can console.log req properties and values
  res.send("<ol><li>Code</li><li>Sport</li></ol>");
});

// app.get("/phones", function (req, res) {
//   res.send("Which phone do you want to get?");
// });

app.get("/phones/:serial", function (req, res) {
  serial = req.params.serial;
  res.send("Here goes Phone no. " + serial);
});

app.get("/phones", function (req, res) {
  serial = req.query.serial;
  res.send("Here goes Phone no. " + serial);
});

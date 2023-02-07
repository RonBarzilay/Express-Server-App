const express = require("express");

const app = express();

app.listen(3000);

app.get("/", function (req, res) {
  res.send("Ron did it");
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

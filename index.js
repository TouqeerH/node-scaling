const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("A simple HTTP request");
});

app.listen(3000, () => console.log("App listening on port 3000"));

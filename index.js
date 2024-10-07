const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("A simple HTTP request");
});

app.get("/heavy-task", (req, res) => {
  let counter = 0;
  while (counter < 9000) {
    counter++;
  }
  console.log(`${counter} Iteration request completed`);

  res.end(`${counter} Iteration request completed`);
});

app.get("/light-task", (req, res) => {
  res.send("A simple HTTP request");
});

app.listen(3000, () => console.log("App listening on port 3000"));

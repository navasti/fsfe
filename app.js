const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("views/test.html", { root: __dirname });
});

app.get("/teapot", (req, res) => {
  res.status(418);
  res.set("X-full-stack", "4life");
  res.send("i preffer coffe");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

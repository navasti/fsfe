const express = require("express");
const app = express();
const port = 3000;

const expressWs = require("express-ws")(app);

app.get("/", (req, res) => {
  res.sendFile("views/test.html", { root: __dirname });
});
app.get("/websocket", (req, res) => {
  res.sendFile("views/websocket.html", { root: __dirname });
});

app.get("/teapot", (req, res) => {
  res.status(418);
  res.set("X-full-stack", "4life");
  res.send("i prefer coffee");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.ws("/websocket", (ws, req) => {
  ws.on("message", function (msg) {
    console.log(msg);
    if (msg === "test") setTimeout(() => {ws.send("test passed")}, 1000);
  });
});

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080",
  },
});

app.get("/", (req, res) => {
  res.send("Hello word");
});

io.on("connection", (socket) => {
  console.log("[Web socket] User connected");

  socket.on("on-chat", (data) => {
    console.log({ data });
    io.emit("user-chat", data);
  });
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});

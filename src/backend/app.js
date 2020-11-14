const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const gameLogic = require("./gameLogic");

const io = socketio(server);

io.on("connection", (client) => {
  console.log("socket connected");
  io.send("Heya!");
  gameLogic.initializeGame(io, client);
  client.on("disconnect", () => {
    console.log("disconnect");
  });
});

server.listen(process.env.PORT || 5000);

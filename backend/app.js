const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socketio = require("socket.io");
const game = require("./game");

const io = socketio(server, { transports: ["websocket", "polling"] });
var clients = [];

io.on("connection", (client) => {
  console.log(client.id + " connected");
  clients.push(client.id);
  game.init(io, client);

  client.on("disconnect", () => {
    console.log(client.id + " disconnected");
    clients.pop(client.id);
  });

  console.log("clients: " + clients);
});

server.listen(process.env.PORT || 5000);

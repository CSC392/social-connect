import io from "socket.io-client";

const express = require("express");
const app = express();
const http = require("http");
const server = require("socket.io");

//Default Port
const port = 8000;

//set up express

const gameServer = http.createServer(app);
const socketIo = server(gameServer);

//set up socket
//name of socket will be "socketConnect" because why not?
//Using the variable "data" here as a placeholder for now, but this will actually be game Data the state of the board.
socketIo.on("socketConnect", (socket) => {
  console.log("New Player Connected!");

  socket.on("Incoming", (data) => {
    //broadcast to the other player
    socket.broadcast.emit("Outgoing", data);
  });
});

//Server starts listening
server.listen(port, () =>
  console.log("Server started. Listening on port " + port)
);
//socket.on("disconnect", () => console.log("Player disconnected"));

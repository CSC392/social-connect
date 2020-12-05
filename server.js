const http = require("http");
const express = require("express");
const socketIO = require("socket.io");
const path = require("path");

const PORT = process.env.PORT || 5000;

// create an express server
const app = express();

// use path for /build static files
app.use(express.static(path.resolve(__dirname, "build")));

// serve static /build files on any URL
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

// create a HTTP server
const server = http.createServer(app);

// create a socketIO server
const io = socketIO(server, {
  pingInterval: 1000 * 60 * 1, // 1 minute
  pingTimeout: 1000 * 60 * 5, // 5 minutes
});

// handle connections
var clients = [];
io.on("connection", (socket) => {
  console.log("Client", socket.id, "connected");
  clients.push(socket.id);
  handle(io, socket);

  socket.on("disconnect", () => {
    console.log("Client", socket.id, "disconnected");
    clients.pop(socket.id);
  });
});

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server started on port", PORT);
});

/* logic.js */

const handle = (io, socket) => {
  socket.on("createNewGame", host);
  socket.on("joinGame", joinGame);
  socket.on("host username", hostUsername);
  socket.on("validate join code", validateJoinCode);
  socket.on("start game", startGame);
  socket.on("move", updateGameState);
  socket.on("game over", endGame);
  socket.on("message", transmitMessage);
};

function host(hostData) {
  const { gameId, username } = hostData;
  console.log("Hosted game ", gameId, username);
  this.emit("host username", username);
  this.join(gameId);
}

function joinGame(data) {
  const { gameId, username } = data;
  this.emit("join username", username);
  console.log(username, "joined game", gameId);
  this.join(gameId);
  this.to(gameId).emit("join username", username);
  this.to(gameId).emit("get host username");
}

function hostUsername(hostData) {
  const { gameId, username } = hostData;
  console.log("sent host username", username);
  this.to(gameId).emit("host username", username);
}

function validateJoinCode(gameId) {
  const rooms = io.sockets.adapter.rooms;
  if (rooms.has(gameId)) {
    const room = rooms.get(gameId);
    if (room.size < 2) {
      this.emit("status", 0);
      return;
    }
    this.emit("status", 2);
    return;
  }
  this.emit("status", 1);
  return;
}

function startGame(gameId) {
  this.to(gameId).emit("start game");
}

function updateGameState(data) {
  const { newMove, gameId } = data;
  this.to(gameId).emit("updateGameState", newMove);
}

function endGame(data) {
  const { winner, gameOverType, gameId } = data;
  this.to(gameId).emit("endGame", winner, gameOverType);
}

function transmitMessage(data) {
  const { message, gameId } = data;
  this.to(gameId).emit("message", message);
}

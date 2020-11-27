let io;
let gameSocket;

const init = (sio, socket) => {
  io = sio;
  gameSocket = socket;
  gameSocket.on("createNewGame", host);
  gameSocket.on("joinGame", joinGame);
  gameSocket.on("host username", hostUsername);
  gameSocket.on("validate join code", validateJoinCode);
  gameSocket.on("move", updateGameState);
  gameSocket.on("game over", endGame);
};

function hostUsername(hostData) {
  const { gameId, username } = hostData;
  console.log("sent host username", username);
  this.to(gameId).emit("host username", username);
}

function host(hostData) {
  const { gameId, username } = hostData;
  console.log("Hosted game ", gameId, username);
  this.emit("host username", username);
  this.join(gameId);
}

function validateJoinCode(gameId) {
  const room = io.sockets.adapter.rooms[gameId];
  if (room === undefined) {
    this.emit("status", 1);
    return;
  } else if (room.length >= 2) {
    this.emit("status", 2);
    return;
  } else {
    this.emit("status", 0);
    return;
  }
}

function joinGame(data) {
  const { gameId, username } = data;
  this.emit("join username", username);
  console.log(username, "joined game", gameId);
  this.join(gameId);
  this.to(gameId).emit("join username", username);
  this.to(gameId).emit("get host username");
}

function updateGameState(data) {
  const { newMove, gameId } = data;
  this.to(gameId).emit("updateGameState", newMove);
}

function endGame(data) {
  const { winner, gameOverType, gameId } = data;
  this.to(gameId).emit("endGame", winner, gameOverType);
}
exports.init = init;

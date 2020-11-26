let io;
let gameSocket;

const init = (sio, socket) => {
  io = sio;
  gameSocket = socket;
  gameSocket.on("createNewGame", host);
  gameSocket.on("joinGame", joinGame);
  gameSocket.on("host username", hostUsername);
  gameSocket.on("validate join code", validateJoinCode);
};

function hostUsername(hostData) {
  const { gameId, username } = hostData;
  console.log("sent host username", username);
  this.to(gameId).emit("host username", username);
}

function host(hostData) {
  const { gameId, username } = hostData;
  this.emit("host username", username);
  console.log("Hosted game ", gameId, username);
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
exports.init = init;

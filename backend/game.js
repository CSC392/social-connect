let io;
let gameSocket;
let gamesInSession = [];

const init = (sio, socket) => {
  io = sio;
  gameSocket = socket;

  gamesInSession.push(gameSocket);
  // console.log("games: " + gamesInSession);
  gameSocket.on("createNewGame", host);
  gameSocket.on("joinGame", joinGame);
  gameSocket.on("host username", hostUsername);
  gameSocket.on("move", updateGameState);
};

function hostUsername(data) {
  const { gameId, username } = data;
  console.log("sent host username", username);
  this.to(gameId).emit("host username", username);
}

function host(data) {
  const { gameId, username } = data;
  this.emit("host username", username);
  console.log("Hosted game ", gameId, username);
  this.join(gameId);
}

function joinGame(data) {
  const { gameId, username } = data;
  console.log("Joined game ", gameId, username);
  this.emit("join username", username);
  this.join(gameId);
  this.to(gameId).emit("join username", username);
  this.to(gameId).emit("get host username");
}

function updateGameState(data) {
  const { fen, gameId } = data;
  console.log("server: updateGameState");
  this.to(gameId).emit("updateGameState", fen);
}

exports.init = init;

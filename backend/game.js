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
  gameSocket.on("game over", endGame);
  gameSocket.on("message", transmitMessage);
};

function host(data) {
  const { gameId, username } = data;
  console.log("Hosted game ", gameId, username);
  this.emit("host username", username);
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

function hostUsername(data) {
  const { gameId, username } = data;
  this.to(gameId).emit("host username", username);
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
  const { player, message, gameId } = data;
  this.to(gameId).emit("message", player, message);
}

exports.init = init;

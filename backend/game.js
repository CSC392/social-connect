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

function joinGame(joinData) {
  const { gameId, username } = joinData;
  console.log("Joined game ", gameId, username);
  this.emit("join username", username);
  this.join(gameId);
  this.to(gameId).emit("join username", username);
  this.to(gameId).emit("get host username");
}
exports.init = init;

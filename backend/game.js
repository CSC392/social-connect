let io;
let gameSocket;
let gamesInSession = [];

const init = (sio, socket) => {
  io = sio;
  gameSocket = socket;

  gamesInSession.push(gameSocket);
  console.log("games: " + gamesInSession);
  gameSocket.on("createNewGame", host);
};

function host(gameId) {
  this.emit("createNewGame", { gameId: gameId, mySocketId: this.id });
  console.log("Hosted game " + gameId);
  this.join(gameId);
}

exports.init = init;

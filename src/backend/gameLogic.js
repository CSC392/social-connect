let io;
let gameSocket;
let gamesInSession = [];

const initializeGame = (sio, socket) => {
  io = sio;
  gameSocket = socket;

  gamesInSession.push(gameSocket);

  gameSocket.on("createNewGame", createNewGame);
  console.log("hi");
};

function createNewGame() {
  this.emit("createNewGame", { gameId: gameId, mySocketId: this.id });
  console.log("hi create new game");
  this.join(gameId);
}
exports.initializeGame = initializeGame;

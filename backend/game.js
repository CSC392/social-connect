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
};

function host(gameId) {
  this.emit("createNewGame", { gameId: gameId, mySocketId: this.id });
  console.log("Hosted game " + gameId);
  this.join(gameId);
}

function joinGame(data) {
  const sock = this;

  const { gameId, userName } = data;

  const room = io.sockets.adapter.rooms[gameId];

  if (room === undefined) {
    this.emit("status", "This game session does not exist.");
    return;
  }
  if (room.length < 2) {
    data.mySocketId = sock.id;

    console.log("gameId joining.....", gameId);
    sock.join(gameId);

    console.log(room.length);

    if (room.length === 2) {
      io.sockets.in(gameId).emit("start game", userName);
    }

    io.sockets.in(gameId).emit("playerJoinedRoom", data);
  } else {
    this.emit("status", "There are already 2 people playing in this room.");
  }
}
exports.init = init;

import React, { useEffect, useState } from "react";
import Chessboardjsx from "chessboardjsx";
import { TopHeader } from "./TopHeader";
import { PageNameHeader } from "./PageNameHeader";
import Chess from "chess.js";
import {
  Button,
  Dialog,
  DialogTitle,
  makeStyles,
  Box,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  playButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
    borderRadius: "0px",
  },
});

const playerBox = {
  display: "flex",
  borderRadius: 16,
  borderColor: "black",
  m: 10,
  border: 5,
  style: { width: "15rem", height: "5rem" },
};

const iconBox = {
  borderRadius: "50%",
  borderColor: "black",
  m: 2.5,
  border: 5,
  style: { width: "2.5rem", height: "2.5rem" },
};

export const GameView = (props) => {
  const [chess, setChess] = useState(null);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    gameOverType: "",
  });

  const [turn, setTurn] = useState("w");
  const [winner, setWinner] = useState("");
  const classes = useStyles({});

  useEffect(() => {
    setChess(new Chess());
  }, []);

  const [gameState, setGameState] = useState({
    fen: "start",
  });

  const [message, setMessage] = useState("");
  const [messageLog, setMessageLog] = useState([]);

  const socket = props.socket;
  const gameCode = props.gameCode;

  socket.on("updateGameState", updateGameState);
  function updateGameState(newMove) {
    if (chess != null) {
      chess.move(newMove);
      setGameState({
        fen: chess.fen(),
      });
      setTurn(chess.turn());
    }
  }

  socket.on("endGame", endGame);
  function endGame(winner, gameOverType) {
    setWinner(winner);
    setGameOver({ gameOver: true, gameOverType: gameOverType });
  }

  socket.on("message", receiveMessage);
  function receiveMessage(player, message) {
    console.log(player, message);

    // TODO: add to chat log
    console.log(messageLog);
    messageLog.push({ player: player, message: message });
    setMessageLog(messageLog);
    console.log(messageLog);
  }

  const onDrop = ({ sourceSquare, targetSquare }) => {
    // build move parameters
    let moveOptions = {
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    };

    // make move with move parameters
    let newMove = chess.move(moveOptions);

    // check if legal move
    if (newMove === null) return;

    // prevent opposing player from playing as player
    if (props.role === "host" && newMove.color === "b") return;
    if (props.role === "join" && newMove.color === "w") return;

    // client side move
    setGameState({
      fen: chess.fen(),
    });
    setTurn(chess.turn());

    // server side move
    const data = {
      newMove: newMove,
      gameId: gameCode,
    };
    socket.emit("move", data);

    chess.turn() === "w" ? setWinner("Black") : setWinner("White");

    // end of game check
    if (
      chess.in_checkmate() ||
      chess.in_stalemate() ||
      chess.in_threefold_repetition() ||
      chess.insufficient_material()
    ) {
      var gameOverType;
      if (chess.in_checkmate()) {
        gameOverType = "checkmate";
      } else if (chess.in_stalemate()) {
        gameOverType = "stalemate";
      } else if (chess.in_threefold_repetition()) {
        gameOverType = "threefold repetition";
      } else if (chess.insufficient_material()) {
        gameOverType = "insufficient material";
      }

      // client side game over
      setGameOver({ gameOver: true, gameOverType: gameOverType });

      // server side game over
      const data = {
        winner: winner,
        gameOverType: gameOverType,
        gameId: gameCode,
      };
      socket.emit("game over", data);
    } else {
      setGameOver({ gameOver: false, gameOverType: "" });
    }
  };

  const isDone =
    gameOver.gameOverType === "checkmate" ? `${winner} wins` : "Draw";

  const sendMessage = (player, message) => {
    console.log(player, message);

    // TODO: add to chat log
    console.log(messageLog);
    messageLog.push({ player: player, message: message });
    setMessageLog(messageLog);
    console.log(messageLog);

    const data = {
      player: player,
      message: message,
      gameId: gameCode,
    };
    socket.emit("message", data);
  };

  const chatlog = [];
  for (let message of messageLog) {
    chatlog.push(
      <li>
        "{message.player}" said "{message.message}"
      </li>
    );
  }

  return (
    <div>
      <TopHeader />

      <PageNameHeader title="Chess" onClick={props.goBack}></PageNameHeader>

      <Box display="flex" p={1}>
        <Chessboardjsx
          position={gameState.fen}
          onDrop={onDrop}
          orientation={props.role === "host" ? "White" : "Black"}
        />
        <div>
          <Box bgcolor={turn === "w" ? "#8474BE" : "white"} {...playerBox}>
            <Box bgcolor="white" {...iconBox} />
            <h1 style={{ textAlign: "center" }}>{props.hostName}</h1>
          </Box>
          <Box bgcolor={turn === "b" ? "#8474BE" : "white"} {...playerBox}>
            <Box bgcolor="black" {...iconBox} />
            <h1 style={{ textAlign: "center" }}>{props.joinName}</h1>
          </Box>
          <div id="chatbox">
            <TextField
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button
              onClick={() => {
                if (props.role === "host") {
                  sendMessage(props.hostName, message);
                  setMessage("");
                } else if (props.role === "join") {
                  sendMessage(props.joinName, message);
                  setMessage("");
                } else {
                  sendMessage("guest", message);
                  setMessage("");
                }
              }}
            >
              Send
            </Button>
            <div>
              <ul>{chatlog}</ul>
            </div>
          </div>
        </div>
      </Box>

      {gameOver.gameOver && (
        <Dialog open={true}>
          <DialogTitle>
            {isDone} by {gameOver.gameOverType}!
          </DialogTitle>
          <Button className={classes.playButton} onClick={props.goBack}>
            Play again
          </Button>
        </Dialog>
      )}
    </div>
  );
};

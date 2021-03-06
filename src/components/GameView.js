import React, { useEffect, useState, useMemo } from "react";
import Chessboardjsx from "chessboardjsx";
import { TopHeader } from "./TopHeader";
import Chess from "chess.js";
import {
  Button,
  Dialog,
  DialogTitle,
  makeStyles,
  Box,
  CircularProgress,
} from "@material-ui/core";
import { MuiChat, ChatController } from "chat-ui-react";

const useStyles = makeStyles({
  playButton: {
    backgroundColor: "#3f51b5",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
    borderRadius: "0px",
  },
  boxContainer: {
    height: "550px",
    fontFamily: "Helvetica",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "20px",
  },
  helperText: {
    color: "#f50057",
    fontSize: "20px",
    fontFamily: "Helvetica",
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
  const [chess] = useState(new Chess());
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    gameOverType: "",
  });

  const [turn, setTurn] = useState("w");
  const [winner, setWinner] = useState("");
  const classes = useStyles({});

  const { socket, gameCode, enablePlayButtons, role } = props;

  const [chatCtl] = React.useState(new ChatController());

  useEffect(() => {
    socket.removeAllListeners();
    socket.on("updateGameState", updateGameState);
    socket.on("endGame", endGame);
    socket.on("message", receiveMessage);
    socket.on("play again", playAgain);
  });

  useMemo(async () => {
    //Chat content is displayed using ChatController
    await chatCtl.setActionRequest(
      {
        type: "text",
        always: true,
      },
      (message) => {
        const data = { message: message.value, gameId: gameCode };
        socket.emit("message", data);
      }
    );
  }, [chatCtl, socket, gameCode]);

  const [gameState, setGameState] = useState({
    fen: "start",
  });

  function updateGameState(newMove) {
    chess.move(newMove);
    setGameState({
      fen: chess.fen(),
    });
    setTurn(chess.turn());
  }

  function endGame(winner, gameOverType) {
    setWinner(winner);
    setGameOver({ gameOver: true, gameOverType: gameOverType });
  }

  function receiveMessage(message) {
    chatCtl.addMessage({
      type: "text",
      content: message,
      self: false,
    });
  }

  function playAgain() {
    props.goBack();
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
    if (newMove != null) {
      // prevent opposing player from playing as player
      if (
        (role === "host" && newMove.color === "b") ||
        (role === "join" && newMove.color === "w")
      ) {
        chess.undo();
        return;
      }

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
    }
  };

  const isDone =
    gameOver.gameOverType === "checkmate" ? `${winner} wins` : "Draw";

  const moveHistory = [];
  for (let move of chess.history({ verbose: true })) {
    moveHistory.push(
      <li>
        {move.color === "w" ? props.hostName : props.joinName} moved{" "}
        {move.piece} from {move.from} to {move.to}
      </li>
    );
  }

  return (
    <div>
      <TopHeader />

      <Box display="flex" p={1} className={classes.boxContainer}>
        <div>
          <Box bgcolor={turn === "w" ? "#3f51b5" : "white"} {...playerBox}>
            <Box bgcolor="white" {...iconBox} />
            <h1 style={{ textAlign: "center", color: "black" }}>
              {props.hostName}
            </h1>
          </Box>
          <Box bgcolor={turn === "b" ? "#3f51b5" : "white"} {...playerBox}>
            <Box bgcolor="black" {...iconBox} />
            <h1 style={{ textAlign: "center", color: "black" }}>
              {props.joinName}
            </h1>
          </Box>
          <div>
            <ul>{moveHistory}</ul>
          </div>
        </div>
        <Chessboardjsx
          position={gameState.fen}
          onDrop={onDrop}
          orientation={role === "host" ? "White" : "Black"}
        />

        <MuiChat chatController={chatCtl}></MuiChat>
      </Box>

      {gameOver.gameOver && (
        <Dialog open={true}>
          <DialogTitle>
            {isDone} by {gameOver.gameOverType}!
          </DialogTitle>
          {enablePlayButtons && (
            <Button
              className={classes.playButton}
              onClick={() => {
                socket.emit("play again", gameCode);
                props.goBack();
              }}
            >
              Play again
            </Button>
          )}
          {!enablePlayButtons && (
            <div className={classes.loadingContainer}>
              <p className={classes.helperText}>
                Waiting for host to play again
              </p>
              <CircularProgress color="secondary" />
            </div>
          )}
        </Dialog>
      )}
    </div>
  );
};

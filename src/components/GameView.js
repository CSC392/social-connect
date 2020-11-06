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

  const [player, setPlayer] = useState("White");
  const [turn, setTurn] = useState("White");
  const [winner, setWinner] = useState("");
  const classes = useStyles({});

  useEffect(() => {
    setChess(new Chess());
  }, []);

  const [gameState, setGameState] = useState({
    fen: "start",
  });

  const onDrop = ({ sourceSquare, targetSquare }) => {
    // check legal move
    let move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;

    // end of game check
    const checkmate = chess.in_checkmate();
    const stalemate = chess.in_stalemate();
    const threefoldRepetition = chess.in_threefold_repetition();
    const insufficientMaterial = chess.insufficient_material();

    if (checkmate) {
      setGameOver({ gameOver: true, gameOverType: "checkmate" });
    } else if (stalemate) {
      setGameOver({ gameOver: true, gameOverType: "stalemate" });
    } else if (threefoldRepetition) {
      setGameOver({ gameOver: true, gameOverType: "threefold repetition" });
    } else if (insufficientMaterial) {
      setGameOver({ gameOver: true, gameOverType: "insufficient material" });
    } else {
      setGameOver({ gameOver: false, gameOverType: "" });
    }
    setGameState({
      fen: chess.fen(),
    });

    chess.turn() === "w" ? setTurn("White") : setTurn("Black");
    chess.turn() === "w" ? setWinner("Black") : setWinner("White");
  };

  const isDone =
    gameOver.gameOverType === "checkmate" ? `${winner} wins` : "Draw";

  return (
    <div>
      <TopHeader />

      <PageNameHeader title="Chess" onClick={props.goBack}></PageNameHeader>

      <Box display="flex" p={1}>
        <Chessboardjsx
          position={gameState.fen}
          onDrop={onDrop}
          orientation={player}
        />
        <div>
          <Box bgcolor={turn === "White" ? "#8474BE" : "white"} {...playerBox}>
            <Box bgcolor="white" {...iconBox} />
            <h1 style={{ textAlign: "center" }}>Player 1</h1>
          </Box>
          <Box bgcolor={turn === "Black" ? "#8474BE" : "white"} {...playerBox}>
            <Box bgcolor="black" {...iconBox} />
            <h1 style={{ textAlign: "center" }}>Player 2</h1>
          </Box>
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
      <button onClick={() => setPlayer("White")}>White POV</button>
      <button onClick={() => setPlayer("Black")}>Black POV</button>
    </div>
  );
};

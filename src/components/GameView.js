import React, { useEffect, useState } from "react";
import Chessboardjsx from "chessboardjsx";
import { TopHeader } from "./TopHeader";
import { PageNameHeader } from "./PageNameHeader";
import Chess from "chess.js";
import { Button, Dialog, DialogTitle, makeStyles } from "@material-ui/core";

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

export const GameView = (props) => {
  const [chess, setChess] = useState(null);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    gameOverType: "",
  });
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
    // see if the move is legal
    let move = chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;
    const checkmate = chess.in_checkmate();
    const stalemate = chess.in_stalemate();
    const threefoldRepetition = chess.in_threefold_repetition();
    const insufficientMaterial = chess.insufficient_material();
    chess.turn() === "w" ? setTurn("White") : setTurn("Black");
    chess.turn() === "w" ? setWinner("Black") : setWinner("White");
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
  };

  const isDone =
    gameOver.gameOverType === "checkmate" ? `${winner} wins` : "Draw";

  return (
    <div>
      <TopHeader />
      <PageNameHeader title="Chess" onClick={props.goBack}></PageNameHeader>
      <Chessboardjsx position={gameState.fen} onDrop={onDrop} />
      <h1>{turn}'s Turn</h1>
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

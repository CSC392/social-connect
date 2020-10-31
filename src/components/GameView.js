import React, { useEffect, useState } from "react";
import Chessboardjsx from "chessboardjsx";
import { TopHeader } from "./TopHeader";
import { PageNameHeader } from "./PageNameHeader";
import Chess from "chess.js";

export const GameView = (props) => {
  const [chess, setChess] = useState(null);

  useEffect(() => {
    setChess(new Chess());
  }, []);

  const [gameState, setGameState] = useState({
    fen: "start",
    // custom square styles
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
    setGameState({
      fen: chess.fen(),
    });
  };

  return (
    <div>
      <TopHeader />
      <PageNameHeader title="Chess" onClick={props.goBack}></PageNameHeader>
      <Chessboardjsx position={gameState.fen} onDrop={onDrop} />
    </div>
  );
};

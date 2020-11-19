import React, { useState } from "react";
import { LobbyView } from "./LobbyView";
import { GameView } from "./GameView";

export const GamePage = (props) => {
  const [view, setView] = useState("lobby");
  const [history, setHistory] = useState([]);

  const goNext = (currView, nextView) => {
    history.push(currView);
    setHistory(history);
    setView(nextView);
  };

  const goBack = () => {
    setView(history.pop());
    setHistory(history);
  };

  const {
    gameCode,
    gameSelection,
    gameSettings,
    playerOne,
  } = props.location.state;

  switch (view) {
    case "lobby":
      return (
        <LobbyView
          history={history}
          goNext={goNext}
          goBack={goBack}
          gameSelection={gameSelection}
          gameCode={gameCode}
          gameSettings={gameSettings}
          playerOne={playerOne}
        />
      );

    case "game":
      return (
        <GameView
          history={history}
          goNext={goNext}
          goBack={goBack}
          playerOne={playerOne}
        />
      );

    default:
      return <div> Error </div>;
  }
};

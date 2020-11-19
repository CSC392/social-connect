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

  const { gameCode } = props.location.state;

  switch (view) {
    case "lobby":
      return (
        <LobbyView
          history={history}
          goNext={goNext}
          goBack={goBack}
          gameCode={gameCode}
        />
      );

    case "game":
      return <GameView history={history} goNext={goNext} goBack={goBack} />;

    default:
      return <div> Error </div>;
  }
};

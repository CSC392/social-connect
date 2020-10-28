import React, { useState } from "react";
import { LobbyView } from "./LobbyView";
import { GameView } from "./GameView";

export const GamePage = () => {
  const [username, setUsername] = useState("");

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

  switch (view) {
    case "lobby":
      return (
        <LobbyView
          username={username}
          setUsername={setUsername}
          history={history}
          goNext={goNext}
          goBack={goBack}
        />
      );

    case "game":
      return (
        <GameView
          username={username}
          setUsername={setUsername}
          history={history}
          goNext={goNext}
          goBack={goBack}
        />
      );

    default:
      return <div> Error </div>;
  }
};

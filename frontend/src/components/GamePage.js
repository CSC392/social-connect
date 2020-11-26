import React, { useState } from "react";
import { LobbyView } from "./LobbyView";
import { GameView } from "./GameView";
const socket = require("../connection/socket").socket;

export const GamePage = (props) => {
  const [view, setView] = useState("lobby");
  const [history, setHistory] = useState([]);
  const [hostUsername, setHostUsername] = useState("");
  const [joinUsername, setJoinUsername] = useState("");
  const { gameCode } = props.location.state;

  const hostData = {
    gameId: gameCode,
    username: hostUsername,
  };

  socket.on("host username", setUsernameForHost);

  function setUsernameForHost(hostName) {
    console.log("host name", hostName);
    setHostUsername(hostName);
  }

  socket.on("join username", setUsernameForJoin);

  function setUsernameForJoin(joinName) {
    console.log("join name", joinName);
    setJoinUsername(joinName);
  }

  socket.on("get host username", getUsernameForHost);

  function getUsernameForHost() {
    socket.emit("host username", hostData);
  }

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
          history={history}
          goNext={goNext}
          goBack={goBack}
          gameCode={gameCode}
          hostName={hostUsername}
          joinName={joinUsername}
        />
      );

    case "game":
      return (
        <GameView
          history={history}
          goNext={goNext}
          goBack={goBack}
          hostName={hostUsername}
          joinName={joinUsername}
        />
      );

    default:
      return <div> Error </div>;
  }
};

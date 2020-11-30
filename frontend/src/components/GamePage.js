import React, { useEffect, useState } from "react";
import { LobbyView } from "./LobbyView";
import { GameView } from "./GameView";

const socket = require("../connection/socket").socket;

export const GamePage = (props) => {
  const [view, setView] = useState("lobby");
  const [history, setHistory] = useState([]);
  const [hostUsername, setHostUsername] = useState("");
  const [joinUsername, setJoinUsername] = useState("");
  const { gameCode, role } = props.location.state;

  const hostData = {
    gameId: gameCode,
    username: hostUsername,
  };

  socket.on("host username", setUsernameForHost);
  socket.on("join username", setUsernameForJoin);
  socket.on("get host username", getUsernameForHost);

  function setUsernameForHost(hostName) {
    setHostUsername(hostName);
  }

  function setUsernameForJoin(joinName) {
    setJoinUsername(joinName);
  }

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
          socket={socket}
        />
      );

    case "game":
      return (
        <GameView
          history={history}
          goNext={goNext}
          goBack={goBack}
          gameCode={gameCode}
          hostName={hostUsername}
          joinName={joinUsername}
          socket={socket}
          role={role}
        />
      );

    default:
      return <div> Error </div>;
  }
};

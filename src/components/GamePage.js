import React, { useEffect, useState } from "react";
import { LobbyView } from "./LobbyView";
import { GameView } from "./GameView";

// import io from "socket.io-client";
const express = require("express");
const http = require("http");
const server = require("socket.io");
const port = 3000; //default

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

  //const socket = io("http://127.0.0.1:3000");

  useEffect(() => {
    server.listen(port, () =>
      console.log("Server started. Listening on port " + port)
    );
  });

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

import React from "react";
import ReactDOM from "react-dom";
// import { BackButton } from "./shared/BackButton";
// import { TopHeader } from "./shared/TopHeader";
import { LobbyPage } from "./lobbyPage/LobbyPage"
const App = () => (
  <div>
    <LobbyPage></LobbyPage>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

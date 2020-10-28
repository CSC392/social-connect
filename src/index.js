import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { PlayPage } from "./components/PlayPage";
import { GamePage } from "./components/GamePage";

const App = () => (
  <div>
    <Switch>
      <Route path="/play/game">
        <GamePage />
      </Route>
      <Route path="/play">
        <PlayPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

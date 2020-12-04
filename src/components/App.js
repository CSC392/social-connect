import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage } from "./HomePage";
import { GamePage } from "./GamePage";
import { PlayPage } from "./PlayPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/play/:code"
            render={(routeProps) => <GamePage {...routeProps} />}
          ></Route>
          <Route
            path="/play"
            render={(routeProps) => <PlayPage {...routeProps} />}
          ></Route>
          <Route
            path="/"
            render={(routeProps) => <HomePage {...routeProps} />}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

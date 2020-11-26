import React, { useState } from "react";
import { MenuView } from "./MenuView";
import { HostView } from "./HostView";

export const PlayPage = () => {
  const [username, setUsername] = useState("");

  const [view, setView] = useState("menu");
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
    case "menu":
      return (
        <MenuView
          username={username}
          setUsername={setUsername}
          history={history}
          goNext={goNext}
          goBack={goBack}
        />
      );

    case "host":
      return (
        <HostView
          username={username}
          setUsername={setUsername}
          history={history}
          goNext={goNext}
          goBack={goBack}
        />
      );

    case "browse":
      return <div>browse</div>;

    case "join":
      return <div>join</div>;

    default:
      return <div> Error </div>;
  }
};

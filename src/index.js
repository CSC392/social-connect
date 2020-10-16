import React from "react";
import ReactDOM from "react-dom";
import { BackButton } from "./shared/BackButton";
import { TopHeader } from "./shared/TopHeader";

const App = () => (
  <div>
    {/* This is just to test. Remove later */}
    <TopHeader></TopHeader>
    {/* This is just to test if prop is passing. We will change this our page instead of alert */}
    <BackButton
      onClick={() => {
        alert("Yay, it works");
      }}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

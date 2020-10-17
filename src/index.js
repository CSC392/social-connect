import React from "react";
import ReactDOM from "react-dom";
import { BackButton } from "./components/BackButton";
import { TopHeader } from "./components/TopHeader";
import { Chessboard } from "./components/Chessboard";

const App = () => {
  
  return(
    <div>
      < TopHeader text="Social Connect - Play" />
      < Chessboard />
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
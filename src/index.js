import React from 'react';
import ReactDOM from 'react-dom';

import { BackButton } from "./shared/BackButton";
import { TopHeader } from "./shared/TopHeader";
import Chessboard from "chessboardjsx";

const App = () => {

  return(

    <div>
      < TopHeader />

      <BackButton
        onClick={() => {
          alert("Yay, it works");
        }}
      />

      < Chessboard position="start" />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
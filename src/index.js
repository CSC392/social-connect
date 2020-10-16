import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BackButton } from "./shared/BackButton";
import { TopHeader } from "./shared/TopHeader";
import Chessboard from "chessboardjsx";

const Header = (props) => <h1> {props.text} </h1>
const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>

const Board = (props) => {
  if (props.boardState === 'reset') {
    return(<div> < Chessboard /> </div>)
  }
  else if (props.boardState === 'set') {
    return(<div> < Chessboard position="start" /> </div>)
  }
  else {
    return(<div> Error </div>)
  }
}

const App = () => {
  const [boardState, setBoardState] = useState('reset')

  const resetBoard = () => {
    setBoardState('reset')
  }

  const setBoard = () => {
    setBoardState('set')
  }


  return(
    <div>
      < Header text="Social Connect - Play" />
      < Button handleClick={resetBoard} text="reset board" />
      < Button handleClick={setBoard} text="set board" />
      < Board boardState={boardState} />
    </div> 
  )
}

ReactDOM.render(<App />, document.getElementById("root"));

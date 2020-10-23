import React, { useState } from "react";
import Chessboardjsx from "chessboardjsx";

const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>

export const Chessboard = (props) => {
  const [boardState, setBoardState] = useState('reset')

  const resetBoard = () => {
      setBoardState('reset')
  }

  const setBoard = () => {
      setBoardState('set')
  }

  if (boardState === 'reset') {
    return(
      <div> 
          < Chessboardjsx /> 
          < Button handleClick={resetBoard} text="reset board" />
          < Button handleClick={setBoard} text="set board" />
      </div>)
  }
  
  else if (boardState === 'set') {
    return(
      <div> 
          < Chessboardjsx position="start" /> 
          < Button handleClick={resetBoard} text="reset board" />
          < Button handleClick={setBoard} text="set board" />
      </div>)
  }

  else {
    return(
      <div> 
          Error 
      </div>)
  }
}
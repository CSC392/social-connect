import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BackButton } from "./shared/BackButton";
import { TopHeader } from "./shared/TopHeader";

const Title = (props) => <h1> {props.text} </h1>
const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>

const App = () => {

  const [view, setView] = useState('menu')
  const views = ['menu', 'host', 'play']
  
  const goBack = () => {
    var prevView = views[views.findIndex(k => k === view) - 1]
    setView(prevView)
  }

  const goHost = () => {
    setView('host')
  }

  const goPlay = () => {
    setView('play')
  }

  switch(view) {

    case 'menu':
      return(
        <div>
          <Title text="Menu" />
          <Button handleClick={goHost} text="Host Game" />
          <Button text="Browse Games" />
          <Button text="Join Game" />
        </div>
      ) 

    case 'host':
      return(
        <div>
          <Title text="Host" />
          <Button handleClick={goBack} text="Back" />
          <Button handleClick={goPlay} text="Play" />
        </div>
      ) 

    case 'play':
      return(
        <div>
          <Title text="Play" />
          <Button handleClick={goBack} text="Back" />
        </div>
      ) 

    default:
      return <div> Error </div>

  }
}

ReactDOM.render(<App />, document.getElementById("root"));
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {

  const [history, setHistory] = useState([])
  const [view, setView] = useState('menu')
  
  const goBack = () => {
    setView(history.pop())
    setHistory(history)
  }

  const goNext = (currView, nextView) => {
    history.push(currView)
    setHistory(history)
    setView(nextView)
  }

  switch(view) {

    case 'menu':
      return(
        <div>
          <div>
            <h1>Menu</h1>
          </div>
          {/* < MenuView /> */}
          <div>
            <button onClick={() => goNext('menu', 'host')}>Host</button>
            <button onClick={() => goNext('menu', 'browse')}>Browse</button>
            <button onClick={() => goNext('menu', 'join')}>Join</button>
          </div>
        </div>
      ) 

    case 'host':
      return(
        <div>
          <div>
            <h1>Host</h1>
          </div>
          {/* < HostView /> */}
          <div>
            <button onClick={goBack}>Back</button>
            <button onClick={() => goNext('host', 'play')}>Play</button>
          </div> 
        </div>
      ) 

      case 'browse':
      return(
        <div>
          <div>
            <h1>Browse</h1>
          </div>
          {/* < BrowseView /> */}
          <div>
            <button onClick={goBack}>Back</button>
            <button onClick={() => goNext('browse', 'play')}>Play</button>
          </div>
        </div>
      ) 

      case 'join':

      return(
        <div>
          <div>
            <h1>Join</h1>
          </div>
          {/* < JoinView /> */}
          <div>
            <button onClick={goBack}>Back</button>
            <button onClick={() => goNext('join', 'play')}>Play</button>
          </div>
        </div>
      ) 

    case 'play': 
      return(
        <div>
          <div>
            <h1>Play</h1>  
          </div>
          {/* < PlayView /> */}
          <div>
            <button onClick={goBack}>Back</button>
          </div>
        </div>
      ) 

    default:
      return <div> Error </div>

  }
}

ReactDOM.render(<App />, document.getElementById("root"));
import React, { useState } from "react";
import { Button, makeStyles, useEventCallback} from "@material-ui/core";
import { TopHeader } from "./shared/TopHeader";
import chessBoard from "./hostGamePage/chessBoard.png";
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';


const styles = makeStyles({
  backButton: {
    marginTop: "10px",
  },
  body: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  PlayButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "25px",
    marginTop: "10px",
    marginBottom: "30px",
    padding: "0 93px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
  WelcomeBanner: {
    fontSize: "40px",
    paddingTop: "5px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  
})

//class LoggingButton extends React.Component{
//handleClick = () => {
  //  console.log('The Button was clicked');
  //}
//}


export const HomePage = () => {
  const classes = styles({});
  return (
    <div>
      <TopHeader />
      <div className={classes.WelcomeBanner}>
        <p>Welcome To Social Connect</p>
        <img src={chessBoard} />
      </div>
      
      <div className={classes.body}>
        <Button className={classes.PlayButton}>
          Start Playing
        </Button>
        
        <h2>The best place to stay connected</h2>
      </div>

      <div style={{ width: '100%' }}>
      <Box display="flex" p={1} flexDirection="row" justifyContent="center" >
        <Box p={1} paddingRight = "100px">
          <h2>Connect With Friends or Strangers</h2>
        </Box>
        <Box p={1} paddingRight="100px">
          <h2>Communicate via Chat</h2>
        </Box>
        <Box p={1} paddingRight="100px">
          <h2>Play a Variety of Games</h2>
        </Box>
        <Box p={1}>
          <h2>More Features Coming Soon</h2>
        </Box>
      </Box>

    </div>

    </div>
    
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import { TopHeader } from "./TopHeader";
import chessImage from "../assets/chess.png";
import Box from "@material-ui/core/Box";

const styles = makeStyles({
  body: {
    paddingTop: "50px",
    backgroundColor: "#FAFAFA",
    fontFamily: "sans-serif-light",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  playButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "25px",
    marginTop: "10px",
    marginBottom: "30px",
    padding: "0 93px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
  },
  welcomeBanner: {
    backgroundColor: "#FAFAFA",
    fontSize: "40px",
    fontFamily: "Roboto",
    paddingTop: "5px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  box: {
    backgroundColor: "#FAFAFA",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  miniBox: {
    paddingRight: "100px",
  },
});

export const HomePage = () => {
  const classes = styles({});
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <TopHeader />
      <div className={classes.welcomeBanner}>
        <p>Welcome To Social Connect</p>
        <img src={chessImage} alt="" />
      </div>

      <div className={classes.body}>
        <Link to="/play" className={classes.link}>
          <Button className={classes.playButton}>Start Playing</Button>
        </Link>

        <h2>The best place to stay connected</h2>
      </div>

      <div style={{ width: "100%" }}>
        <Box className={classes.box} p={1}>
          <Box p={1} className={classes.miniBox}>
            <h2>Connect With Friends or Strangers</h2>
          </Box>
          <Box p={1} className={classes.miniBox}>
            <h2>Communicate via Chat</h2>
          </Box>
          <Box p={1} className={classes.miniBox}>
            <h2>Play a Variety of Games</h2>
          </Box>
          <Box p={1} className={classes.miniBox}>
            <h2>More Features Coming Soon</h2>
          </Box>
        </Box>
      </div>
    </div>
  );
};

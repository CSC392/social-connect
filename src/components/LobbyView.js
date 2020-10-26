import React from "react";
import { makeStyles } from "@material-ui/core";
import { TopHeader } from "./TopHeader";
import { Button } from "@material-ui/core";
import { imagesData } from "../assets/imagesData";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  startGame: {
    backgroundColor: "#C8BFE7",
    fontSize: "20px",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
  greyText: {
    backgroundColor: "#E5E5E5",
    padding: "10px",
    borderRadius: "5px",
    margin: "0 10px",
  },
  gameName: {
    maxWidth: "20%",
    height: "auto",
  },
  headers: {
    fontSize: "20px",
  },
  subheaders: {
    display: "flex",
    alignItems: "center",
  },
  titles: {
    fontSize: "15px",
  },
  vs: {
    margin: "0px 10px",
  },
  link: {
    textDecoration: "none",
  },
  Backbutton: {
    backgroundColor: "#C8BFE7",
    fontSize: "10px",
    variant: "contained",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
});

export const LobbyView = (props) => {
  const classes = useStyles({});

  //This is to get the name of the game selected
  //TODO: Change to props.gameName
  const selectedGameData = imagesData.filter(
    (image) => image.title === "Chess"
  );

  return (
    <div>
      <TopHeader />
      <div className={classes.backButton}>
        <Link to="/play" className={classes.link}>
          <Button className={classes.Backbutton}>Back</Button>
        </Link>
      </div>
      <div className={classes.body}>
        <p className={classes.headers}>Game Selection</p>
        <img
          src={selectedGameData[0].img}
          className={classes.gameName}
          alt=""
        ></img>
        <p className={classes.headers}>Game Settings</p>
        <div className={classes.subheaders}>
          <p className={classes.titles}>Game Privacy</p>
          <p className={classes.greyText}>Public Game</p>
          <p className={classes.titles}>Game Code</p>
          {/* TODO: Change the join code later */}
          <p className={classes.greyText}>123456</p>
        </div>
        <p className={classes.headers}>Players</p>
        {/* TODO: Change the number later*/}
        <div className={classes.subheaders}>
          <p className={classes.greyText}>Player 1</p>
          <p className={classes.vs}>vs</p>
          <p className={classes.greyText}>Player 2</p>
        </div>
        <Button
          className={classes.startGame}
          onClick={() => {
            props.goNext("lobby", "game");
          }}
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

import React from "react";
import { TopHeader } from "./TopHeader";
import { Button } from "@material-ui/core";
import { imagesData } from "../assets/imagesData";
import { Link } from "react-router-dom";
import { LobbyViewStyles } from "../styles/LobbyViewStyles";

export const LobbyView = (props) => {
  const classes = LobbyViewStyles({});

  const { gameSelection, gameSettings, gameCode, playerOne } = props;

  //This is to get the name of the game selected
  const selectedGameData = imagesData.filter(
    (image) => image.title === gameSelection
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
          <p className={classes.greyText}>{gameSettings}</p>
          <p className={classes.titles}>Game Code</p>
          <p className={classes.greyText}>{gameCode}</p>
        </div>
        <p className={classes.headers}>Players</p>
        <div className={classes.subheaders}>
          <p className={classes.greyText}>{playerOne}</p>
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

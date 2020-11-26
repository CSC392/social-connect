import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { TopHeader } from "./TopHeader";
import { PageNameHeader } from "./PageNameHeader";
import { Link } from "react-router-dom";
import { imagesData } from "../assets/imagesData";
import { HostViewStyles } from "../styles/HostViewStyles";
import { uid } from "uid";

const socket = require("../connection/socket").socket;

export const HostView = (props) => {
  const classes = HostViewStyles({});
  const [disable, setDisable] = useState(false);
  const [gameSelection, setGameSelection] = useState("");
  const [gameSettings, setGameSettings] = useState("Private");
  const handleChange = (event) => {
    setGameSelection(event.target.value);
  };
  const selectedGameData = imagesData.filter(
    (image) => image.title === gameSelection
  );

  const code = uid(6);
  const hostData = {
    gameId: code,
    username: props.username,
  };

  return (
    <div>
      <TopHeader />
      <PageNameHeader title="Host Game" onClick={props.goBack}></PageNameHeader>
      <div className={classes.body}>
        <p>Game Selection</p>
        <FormControl className={classes.gameSelection}>
          <Select value={gameSelection} onChange={handleChange}>
            {imagesData.map((image) => (
              <MenuItem value={image.title}>{image.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {gameSelection && (
          <img className={classes.image} src={selectedGameData[0].img} alt="" />
        )}

        <p className={classes.gamePrivacy}>Game Privacy</p>
        <ButtonGroup>
          <Button
            className={classes.gameSettingsButton}
            variant="contained"
            onClick={() => {
              setDisable(true);
              setGameSettings("Public");
            }}
            disabled={disable}
            disableElevation={true}
          >
            Public
          </Button>
          <Button
            className={classes.gameSettingsButton}
            variant="contained"
            onClick={() => {
              setDisable(false);
              setGameSettings("Private");
            }}
            disabled={!disable}
            disableElevation={true}
          >
            Private
          </Button>
        </ButtonGroup>
        <Link
          to={{
            pathname: `/play/${code}`,
            state: {
              gameCode: code,
            },
          }}
          className={classes.link}
          onClick={(e) => {
            if (!(gameSelection && selectedGameData[0].isDone)) {
              e.preventDefault();
            }
          }}
        >
          <Button
            className={classes.hostButton}
            disabled={!(gameSelection && selectedGameData[0].isDone)}
            onClick={() => {
              socket.emit("createNewGame", hostData);
            }}
          >
            Host
          </Button>
        </Link>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Button, Select, FormControl, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { imagesData } from "../assets/imagesData";
import { HostViewStyles } from "../styles/HostViewStyles";
import { uid } from "uid";

const socket = require("../client").socket;

export const HostView = (props) => {
  const classes = HostViewStyles({});
  const [gameSelection, setGameSelection] = useState("");
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
    <div className={classes.body}>
      <p className={classes.gameSelection}>Game Selection</p>
      <FormControl className={classes.gameSelection}>
        <Select value={gameSelection} onChange={handleChange}>
          {imagesData.map((image) => (
            <MenuItem value={image.title}>{image.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Link
        to={{
          pathname: `/play/${code}`,
          state: {
            gameCode: code,
            role: "host",
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
  );
};

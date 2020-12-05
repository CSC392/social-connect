import React, { useEffect, useState } from "react";
import { Button, TextField, DialogTitle } from "@material-ui/core";
import { Link } from "react-router-dom";
import { JoinViewStyles } from "../styles/JoinViewStyles";

const socket = require("../client").socket;

export const JoinView = (props) => {
  const classes = JoinViewStyles({});

  const [joinCode, setJoinCode] = useState("");
  const [joinValidate, setJoinValidate] = useState(1);
  const [helperText, setHelperText] = useState("");
  const validJoinCode = joinCode ? false : true;
  const joinData = {
    gameId: joinCode,
    username: props.username,
  };

  useEffect(() => {
    socket.removeAllListeners();
    socket.on("status", joinError);
  }, []);

  const handleJoinChange = (event) => {
    setJoinCode(event.target.value);
    socket.emit("validate join code", event.target.value);
  };

  function joinError(errorCode) {
    if (errorCode === 1) {
      setJoinValidate(1);
      setHelperText("This room doesn't exist");
    } else if (errorCode === 2) {
      setJoinValidate(2);
      setHelperText("This room is full");
    } else {
      setHelperText("");
      setJoinValidate(0);
    }
  }

  return (
    <div className={classes.body}>
      <DialogTitle>
        <TextField
          variant="outlined"
          label="Enter Game Code"
          onChange={handleJoinChange}
          error={validJoinCode || joinValidate !== 0}
          helperText={helperText}
        ></TextField>
      </DialogTitle>
      <Link
        to={{
          pathname: `/play/${joinCode}`,
          state: {
            gameCode: joinCode,
            role: "join",
          },
        }}
        className={classes.link}
        onClick={(e) => {
          if (validJoinCode || joinValidate !== 0) {
            e.preventDefault();
          }
        }}
      >
        <Button
          disabled={validJoinCode || joinValidate !== 0}
          className={classes.joinMenuButton}
          onClick={() => {
            socket.emit("joinGame", joinData);
          }}
        >
          Join Game
        </Button>
      </Link>
    </div>
  );
};

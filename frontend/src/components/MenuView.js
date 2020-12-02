import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { TopHeader } from "./TopHeader";
import { Link } from "react-router-dom";
import { MenuViewStyles } from "../styles/MenuViewStyles";
import { HostView } from "./HostView";

const socket = require("../connection/socket").socket;

export const MenuView = () => {
  const classes = MenuViewStyles({});
  const [showJoinMenu, setShowJoinMenu] = useState(false);
  const [showHost, setShowHost] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [joinValidate, setJoinValidate] = useState(1);
  const [helperText, setHelperText] = useState("");
  const [username, setUsername] = useState("");
  const validUsername = username ? false : true;
  const validJoinCode = joinCode ? false : true;
  const joinData = {
    gameId: joinCode,
    username: username,
  };

  useEffect(() => {
    socket.removeAllListeners();
    socket.on("status", joinError);
  }, []);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

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

  const HostViewDialog = (
    <Dialog
      open={showHost}
      classes={{ paper: classes.joinMenu }}
      onClose={() => {
        setShowHost(false);
      }}
    >
      <HostView username={username}></HostView>
      <IconButton
        className={classes.closeButton}
        size="small"
        onClick={() => {
          setShowHost(false);
        }}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );

  const JoinView = (
    <Dialog
      open={showJoinMenu}
      classes={{ paper: classes.joinMenu }}
      onClose={() => {
        setShowJoinMenu(false);
      }}
    >
      <DialogTitle>
        <TextField
          variant="outlined"
          label="Enter Game Code"
          onChange={handleJoinChange}
          error={validJoinCode || joinValidate !== 0}
          helperText={helperText}
        ></TextField>
        <IconButton
          className={classes.closeButton}
          size="small"
          onClick={() => {
            setShowJoinMenu(false);
          }}
        >
          <CloseIcon />
        </IconButton>
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
    </Dialog>
  );

  return (
    <div>
      <TopHeader />
      <div className={classes.backButton}>
        <Link to="/" className={classes.link}>
          <Button className={classes.Backbutton}>Back</Button>
        </Link>
      </div>
      <div className={classes.body}>
        <TextField
          variant="outlined"
          label="Enter Username"
          onChange={handleChange}
          error={validUsername}
        ></TextField>
        <Button
          className={classes.hostButton}
          disabled={validUsername}
          onClick={() => {
            setShowHost(true);
          }}
        >
          Host Game
        </Button>
        <Button
          className={classes.joinButton}
          disabled={validUsername}
          onClick={() => {
            setShowJoinMenu(true);
          }}
        >
          Join Game
        </Button>
        {showJoinMenu && JoinView}
        {showHost && HostViewDialog}
      </div>
    </div>
  );
};

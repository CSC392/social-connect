import React, { useState } from "react";
import { Button, TextField, Dialog, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { TopHeader } from "./TopHeader";
import { Link } from "react-router-dom";
import { PlayPageStyles } from "../styles/PlayPageStyles";
import { HostView } from "./HostView";
import { JoinView } from "./JoinView";

export const PlayPage = () => {
  const classes = PlayPageStyles({});

  const [username, setUsername] = useState("");
  const validUsername = username ? false : true;
  const [showHostMenu, setShowHostMenu] = useState(false);
  const [showJoinMenu, setShowJoinMenu] = useState(false);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const HostViewDialog = (
    <Dialog
      open={showHostMenu}
      classes={{ paper: classes.joinMenu }}
      onClose={() => {
        setShowHostMenu(false);
      }}
    >
      <HostView username={username}></HostView>
      <IconButton
        className={classes.closeButton}
        size="small"
        onClick={() => {
          setShowHostMenu(false);
        }}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );

  const JoinViewDialog = (
    <Dialog
      open={showJoinMenu}
      classes={{ paper: classes.joinMenu }}
      onClose={() => {
        setShowJoinMenu(false);
      }}
    >
      <JoinView username={username}></JoinView>
      <IconButton
        className={classes.closeButton}
        size="small"
        onClick={() => {
          setShowJoinMenu(false);
        }}
      >
        <CloseIcon />
      </IconButton>
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
            setShowHostMenu(true);
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

        {showJoinMenu && JoinViewDialog}
        {showHostMenu && HostViewDialog}
      </div>
    </div>
  );
};

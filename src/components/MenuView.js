import React, { useState } from "react";
import { Button, TextField, Dialog, DialogTitle } from "@material-ui/core";
import { TopHeader } from "./TopHeader";
import { Link } from "react-router-dom";
import { MenuViewStyles } from "../styles/MenuViewStyles";

export const MenuView = (props) => {
  const classes = MenuViewStyles({});
  const [showJoinMenu, setShowJoinMenu] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const handleChange = (event) => {
    props.setUsername(event.target.value);
  };
  const handleJoinChange = (event) => {
    setJoinCode(event.target.value);
  };
  const validUsername = props.username ? false : true;
  const validJoinCode = joinCode ? false : true;
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
            props.goNext("menu", "host");
          }}
        >
          Host Game
        </Button>
        <Button
          className={classes.browseButton}
          disabled={validUsername}
          onClick={() => {
            props.goNext("menu", "browse");
          }}
        >
          Browse Game
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
        {showJoinMenu && (
          <Dialog open={true}>
            <DialogTitle>
              <TextField
                variant="outlined"
                label="Enter Game Code"
                onChange={handleJoinChange}
                error={validJoinCode}
              ></TextField>
            </DialogTitle>
            <Button disabled={validJoinCode} className={classes.joinCodeButton}>
              <Link to="/play/game">Join Game</Link>
            </Button>
          </Dialog>
        )}
      </div>
    </div>
  );
};

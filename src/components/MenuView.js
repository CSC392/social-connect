import React from "react";
import { Button, TextField } from "@material-ui/core";
import { TopHeader } from "./TopHeader";
import { Link } from "react-router-dom";
import { MenuViewStyles } from "../styles/MenuViewStyles";

export const MenuView = (props) => {
  const classes = MenuViewStyles({});

  const handleChange = (event) => {
    props.setUsername(event.target.value);
  };
  const validUsername = props.username ? false : true;
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
            props.goNext("menu", "join");
          }}
        >
          Join Game
        </Button>
      </div>
    </div>
  );
};

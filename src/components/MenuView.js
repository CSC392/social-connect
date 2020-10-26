import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { TopHeader } from "./TopHeader";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  body: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  link: {
    textDecoration: "none",
  },
  hostButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "25px",
    marginTop: "75px",
    padding: "0 93px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
  browseButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "25px",
    marginTop: "35px",
    padding: "0 72px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
  joinButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "25px",
    marginTop: "35px",
    padding: "0 100px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
});

export const MenuView = (props) => {
  const classes = useStyles({});

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

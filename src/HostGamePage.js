import React from "react";
import { Button, makeStyles, ButtonGroup } from "@material-ui/core";
import { TopHeader } from "./shared/TopHeader";
import { BackButton } from "./shared/BackButton";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: `1px solid`,
    position: "relative",
    padding: "10px 0",
  },
  Backbutton: {
    flex: "0 1 auto",
    marginLeft: "auto",
  },
  title: {
    fontSize: "25px",
    flex: "0 1 auto",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
  },
  button: {
    backgroundColor: "#C8BFE7",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
  hostButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "15px",
    marginTop: "50px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
});

export const HostGamePage = () => {
  const classes = useStyles({});

  return (
    <div>
      <TopHeader />
      <div className={classes.header}>
        <BackButton className={classes.Backbutton} />
        <p className={classes.title}>Host Game</p>
      </div>
      <div className={classes.body}>
        <p>Game Selection</p>
        <p>Game Privacy</p>
        <ButtonGroup>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => {}}
          >
            Public
          </Button>
          <Button className={classes.button} variant="contained">
            Private
          </Button>
        </ButtonGroup>
        <Button className={classes.hostButton}>Host</Button>
      </div>
    </div>
  );
};

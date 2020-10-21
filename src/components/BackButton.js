import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  backButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "10px",
    variant: "contained",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
});

export const BackButton = (props) => {
  const classes = useStyles({});
  return (
    <Button className={classes.backButton} onClick={props.onClick}>
      back
    </Button>
  );
};

import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import logo from "../assets/logo.png";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10px"
  },
});


export const TopHeader = () => {
  const classes = useStyles({});
  return <div className={classes.header}>
    <img src={logo} alt="" height="75" />
  </div>
};

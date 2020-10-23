import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    fontSize: "30px",
    marginTop: "10px",
    marginBottom: "0px",
    paddingBottom: "10px",
    borderBottom: `1px solid`,
  },
});

export const TopHeader = () => {
  const classes = useStyles({});
  return <p className={classes.header}> Social Connect</p>;
};

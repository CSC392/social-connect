import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#FAFAFA",
    fontSize: "30px",
    marginTop: "10px",
    marginBottom: "0px",
    paddingBottom: "10px",
    borderBottom: `1px solid`,
  },
});

export const TopHeader = () => {
  const classes = useStyles({});
  return <div className={classes.header}> Social Connect </div>;
};

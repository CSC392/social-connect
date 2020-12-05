import { makeStyles } from "@material-ui/core";

export const JoinViewStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  joinMenuButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
    "&:disabled": {
      backgroundColor: "#6877ca",
    },
    padding: "10px 78px",
  },
  link: {
    textDecoration: "none",
    color: "black",
    cursor: "default",
    "&:active": {
      cursor: "pointer",
    },
  },
});

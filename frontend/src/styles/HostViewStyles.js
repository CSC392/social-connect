import { makeStyles } from "@material-ui/core";

export const HostViewStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
  },
  gameSelection: {
    fontSize: "15px",
    fontFamily: "sans-serif-light",
  },
  hostButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "15px",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
    "&:disabled": {
      backgroundColor: "#0000001f",
    },
    padding: "10px 78px",
  },
  image: {
    marginTop: "10px",
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

import { makeStyles } from "@material-ui/core";

export const PlayPageStyles = makeStyles({
  body: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hostButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "25px",
    marginTop: "75px",
    padding: "0 93px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
  },
  joinButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "25px",
    marginTop: "35px",
    padding: "0 100px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
  },
  closeButton: {
    position: "absolute",
    left: "95%",
    top: "-10%",
    backgroundColor: "#3f51b5",
    color: "white",
    "&:hover": {
      backgroundColor: "#6877ca",
      color: "red",
    },
  },
  menu: {
    overflowY: "unset",
  },
});

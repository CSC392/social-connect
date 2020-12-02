import { makeStyles } from "@material-ui/core";

export const MenuViewStyles = makeStyles({
  body: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Backbutton: {
    backgroundColor: "#3f51b5",
    color: "#FFFFFF",
    fontSize: "10px",
    variant: "contained",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
  },

  hostButton: {
    backgroundColor: "#3f51b5",
    color: "#FFFFFF",
    fontSize: "25px",
    marginTop: "75px",
    padding: "0 93px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
  },
  browseButton: {
    backgroundColor: "#3f51b5",
    fontSize: "25px",
    marginTop: "35px",
    padding: "0 72px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
  },
  joinButton: {
    backgroundColor: "#3f51b5",
    color: "#FFFFFF",
    fontSize: "25px",
    marginTop: "35px",
    padding: "0 100px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
  },
  joinMenuButton: {
    backgroundColor: "#3f51b5",
    color: "#FFFFF",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#6877ca",
    },
    padding: "10px 78px",
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
  joinMenu: {
    overflowY: "unset",
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

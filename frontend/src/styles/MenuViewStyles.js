import { makeStyles } from "@material-ui/core";

export const MenuViewStyles = makeStyles({
  body: {
    paddingTop: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Backbutton: {
    marginTop: "00px",
    backgroundColor: "#3f51b5",
    color: "#FFFFFF",
    fontSize: "10px",
    variant: "contained",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
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
  joinMenuButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "15px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
    padding: "10px 78px",
  },
  closeButton: {
    position: "absolute",
    left: "95%",
    top: "-10%",
    backgroundColor: "#C8BFE7",
    color: "black",
    "&:hover": {
      backgroundColor: "#8474BE",
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

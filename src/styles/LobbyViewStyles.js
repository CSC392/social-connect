import { makeStyles } from "@material-ui/core";

export const LobbyViewStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  startGame: {
    backgroundColor: "#C8BFE7",
    fontSize: "20px",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
  greyText: {
    backgroundColor: "#E5E5E5",
    padding: "10px",
    borderRadius: "5px",
    margin: "0 10px",
  },
  gameName: {
    maxWidth: "20%",
    height: "auto",
  },
  headers: {
    fontSize: "20px",
  },
  subheaders: {
    display: "flex",
    alignItems: "center",
  },
  titles: {
    fontSize: "15px",
  },
  vs: {
    margin: "0px 10px",
  },
  link: {
    textDecoration: "none",
  },
  Backbutton: {
    backgroundColor: "#C8BFE7",
    fontSize: "10px",
    variant: "contained",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#8474BE",
    },
  },
});

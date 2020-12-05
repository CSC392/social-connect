import { makeStyles } from "@material-ui/core";

export const LobbyViewStyles = makeStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  startGame: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "20px",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#6877ca",
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
    fontFamily: "Helvetica",
  },
  subheaders: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Helvetica",
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
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  helperText: {
    color: "#f50057",
    fontSize: "20px",
    marginTop: "25px",
    fontFamily: "Helvetica",
  },
});

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
    fontFamily: "Roboto",
  },
  hostButton: {
    backgroundColor: "#C8BFE7",
    fontSize: "15px",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#8474BE",
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

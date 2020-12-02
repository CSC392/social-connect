import { makeStyles } from "@material-ui/core";

export const HostViewStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: `1px solid`,
    position: "relative",
    padding: "10px 0",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "20px",
  },
  gamePrivacy: {
    marginTop: "30px",
  },
  gameSettingsButton: {
    backgroundColor: "#3f51b5",
    color: "white",
    fontSize: "15px",
    "&:disabled": {
      backgroundColor: "#6877ca",
    },
    "&:hover": {
      backgroundColor: "#6877ca",
    },
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
  },
  gameSelection: {
    minWidth: "120px",
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

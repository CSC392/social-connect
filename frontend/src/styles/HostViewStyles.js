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
    backgroundColor: "#C8BFE7",
    fontSize: "15px",
    "&:disabled": {
      backgroundColor: "#8474BE",
    },
    "&:hover": {
      backgroundColor: "#8474BE",
    },
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

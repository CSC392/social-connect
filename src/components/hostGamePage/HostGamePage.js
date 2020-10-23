import React, { useState } from "react";
import {
  Button,
  makeStyles,
  ButtonGroup,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { TopHeader } from "../TopHeader";
import { imagesData } from "./imagesData";
import { PageNameHeader } from "../PageNameHeader";

const useStyles = makeStyles({
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
});

export const HostGamePage = () => {
  const classes = useStyles({});
  const [disable, setDisable] = useState(false);
  const [gameSelection, setGameSelection] = useState("");
  const handleChange = (event) => {
    setGameSelection(event.target.value);
  };
  const selectedGameData = imagesData.filter(
    (image) => image.title === gameSelection
  );

  return (
    <div>
      <TopHeader />
      <PageNameHeader title="Host Game" onClick={() => {}}></PageNameHeader>
      <div className={classes.body}>
        <p>Game Selection</p>
        <FormControl className={classes.gameSelection}>
          <Select value={gameSelection} onChange={handleChange}>
            {imagesData.map((image) => (
              <MenuItem value={image.title}>{image.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {gameSelection && (
          <img className={classes.image} src={selectedGameData[0].img} />
        )}

        <p className={classes.gamePrivacy}>Game Privacy</p>
        <ButtonGroup>
          <Button
            className={classes.gameSettingsButton}
            variant="contained"
            onClick={() => setDisable(true)}
            disabled={disable}
            disableElevation={true}
          >
            Public
          </Button>
          <Button
            className={classes.gameSettingsButton}
            variant="contained"
            onClick={() => setDisable(false)}
            disabled={!disable}
            disableElevation={true}
          >
            Private
          </Button>
        </ButtonGroup>

        <Button
          className={classes.hostButton}
          disabled={!(gameSelection && selectedGameData[0].isDone)}
        >
          Host
        </Button>
      </div>
    </div>
  );
};

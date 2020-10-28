import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Select,
  FormControl,
  MenuItem,
} from "@material-ui/core";
import { TopHeader } from "./TopHeader";
import { PageNameHeader } from "./PageNameHeader";
import { Link } from "react-router-dom";
import { imagesData } from "../assets/imagesData";
import { HostViewStyles } from "../styles/HostViewStyles";

export const HostView = (props) => {
  const classes = HostViewStyles({});
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
      <PageNameHeader title="Host Game" onClick={props.goBack}></PageNameHeader>
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
          <img className={classes.image} src={selectedGameData[0].img} alt="" />
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
          <Link to="/play/game" className={classes.link}>
            Host
          </Link>
        </Button>
      </div>
    </div>
  );
};

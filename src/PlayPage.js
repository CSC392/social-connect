import React from "react";
import { Button, ButtonGroup, makeStyles, TextField } from "@material-ui/core";
import { TopHeader } from "./shared/TopHeader";
import { BackButton } from "./shared/BackButton";

const useStyles = makeStyles({
    backButton:{
        marginTop:"10px"
    },
    body:{
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    hostButton:{
        backgroundColor: "#C8BFE7",
        fontSize: "25px",
        marginTop: "100px",
        padding: "0 93px",
        "&:hover": {
            backgroundColor: "#8474BE",
        },
    },
    browseButton:{
        backgroundColor: "#C8BFE7",
        fontSize: "25px",
        marginTop: "35px",
        padding: "0 72px",
        "&:hover": {
            backgroundColor: "#8474BE",
        },
    },
    joinButton:{
        backgroundColor: "#C8BFE7",
        fontSize: "25px",
        marginTop: "35px",
        padding: "0 100px",
        "&:hover": {
            backgroundColor: "#8474BE",
        },
    },
});


export const PlayPage = () => {
    const classes = useStyles({});
    return (
    <div>
        <TopHeader />
        <div className={classes.backButton}>
            <BackButton />
        </div>
        <div className={classes.body}>
            <TextField variant="outlined" label = "Enter Username" className={classes.textBox}></TextField>
            <Button className={classes.hostButton}>Host Game</Button>
            <Button className={classes.browseButton}>Browse Game</Button>
            <Button className={classes.joinButton}>Join Game</Button>
        </div>
    </div>
    )};
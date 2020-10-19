import React, { useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { TopHeader } from "../shared/TopHeader";
import { BackButton } from "../shared/BackButton";
import { imagesData } from "./imagesData";

const useStyles = makeStyles({
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        padding: "30px 0",
    },
    BackButton: {
        flex: "0 1 auto",
        marginLeft: "auto"
    },
    body: {
        paddingTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        fontSize: "40px",
        flex: "0 1 auto",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
    },
    gamePlayer1: {
        backgroundColor: "#C8BFE7",
        fontSize: "25px",
        marginTop: "75px",
        padding: "40px 200px",
        "&:hover": {
            backgroundColor: "#8474BE",
        },
    },
    sidebar: {
        float: "right",
        padding: "0 0",
        justifyContent: "flex-start",
        position: "relative"

    },
    GameSelection: {
        fontSize: "25px",
    },
    PublicGame: {
        backgroundColor: "#BEBEBE",
        fontSize: "20px",
        padding: "4px 2px",
        // marginTop: "75px",
    },
    StartGame: {
        backgroundColor: "#C8BFE7",
        fontSize: "35px",
        padding: "4px 2px",
        "&:hover": {
            backgroundColor: "#8474BE",
        },
    }
});

export const LobbyPage = () => {
    const classes = useStyles({});

    return (
        <div>
            <TopHeader />
            <div className={classes.header}>
                <BackButton className={classes.Backbutton} />
                <p className={classes.title}>Lobby Name</p>
            </div>
            <div className={classes.body}>
                <p className={classes.gamePlayer1}>Player 1</p>
            </div>
            <div className={classes.sidebar}>
                <div className={classes.GameSelection}>
                    <p>Game Selection</p>
                    <div className={classes.imgg}>
                        <img className={classes.image} src="./chessBoard.png"></img>
                    </div>

                </div>
                <div className={classes.GameSelection}>
                    <p>Game Privacy</p>
                </div>
                <div className={classes.PublicGame}>
                    <p>Public Game</p>
                </div>

                <div className={classes.GameSelection}>
                    <p>Game Code</p>
                </div>
                <div className={classes.PublicGame}>
                    <p>175634</p>
                </div>

                <div className={classes.GameSelection}>
                    <p>Players 1/2</p>
                </div>
                <div className={classes.StartGame}>
                    <p>Start Game</p>
                </div>

            </div>
        </div >
    );
};





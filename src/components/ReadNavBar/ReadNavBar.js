import React from "react";
import { useHistory } from "react-router";

import { IconButton, makeStyles } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    header: {
        background: "transparent",
        backdropFilter: "blur(0.3rem)",
        position: "sticky",
        top: 0,
        zIndex: 5,
    },
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",
        minHeight: "15vh",
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
        },
        width: "90%",
    },
    backButton: {
        color: themeColors.red,
        padding: "0.3rem",
    },
    backIcon: {
        color: themeColors.red,
        fontSize: "2rem",
    },
    addButton: {
        backgroundColor: themeColors.red,
        padding: "0.3rem",
        "&:hover": {
            backgroundColor: themeColors.red,
        },
    },
    addIcon: {
        color: "white",
        fontSize: "2rem",
    },
}));

function ReadNavBar() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <IconButton className={classes.backButton} onClick={() => history.goBack()}>
                    <ArrowBackIcon className={classes.backIcon} />
                </IconButton>
                <ToggleSwitch />
            </nav>
        </header>
    );
}

export default ReadNavBar;
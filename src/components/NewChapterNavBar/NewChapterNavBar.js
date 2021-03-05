import React from "react";
import { Button, IconButton, makeStyles } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
        minHeight: "20vh",
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
    logoutButton: {
        border: "2px solid " + themeColors.black,
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 1.5rem",
        textTransform: "none",
    },
}));

function NewChapterNavBar() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <IconButton className={classes.backButton}>
                    <ArrowBackIcon className={classes.backIcon} />
                </IconButton>
                <Button variant="outlined" className={classes.logoutButton}>Logout</Button>
            </nav>
        </header>
    );
}

export default NewChapterNavBar;
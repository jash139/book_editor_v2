import React from "react";
import { useHistory } from "react-router";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Button, IconButton, makeStyles } from "@material-ui/core";

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
    cancel: {
        border: "2px solid " + themeColors.black,
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        marginRight: "1rem",
        padding: "0.2rem 1.5rem",
        width: "6rem",
        textTransform: "none",
    },
    save: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 1.5rem",
        width: "6rem",
        textTransform: "none",
    },
}));

function NewChapterNavBar(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <IconButton className={classes.backButton}>
                    <ArrowBackIcon className={classes.backIcon} />
                </IconButton>
                <div className={classes.action}>
                    <Button variant="outlined" className={classes.cancel} onClick={() => history.push("/profile")}>Cancel</Button>
                    <Button variant="outlined" className={classes.save} onClick={props.onNext}>Next</Button>
                </div>
            </nav>
        </header>
    );
}

export default NewChapterNavBar;
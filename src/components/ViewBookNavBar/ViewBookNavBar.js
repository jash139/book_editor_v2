import React from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded';

import BookEdLogo from "../SVGs/BookEdLogo";

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
    logo: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        fontWeight: 400,
        margin: 0,
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

function ViewBookNavBar() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <h1 className={classes.logo}>B<span><BookEdLogo /></span>kEd</h1>
                <IconButton className={classes.addButton}>
                    <AddRoundedIcon className={classes.addIcon} />
                </IconButton>
            </nav>
        </header>
    );
}

export default ViewBookNavBar;
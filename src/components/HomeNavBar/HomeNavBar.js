import React from "react";
import { makeStyles } from "@material-ui/core";

import MenuButton from "../MenuButton/MenuButton";
import BookEdLogo from "../SVGs/BookEdLogo";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    header: {
        background: "transparent",
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
}));

function HomeNavBar() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <h1 className={classes.logo}>B<span><BookEdLogo /></span>kEd</h1>
                <MenuButton />
            </nav>
        </header>
    );
}

export default HomeNavBar;
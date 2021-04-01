import React from "react";
import { makeStyles } from "@material-ui/core";

import MenuButton from "../MenuButton/MenuButton";

import themeColors from "../../constants/themeColors";
import Logo from "../Logo/Logo";
import scrollToSection from "../../functions/scrollToSection";

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
    ul: {
        display: "flex",
        justifyContent: "space-around",
        listStyleType: "none",
        margin: 0,
        padding: 0,
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    anchor: {
        display: "block",
        color: themeColors.grey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        marginRight: "3rem",
        textTransform: "uppercase",
        "&:hover": {
            cursor: "pointer",
        },
    },
}));

function HomeNavBar() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <Logo />
                <ul className={classes.ul}>
                    <li><p className={classes.anchor} onClick={() => scrollToSection("home")}>Home</p></li>
                    <li><p className={classes.anchor} onClick={() => scrollToSection("about")}>About</p></li>
                    <li><p className={classes.anchor} onClick={() => scrollToSection("contact")}>Contact</p></li>
                </ul>
                <MenuButton />
            </nav>
        </header>
    );
}

export default HomeNavBar;
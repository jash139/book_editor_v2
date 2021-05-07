import React from "react";
import { makeStyles } from "@material-ui/core";

import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";

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
}));

function ExploreNavBar() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <Logo />
                <MenuButton />
            </nav>
        </header>
    );
}

export default ExploreNavBar;
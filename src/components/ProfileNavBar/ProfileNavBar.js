import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import Logo from "../Logo/Logo";

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
        textDecoration: "none",
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

function ProfileNavBar() {
    const classes = useStyles();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <Logo />
                <ul className={classes.ul}>
                    <li><a datapage="profile" href="#profile" className={classes.anchor}>Profile</a></li>
                    <li><a datapage="library" href="#library" className={classes.anchor}>Library</a></li>
                    <li><a datapage="work" href="#work" className={classes.anchor}>Work</a></li>
                </ul>
                <Button variant="outlined" className={classes.logoutButton}>Logout</Button>
            </nav>
        </header>
    );
}

export default ProfileNavBar;
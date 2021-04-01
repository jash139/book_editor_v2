import React from "react";

import { IconButton, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    root: {
        borderRight: "5px solid " + themeColors.red,
        borderBottom: "5px solid " + themeColors.red,
        maxWidth: 300,
        margin: "2rem",
        padding: "0 2rem 2rem 0",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            maxWidth: 500,
            margin: "5rem 0 2rem 2rem",
        },
    },
    heading: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
        letterSpacing: "3px",
        opacity: 0.25,
        marginTop: 0,
        marginLeft: "-2rem",
        textTransform: "lowercase",
    },
    about: {
        color: themeColors.black,
        lineHeight: 1.7,
    },
    edit: {
        color: themeColors.red,
    },
}));

function ProfileAbout() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.heading}>About <IconButton className={classes.edit}><EditIcon /></IconButton></h2>
            <p className={classes.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t t amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit. Vulputate ut pharetra sit amet. Massa sed elementum tempus egestas sed sed risus.</p>
        </div>
    );
}

export default ProfileAbout;
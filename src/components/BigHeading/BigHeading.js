import React from "react";

import { makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    bigHeading: {
        color: themeColors.grey,
        fontFamily: "'Playfair Display', serif",
        fontSize: "3.5rem",
        fontWeight: 600,
        margin: "0.5rem 0",
        opacity: 0.25,
        textAlign: "center",
    },
}));

function BigHeading(props) {
    const classes = useStyles();
    return (
        <h1 className={classes.bigHeading}>{props.heading ? props.heading : "Heading"}</h1>
    );
}

export default BigHeading;
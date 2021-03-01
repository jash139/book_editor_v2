import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    bigHeading: {
        fontFamily: "'Cormorant', serif",
        fontSize: "5rem",
        fontWeight: 600,
        letterSpacing: "1rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "3.5rem",
            letterSpacing: "0.5rem",
        },
        margin: "2.5rem 0",
        opacity: "30%",
        textAlign: "center",
        textTransform: "uppercase",
    },
}));

function BigHeading(props) {
    const classes = useStyles();
    return (
        <h1 className={classes.bigHeading}>{props.heading ? props.heading : "Heading"}</h1>
    );
}

export default BigHeading;
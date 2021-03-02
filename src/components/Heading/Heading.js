import React from "react";

import { makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "1.5rem 0",
    },
    heading: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        letterSpacing: "1px",
        margin: 0,
    },
    underline: {
        backgroundColor: themeColors.red,
        borderRadius: "2rem",
        marginTop: "0.5rem",
        height: "0.18rem",
        width: "3rem",
    }
});

function Heading(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2 className={classes.heading}>{props.heading ? props.heading : "Heading"}</h2>
            <div className={classes.underline} />
        </div>
    );
}

export default Heading;
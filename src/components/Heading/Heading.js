import React from "react";

import { makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles({
    headingDiv: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3rem",
    },
    heading: {
        color: themeColors.darkSkin,
        fontFamily: "'Cormorant', serif",
        fontSize: "2.5rem",
        letterSpacing: "4px",
        margin: 0,
        textTransform: "uppercase",
    },
    underline: {
        backgroundColor: themeColors.darkSkin,
        borderRadius: "2px",
        marginTop: "0.5rem",
        height: "0.25rem",
        width: "5rem",
    }
});

function Heading(props) {
    const classes = useStyles();
    return (
        <div className={classes.headingDiv}>
            <h2 className={classes.heading}>{props.heading ? props.heading : "Heading"}</h2>
            <div className={classes.underline} />
        </div>
    );
}

export default Heading;
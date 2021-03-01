import React from "react";

import { makeStyles } from "@material-ui/core";

import getQuotes from "../../constants/getQuotes";
import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "right",
    },
    quote: {
        color: themeColors.grey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontStyle: "italic",
        fontWeight: 300,
        letterSpacing: "1px",
        margin: 0,
    },
    author: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 600,
        letterSpacing: "1px",
        margin: 0,
        marginTop: "0.5rem",
    },
}));

function Quotation() {
    const classes = useStyles();
    const quotation = getQuotes();
    return (
        <div className={classes.root}>
            <h2 className={classes.quote}>"{quotation.quote}"</h2>
            <h3 className={classes.author}>-{quotation.author}</h3>
        </div>
    );
}

export default Quotation;
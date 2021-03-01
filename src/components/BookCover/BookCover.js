import React from "react";

import { makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";
import coverColors from "../../constants/coverColors";

const bookCoverColor = coverColors();

const useStyles = makeStyles(theme => ({
    cover: {
        margin: "2rem 2.5rem",
        height: "14rem",
        width: "10rem",
        position: "relative",
    },
    bookCover: {
        backgroundColor: bookCoverColor.backgroundColor,
        borderRadius: "1px 0 0 1px",
        boxShadow: themeColors.boxShadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "14rem",
        width: "10rem",
        position: "absolute",
    },
    coverFilter: {
        backgroundColor: "#d09465",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        borderRadius: "1px 0 0 1px",
        opacity: 0.3,
        position: "absolute",
        height: "14rem",
        width: "10rem",
    },
    coverLine: {
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05),  rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05))",
        height: "14rem",
        position: "absolute",
        left: "3px",
        width: "3px",
    },

}));

function BookCover() {
    const classes = useStyles();
    return (
        <div className={classes.cover}>
            <img className={classes.bookCover} src="https://images.unsplash.com/photo-1543872084-c7bd3822856f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="cover" />
            <div className={classes.coverFilter} />
            <div className={classes.coverLine} />
        </div>
    );
}

export default BookCover;
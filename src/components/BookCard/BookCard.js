import React from "react";

import { makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";
import trimString from "../../functions/trimString";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        margin: "1rem 3rem 1rem",
        width: "16rem",
    },
    coverDiv: {
        marginRight: "1.5rem",
        position: "relative",
    },
    cover: {
        height: "14.5rem",
        width: "10rem",
    },
    coverBorder: {
        border: "4px solid " + themeColors.red,
        height: "14.5rem",
        width: "10rem",
        position: "absolute",
        top: "0.4rem",
        left: "0.4rem",
    },
    bookDetails: {
        zIndex: 5,
    },
    name: {
        color: themeColors.black,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        fontWeight: 300,
        letterSpacing: "2px",
    },
    viewDiv: {
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
        marginLeft: "-6rem",
        "&:hover": {
            cursor: "pointer",
        },
    },
    bubble: {
        backgroundColor: themeColors.red,
        borderRadius: "2rem",
        height: "10px",
        width: "10px",
    },
    line: {
        backgroundColor: themeColors.red,
        height: "2px",
        marginRight: "1rem",
        width: "7rem",
        transition: "width 0.3s",
    },
    view: {
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        letterSpacing: "4px",
        margin: 0,
        textTransform: "uppercase",
    },
}));

function BookCard(props) {
    const classes = useStyles();
    const id = props.id;
    // write const function to trim string to required length

    const reduceLineWidth = () => {
        if (id) {
            const viewBookLine = document.getElementById(id);
            viewBookLine.style.width = "5rem";
        }
    };
    const restoreLineWidth = () => {
        if (id) {
            const viewBookLine = document.getElementById(id);
            viewBookLine.style.width = "7rem";
        }
    };

    const handleViewBook = () => {
        console.log(id);
    };

    return (
        <div className={classes.root}>
            <div className={classes.coverDiv}>
                <img className={classes.cover} src="https://images.unsplash.com/photo-1516368694098-47836cebec97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80" alt="" />
                <div className={classes.coverBorder} />
            </div>
            <div className={classes.bookDetails}>
                <h2 className={classes.name}>{trimString("Harry Potter", 25)}</h2>
                <div className={classes.viewDiv} onMouseOver={reduceLineWidth} onMouseOut={restoreLineWidth} onClick={handleViewBook}>

                    {/* change this to individual unique ids when using carousel */}
                    <div className={classes.bubble} />
                    <div className={classes.line} id={id} />
                    <h3 className={classes.view}>View</h3>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
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
    const book = props.book;
    const id = book._id;

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
                <img className={classes.cover} src={book.bookCoverUrl} alt="" />
                <div className={classes.coverBorder} />
            </div>
            <div className={classes.bookDetails}>
                <h2 className={classes.name}>{trimString(book.title, 25)}</h2>
                <div className={classes.viewDiv} onMouseOver={reduceLineWidth} onMouseOut={restoreLineWidth} onClick={handleViewBook}>
                    <div className={classes.bubble} />
                    <div className={classes.line} id={id} />
                    <h3 className={classes.view}>View</h3>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
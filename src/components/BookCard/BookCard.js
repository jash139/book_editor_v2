import React from "react";

import { makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";
import coverColors from "../../constants/coverColors";
import trimString from "../../constants/trimString";

const bookCoverColor = coverColors();

const useStyles = makeStyles({
    bookCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "16rem",
        margin: "2rem 4rem 3rem 2rem",
        position: "relative",
        minWidth: "16rem",
        maxWidth: "16rem",
    },
    bookCover: {
        backgroundColor: bookCoverColor.backgroundColor,
        borderRadius: "1px 0 0 1px",
        boxShadow: themeColors.boxShadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "16rem",
        width: "11rem",
        position: "absolute",
        right: 0,
    },
    coverFilter: {
        backgroundColor: "#d09465",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        borderRadius: "1px 0 0 1px",
        opacity: 0.3,
        position: "absolute",
        right: 0,
        height: "16rem",
        width: "11rem",
    },
    coverLine: {
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.05),  rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05))",
        height: "16rem",
        position: "absolute",
        right: "10.5rem",
        width: "4px",
    },


    bookDetails: {
        maxWidth: "12rem",
        zIndex: 5,
    },

    bookTitle: {
        fontFamily: "'Cormorant', serif",
        fontSize: "2.5rem",
        fontWeight: 300,
        letterSpacing: "2px",
        lineHeight: 1,
        margin: 0,
        textTransform: "uppercase",
    },
    read: {
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
        "&:hover": {
            cursor: "pointer",
        },
    },
    line: {
        backgroundColor: themeColors.black,
        height: "0.5px",
        marginRight: "0.5rem",
        width: "4rem",
        transition: "width 0.3s",
    },
    viewButton: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 300,
        letterSpacing: "5px",
        margin: 0,
        textTransform: "uppercase",

    },

});

function BookCard(props) {
    const classes = useStyles();
    const id = props.id;
    // write const function to trim string to required length

    const reduceLineWidth = () => {
        if (id) {
            const viewBookLine = document.getElementById(id);
            viewBookLine.style.width = "1rem";
        }
    };
    const restoreLineWidth = () => {
        if (id) {
            const viewBookLine = document.getElementById(id);
            viewBookLine.style.width = "4rem";
        }
    };

    const handleViewBook = () => {
        console.log(id);
    };

    return (
        <div className={classes.bookCard}>

            <img className={classes.bookCover} src="https://images.unsplash.com/photo-1611071512738-6dd137f8ff29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="cover" />
            <div className={classes.coverFilter} />
            <div className={classes.coverLine} />

            <div className={classes.bookDetails}>
                <h1 className={classes.bookTitle}>{trimString("The Da Vinci Code", 25)}</h1>
                <div className={classes.read} onMouseOver={reduceLineWidth} onMouseOut={restoreLineWidth} onClick={handleViewBook}>

                    {/* change this to individual unique ids when using carousel */}

                    <div className={classes.line} id={id} />
                    <h2 className={classes.viewButton}>View</h2>
                </div>
            </div>

        </div>
    );
}

export default BookCard;
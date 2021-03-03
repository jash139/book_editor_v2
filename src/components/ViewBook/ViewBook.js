import React from "react";
import { connect } from "react-redux";

import StarRateIcon from '@material-ui/icons/StarRate';
import { Button, makeStyles } from "@material-ui/core";

import ViewBookNavBar from "../ViewBookNavBar/ViewBookNavBar";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "80vh",
        margin: "auto",
        width: "90%",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    },
    details: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    },
    coverDiv: {
        marginRight: "4rem",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            margin: "2rem 0",
        },
    },
    cover: {
        height: "17.3rem",
        width: "12rem",
    },
    coverBorder: {
        border: "5px solid " + themeColors.red,
        height: "17.3rem",
        width: "12rem",
        position: "absolute",
        top: "0.5rem",
        left: "0.5rem",
    },
    bookDetails: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    bookName: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
        margin: "0 0 1rem",
    },
    author: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.2rem",
        fontWeight: 600,
    },
    separator1: {
        backgroundColor: themeColors.grey,
        height: "1px",
        width: "8rem",
    },
    separator2: {
        backgroundColor: themeColors.grey,
        height: "1px",
        margin: "0.3rem 0",
        width: "4rem",
    },
    ratingDiv: {
        display: "flex",
        alignItems: "center",
    },
    rating: {
        color: themeColors.black,
        fontFamily: "'Playfair Display', serif",
        fontSize: "1rem",
        fontWeight: 600,
        margin: 0,
    },
    rateIcon: {
        color: themeColors.red,
    },
    genre: {
        color: themeColors.black,
        fontFamily: "'Playfair Display', serif",
        fontSize: "1rem",
        fontWeight: 600,
        margin: 0,
    },
    readButton: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 2rem",
        textTransform: "none",
    },
    bookSummary: {
        borderRight: "5px solid " + themeColors.red,
        borderBottom: "5px solid " + themeColors.red,
        maxWidth: 400,
        margin: "2rem",
        padding: "0 2rem 2rem 0",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            margin: "3rem 0.5rem 3rem 1.5rem",
        },
    },
    summaryHeading: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
        letterSpacing: "3px",
        opacity: 0.25,
        marginTop: 0,
        marginLeft: "-1.5rem",
        textTransform: "lowercase",
    },
    summary: {
        color: themeColors.black,
        lineHeight: 1.7,
    },
}));

function ViewBook(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <ViewBookNavBar />
            <div className={classes.root}>
                <div className={classes.details}>
                    <div className={classes.coverDiv}>
                        <img className={classes.cover} src="https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div className={classes.coverBorder} />
                    </div>
                    <div className={classes.bookDetails}>
                        <div>
                            <h1 className={classes.bookName}>Coffee a Day</h1>
                            <div className={classes.separator1} />
                            <h2 className={classes.author}>J. K. Bowling</h2>
                        </div>
                        <div>
                            <div className={classes.ratingDiv}>
                                <h3 className={classes.rating}>8.5 / 10</h3>
                                <StarRateIcon className={classes.rateIcon} />
                            </div>
                            <div className={classes.separator2} />
                            <h3 className={classes.genre}>Fiction</h3>
                        </div>
                        <Button variant="outlined" className={classes.readButton}>Read</Button>
                    </div>
                </div>
                <div className={classes.bookSummary}>
                    <h2 className={classes.summaryHeading}>summary</h2>
                    <p className={classes.summary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t t amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit. Vulputate ut pharetra sit amet. Massa sed elementum tempus egestas sed sed risus.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(ViewBook);
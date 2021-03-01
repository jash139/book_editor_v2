import React from "react";
import { useHistory } from "react-router-dom";

import StarRateIcon from '@material-ui/icons/StarRate';

import { Button, Grid, IconButton, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import themeColors from "../../constants/themeColors";
import coverColors from "../../constants/coverColors";

import BackIcon from "../Icons/BackIcon";
import AddIcon from "../Icons/AddIcon";
import ScrollDownIndicator from "../ScrollDownIndicator/ScrollDownIndicator";
import Heading from "../Heading/Heading";
import BookCover from "../BookCover/BookCover";

const bookCoverColor = coverColors();

const useStyles = makeStyles(theme => ({
    viewNav: {
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
        maxWidth: "1500px",
        margin: "auto",
    },
    rightIcon: {
        marginLeft: "auto",
    },

    content: {
        alignContent: "center",
        minHeight: "100vh",
        maxWidth: "1500px",
        margin: "auto",
        padding: "0 1.5rem",
    },


    coverDisplay: {
        marginBottom: "5rem",
        position: "relative",
    },
    bookCover: {
        backgroundColor: bookCoverColor.backgroundColor,
        boxShadow: themeColors.boxShadow,
        display: "flex",
        flexDirection: "column",
        height: "14rem",
        justifyContent: "center",
        position: "relative",
        width: "10rem",
    },
    coverFilter: {
        backgroundColor: themeColors.lightSkin,
        opacity: 0.3,
        position: "absolute",
        height: "14rem",
        width: "10rem",
    },
    bookCoverTitle: {
        color: bookCoverColor.color, // change this to fetch color combinations from constants file
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 300,
        letterSpacing: "1px",
        textAlign: "center",
        zIndex: 1,
    },
    bookCoverAuthor: {
        color: bookCoverColor.color, // change this to fetch color combinations from constants file
        fontFamily: "'Cormorant', serif",
        fontSize: "1rem",
        fontWeight: 300,
        textAlign: "center",
        zIndex: 1,
    },

    bookTitleBG: {
        color: themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "10rem",
        fontWeight: 500,
        letterSpacing: "1rem",
        margin: 0,
        opacity: "30%",
        position: "absolute",
        textTransform: "uppercase",
        zIndex: -5,
    },



    author: {
        color: themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.8rem",
        fontWeight: 500,
        letterSpacing: "1px",
        marginBottom: "0.8rem",
    },
    divider: {
        backgroundColor: themeColors.black,
        height: "0.15rem",
        width: "12rem",
    },
    title: {
        fontFamily: "'Cormorant', serif",
        fontSize: "3rem",
        fontWeight: 300,
        letterSpacing: "3px",
        margin: 0,
        marginTop: "0.5rem",
        textTransform: "uppercase",
    },


    rating: {
        alignContent: "center",
        display: "flex",
        [theme.breakpoints.up("md")]: {
            marginLeft: "auto",
        },
    },
    bookRating: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.5rem",
        fontWeight: 600,
        letterSpacing: "2px",
        margin: "10px 0 2px",
    },
    starIcon: {
        color: themeColors.lightSkin,
        fontSize: "1.8rem",
        padding: "8px 2px 0",
    },
    ratingDivider: {
        backgroundColor: themeColors.lightGrey,
        height: "1.5px",
        [theme.breakpoints.up("md")]: {
            marginLeft: "auto",
        },
        width: "6rem",
    },
    bookGenre: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.5rem",
        fontWeight: 600,
        letterSpacing: "1px",
        margin: "5px 0",
        [theme.breakpoints.up("md")]: {
            marginLeft: "auto",
        },
    },
    readButton: {
        backgroundColor: themeColors.lightSkin,
        borderRadius: 0,
        boxShadow: "none",
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        [theme.breakpoints.up("md")]: {
            marginLeft: "auto",
        },
        padding: "0.1rem 0",
        textTransform: "none",
        width: "7rem",
        "&:hover": {
            backgroundColor: themeColors.lightSkin,
            boxShadow: "none",
        }
    },
    rightSection: {
        display: "flex",
        flexDirection: "column",
        padding: "2rem 0 0",
    },


    summarySection: {
        backgroundColor: themeColors.bgDark,
        padding: "8rem 1.5rem 5rem",
    },
    summaryContent: {
        maxWidth: "1200px",
        margin: "auto",
    },
    bookSummary: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.8rem",
        fontWeight: 500,
        lineHeight: 1.5,
        textAlign: "justify",
    },

}));

function ViewBook() {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const lgViewport = useMediaQuery(theme.breakpoints.up("md"));

    const redirectExplore = () => {
        history.push("/explore");
    };

    return (
        <React.Fragment>
            <div className={classes.viewNav}>
                <IconButton onClick={redirectExplore}>
                    <BackIcon />
                </IconButton>
                <IconButton className={classes.rightIcon}>
                    <AddIcon />
                </IconButton>
            </div>
            <Grid container className={classes.content}>
                <Grid item xs={12} container justify="center" alignItems="center" className={classes.coverDisplay}>
                    <BookCover />
                    {lgViewport && <h1 className={classes.bookTitleBG}>Harry Potter</h1>}

                    {/* Change to trim to size */}

                </Grid>
                <Grid item xs={12} md={6}>
                    <h2 className={classes.author}>J. K. Rowling</h2>
                    <div className={classes.divider} />
                    <h1 className={classes.title}>Harry Potter</h1>
                </Grid>

                <Grid item xs={12} md={6} className={classes.rightSection}>
                    <div className={classes.rating}>
                        <h4 className={classes.bookRating}>8.5/10</h4><StarRateIcon className={classes.starIcon} />
                    </div>
                    <div className={classes.ratingDivider} />
                    <h4 className={classes.bookGenre}>Fiction</h4>
                    <Button variant="contained" className={classes.readButton}>Read</Button>
                </Grid>
                {
                    lgViewport
                    &&
                    <Grid item xs={12} container justify="center">
                        <ScrollDownIndicator />
                    </Grid>
                }

            </Grid>
            <div className={classes.summarySection}>
                <div className={classes.summaryContent}>
                    <Heading heading="Summary" />
                    <h4 className={classes.bookSummary}>Lorem ipsum dolor sit amet, consect Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit. Vulputate ut pharetra sit amet. Massa sed elementum tempus egestas sed sed risus. Mauris in aliquam sem fringilla ut morbi. Felis imperdiet proin fermentum leo vel orci porta non. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Bibendum enim facilisis gravida neque convallis. etur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit. Vulputate ut pharetra sit amet. Massa sed elementum tempus egestas sed sed risus. Mauris in aliquam sem fringilla ut morbi. Felis imperdiet proin fermentum leo vel orci porta non. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Bibendum enim facilisis gravida neque convallis. </h4>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewBook;
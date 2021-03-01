import React from "react";

import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

import BookCard from "../BookCard/BookCard";
import themeColors from "../../constants/themeColors";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    carousel: {
        display: "flex",
        alignItems: "center",
    },
    arrowIcon: {
        color: themeColors.darkSkin,
        fontSize: "2.5rem",
        [theme.breakpoints.down("md")]: {
            fontSize: "2rem",
        },
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "0",
        justifyContent: "space-around",
        overflow: "hidden",
        maxWidth: "1500px",
        margin: "auto",
    },
    gridList: {
        flexWrap: "nowrap",
        padding: "0",
        margin: "0",
        overflowY: "hidden",
        scrollBehavior: "smooth",
        transform: "translateZ(0)",
        "&::-webkit-scrollbar": {
            display: "none",
            width: "1px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#4B97C5",
            borderRadius: "1rem",
        }
    },
}));

function Carousel(props) {
    const classes = useStyles();
    const id = props.id;

    const handleScroll = (direction) => {
        if (direction === "left") {
            document.getElementById(id).scrollLeft -= 200;
        } else if (direction === "right") {
            document.getElementById(id).scrollLeft += 200;
        }
    };

    const bookCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((book, index) => <BookCard key={index} id={index} />); // change this to actual book id to make it unique 

    return (
        <div className={classes.carousel}>
            <IconButton onClick={() => handleScroll("left")}>
                <ArrowBackIosRoundedIcon className={classes.arrowIcon} />
            </IconButton>

            {/* change this id to be unique */}

            <div className={classes.root}>
                <GridList className={classes.gridList} id={id} cols={2.5}>
                    {bookCards}
                </GridList>
            </div>
            <IconButton onClick={() => handleScroll("right")}>
                <ArrowForwardIosRoundedIcon className={classes.arrowIcon} />
            </IconButton>
        </div>
    );
}

export default Carousel;
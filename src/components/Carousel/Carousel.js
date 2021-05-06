import React from "react";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

import BookCard from "../BookCard/BookCard";

import themeColors from "../../constants/themeColors";
import { connect } from "react-redux";
import filterBooksByGenre from "../../functions/filterBooksByGenre";

const useStyles = makeStyles((theme) => ({
    carousel: {
        display: "flex",
        alignItems: "center",
    },
    scrollIcon: {
        backgroundColor: themeColors.red,
        margin: "0 1rem",
        padding: "0.3rem",
        "&:hover": {
            backgroundColor: themeColors.red,
        },
    },
    icon: {
        color: "white",
        fontSize: "2rem",
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "0",
        justifyContent: "space-around",
        overflow: "hidden",
        maxWidth: "90%",
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
    message: {
        color: themeColors.grey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.2rem",
        fontWeight: 400,
        margin: "3rem 0",
        opacity: 0.5,
        textAlign: "center",
    },
}));

function Carousel(props) {
    const classes = useStyles();
    const genre = props.genre;
    const id = "carousel-" + genre;

    const handleScroll = (direction) => {
        if (direction === "left") {
            document.getElementById(id).scrollLeft -= 300;
        } else if (direction === "right") {
            document.getElementById(id).scrollLeft += 300;
        }
    };

    const books = filterBooksByGenre(props.books, genre);

    const bookCards = books.map(book => <BookCard key={book._id} book={book} id={genre + book._id} />); // change this to actual book id to make it unique 
    const noBooksMessage = () => <h3 className={classes.message}>No books available in {genre}</h3>;

    return (
        books.length > 0 ?
            <div className={classes.carousel}>
                <IconButton className={classes.scrollIcon} onClick={() => handleScroll("left")}>
                    <ChevronLeftIcon className={classes.icon} />
                </IconButton>
                <div className={classes.root}>
                    <GridList className={classes.gridList} id={id} cols={2.5}>
                        {bookCards}
                    </GridList>
                </div>
                <IconButton className={classes.scrollIcon} onClick={() => handleScroll("right")}>
                    <ChevronRightIcon className={classes.icon} />
                </IconButton>
            </div>
            :
            noBooksMessage()
    );
}

const mapStateToProps = state => ({
    books: state.getAllBooks
});

export default connect(mapStateToProps)(Carousel);
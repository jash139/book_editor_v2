import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core";

import Heading from "../Heading/Heading";
import ProfileCarousel from "../ProfileCarousel/ProfileCarousel";

import filterBooksById from "../../functions/filterBooksById";

const useStyles = makeStyles(theme => ({
    carousel: {
        padding: "3rem 0",
        margin: "auto",
        width: "90%",
        [theme.breakpoints.down("md")]: {
            padding: "2rem 0",
        },
    },
}));

function ProfileLibrary(props) {
    const classes = useStyles();
    const library = filterBooksById(props.books, props.library);
    return (
        <div className={classes.carousel} id="profile-library">
            <Heading heading="Library" />
            <ProfileCarousel books={library} type="library" />
        </div>
    );
}

const mapStateToProps = state => ({
    books: state.getAllBooks
});

export default connect(mapStateToProps)(ProfileLibrary);
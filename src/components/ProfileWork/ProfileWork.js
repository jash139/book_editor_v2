import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core";

import Heading from "../Heading/Heading";
import ProfileCarousel from "../ProfileCarousel/ProfileCarousel";

import filterBooksById from "../../functions/filterBooksById";

const useStyles = makeStyles(theme => ({
    carousel: {
        padding: "3rem 0 10rem",
        margin: "auto",
        width: "90%",
        [theme.breakpoints.down("md")]: {
            padding: "2rem 0",
        },
    },
}));

function ProfileWork(props) {
    const classes = useStyles();
    const work = filterBooksById(props.books, props.work);
    return (
        <div className={classes.carousel} id="profile-work">
            <Heading heading="Work" />
            <ProfileCarousel books={work} type="work" />
        </div>
    );
}

const mapStateToProps = state => ({
    books: state.getAllBooks
});

export default connect(mapStateToProps)(ProfileWork);
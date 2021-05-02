import React from "react";

import { makeStyles } from "@material-ui/core";

import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";

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

function ProfileWork() {
    const classes = useStyles();

    return (
        <div className={classes.carousel} id="profile-work">
            <Heading heading="Work" />
            <Carousel id="carousel-work" />
        </div>
    );
}

export default ProfileWork;
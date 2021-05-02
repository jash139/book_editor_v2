import React from "react";

import { makeStyles } from "@material-ui/core";

import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";

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

function ProfileLibrary() {
    const classes = useStyles();

    return (
        <div className={classes.carousel} id="profile-library">
            <Heading heading="Library" />
            <Carousel id="carousel-library" />
        </div>
    );
}

export default ProfileLibrary;
import React from "react";

import { makeStyles } from "@material-ui/core";

import Heading from "../Heading/Heading";
import ProfileCarousel from "../ProfileCarousel/ProfileCarousel";

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
    const work = [];
    return (
        <div className={classes.carousel} id="profile-work">
            <Heading heading="Work" />
            <ProfileCarousel books={work} />
        </div>
    );
}

export default ProfileWork;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

import BookEdLogo from "../SVGs/BookEdLogo";
import BigHeading from "../BigHeading/BigHeading";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";
import GenreSelectionTabs from "../GenreSelectionTabs/GenreSelectionTabs";
import TestComponent from "../Testcomponent/TestComponent";

import themeColors from "../../constants/themeColors";
import genres from "../../constants/genres";
import ProfileButton from "../ProfileButton/ProfileButton";

const useStyles = makeStyles(theme => ({
    exploreNav: {
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
        maxWidth: "1500px",
        margin: "auto",
    },
    logo: {
        fontFamily: "'Cormorant', serif",
        fontSize: "3rem",
        fontWeight: 300,
        margin: 0,
        "&:hover": {
            cursor: "pointer",
        },
    },
    profileButton: {
        marginLeft: "auto",
    },
    explore: {
    },
    carouselLight: {
        padding: "5rem",
        [theme.breakpoints.down("md")]: {
            padding: "2rem 0",
        },
    },
    carouselDark: {
        backgroundColor: themeColors.bgDark,
        padding: "5rem",
        [theme.breakpoints.down("md")]: {
            padding: "2rem 0",
        },
    },

}));

function Explore() {
    const classes = useStyles();
    const history = useHistory();

    const [selectedGenre, setSelectedGenre] = useState({
        isSelected: false,
        genre: "",
    });

    const selectGenre = (genre) => {
        setSelectedGenre({
            isSelected: true,
            genre
        })
    };

    const clearSelectGenre = () => {
        setSelectedGenre({
            isSelected: false,
            genre: ""
        })
    };

    const allGenres = (
        genres.map((genre, id) =>
            <div className={id % 2 === 0 ? classes.carouselDark : classes.carouselLight} key={genre}>
                <Heading heading={genre} />
                {/* <Carousel id={"carousel-" + genre} /> */}
                <TestComponent id={"carousel-" + genre} />
            </div>
        )
    );

    const specificGenre = (
        <div className={classes.carouselDark}>
            <Heading heading={selectedGenre.genre} />
            <Carousel id={"carousel-" + selectedGenre.genre} />
            <TestComponent id={"carousel-" + selectedGenre.genre} />
        </div>
    );

    const redirectHome = () => {
        history.push("/");
    };

    return (
        <React.Fragment>
            <div className={classes.exploreNav}>
                <h1 className={classes.logo} onClick={redirectHome}>B<span><BookEdLogo /></span>kEd</h1>
                <div className={classes.profileButton}>
                    <ProfileButton />
                </div>
            </div>

            <div className={classes.explore}>
                <BigHeading heading="Explore" />
                <GenreSelectionTabs selectGenre={selectGenre} clearSelectGenre={clearSelectGenre} />
                {selectedGenre.isSelected ? specificGenre : allGenres}
            </div>
        </React.Fragment>
    );
}

export default Explore;
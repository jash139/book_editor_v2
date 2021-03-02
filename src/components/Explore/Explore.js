import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core";

import BigHeading from "../BigHeading/BigHeading";
import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";
import GenreSelectionTabs from "../GenreSelectionTabs/GenreSelectionTabs";
import ExploreNavBar from "../ExploreNavBar/ExploreNavBar";

import themeColors from "../../constants/themeColors";
import genres from "../../constants/genres";

const useStyles = makeStyles(theme => ({
    exploreNav: {
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
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
    carousel: {
        padding: "3rem 0",
        margin: "auto",
        width: "90%",
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
            <div className={classes.carousel} key={genre}>
                <Heading heading={genre} />
                <Carousel id={"carousel-" + genre} />
            </div>
        )
    );

    const specificGenre = (
        <div className={classes.carouselDark}>
            <Heading heading={selectedGenre.genre} />
            <Carousel id={"carousel-" + selectedGenre.genre} />
        </div>
    );

    const redirectHome = () => {
        history.push("/");
    };

    return (
        <React.Fragment>
            <ExploreNavBar />
            <div className={classes.explore}>
                <BigHeading heading="Explore" />
                <GenreSelectionTabs selectGenre={selectGenre} clearSelectGenre={clearSelectGenre} />
                {selectedGenre.isSelected ? specificGenre : allGenres}
            </div>
        </React.Fragment>
    );
}

export default Explore;
import React, { useState } from "react";

import ClearIcon from "@material-ui/icons/Clear";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { IconButton } from "@material-ui/core";

import themeColors from "../../constants/themeColors";
import genres from "../../constants/genres";

const GenreTabs = withStyles({
    indicator: {
        backgroundColor: themeColors.red,
        justifyContent: "center",
        "& > span": {
            borderRadius: "1rem",
            maxWidth: 50,
            width: "100%",
            backgroundColor: themeColors.red,
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const GenreTab = withStyles((theme) => ({
    root: {
        backgroundColor: "white",
        borderRadius: 0,
        color: themeColors.grey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        "&:hover": {
            color: themeColors.black,
            opacity: 1,
        },
        "&$selected": {
            backgroundColor: "white",
            color: themeColors.red,
        },
        "&:focus": {
            backgroundColor: "white",
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        margin: "auto",
        marginTop: "3rem",
        maxWidth: "90%",
    },
    clearButton: {
        borderRadius: 0,
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        margin: "auto",
        height: "2rem",
        width: "2rem",
    },
}));

function GenreSelectionTabs(props) {
    const classes = useStyles();
    const [tabNumber, setTabNumber] = useState(false);

    const handleTabChange = (event, newValue) => {
        setTabNumber(newValue);
        props.selectGenre(genres[newValue]);
    };

    const clearGenreSelection = () => {
        setTabNumber(false);
        props.clearSelectGenre();
    }

    return (
        <div className={classes.root}>
            <GenreTabs value={tabNumber} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
                {genres.map(genre => <GenreTab key={genre} label={genre} id={genre} />)}
            </GenreTabs>
            <IconButton className={classes.clearButton} onClick={clearGenreSelection}>
                <ClearIcon />
            </IconButton>
        </div>
    );
}

export default GenreSelectionTabs;
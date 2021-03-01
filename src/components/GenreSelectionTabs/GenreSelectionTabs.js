import React, { useState } from 'react';

import ClearIcon from '@material-ui/icons/Clear';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { IconButton } from '@material-ui/core';

import themeColors from '../../constants/themeColors';
import genres from '../../constants/genres';

const GenreTabs = withStyles({
    indicator: {
        backgroundColor: "transparent",
        display: "hidden",
        justifyContent: "center",
        "& > span": {
            borderRadius: "1rem",
            maxWidth: 50,
            width: "100%",
            backgroundColor: "transparent",
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const GenreTab = withStyles((theme) => ({
    root: {
        backgroundColor: "white",
        borderRadius: 0,
        borderBottom: "2px solid transparent",
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 300,
        letterSpacing: "5px",
        margin: "0 0.5rem",
        "&:hover": {
            color: themeColors.black,
            opacity: 1,
        },
        "&$selected": {
            backgroundColor: "white",
            color: themeColors.darkSkin,
            borderBottom: "2px solid " + themeColors.darkSkin,
        },
        "&:focus": {
            backgroundColor: "white",
            color: themeColors.darkSkin,
            borderBottom: "2px solid " + themeColors.darkSkin,
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexGrow: 1,
        margin: "auto",
        marginTop: "5rem",
        maxWidth: "1500px",
        padding: "0 1rem",
    },
    clearButton: {
        borderRadius: 0,
        color: themeColors.greenishGrey,
        margin: "auto",
        height: "2rem",
        width: "2rem",
        "&:hover": {
            backgroundColor: "white",
        },
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
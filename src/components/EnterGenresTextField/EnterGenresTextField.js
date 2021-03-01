import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

import genres from '../../constants/genres';
import themeColors from '../../constants/themeColors';

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: "2rem",
        maxWidth: "1500px",
        width: "100%",
        '& label.Mui-focused': {
            color: themeColors.black,
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: themeColors.bgDark,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: themeColors.bgDark,
        },
    },
    label: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.4rem",
        fontWeight: 500,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        backgroundColor: themeColors.bgDark,
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        letterSpacing: "5px",
        lineHeight: 2,
        margin: 2,
        textTransform: "uppercase",
    },
    cancelIcon: {
        color: themeColors.darkGrey,
        fontSize: "1.5rem",
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

// styling for menu background
const MenuProps = {
    PaperProps: {
        style: {
            backgroundColor: "white",
            borderRadius: 0,
            boxShadow: "none",
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// styles for menu items in multi select
function getStyles(name, personName, theme) {
    return {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        letterSpacing: "5px",
        lineHeight: 2,
        textTransform: "uppercase",
    };
}

function EnterGenresTextField() {
    const classes = useStyles();
    const theme = useTheme();

    const [selectedGenres, setSelectedGenres] = useState([]); // change this to use redux instead of component state

    const handleChange = (event) => {
        setSelectedGenres(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="genres-field-label" className={classes.label}>Genres</InputLabel>
            <Select
                labelId="genres-field-label"
                multiple
                value={selectedGenres}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => (
                    <div className={classes.chips}>
                        {selected.map((value) => (
                            <Chip
                                key={value}
                                label={value}
                                className={classes.chip}
                            />
                        ))}
                    </div>
                )}
                MenuProps={MenuProps}
            >
                {genres.map((genre) => (
                    <MenuItem key={genre} value={genre} style={getStyles(genre, selectedGenres, theme)}>
                        {genre}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default EnterGenresTextField;
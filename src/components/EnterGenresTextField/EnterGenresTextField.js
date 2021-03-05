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
        margin: "1rem 0 5rem",
        width: "100%",
        '& label.Mui-focused': {
            color: themeColors.black,
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: themeColors.grey,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: themeColors.black,
        },
    },
    label: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.2rem",
        fontWeight: 500,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        backgroundColor: "transparent",
        border: "1.5px solid " + themeColors.black,
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        fontSize: "0.8rem",
        margin: 2,
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
            border: "1.5px solid " + themeColors.black,
            backgroundColor: "white",
            borderRadius: 3,
            boxShadow: themeColors.boxShadow,
            maxHeight: ITEM_HEIGHT * 6 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

// styles for menu items in multi select
function getStyles(name, personName, theme) {
    return {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
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
import React, { useState } from 'react';

import AddRoundedIcon from '@material-ui/icons/AddRounded';

import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core';

import BackIcon from '../Icons/BackIcon';
import themeColors from '../../constants/themeColors';

import BigHeading from '../BigHeading/BigHeading';
import EnterGenresTextField from '../EnterGenresTextField/EnterGenresTextField';

const useStyles = makeStyles((theme) => ({

    newChapter: {
        display: "flex",
        margin: "auto",
        maxWidth: "1500px",
        padding: "0 1rem 2rem",

    },
    navBar: {
        display: "flex",
        alignItems: "center",
        paddingTop: "1rem",
    },
    outlineButton: {
        borderRadius: 0,
        border: "1.5px solid " + themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        marginLeft: "auto",
        padding: "0.2px 0",
        textTransform: "none",
        width: "8rem",
    },

    addCover: {
        display: "flex",
        alignItems: "center",
        backgroundColor: themeColors.bgDark,
        boxShadow: themeColors.boxShadow,
        justifyContent: "center",
        height: "16rem",
        margin: "auto",
        marginBottom: "5rem",
        width: "11rem",
    },
    addIcon: {
        color: themeColors.darkSkin,
        fontSize: "5rem",
    },
    textField: {
        backgroundColor: themeColors.bgDark,
        marginBottom: "2rem",
        width: "100%",
        '& label.Mui-focused': {
            color: themeColors.darkGrey,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: themeColors.lightGrey,
            },
            '&:hover fieldset': {
                borderColor: themeColors.lightGrey,
            },
            '&.Mui-focused fieldset': {
                borderColor: themeColors.lightGrey,
            },
        },
        "& .MuiFormLabel-root": {
            fontFamily: "'Cormorant', serif",
            fontSize: "1.4rem",
            fontWeight: 500,
        },

    },
    input: {
        borderRadius: 0,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.4rem",
        fontWeight: 500,

    },


    resetButton: {
        borderRadius: 0,
        border: "1px solid " + themeColors.black,
        color: themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        marginRight: "1rem",
        textTransform: "none",
        width: "6.5rem",
    },
    nextButton: {
        backgroundColor: themeColors.lightSkin,
        borderRadius: 0,
        boxShadow: "none",
        color: themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        textTransform: "none",
        width: "6.5rem",
        "&:hover": {
            backgroundColor: themeColors.lightSkin,
            boxShadow: "none",
        }
    },

}));

function Write() {
    const classes = useStyles();
    const [story, setStory] = useState({
        title: "",
        summary: ""
    });

    const handleChange = (prop, value) => {
        setStory(prevValues => ({
            ...prevValues,
            [prop]: value
        }));
    };

    const handleReset = () => {
        setStory({
            title: "",
            summary: ""
        });
    };

    const handleNext = () => {
        console.log(story);
        // save the story in db and redirect to new chapter page
    };

    return (
        <div className={classes.newChapter}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.navBar}>
                        <IconButton>
                            <BackIcon />
                        </IconButton>
                        <Button variant="outlined" className={classes.outlineButton}>Logout</Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <BigHeading heading="Write" />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.addCover}><IconButton><AddRoundedIcon className={classes.addIcon} /></IconButton></div>

                    <TextField
                        variant="outlined"
                        label="Story Title"
                        className={classes.textField}
                        InputProps={{
                            className: classes.input,
                        }}
                        value={story.title}
                        onChange={(event) => handleChange("title", event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        label="Summary"
                        multiline
                        rows={10}
                        className={classes.textField}
                        InputProps={{
                            className: classes.input,
                        }}
                        value={story.summary}
                        onChange={(event) => handleChange("summary", event.target.value)}
                    />
                    <EnterGenresTextField />
                </Grid>

                <Grid item xs={12} container justify="flex-end">
                    <Button variant="outlined" className={classes.resetButton} onClick={handleReset}>Reset</Button>
                    <Button variant="contained" className={classes.nextButton} onClick={handleNext}>Next</Button>
                </Grid>

            </Grid>


        </div>
    );
}

export default Write;

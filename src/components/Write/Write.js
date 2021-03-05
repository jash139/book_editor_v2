import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";

import WriteNavBar from "../WriteNavBar/WriteNavBar";

import themeColors from "../../constants/themeColors";
import EnterGenresTextField from "../EnterGenresTextField/EnterGenresTextField";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        width: "90%",
    },
    coverUpload: {
        border: "1px solid " + themeColors.red,
        height: "13.35rem",
        width: "10rem",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    border: {
        border: "4px solid " + themeColors.red,
        height: "13.35rem",
        width: "10rem",
        position: "absolute",
        top: "0.3rem",
        left: "0.3rem",
    },
    addButton: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 1rem",
        textTransform: "none",
    },
    titleField: {
        marginTop: "2rem",
        width: "100%",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "1px solid " + themeColors.grey,
            },
            "&:hover fieldset": {
                border: "1px solid " + themeColors.black,
            },
            "&.Mui-focused fieldset": {
                border: "1px solid " + themeColors.black,
            },
        },
    },
    summaryField: {
        marginTop: "1rem",
        width: "100%",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "1px solid " + themeColors.grey,
            },
            "&:hover fieldset": {
                border: "1px solid " + themeColors.black,
            },
            "&.Mui-focused fieldset": {
                border: "1px solid " + themeColors.black,
            },
        },
    },
    input: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 400,
    },
}));

function Write() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <WriteNavBar />
            <div className={classes.root}>
                <div className={classes.coverUpload}>
                    <div className={classes.border} />
                    <Button variant="outlined" className={classes.addButton}>Add</Button>
                </div>
                <TextField
                    className={classes.titleField}
                    variant="outlined"
                    placeholder="Story Title"
                    InputProps={{
                        className: classes.input,
                    }}
                />
                <TextField
                    className={classes.summaryField}
                    variant="outlined"
                    placeholder="Summary"
                    multiline
                    rows={12}
                    InputProps={{
                        className: classes.input,
                    }}
                />
                <EnterGenresTextField />
            </div>
        </React.Fragment>
    );
}

export default Write;
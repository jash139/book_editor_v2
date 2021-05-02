import React from "react";

import { Button, makeStyles } from "@material-ui/core";
import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    newBookButton: {
        backgroundColor: themeColors.red,
        boxShadow: "none",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        marginLeft: "1rem",
        padding: "5.2px 2rem",
        textTransform: "none",
        "&:hover": {
            backgroundColor: themeColors.red,
            boxShadow: "none",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
            marginTop: "1rem",
        },
    },
}));

function WriteButton() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Button variant="contained" className={classes.newBookButton}>New Book</Button>
        </React.Fragment>
    );
}

export default WriteButton;
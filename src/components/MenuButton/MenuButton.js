import React from "react";

import { IconButton, makeStyles } from "@material-ui/core";
import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    line1: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.4rem 0",
        width: "2rem",
    },
    line2: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.4rem 0 0.3rem 1rem",
        width: "1rem",
    },
    line3: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.4rem 0 0.3rem 0.5rem",
        width: "1.5rem",
    },

}));

function MenuButton() {
    const classes = useStyles();
    return (
        <IconButton>
            <div className={classes.logo}>
                <div className={classes.line1} />
                <div className={classes.line2} />
                <div className={classes.line3} />
            </div>
        </IconButton>
    );
}

export default MenuButton;
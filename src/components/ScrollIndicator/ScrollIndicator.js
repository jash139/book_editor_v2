import React from "react";

import { makeStyles } from "@material-ui/core";

import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import themeColors from "../../constants/themeColors";
// import scrollToSection from "../../constants/scrollToSection";

const useStyles = makeStyles(theme => ({
    scrollIndicator: {
        display: "flex",
        alignItems: "center",
        transform: "rotate(-90deg) translate(0, -50%)",
        "&:hover": {
            cursor: "pointer",
        },
    },
    scrollIcon: {
        color: themeColors.red,
        marginRight: "0.5rem",
    },
    scroll: {
        color: themeColors.grey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 500,
    },
}));

function ScrollIndicator() {
    const classes = useStyles();
    return (
        // onClick={() => scrollToSection("projects")}
        <div className={classes.scrollIndicator}>
            <ChevronLeftRoundedIcon className={classes.scrollIcon} />
            <h3 className={classes.scroll}>Scroll</h3>
        </div>
    );
}

export default ScrollIndicator;
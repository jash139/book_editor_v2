import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";

import BookEdLogo from "../SVGs/BookEdLogo";
import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    logo: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        fontWeight: 400,
        margin: 0,
        "&:hover": {
            cursor: "pointer",
        },
    },
}));

function Logo() {
    const classes = useStyles();
    const history = useHistory();

    const redirectHome = () => {
        history.push("/");
    }

    return (
        <h1 className={classes.logo} onClick={redirectHome}>B<span><BookEdLogo /></span>kEd</h1>
    );
}

export default Logo;
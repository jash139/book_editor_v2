import React from "react";

import { Button, makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    editButton: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 2rem",
        textTransform: "none",
    },
}));

function ProfileEditDetails() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Button variant="outlined" className={classes.editButton}>Edit Details</Button>
        </React.Fragment>
    );
}

export default ProfileEditDetails;
import React from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";

import { IconButton, makeStyles } from "@material-ui/core";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

import themeColors from "../../constants/themeColors";
import getUserDetails from "../../actions/userActions/getUserDetails";
import patchUserDetails from "../../actions/userActions/patchUserDetails";

const useStyles = makeStyles(theme => ({
    header: {
        background: "transparent",
        backdropFilter: "blur(0.3rem)",
        position: "sticky",
        top: 0,
        zIndex: 5,
    },
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",
        minHeight: "15vh",
        [theme.breakpoints.down("sm")]: {
            minHeight: "10vh",
        },
        width: "90%",
    },
    backButton: {
        padding: "0.3rem",
    },
    backIcon: {
        color: themeColors.red,
        fontSize: "2rem",
    },
    addButton: {
        backgroundColor: themeColors.red,
        padding: "0.3rem",
        "&:hover": {
            backgroundColor: themeColors.red,
        },
    },
    addIcon: {
        color: "white",
        fontSize: "2rem",
    },
}));

function ViewBookNavBar(props) {
    const classes = useStyles();
    const bookId = props.bookId;
    const history = useHistory();

    const handleAddToLibrary = () => {
        const library = props.userDetails.library;
        if (!library.includes(bookId)) {
            const patchObj = {
                library: [
                    ...props.userDetails.library,
                    bookId
                ]
            };
            props.patchUserDetails(props.userDetails._id, patchObj);
            props.getUserDetails(props.userDetails.uid);
        }
    };

    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <IconButton className={classes.backButton} onClick={() => history.goBack()}>
                    <ArrowBackIcon className={classes.backIcon} />
                </IconButton>
                <IconButton className={classes.addButton} onClick={handleAddToLibrary}>
                    <AddRoundedIcon className={classes.addIcon} />
                </IconButton>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

const mapDispatchToProps = {
    getUserDetails,
    patchUserDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewBookNavBar);
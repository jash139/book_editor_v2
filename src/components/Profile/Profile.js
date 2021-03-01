import React from "react";
import { connect } from "react-redux";

import { Button, makeStyles } from "@material-ui/core";

import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    profile: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "80vh",
        margin: "auto",
        width: "90%",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "center",
        },
    },
    details: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    },
    picDiv: {
        marginRight: "4rem",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            margin: "2rem 0",
        },
    },
    profilPic: {
        height: "17.3rem",
        width: "12rem",
    },
    picBorder: {
        border: "5px solid " + themeColors.red,
        height: "17.3rem",
        width: "12rem",
        position: "absolute",
        top: "0.5rem",
        left: "0.5rem",
    },
    name: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
    },
    editButton: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 2rem",
        textTransform: "none",
    },
    about: {
        borderRight: "5px solid " + themeColors.red,
        borderBottom: "5px solid " + themeColors.red,
        maxWidth: 250,
        margin: "2rem",
        padding: "0 2rem 2rem 0",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            maxWidth: 500,
            margin: "2rem 1rem",
        },
    },
    aboutHeading: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
        letterSpacing: "3px",
        opacity: 0.25,
        marginTop: 0,
        marginLeft: "-2rem",
        textTransform: "lowercase",
    },
    aboutUser: {
        color: themeColors.black,
        lineHeight: 1.7,
    },
}));

function Profile(props) {
    const classes = useStyles();
    const userDetails = Object.keys(props.userDetails).length > 0 ? props.userDetails : {
        name: "",
        followers: [],
        following: [],
        work: [],
        about: "",
        profilePicture: "",
    };
    return (
        <React.Fragment>
            <ProfileNavBar />
            <div className={classes.profile}>
                <div className={classes.details}>
                    <div className={classes.picDiv}>
                        <img className={classes.profilPic} src="https://images.unsplash.com/photo-1516368694098-47836cebec97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80" alt="" />
                        <div className={classes.picBorder} />
                    </div>
                    <div className={classes.userDetails}>
                        <h1 className={classes.name}>Umbrella Girl</h1>
                        <Button variant="outlined" className={classes.editButton}>Edit Details</Button>
                    </div>
                </div>
                <div className={classes.about}>
                    <h2 className={classes.aboutHeading}>About</h2>
                    <p className={classes.aboutUser}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t t amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit. Vulputate ut pharetra sit amet. Massa sed elementum tempus egestas sed sed risus.</p>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

export default connect(mapStateToProps)(Profile);
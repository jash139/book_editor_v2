import React from "react";
import { connect } from "react-redux";

import { Button, makeStyles } from "@material-ui/core";

import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";

import themeColors from "../../constants/themeColors";
import ProfileAbout from "../ProfileAbout/ProfileAbout";

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
    userDetails: {
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
        },
    },
    name: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
    },
    numbers: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "2rem",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    numberHeading: {
        color: themeColors.grey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        marginBottom: 0,
        textTransform: "uppercase",
    },
    number: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 600,
        marginTop: "0.5rem",
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
                        <div className={classes.numbers}>
                            <div className={classes.column}>
                                <h5 className={classes.numberHeading}>Followers</h5>
                                <p className={classes.number}>240</p>
                            </div>
                            <div className={classes.column}>
                                <h5 className={classes.numberHeading}>Following</h5>
                                <p className={classes.number}>150</p>
                            </div>
                            <div className={classes.column}>
                                <h5 className={classes.numberHeading}>Work</h5>
                                <p className={classes.number}>13</p>
                            </div>
                        </div>
                        <Button variant="outlined" className={classes.editButton}>Edit Details</Button>
                    </div>
                </div>
                <ProfileAbout />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

export default connect(mapStateToProps)(Profile);
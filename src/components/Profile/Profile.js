import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core";

import ProfileNavBar from "../ProfileNavBar/ProfileNavBar";
import ProfileAbout from "../ProfileAbout/ProfileAbout";
import ProfileEditDetails from "../ProfileEditDetails/ProfileEditDetails";

import themeColors from "../../constants/themeColors";
import { useAuth } from "../../contexts/AuthContext";
import getUserDetails from "../../actions/userActions/getUserDetails";
import ProfileLibrary from "../ProfileLibrary/ProfileLibrary";
import ProfileWork from "../ProfileWork/ProfileWork";

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
        margin: "0 0.5rem",
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
}));

function Profile(props) {
    const classes = useStyles();
    const { currentUser } = useAuth();
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        props.getUserDetails(currentUser.uid);
    }, [update]); // eslint-disable-line react-hooks/exhaustive-deps

    const updateState = () => {
        setUpdate(prevValue => !prevValue);
    };

    const userDetails = Object.keys(props.userDetails).length > 0 ? props.userDetails : {
        name: "User Name",
        profilePicture: "",
        about: "",
        followers: [],
        following: [],
        work: [],
    };

    return (
        <React.Fragment>
            <ProfileNavBar />
            <div className={classes.profile} id="profile-home">
                <div className={classes.details}>
                    <div className={classes.picDiv}>
                        <img className={classes.profilPic} src={userDetails.profilePicture} alt="" />
                        <div className={classes.picBorder} />
                    </div>
                    <div className={classes.userDetails}>
                        <h1 className={classes.name}>{userDetails.name}</h1>
                        <div className={classes.numbers}>
                            <div className={classes.column}>
                                <h5 className={classes.numberHeading}>Followers</h5>
                                <p className={classes.number}>{userDetails.followers.length}</p>
                            </div>
                            <div className={classes.column}>
                                <h5 className={classes.numberHeading}>Following</h5>
                                <p className={classes.number}>{userDetails.following.length}</p>
                            </div>
                            <div className={classes.column}>
                                <h5 className={classes.numberHeading}>Work</h5>
                                <p className={classes.number}>{userDetails.work.length}</p>
                            </div>
                        </div>
                        <ProfileEditDetails updateState={updateState} />
                    </div>
                </div>
                <ProfileAbout updateState={updateState} />
            </div>
            <ProfileLibrary />
            <ProfileWork />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

const mapDispatchToProps = {
    getUserDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
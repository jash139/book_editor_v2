import React from "react";
import { connect } from "react-redux";

import { Avatar, Button, Grid, IconButton, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import CustomAvatar from "../SVGs/CustomAvatar";

import themeColors from "../../constants/themeColors";

import BookEdLogo from "../SVGs/BookEdLogo";
import EnterIcon from "../Icons/EnterIcon";
import BigHeading from "../BigHeading/BigHeading";
import CustomProfileTabs from "../CustomProfileTabs/CustomProfileTabs";
import { useHistory } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles(theme => ({
    nav: {
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
        maxWidth: "1500px",
        margin: "auto",
    },
    logo: {
        fontFamily: "'Cormorant', serif",
        fontSize: "3rem",
        fontWeight: 300,
        margin: 0,
        "&:hover": {
            cursor: "pointer",
        },
    },
    buttons: {
        marginLeft: "auto",
    },
    logoutButton: {
        borderRadius: 0,
        border: "1.5px solid " + themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        padding: "0.2px 0",
        textTransform: "none",
        width: "8rem",
    },

    content: {
        padding: "0 1rem",
    },

    avatar: {
        borderRadius: "20rem",
        height: "14rem",
        width: "14rem",
    },
    userDetails: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
        },
        [theme.breakpoints.up("md")]: {
            paddingLeft: "4rem",
        },
    },
    name: {
        color: themeColors.darkSkin,
        fontFamily: "'Cormorant', serif",
        fontSize: "3.5rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.5rem",
        },
        letterSpacing: "4px",
        margin: 0,
        marginTop: "3rem",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
        textTransform: "uppercase",
    },
    userNumbers: {
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "450px",
    },
    numberDiv: {

    },
    numberHeading: {
        color: themeColors.greenishGrey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.1rem",
        fontWeight: 600,
        letterSpacing: "3px",
        margin: 0,
        marginTop: "1rem",
    },
    number: {
        color: themeColors.darkGrey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.3rem",
        fontWeight: 600,
        letterSpacing: "3px",
        margin: 0,
        textAlign: "center",
    },
    verticalDivider: {
        backgroundColor: themeColors.lightGrey,
        height: "100%",
        margin: "1rem 2px",
        width: "1.5px",
    },

}));

function Profile(props) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();
    const { logout } = useAuth();
    const lgViewport = useMediaQuery(theme.breakpoints.up("md"));


    const userDetails = Object.keys(props.userDetails).length > 0 ? props.userDetails : {
        name: "",
        followers: [],
        following: [],
        work: [],
        about: "",
        profilePicture: "",
    };


    async function handleLogOut() {
        try {
            await logout();
            history.push("/");
        } catch {
            // add snackbar
            // handleSnackBarClick();
        }
    }

    const profilePicture = (
        userDetails.profilePicture === "" ? <CustomAvatar /> : <Avatar className={classes.avatar} src={userDetails.profilePicture} alt={userDetails.name} />
    );

    const redirectHome = () => {
        history.push("/");
    };

    return (
        <React.Fragment>
            <div className={classes.nav}>
                <h1 className={classes.logo} onClick={redirectHome}>B<span><BookEdLogo /></span>kEd</h1>
                <div className={classes.buttons}>
                    {
                        lgViewport ?
                            <Button variant="outlined" className={classes.logoutButton} onClick={handleLogOut}>Logout</Button>
                            :
                            <IconButton onClick={handleLogOut}>
                                <EnterIcon />
                            </IconButton>
                    }

                </div>
            </div>

            <div className={classes.content}>
                <BigHeading heading="Profile" />
                <Grid container>
                    <Grid item xs={12} md={4} container justify={lgViewport ? "flex-end" : "center"}>
                        {profilePicture}
                    </Grid>
                    <Grid item xs={12} md={8} className={classes.userDetails}>
                        <h2 className={classes.name}>{userDetails.name}</h2>
                        <div className={classes.userNumbers}>
                            <div className={classes.numberDiv}>
                                <h2 className={classes.numberHeading}>Followers</h2>
                                <h3 className={classes.number}>{userDetails.followers.length}</h3>
                            </div>
                            <div className={classes.verticalDivider} />

                            <div className={classes.numberDiv}>
                                <h2 className={classes.numberHeading}>Following</h2>
                                <h3 className={classes.number}>{userDetails.following.length}</h3>
                            </div>
                            <div className={classes.verticalDivider} />

                            <div className={classes.numberDiv}>
                                <h2 className={classes.numberHeading}>My Work</h2>
                                <h3 className={classes.number}>{userDetails.work.length}</h3>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <CustomProfileTabs userDetails={userDetails} />

        </React.Fragment>
    );
}
const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

export default connect(mapStateToProps)(Profile);
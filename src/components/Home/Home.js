import React from "react";
import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

import { Button, IconButton, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import BookEdLogo from "../SVGs/BookEdLogo";
import EnterIcon from "../Icons/EnterIcon";
import Heading from "../Heading/Heading";
import RegisterModal from "../RegisterModal/RegisterModal";
import ProfileButton from "../ProfileButton/ProfileButton";

import themeColors from "../../constants/themeColors";
import getQuotes from "../../constants/getQuotes";
import homeContent from "../../constants/homeContent";

import toggleRegisterModalState from "../../actions/toggleRegisterModalState";
import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles(theme => ({
    homeNav: {
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
    },
    buttons: {
        marginLeft: "auto",
    },
    loginButton: {
        borderRadius: 0,
        border: "1.5px solid " + themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        marginRight: "2rem",
        padding: "0.2px 0",
        textTransform: "none",
        width: "8rem",
    },
    signUpButton: {
        backgroundColor: themeColors.lightSkin,
        borderRadius: 0,
        boxShadow: "none",
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        padding: "0.1rem 0",
        textTransform: "none",
        width: "8rem",
        "&:hover": {
            backgroundColor: themeColors.lightSkin,
            boxShadow: "none",
        }
    },

    homeContent: {
    },
    heroSection: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
    },
    heading: {
        color: themeColors.darkGrey,
        fontFamily: "'Cormorant', serif",
        fontSize: "3rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "5rem",
        },
        fontWeight: 600,
        letterSpacing: "2px",
        textAlign: "center",
    },
    storiesHeading: {
        color: themeColors.black,
    },
    exploreButton: {
        backgroundColor: themeColors.lightSkin,
        borderRadius: 0,
        boxShadow: "none",
        fontFamily: "'Cormorant', serif",
        fontSize: "2rem",
        fontWeight: 600,
        margin: "2rem 0",
        padding: "0.1rem 0",
        textTransform: "none",
        width: "15rem",
        "&:hover": {
            backgroundColor: themeColors.lightSkin,
            boxShadow: "none",
        }
    },

    quotationSection: {
        backgroundColor: themeColors.bgDark,
    },
    quotationContent: {
        maxWidth: "900px",
        margin: "auto",
        padding: "6rem 2rem",
        textAlign: "center",
    },
    quotation: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.2rem",
        fontStyle: "italic",
        fontWeight: 300,
        letterSpacing: "1px",
        margin: 0,
    },
    author: {
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        letterSpacing: "1px",
        margin: 0,
        marginTop: "0.5rem",
    },

    aboutSection: {
        maxWidth: "900px",
        margin: "auto",
        padding: "5rem 2rem",
        textAlign: "center",
    },
    aboutUs: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.8rem",
        fontWeight: 400,
        lineHeight: 1.5,
    },


    contactSection: {
        backgroundColor: themeColors.bgDark,
        padding: "5rem 2rem",
    },

}));

function Home(props) {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const { currentUser } = useAuth();
    const lgViewport = useMediaQuery(theme.breakpoints.up("md"));

    const quotation = getQuotes();

    const handleOpenExplorePage = () => {
        history.push("/explore");
    }

    return (
        <React.Fragment>
            <div className={classes.homeNav}>
                <h1 className={classes.logo}>B<span><BookEdLogo /></span>kEd</h1>
                <div className={classes.buttons}>
                    {
                        currentUser ?
                            <ProfileButton />
                            :
                            lgViewport ?
                                <React.Fragment>
                                    <Button variant="outlined" className={classes.loginButton} onClick={() => props.toggleRegisterModalState("OPEN")} >Login</Button>
                                    <Button variant="contained" className={classes.signUpButton} onClick={() => props.toggleRegisterModalState("OPEN")} >Sign up</Button>
                                </React.Fragment>
                                :
                                <IconButton onClick={() => props.toggleRegisterModalState("OPEN")} >
                                    <EnterIcon />
                                </IconButton>
                    }

                </div>
            </div>
            <div className={classes.homeContent}>
                <RegisterModal />
                <div className={classes.heroSection}>
                    <h1 className={classes.heading}>SHARE <span className={classes.storiesHeading}>STORIES</span> OR <br />FIND WHAT OTHERS <br />HAVE TO SAY</h1>
                    <Button variant="contained" className={classes.exploreButton} onClick={handleOpenExplorePage}>Explore</Button>
                </div>
                <div className={classes.quotationSection}>
                    <div className={classes.quotationContent}>
                        <h2 className={classes.quotation}>"{quotation.quote}"</h2>
                        <h3 className={classes.author}>-{quotation.author}</h3>
                    </div>
                </div>
                <div className={classes.aboutSection}>
                    <Heading heading="About us" />
                    <h3 className={classes.aboutUs}>{homeContent.aboutUs}</h3>
                </div>
                <div className={classes.contactSection}>
                    <Heading heading="Contact" />
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { toggleRegisterModalState })(Home);
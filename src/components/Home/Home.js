import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";

import { Button, IconButton, makeStyles, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import HomeNavBar from "../HomeNavBar/HomeNavBar";
import HomeIllustration from "../HomeIllustration/HomeIllustration";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import Quotation from "../Quotation/Quotation";

import EmailIcon from "../Icons/EmailIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedInIcon";

import themeColors from "../../constants/themeColors";
import homeContent from "../../constants/homeContent";

import copyEmail from "../../functions/copyEmail";
import openTab from "../../functions/openTab";

import getUserDetails from "../../actions/userActions/getUserDetails";
import getAllBooks from "../../actions/bookActions/getAllBooks";
import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
    },
    content: {
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "auto",
        position: "relative",
        width: "90%",
    },
    indicatorSection: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 500,
        display: "flex",
        justifyContent: "flex-end",
    },
    activeIndicator: {
        color: themeColors.black,
        transform: "rotate(90deg) translate(0, -40%)",
    },
    indicator: {
        color: themeColors.grey,
    },
    middleSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "8rem",
    },
    heading: {
        color: themeColors.grey,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "2rem",
        fontWeight: 300,
    },
    stories: {
        color: themeColors.red,
        fontWeight: 700,
        fontSize: "3rem",
        textTransform: "uppercase",
    },
    exploreButton: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "1rem",
        padding: "0.2rem 4rem",
        textTransform: "none",
    },
    line: {
        backgroundColor: themeColors.red,
        borderRadius: "2rem",
        height: "6rem",
        marginRight: "0.8rem",
        width: "5px",
    },
    footer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
    },
    aboutSection: {
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        width: "90%",
    },
    about: {
        borderRight: "5px solid " + themeColors.red,
        borderBottom: "5px solid " + themeColors.red,
        maxWidth: 700,
        margin: "2rem",
        padding: "0 2rem 2rem 0",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            maxWidth: 500,
            margin: "5rem 0 2rem 2rem",
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
    contactSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        minHeight: "50vh",
    },
    contactDiv: {
        backgroundColor: themeColors.grey,
        color: "white",
        width: "100%",
    },
    contacts: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "auto",
        padding: "3rem 0",
        width: "90%",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    getInTouchHeading: {
        color: "white",
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        fontWeight: 600,
        textTransform: "uppercase",
    },
    contact: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    contactIcon: {
        height: 45,
        marginRight: "1rem",
        width: 45,
    },
    contactLink: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.9rem",
        "&:hover": {
            cursor: "pointer",
            textDecoration: "underline",
        },
    },
    snackbar: {
        backgroundColor: themeColors.black,
        boxShadow: "none",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.9rem",
        fontWeight: 500,
    },
    closeSnackbar: {
        color: "white",
    },
}));

function Home(props) {
    const classes = useStyles();
    const history = useHistory();

    const [snackbarState, setSnackbarState] = useState({
        open: false,
    });

    const { currentUser } = useAuth();

    useEffect(() => {
        if (currentUser) {
            props.getUserDetails(currentUser.uid);
        }
        props.getAllBooks();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const handleOpenSnackbar = () => {
        setSnackbarState({ open: true });
    };

    const handleCloseSnackbar = () => {
        setSnackbarState({ open: false });
    };
    const handleEmailClick = () => {
        copyEmail();
        handleOpenSnackbar();
    };

    const handleExplore = () => {
        history.push("/explore");
    };

    return (
        <div className={classes.root} id="home">
            <HomeNavBar />
            <HomeIllustration />
            <div className={classes.content}>
                <div className={classes.indicatorSection}>
                    <h2 className={classes.activeIndicator}>01 / <span className={classes.indicator}>03</span></h2>
                </div>
                <div className={classes.middleSection}>
                    <div>
                        <h2 className={classes.heading}>Share<br /><span className={classes.stories}>Stories</span><br />or find what others have to say</h2>
                        <Button variant="outlined" className={classes.exploreButton} onClick={handleExplore}>Explore</Button>
                    </div>
                    <div className={classes.line} />
                </div>
                <div className={classes.footer}>
                    <ScrollIndicator />
                    <Quotation />
                </div>
            </div>
            <div className={classes.aboutSection} id="about">
                <div className={classes.about}>
                    <h2 className={classes.aboutHeading}>About us</h2>
                    <p className={classes.aboutUser}>{homeContent.aboutUs}</p>
                </div>
            </div>
            <div className={classes.contactSection} id="contact">
                <div className={classes.contactDiv}>
                    <div className={classes.contacts}>
                        <h2 className={classes.getInTouchHeading}>Get in touch</h2>
                        <div className={classes.contact}>
                            <div className={classes.row}>
                                <IconButton className={classes.contactIcon} onClick={handleEmailClick}>
                                    <EmailIcon />
                                </IconButton>
                                <p className={classes.contactLink} onClick={handleEmailClick}>{homeContent.contactLinks.email}</p>
                            </div>
                            <div className={classes.row}>
                                <IconButton className={classes.contactIcon} onClick={() => openTab(homeContent.contactLinks.github)}>
                                    <GithubIcon />
                                </IconButton>
                                <p className={classes.contactLink} onClick={() => openTab(homeContent.contactLinks.github)}>{homeContent.contactLinks.github}</p>
                            </div>
                            <div className={classes.row}>
                                <IconButton className={classes.contactIcon} onClick={() => openTab(homeContent.contactLinks.linkedin)}>
                                    <LinkedinIcon />
                                </IconButton>
                                <p className={classes.contactLink} onClick={() => openTab(homeContent.contactLinks.linkedin)}>{homeContent.contactLinks.linkedin}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                ContentProps={{
                    classes: {
                        root: classes.snackbar
                    }
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                autoHideDuration={2000}
                open={snackbarState.open}
                onClose={handleCloseSnackbar}
                action={
                    <IconButton
                        className={classes.closeSnackbar}
                        onClick={handleCloseSnackbar}
                    >
                        <CloseIcon />
                    </IconButton>
                }
                message="Email copied!"
            />
        </div>
    );
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    getUserDetails,
    getAllBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
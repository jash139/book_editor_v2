import React from "react";
import { Button, makeStyles } from "@material-ui/core";

import HomeNavBar from "../HomeNavBar/HomeNavBar";

import themeColors from "../../constants/themeColors";
import HomeIllustration from "../HomeIllustration/HomeIllustration";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import Quotation from "../Quotation/Quotation";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
    },
    content: {
        minHeight: "75vh",
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
}));

function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <HomeNavBar />
                <HomeIllustration />
                <div className={classes.content}>
                    <div className={classes.indicatorSection}>
                        <h2 className={classes.activeIndicator}>01 / <span className={classes.indicator}>03</span></h2>
                    </div>
                    <div className={classes.middleSection}>
                        <div>
                            <h2 className={classes.heading}>Share<br /><span className={classes.stories}>Stories</span><br />or find what others have to say</h2>
                            <Button variant="outlined" className={classes.exploreButton}>Explore</Button>
                        </div>
                        <div className={classes.line} />
                    </div>
                    <div className={classes.footer}>
                        <ScrollIndicator />
                        <Quotation />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;
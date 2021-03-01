import React, { useState } from "react";
import PropTypes from "prop-types";

import EditIcon from "@material-ui/icons/Edit";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Heading from "../Heading/Heading";
import Carousel from "../Carousel/Carousel";

import themeColors from "../../constants/themeColors";

const ProfileTabs = withStyles({
    indicator: {
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        height: "2.5px",
        "& > span": {
            borderRadius: "1rem",
            maxWidth: 50,
            width: "100%",
            backgroundColor: themeColors.darkGrey,
        },
    },
})((props) => <Tabs {...props} centered TabIndicatorProps={{ children: <span /> }} />);;

const ProfileTab = withStyles((theme) => ({
    root: {
        borderRadius: "0.4rem 0.4rem 0 0",
        border: "3px solid " + themeColors.bgDark,
        borderBottom: "none",
        color: themeColors.darkGrey,
        minWidth: "10rem",
        fontFamily: "'Cormorant', serif",
        fontSize: "1.5rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem",
            minWidth: "7rem",
        },
        fontWeight: 500,
        lineHeight: 1,
        margin: "0 0.2rem",
        "&:hover": {
            color: themeColors.darkGrey,
            opacity: 1,
        },
        "&$selected": {
            backgroundColor: themeColors.bgDark,
            color: themeColors.darkGrey,
        },
        "&:focus": {
            backgroundColor: themeColors.bgDark,
            color: themeColors.darkGrey,
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "5rem",
        width: "100%",
    },
    tabPanel: {
        backgroundColor: themeColors.bgDark,
    },


    tabContent: {
        margin: "auto",
        maxWidth: "1000px",
        minHeight: "70vh",
        padding: "5rem",
        [theme.breakpoints.down("xs")]: {
            padding: "4rem 1.5rem",
        },
    },
    about: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.8rem",
        fontWeight: 400,
        lineHeight: 1.5,
        textAlign: "justify",
    },


}));

function TabPanel(props) {
    const classes = useStyles();
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={index}
            {...other}
            className={classes.tabPanel}
        >
            {value === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function CustomProfileTabs(props) {
    const classes = useStyles();
    const userDetails = props.userDetails;
    const [tabNumber, setTabNumber] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabNumber(newValue);
    };

    return (
        <div className={classes.root}>
            <ProfileTabs value={tabNumber} onChange={handleTabChange} >
                <ProfileTab label="About" id={0} />
                <ProfileTab label="Library" id={1} />
                <ProfileTab label="Work" id={2} />
            </ProfileTabs>
            <TabPanel value={tabNumber} index={0}>
                <div className={classes.tabContent}>
                    <Heading heading="About" />

                    {/* add edit about icon */}
                    <EditIcon />

                    <h3 className={classes.about}>{userDetails.about}</h3>
                </div>
            </TabPanel>
            <TabPanel value={tabNumber} index={1}>
                <div className={classes.tabContent}>
                    <Heading heading="Library" />

                </div>
            </TabPanel>
            <TabPanel value={tabNumber} index={2}>
                <div className={classes.tabContent}>
                    <Heading heading="Work" />
                    <Carousel />

                    {/* Carousel of the user's work */}

                </div>
            </TabPanel>
        </div>
    );
}

export default CustomProfileTabs;
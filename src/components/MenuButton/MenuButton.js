import React, { useState } from "react";
import { useHistory } from "react-router";

import { IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";

import { useAuth } from "../../contexts/AuthContext";
import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    root: {
        color: themeColors.red,
    },
    line1: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.3rem 0",
        width: "1.8rem",
    },
    line2: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.3rem 0 0.3rem 1rem",
        width: "0.8rem",
    },
    line3: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.3rem 0 0.3rem 0.5rem",
        width: "1.3rem",
    },
    menu: {
        "& .MuiPaper-root": {
            background: themeColors.grey,
            borderRadius: 0,
            boxShadow: "none",
        }
    },
    menuItem: {
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        padding: "0.5rem 1.5rem",
        textTransform: "uppercase",
    },
}));

function MenuButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const { currentUser } = useAuth();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openProfile = () => {
        history.push("/profile");
    };

    const openLogin = () => {
        history.push("/login");
    };

    const openSignup = () => {
        history.push("/signup");
    };

    return (
        <React.Fragment>
            <IconButton className={classes.root} onClick={handleClick}>
                <div className={classes.logo}>
                    <div className={classes.line1} />
                    <div className={classes.line2} />
                    <div className={classes.line3} />
                </div>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                {
                    currentUser ?
                        <React.Fragment>
                            <MenuItem className={classes.menuItem} onClick={openProfile}>Profile</MenuItem>
                            <MenuItem className={classes.menuItem} onClick={handleClose}>Logout</MenuItem>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <MenuItem className={classes.menuItem} onClick={openLogin}>Login</MenuItem>
                            <MenuItem className={classes.menuItem} onClick={openSignup}>Signup</MenuItem>
                        </React.Fragment>
                }
            </Menu>
        </React.Fragment>
    );
}

export default MenuButton;
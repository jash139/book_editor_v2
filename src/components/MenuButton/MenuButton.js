import React, { useState } from "react";

import { IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";
import themeColors from "../../constants/themeColors";
import { useHistory } from "react-router";

const useStyles = makeStyles(theme => ({
    root: {
        color: themeColors.red,
    },
    line1: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.4rem 0",
        width: "2rem",
    },
    line2: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.4rem 0 0.3rem 1rem",
        width: "1rem",
    },
    line3: {
        backgroundColor: themeColors.black,
        borderRadius: "2rem",
        height: "0.15rem",
        margin: "0.4rem 0 0.3rem 0.5rem",
        width: "1.5rem",
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
        margin: "0.2rem 1rem",
        textTransform: "uppercase",
    },
}));

function MenuButton() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openProfile = () => {
        history.push("/profile");
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
                <MenuItem className={classes.menuItem} onClick={openProfile}>Profile</MenuItem>
                <MenuItem className={classes.menuItem} onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default MenuButton;
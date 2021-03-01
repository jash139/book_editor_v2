import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar, makeStyles } from "@material-ui/core";

import themeColors from "../../constants/themeColors";
import { useAuth } from "../../contexts/AuthContext";
import getUserDetails from "../../actions/userActions/getUserDetails";

const useStyles = makeStyles((theme) => ({
    profileButton: {
        "&:hover": {
            cursor: "pointer",
        },
    },
    menu: {
        backgroundColor: "white",
    },
    menuItem: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 300,
        letterSpacing: "5px",
        textTransform: "uppercase",
    },
}));

function ProfileButton(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const { currentUser, logout } = useAuth();

    useEffect(() => {
        props.getUserDetails(currentUser.uid);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleProfile = () => {
        history.push("/profile");
    };

    async function handleLogout() {
        try {
            await logout();
            history.push("/");
        } catch {
            // handleSnackBarClick();
        }
    }

    return (
        <div>
            <Avatar
                variant="square"
                src={props.userDetails.profilePicture}
                className={classes.profileButton}
                onClick={handleOpenMenu}
            />
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfile} className={classes.menuItem}>Profile</MenuItem>
                <MenuItem onClick={handleLogout} className={classes.menuItem}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

export default connect(mapStateToProps, { getUserDetails })(ProfileButton);
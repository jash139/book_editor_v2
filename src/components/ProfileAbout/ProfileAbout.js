import React, { useState } from "react";
import { connect } from "react-redux";

import { Button, IconButton, makeStyles, Modal, TextField } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import patchUserDetails from "../../actions/userActions/patchUserDetails";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    root: {
        borderRight: "5px solid " + themeColors.red,
        borderBottom: "5px solid " + themeColors.red,
        maxWidth: 300,
        margin: "2rem",
        padding: "0 2rem 2rem 0",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            maxWidth: 500,
            margin: "5rem 0 2rem 2rem",
        },
    },
    heading: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2.5rem",
        letterSpacing: "3px",
        marginTop: 0,
        marginLeft: "-2rem",
        textTransform: "lowercase",
    },
    about: {
        color: themeColors.black,
        lineHeight: 1.7,
    },
    editIcon: {
        color: themeColors.red,
    },
    modal: {
        backgroundColor: "white",
        outline: "none",
        padding: "1.5rem",
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        [theme.breakpoints.down("xs")]: {
            width: 300,
        },
    },
    modalHeading: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "2rem",
        marginTop: 0,
    },
    textField: {
        '& label.Mui-focused': {
            color: themeColors.red,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: themeColors.red,
        },
        "& .MuiFormLabel-root": {
            color: themeColors.grey,
            fontFamily: "'Poppins', sans-serif",
            fontSize: "1rem",
        },
        margin: "1rem 0",
        width: "100%",
    },
    action: {
        display: "flex",
        justifyContent: "flex-end",
    },
    cancelButton: {
        border: "2px solid " + themeColors.black,
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 1rem",
        textTransform: "none",
        width: "5rem",
        marginRight: "1rem",
    },
    saveButton: {
        backgroundColor: themeColors.red,
        boxShadow: "none",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "5.2px 1rem",
        textTransform: "none",
        width: "5rem",
        "&:hover": {
            backgroundColor: themeColors.red,
            boxShadow: "none",
        },
    },
}));

const inputProp = {
    style: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        margin: 1,
        lineHeight: 1.5,
    }
}

function ProfileAbout(props) {
    const classes = useStyles();
    const userDetails = props.userDetails;
    const [about, setAbout] = useState(userDetails.about);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const toggleModalState = () => {
        setEditModalOpen(prevValue => !prevValue);
    };

    const handleChange = (event) => {
        setAbout(event.target.value);
    };

    const handleSaveAbout = () => {
        const patchObj = {
            about
        };
        props.patchUserDetails(userDetails._id, patchObj);
        toggleModalState();
        props.updateState();
    };

    const modalBody = (
        <div className={classes.modal}>
            <h2 className={classes.modalHeading}>Edit About</h2>
            <TextField
                className={classes.textField}
                multiline
                rowsMax={6}
                inputProps={inputProp}
                value={about}
                onChange={handleChange}
            />
            <div className={classes.action}>
                <Button variant="outlined" className={classes.cancelButton} onClick={toggleModalState}>Cancel</Button>
                <Button variant="contained" className={classes.saveButton} onClick={handleSaveAbout}>Save</Button>
            </div>
        </div>
    );

    const getAboutUser = () => {
        if (userDetails.about === "") {
            return "Add a short description about yourself.";
        } else {
            return userDetails.about;
        }
    };

    return (
        <div className={classes.root}>
            <h2 className={classes.heading}>About <IconButton className={classes.editIcon} onClick={toggleModalState}><EditIcon /></IconButton></h2>
            <p className={classes.about}>{getAboutUser()}</p>
            <Modal
                open={editModalOpen}
                onClose={toggleModalState}
            >
                {modalBody}
            </Modal>
        </div>
    );
}

const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

const mapDispatchToProps = {
    patchUserDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileAbout);

import React, { useState } from "react";
import { connect } from "react-redux";

import { Button, makeStyles, Modal, TextField } from "@material-ui/core";

import getUserDetails from "../../actions/userActions/getUserDetails";
import patchUserDetails from "../../actions/userActions/patchUserDetails";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    editButton: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 2rem",
        textTransform: "none",
    },
    modal: {
        backgroundColor: "white",
        outline: "none",
        padding: "2rem 1.5rem",
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
        margin: "0 0 1.5rem",
        width: "100%",
    },
    action: {
        display: "flex",
        justifyContent: "flex-end",
        margin: "1rem 0 0",
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
};

function ProfileEditDetails(props) {
    const classes = useStyles();
    const userDetails = Object.keys(props.userDetails).length > 0 ? props.userDetails : {
        name: "User Name",
        profilePicture: "",
        about: "",
        followers: [],
        following: [],
        work: [],
    };
    const [values, setValues] = useState(userDetails);
    const [editModalOpen, setEditModalOpen] = useState(false);

    const toggleModalState = () => {
        setEditModalOpen(prevValue => !prevValue);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSave = () => {
        const patchObj = {
            name: values.name,
            profilePicture: values.profilePicture
        };
        props.patchUserDetails(userDetails._id, patchObj);
        props.getUserDetails(userDetails.uid);
        toggleModalState();
    };

    const modalBody = (
        <div className={classes.modal}>
            <h2 className={classes.modalHeading}>Edit Details</h2>
            <TextField
                className={classes.textField}
                label="Name"
                inputProps={inputProp}
                value={values.name}
                onChange={handleChange("name")}
            />
            <TextField
                className={classes.textField}
                label="Profile picture(link)"
                inputProps={inputProp}
                value={values.profilePicture}
                onChange={handleChange("profilePicture")}
            />
            <div className={classes.action}>
                <Button variant="outlined" className={classes.cancelButton} onClick={toggleModalState}>Cancel</Button>
                <Button variant="contained" className={classes.saveButton} onClick={handleSave}>Save</Button>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <Button variant="outlined" className={classes.editButton} onClick={toggleModalState}>Edit Details</Button>
            <Modal
                open={editModalOpen}
                onClose={toggleModalState}
            >
                {modalBody}
            </Modal>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

const mapDispatchToProps = {
    getUserDetails,
    patchUserDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditDetails);
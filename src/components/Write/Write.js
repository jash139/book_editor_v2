import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";

import { Button, makeStyles, Modal, TextField } from "@material-ui/core";

import WriteNavBar from "../WriteNavBar/WriteNavBar";
import EnterGenresTextField from "../EnterGenresTextField/EnterGenresTextField";

import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        width: "90%",
    },
    coverUpload: {
        border: "1px solid " + themeColors.red,
        height: "13.35rem",
        width: "10rem",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    border: {
        border: "4px solid " + themeColors.red,
        height: "13.35rem",
        width: "10rem",
        position: "absolute",
        top: "0.3rem",
        left: "0.3rem",
    },
    addButton: {
        border: "2px solid " + themeColors.red,
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 600,
        fontSize: "0.8rem",
        padding: "0.2rem 1rem",
        textTransform: "none",
    },
    titleField: {
        marginTop: "2rem",
        width: "100%",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "1px solid " + themeColors.grey,
            },
            "&:hover fieldset": {
                border: "1px solid " + themeColors.black,
            },
            "&.Mui-focused fieldset": {
                border: "1px solid " + themeColors.black,
            },
        },
    },
    summaryField: {
        marginTop: "1rem",
        width: "100%",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "1px solid " + themeColors.grey,
            },
            "&:hover fieldset": {
                border: "1px solid " + themeColors.black,
            },
            "&.Mui-focused fieldset": {
                border: "1px solid " + themeColors.black,
            },
        },
    },
    input: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 400,
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
    addCoverButton: {
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
        lineHeight: 2,
    }
};

function Write(props) {
    const classes = useStyles();
    const [editModalOpen, setEditModalOpen] = useState(false);
    const userDetails = props.userDetails;
    const defaultValues = {
        userId: userDetails._id,
        bookCoverUrl: "",
        title: "",
        summary: "",
        genres: []
    };
    const [values, setValues] = useState(defaultValues);
    const history = useHistory();

    const toggleModalState = () => {
        setEditModalOpen(prevValue => !prevValue);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleGenresChange = (event) => {
        setValues({ ...values, genres: event.target.value });
    };

    const handleReset = () => {
        setValues(defaultValues);
    };

    const openNewChapter = (newBookId) => {
        history.push("/write/new-chapter/" + newBookId + "/1");
    };

    const handleSaveNewBook = () => {
        axios.post(process.env.REACT_APP_BACKEND_HOST_URL + "/books", values)
            .then(newBook => openNewChapter(newBook.data._id))
            .catch(error => console.log(error));
    };

    const modalBody = (
        <div className={classes.modal}>
            <h2 className={classes.modalHeading}>Add Cover</h2>
            <TextField
                className={classes.textField}
                label="Book Cover(link)"
                multiline
                rowsMax={6}
                inputProps={inputProp}
                value={values.bookCoverUrl}
                onChange={handleChange("bookCoverUrl")}
            />
            <div className={classes.action}>
                <Button variant="contained" className={classes.addCoverButton} onClick={toggleModalState}>Add</Button>
            </div>
        </div>
    );

    return (
        <React.Fragment>
            <WriteNavBar onReset={handleReset} onSave={handleSaveNewBook} />
            <div className={classes.root}>
                <div className={classes.coverUpload}>
                    <div className={classes.border} />
                    <Button variant="outlined" className={classes.addButton} onClick={toggleModalState}>Add</Button>
                </div>
                <TextField
                    className={classes.titleField}
                    variant="outlined"
                    placeholder="Story Title"
                    InputProps={{
                        className: classes.input,
                    }}
                    value={values.title}
                    onChange={handleChange("title")}
                />
                <TextField
                    className={classes.summaryField}
                    variant="outlined"
                    placeholder="Summary"
                    multiline
                    rows={12}
                    InputProps={{
                        className: classes.input,
                    }}
                    value={values.summary}
                    onChange={handleChange("summary")}
                />
                <EnterGenresTextField genres={values.genres} handleGenresChange={handleGenresChange} />
                <Modal
                    open={editModalOpen}
                    onClose={toggleModalState}
                >
                    {modalBody}
                </Modal>
            </div>
        </React.Fragment>
    );
}
const mapStateToProps = state => ({
    userDetails: state.getUserDetails
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Write);
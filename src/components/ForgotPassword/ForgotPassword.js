import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button, TextField, Typography } from "@material-ui/core";

import Heading from "../Heading/Heading";
import EntryNavbar from "../EntryNavbar/EntryNavbar";

import { useAuth } from "../../contexts/AuthContext";
import themeColors from "../../constants/themeColors";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "85vh",
        [theme.breakpoints.down("sm")]: {
            minHeight: "90vh",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    card: {
        minHeight: 600,
        maxWidth: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    link: {
        color: themeColors.red,
        fontWeight: 500,
        "&:hover": {
            cursor: "pointer",
        },
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
        width: 300,
    },
    actionButton: {
        backgroundColor: themeColors.red,
        borderRadius: 3,
        boxShadow: "none",
        color: "white",
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 500,
        fontSize: "1rem",
        margin: "1rem 0 0",
        width: 300,
        textTransform: "none",
        "&:hover": {
            backgroundColor: themeColors.red,
            boxShadow: "none",
        },
    },
    error: {
        color: "red",
        fontFamily: "'Bree Serif', serif",
        fontSize: "1rem",
        marginTop: "0.5rem",
        textAlign: "center",
    }
}));

const inputProp = {
    style: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        margin: 1,
        lineHeight: 2,
    }
}

function ForgotPassword() {
    const classes = useStyles();
    const [values, setValues] = useState({
        email: ""
    });
    const [error, setError] = useState(""); // change this to null
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const history = useHistory();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            // await login(values.email, values.password);
            // history.push("/");
        } catch {
            // setError("Failed to log in.");
        }

        setLoading(false);

    }

    const openSignin = () => {
        history.push("/signin");
    };

    return (
        <React.Fragment>
            <EntryNavbar />
            <div className={classes.root}>
                <div className={classes.card}>
                    <Heading heading="Forgot Password" />
                    <FormControl>
                        {error && <Typography className={classes.error}>{error}</Typography>}
                        <TextField
                            className={classes.textField}
                            label="Email"
                            type="email"
                            inputProps={inputProp}
                            value={values.email}
                            onChange={handleChange("email")}
                        />
                    </FormControl>
                    <Button
                        className={classes.actionButton}
                        onClick={handleSubmit}
                        size="large"
                        variant="contained"
                        disabled={loading}
                    >
                        Send mail
                 </Button>
                    <p className={classes.link} onClick={openSignin}>Sign in</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ForgotPassword;

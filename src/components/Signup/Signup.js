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
    message: {
        fontSize: "0.9rem",
        textAlign: "center",
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
        fontSize: "1.3rem",
        margin: 1,
        lineHeight: 2,
    }
}

function Signup() {
    const classes = useStyles();
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const [error, setError] = useState(""); // change this to null
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    const history = useHistory();

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function handleSignup() {
        try {
            setError("");
            setLoading(true);
            await signup(values.email, values.password);
            history.push("/");
        } catch {
            setError("Failed to create an account");
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
                    <Heading heading="Sign up" />
                    <p className={classes.message}>Welcome! Sign up to start your journey.</p>
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
                    <FormControl className={classes.textField}>
                        <form autoComplete="off">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                inputProps={inputProp}
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                autoComplete="off"
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </form>
                    </FormControl>
                    <Button
                        className={classes.actionButton}
                        onClick={handleSignup}
                        size="large"
                        variant="contained"
                        disabled={loading}
                    >
                        Creat Account
                 </Button>
                    <p className={classes.message}>
                        Already have an account?
                <span className={classes.link} onClick={openSignin}> Sign in</span>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Signup;

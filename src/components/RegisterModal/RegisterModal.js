import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from 'prop-types';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Tab, Tabs, TextField } from "@material-ui/core";

import themeColors from "../../constants/themeColors";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import CloseIcon from "../Icons/CloseIcon";

import toggleRegisterModalState from "../../actions/toggleRegisterModalState";
import { useAuth } from "../../contexts/AuthContext";

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const RegisterTabs = withStyles({
    indicator: {
        backgroundColor: "transparent",
        display: "hidden",
        justifyContent: "center",
        "& > span": {
            borderRadius: "1rem",
            maxWidth: 50,
            width: "100%",
            backgroundColor: "transparent",
        },
    },
})((props) => <Tabs {...props} centered TabIndicatorProps={{ children: <span /> }} />);


const RegisterTab = withStyles((theme) => ({
    root: {
        backgroundColor: "white",
        borderRadius: 0,
        borderBottom: "2px solid transparent",
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.8rem",
        fontWeight: 500,
        letterSpacing: "5px",
        margin: "0 0.5rem",
        minWidth: "6rem",
        "&:hover": {
            color: themeColors.black,
            opacity: 1,
        },
        "&$selected": {
            backgroundColor: "white",
            color: themeColors.darkSkin,
            borderBottom: "2px solid " + themeColors.darkSkin,
        },
        "&:focus": {
            backgroundColor: "white",
            color: themeColors.darkSkin,
            borderBottom: "2px solid " + themeColors.darkSkin,
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

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
            <div className={classes.tabContent}>
                {value === index && children}
            </div>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    modal: {
        outline: "none",
        position: "absolute",
        height: "350px",
        width: "300px",
        backgroundColor: "white",
        padding: "1rem",
    },
    closeIcon: {
        display: "inline-block",
        transition: "transform 0.2s",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(90deg)",
        },
    },
    tabPanel: {
        height: "80%",
        padding: "0 2rem",
    },
    tabContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        "& label.Mui-focused": {
            color: themeColors.darkSkin,
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: themeColors.darkSkin,
        },
    },
    textField: {
        margin: "0 0 1rem",
    },
    button: {
        backgroundColor: themeColors.lightSkin,
        borderRadius: 0,
        boxShadow: "none",
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        marginTop: "1rem",
        padding: "0.1rem 0",
        textTransform: "none",
        width: "100%",
        "&:hover": {
            backgroundColor: themeColors.lightSkin,
            boxShadow: "none",
        }
    },
}));

function RegisterModal(props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [loading, setLoading] = useState(false);

    const { signup, login } = useAuth();
    const [tabNumber, setTabNumber] = useState(0);

    const [values, setValues] = useState({
        loginValues: {
            email: "",
            password: ""
        },
        signupValues: {
            email: "",
            password: ""
        },
    });

    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    const handleTabChange = (event, newValue) => {
        setTabNumber(newValue);
    };

    const handleChange = (prop, type) => (event) => {
        if (type === "login") {
            setValues({
                ...values,
                loginValues: {
                    ...values.loginValues,
                    [prop]: event.target.value
                }
            })
        } else {
            setValues({
                ...values,
                signupValues: {
                    ...values.signupValues,
                    [prop]: event.target.value
                }
            });
        }
    };

    const handleClickShowPassword = (type) => {
        type === "login" ? setShowLoginPassword(prevValue => !prevValue) : setShowSignupPassword(prevValue => !prevValue);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function handleLogin() {
        try {
            setLoading(true);
            await login(values.loginValues.email, values.loginValues.password);
            props.toggleRegisterModalState("CLOSE");
        } catch {
            // setError("Failed to log in.");
        }

        setLoading(false);

    }

    async function handleSignup() {
        try {
            setLoading(true);
            await signup(values.signupValues.email, values.signupValues.password);
            props.toggleRegisterModalState("CLOSE");
        } catch {
            // setError("Failed to create an account");
        }

        setLoading(false);

    }

    const modalBody = (
        <div style={modalStyle} className={classes.modal}>
            <div className={classes.closeIcon} onClick={() => props.toggleRegisterModalState("CLOSE")}>
                <CloseIcon />
            </div>

            <RegisterTabs
                value={tabNumber}
                onChange={handleTabChange}
            >
                <RegisterTab label="Login" id={0} />
                <RegisterTab label="Sign Up" id={1} />
            </RegisterTabs>

            <TabPanel value={tabNumber} index={0}>
                <TextField
                    className={classes.textField}
                    label="Email"
                    value={values.loginValues.email}
                    onChange={handleChange("email", "login")}
                />
                <FormControl className={classes.textField}>
                    <form autoComplete="off">
                        <InputLabel htmlFor="login-password">Password</InputLabel>
                        <Input
                            id="login-password"
                            // inputProps={inputProp}
                            type={showLoginPassword ? 'text' : 'password'}
                            value={values.loginValues.password}
                            autoComplete="off"
                            onChange={handleChange("password", "login")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleClickShowPassword("login")}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showLoginPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </form>
                </FormControl>
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={handleLogin}
                >
                    Login
                     </Button>
            </TabPanel>

            <TabPanel value={tabNumber} index={1}>
                <TextField
                    className={classes.textField}
                    label="Email"
                    value={values.signupValues.email}
                    onChange={handleChange("email", "signup")}
                />
                <FormControl className={classes.textField}>
                    <form autoComplete="off">
                        <InputLabel htmlFor="signup-password">Password</InputLabel>
                        <Input
                            id="signup-password"
                            // inputProps={inputProp}
                            type={showSignupPassword ? 'text' : 'password'}
                            value={values.signupValues.password}
                            autoComplete="off"
                            onChange={handleChange("password")}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showSignupPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </form>
                </FormControl>
                <Button
                    variant="contained"
                    className={classes.button}
                    disabled={loading}
                    onClick={handleSignup}
                >
                    Signup
                      </Button>
            </TabPanel>
        </div>
    );

    return (
        <Modal
            open={props.registerModalState.type === "OPEN" ? true : false}
            onClose={() => props.toggleRegisterModalState("CLOSE")}
        >
            {modalBody}
        </Modal>
    );
}

const mapStateToProps = state => ({
    registerModalState: state.toggleRegisterModalState
});


export default connect(mapStateToProps, { toggleRegisterModalState })(RegisterModal);

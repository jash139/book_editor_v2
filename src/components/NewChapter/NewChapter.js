import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import EditorJS from "react-editor-js";

import "./NewChapter.css";

import StarRateIcon from "@material-ui/icons/StarRate";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TextField, useMediaQuery } from "@material-ui/core";

import NewChapterNavBar from "../NewChapterNavBar/NewChapterNavBar";

import themeColors from "../../constants/themeColors";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        margin: "auto",
        width: "90%",
    },
    rightToggleDiv: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: "0 2rem 2rem 0",
        position: "absolute",
        top: "50%",
        left: 0,
        width: "2rem",
        height: "4rem",
        "&:hover": {
            cursor: "pointer",
        },
    },
    rightIcon: {
        color: themeColors.red,
        fontSize: "2.5rem",
        paddingTop: "0.75rem",
        marginLeft: "-0.5rem",
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    drawerPaper: {
        position: "relative",
        color: themeColors.black,
        backgroundColor: "transparent",
        [theme.breakpoints.up("sm")]: {
            height: "80vh",
        },
        overflowY: "auto",
        width: drawerWidth,
        '&::-webkit-scrollbar': {
            width: "1.5rem",
        },
        '&::-webkit-scrollbar-thumb': {
            border: "0.5rem solid rgba(0, 0, 0, 0)",
            backgroundClip: "padding-box",
            width: "0.5rem",
            background: "rgba(0, 0, 0, 0.15)",
            borderRadius: "1rem",
        }
    },
    coverDiv: {
        position: "relative",
        margin: "3rem 0",
    },
    cover: {
        height: "13.35rem",
        width: "10rem",
    },
    coverBorder: {
        border: "4px solid " + themeColors.red,
        height: "13.35rem",
        width: "10rem",
        position: "absolute",
        top: "0.5rem",
        left: "0.5rem",
    },
    bookName: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.8rem",
        margin: "0 0 0.5rem",
    },
    author: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1.1rem",
        fontWeight: 600,
        margin: "0.5rem 0 2rem",
    },
    separator1: {
        backgroundColor: themeColors.grey,
        height: "1px",
        width: "8rem",
    },
    separator2: {
        backgroundColor: themeColors.grey,
        height: "1px",
        margin: "0.3rem 0",
        width: "4rem",
    },
    ratingDiv: {
        display: "flex",
        alignItems: "center",
    },
    rating: {
        color: themeColors.black,
        fontFamily: "'Playfair Display', serif",
        fontSize: "0.9rem",
        fontWeight: 600,
        margin: 0,
    },
    rateIcon: {
        color: themeColors.red,
    },
    genre: {
        color: themeColors.black,
        fontFamily: "'Playfair Display', serif",
        fontSize: "0.9rem",
        fontWeight: 600,
        margin: 0,
    },
    content: {
        flexGrow: 1,
        padding: "0 1rem",
        height: "80vh",
        overflowY: "auto",
        '&::-webkit-scrollbar': {
            width: "1.5rem",
        },
        '&::-webkit-scrollbar-thumb': {
            border: "0.5rem solid rgba(0, 0, 0, 0)",
            backgroundClip: "padding-box",
            width: "0.5rem",
            background: "rgba(0, 0, 0, 0.15)",
            borderRadius: "1rem",
        }
    },
    editor: {
        borderRadius: 3,
        border: "1px solid " + themeColors.black,
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 400,
        height: "60vh",
        overflowY: "scroll",
        width: "100%",
        '&::-webkit-scrollbar': {
            width: "1.5rem",
        },
        '&::-webkit-scrollbar-thumb': {
            border: "0.5rem solid rgba(0, 0, 0, 0)",
            backgroundClip: "padding-box",
            width: "0.5rem",
            background: "rgba(0, 0, 0, 0.15)",
            borderRadius: "1rem",
        }
    },
    chapterNameTextField: {
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
    chapterNameinput: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.5rem",
        margin: "1.5rem 0",
    },
}));

function NewChapter(props) {
    const instanceRef = useRef(null);
    let data;
    const [chapter, setChapter] = useState();
    const bookId = props.match.params.bookId;
    async function handleSave() {
        const savedData = await instanceRef.current.save()
    }

    const { window } = props;

    const classes = useStyles();
    const theme = useTheme();
    const lgView = useMediaQuery(theme.breakpoints.up("sm"));

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ margin: lgView ? 0 : "0 2rem" }}>
            <div className={classes.coverDiv}>
                <img className={classes.cover} src="https://images.unsplash.com/photo-1545239351-cefa43af60f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className={classes.coverBorder} />
            </div>
            <h1 className={classes.bookName}>Coffee a Day</h1>
            <div className={classes.separator1} />
            <h2 className={classes.author}>J. K. Bowling</h2>
            <div className={classes.ratingDiv}>
                <h3 className={classes.rating}>8.5 / 10</h3>
                <StarRateIcon className={classes.rateIcon} />
            </div>
            <div className={classes.separator2} />
            <h3 className={classes.genre}>Fiction</h3>
        </div>
    );

    const handleChange = (event) => {

    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <NewChapterNavBar />
            {
                !lgView && !mobileOpen &&
                <div className={classes.rightToggleDiv} onClick={handleDrawerToggle}>
                    <ChevronRightRoundedIcon className={classes.rightIcon} />
                </div>
            }
            <div className={classes.root}>
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaperLight,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <TextField
                        className={classes.chapterNameTextField}
                        value={"Chapter 3: Lorem ipsum"}
                        fullWidth
                        //   onChange={handleChange}
                        InputProps={{
                            className: classes.chapterNameinput,
                        }}
                        variant="outlined"
                    />
                    <EditorJS
                        holder="chapter-editor"
                        // instanceRef={(instance) => (instanceRef.current = instance)}
                        onChange={(e) => setChapter(data)}
                        data={data}
                        placeholder="Once upon a time..."
                    >
                        <div
                            id="chapter-editor"
                            className={classes.editor}
                        />
                    </EditorJS>
                </main>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    readModeType: state.toggleReadMode
});


export default connect(mapStateToProps)(NewChapter);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router";

import StarRateIcon from "@material-ui/icons/StarRate";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, ListItem, useMediaQuery } from "@material-ui/core";

import ReadNavBar from "../ReadNavBar/ReadNavBar";

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
        backgroundColor: "white",
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
        minHeight: "13.35rem",
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

    chapterHeading: {
        color: themeColors.red,
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.8rem",
        margin: "1.5rem 0",
        textAlign: "center",
    },
    chapterListHeading: {
        color: themeColors.black,
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.5rem",
        margin: "3rem 0 0.5rem 0",
    },
    activeChapter: {
        color: themeColors.red,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.5,
        margin: "0.2rem 0",
    },
    chapter: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        margin: "0.2rem 0",
    },
    chapterContent: {
        color: themeColors.black,
        fontFamily: "'Poppins', sans-serif",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 2,
    },
}));

function Read(props) {
    const { window } = props;

    const classes = useStyles();
    const theme = useTheme();
    const lgView = useMediaQuery(theme.breakpoints.up("sm"));

    const [mobileOpen, setMobileOpen] = useState(false);
    const chapterNumber = props.match.params.chapterNumber;
    const bookId = props.match.params.bookId;
    const history = useHistory();

    const defaultValues = {
        bookCoverUrl: "",
        genres: [],
        summary: "",
        title: "",
        userId: ""
    };
    const [book, setBook] = useState(defaultValues);
    const [chapter, setChapter] = useState({
        chapterNumber: "",
        content: [],
        title: ""
    });


    useEffect(() => {
        setChapter(props.chapters[parseInt(chapterNumber) - 1]);
        axios.get(process.env.REACT_APP_BACKEND_HOST_URL + "/books/" + bookId)
            .then(res => setBook(res.data))
            .catch(error => console.log(error));
    }, [props.match.params.chapterNumber]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const getGenre = () => {
        if (book.genres.length) {
            return book.genres[0];
        } else {
            return "-";
        }
    };

    const handleChangeChapter = (chNumber) => {
        history.push("/read/" + bookId + "/" + chNumber);
    };

    const getChapterList = () => {
        const chapterList = props.chapters.map((chapter) =>
            <ListItem button style={{ borderRadius: "3px" }} key={chapter._id} onClick={() => handleChangeChapter(chapter.chapterNumber)}>
                <p
                    className={parseInt(chapter.chapterNumber) === parseInt(chapterNumber) ? classes.activeChapter : classes.chapter}>
                    {`Chapter ${chapter.chapterNumber}: ${chapter.title}`}
                </p>
            </ListItem>
        );
        return (
            <List>
                {chapterList}
            </List>
        );
    };

    const getChapterContent = () => {
        const stringToHtml = (originalStr) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(originalStr, 'text/html');
            return doc.body.innerHTML;
        };
        const blocks = chapter.content;
        if (document.getElementById("chapter-content")) {
            document.getElementById("chapter-content").innerHTML = "";
            blocks.forEach(block => document.getElementById("chapter-content").innerHTML += `<p class=${classes.chapterContent}>${stringToHtml(block.data.text)}</p>`);
        }
    };

    const drawer = (
        <div style={{ margin: lgView ? 0 : "0 2rem" }}>
            <div className={classes.coverDiv}>
                <img className={classes.cover} src={book.bookCoverUrl} alt={book.title} />
                <div className={classes.coverBorder} />
            </div>
            <h1 className={classes.bookName}>{book.title}</h1>
            <div className={classes.separator1} />
            <h2 className={classes.author}>{book.userName}</h2>
            <div className={classes.ratingDiv}>
                <h3 className={classes.rating}>8.5 / 10</h3>
                <StarRateIcon className={classes.rateIcon} />
            </div>
            <div className={classes.separator2} />
            <h3 className={classes.genre}>{getGenre()}</h3>
            <h1 className={classes.chapterListHeading}>Chapters</h1>

            {getChapterList()}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            <ReadNavBar />
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
                                paper: classes.drawerPaper,
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
                    <h2 className={classes.chapterHeading}>{`Chapter ${chapterNumber}: ${chapter.title}`}</h2>
                    <div id="chapter-content" />
                    {getChapterContent()}
                </main>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    readModeType: state.toggleReadMode,
    chapters: state.getBookChapters
});


export default connect(mapStateToProps)(Read);

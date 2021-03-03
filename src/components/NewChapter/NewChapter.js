import React from 'react';

import "./NewChapter.css";

import EditorJS from '@editorjs/editorjs';

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Grid, useMediaQuery } from '@material-ui/core';

import themeColors from '../../constants/themeColors';

import BigHeading from '../BigHeading/BigHeading';
import BookCover from '../BookCover/BookCover';

const drawerWidth = 260;

const editor = new EditorJS({
    placeholder: "Once upon a time . . ."
});

const useStyles = makeStyles((theme) => ({

    rightToggleDiv: {
        position: "absolute",
        top: "50%",
        left: 0,
        backgroundColor: themeColors.darkSkin,
        opacity: 0.6,
        width: "2rem",
        height: "4rem",
        borderRadius: "0 2rem 2rem 0",
        "&:hover": {
            cursor: "pointer",
        },
    },
    rightIcon: {
        color: themeColors.bg,
        fontSize: "2.5rem",
        paddingTop: "0.75rem",
        marginLeft: "-0.5rem",
    },


    newChapter: {
        display: "flex",
        margin: "auto",
        maxWidth: "1500px",
        padding: "0 1rem",
    },
    navBar: {
        display: "flex",
        alignItems: "center",
        paddingTop: "1rem",
    },
    outlineButton: {
        borderRadius: 0,
        border: "1.5px solid " + themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        marginLeft: "auto",
        padding: "0.2px 0",
        textTransform: "none",
        width: "8rem",
    },


    themeSwitch: {
        marginLeft: "auto",
    },
    root: {
        display: 'flex',
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
        backgroundColor: themeColors.bg,
        [theme.breakpoints.up("sm")]: {
            height: "85vh",
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

    author: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.6rem",
        fontWeight: 500,
        letterSpacing: "1px",
        marginBottom: "0.8rem",
    },
    divider: {
        backgroundColor: themeColors.darkGrey,
        height: "0.1rem",
        width: "10rem",
    },
    title: {
        fontFamily: "'Cormorant', serif",
        fontSize: "2.5rem",
        fontWeight: 300,
        letterSpacing: "3px",
        margin: "0.5rem 0 1rem",
        marginTop: "0.5rem",
        textTransform: "uppercase",
    },
    chaptersHeading: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.5rem",
    },
    addChapterIcon: {
        color: themeColors.black,
    },



    content: {
        flexGrow: 1,
        padding: "0 0 1rem 1rem",
    },

    chapterHeading: {
        color: themeColors.darkSkin,
        fontFamily: "'Cormorant', serif",
        fontSize: "2rem",
        fontWeight: 600,
        marginTop: 0,
    },

    editor: {
        backgroundColor: themeColors.bgDark,
        border: "1.5px solid " + themeColors.lightGrey,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        height: "80vh",
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

    resetButton: {
        borderRadius: 0,
        border: "1px solid " + themeColors.black,
        color: themeColors.black,
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        margin: "1.5rem 1rem 1rem 0",
        textTransform: "none",
        width: "6.5rem",
    },
    saveButton: {
        backgroundColor: themeColors.lightSkin,
        borderRadius: 0,
        boxShadow: "none",
        fontFamily: "'Cormorant', serif",
        fontSize: "1.2rem",
        fontWeight: 600,
        margin: "1.5rem 0 1rem 1rem",
        textTransform: "none",
        width: "6.5rem",
        "&:hover": {
            backgroundColor: themeColors.lightSkin,
            boxShadow: "none",
        }
    },

}));

function NewChapter(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const lgView = useMediaQuery(theme.breakpoints.up("sm"));

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const handleNewChapter = () => {
        handleSaveChapter(); // save the chapter and add new one
    };

    const handleSaveChapter = () => {
        editor.save().then((outputData) => {
            const content = outputData.blocks;
            const chapter = {
                bookId: "Test book Id",
                title: "title",
                content,
                chapterNumber: 1
            };
            console.log(process.env.REACT_APP_BACKEND_HOST_URL);
            console.log(chapter);
            console.log("Chapter content: ", content)
        }).catch((error) => {
            console.log("Saving failed: ", error)
        });
    };

    const drawer = (
        <div style={{ marginLeft: "1rem" }}>
            <BookCover />
            <h2 className={classes.author}>J. K. Rowling</h2>
            <div className={classes.divider} />
            <h1 className={classes.title}>Harry Potter</h1>
            <h3 className={classes.chaptersHeading}>Chapters<IconButton onClick={handleNewChapter}><AddRoundedIcon className={classes.addChapterIcon} /></IconButton></h3>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <React.Fragment>
            {
                !lgView && !mobileOpen &&
                <div className={classes.rightToggleDiv} onClick={handleDrawerToggle}>
                    <ChevronRightRoundedIcon className={classes.rightIcon} />
                </div>
            }

            <div className={classes.newChapter}>
                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.navBar}>
                            <IconButton>
                            </IconButton>
                            <Button variant="outlined" className={classes.outlineButton}>Logout</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <BigHeading heading="Write" />
                    </Grid>
                    <Grid item>
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
                    </Grid>
                    <Grid item xs>
                        <main className={classes.content}>
                            <h2 className={classes.chapterHeading}>Chapter 3: Lorem ipsum</h2>

                            <div id="editorjs" className={classes.editor} />

                            <Grid container justify="flex-end">
                                <Button variant="outlined" className={classes.resetButton}>Reset</Button>
                                <Button variant="contained" className={classes.saveButton} onClick={handleSaveChapter}>Save</Button>
                            </Grid>

                        </main>
                    </Grid>
                </Grid>

            </div>
        </React.Fragment>
    );
}

export default NewChapter;

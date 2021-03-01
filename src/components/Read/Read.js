import React from 'react';

import { connect } from 'react-redux';

import StarRateIcon from '@material-ui/icons/StarRate';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, useMediaQuery } from '@material-ui/core';

import BackIcon from '../Icons/BackIcon';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import BookCover from '../BookCover/BookCover';

import themeColors from '../../constants/themeColors';

const drawerWidth = 260;


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


    read: {
        backgroundColor: themeColors.black,
        color: themeColors.lightGrey,
        minHeight: "100vh",
        minWidth: "100%",
        overflowX: "hidden",
    },
    readContent: {
        display: "flex",
        margin: "auto",
        maxWidth: "1500px",
    },
    navBar: {
        display: "flex",
        alignItems: "center",
        paddingTop: "1rem",
    },
    themeSwitch: {
        marginLeft: "auto",
        marginRight: "1rem",
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
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    drawerPaperLight: {
        position: "relative",
        color: themeColors.black,
        backgroundColor: themeColors.bg,
        [theme.breakpoints.up("sm")]: {
            height: "75vh",
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
    drawerPaperDark: {
        position: "relative",
        color: themeColors.lightGrey,
        backgroundColor: themeColors.black,
        [theme.breakpoints.up("sm")]: {
            height: "75vh",
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

    rating: {
        alignContent: "center",
        display: "flex",
    },
    bookRating: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.3rem",
        fontWeight: 600,
        letterSpacing: "2px",
        margin: "10px 0 2px",
    },
    starIcon: {
        color: themeColors.lightSkin,
        fontSize: "1.7rem",
        padding: "8px 2px 0",
    },
    ratingDivider: {
        backgroundColor: themeColors.lightGrey,
        height: "1.5px",
        width: "6rem",
    },
    bookGenre: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.4rem",
        fontWeight: 600,
        letterSpacing: "1px",
        margin: "5px 0",
    },


    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        height: "75vh",
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
        color: themeColors.darkSkin,
        fontFamily: "'Cormorant', serif",
        fontSize: "2rem",
        fontWeight: 600,
        marginTop: 0,
    },
    chapter: {
        fontFamily: "'Cormorant', serif",
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.4,
        textAlign: "justify",
    },

}));

function Read(props) {
    const { window } = props;
    const readModeType = props.readModeType.type;

    const classes = useStyles();
    const theme = useTheme();
    const lgView = useMediaQuery(theme.breakpoints.up("sm"));

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ marginLeft: "1rem" }}>
            <BookCover />
            <h2 className={classes.author}>J. K. Rowling</h2>
            <div className={classes.divider} />
            <h1 className={classes.title}>Harry Potter</h1>
            <div className={classes.rating}>
                <h4 className={classes.bookRating}>8.5/10</h4><StarRateIcon className={classes.starIcon} />
            </div>
            <div className={classes.ratingDivider} />
            <h4 className={classes.bookGenre}>Fiction</h4>
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

            <div className={readModeType === "DARK" ? classes.read : null}>
                <div className={classes.readContent}>
                    <Grid container>
                        <Grid item xs={12}>
                            <div className={classes.navBar}>
                                <IconButton>
                                    <BackIcon />
                                </IconButton>
                                <div className={classes.themeSwitch}>
                                    <ToggleSwitch />
                                </div>
                            </div>
                        </Grid>
                        <Grid container>
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
                                                paper: readModeType === "DARK" ? classes.drawerPaperDark : classes.drawerPaperLight,
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
                                                paper: readModeType === "DARK" ? classes.drawerPaperDark : classes.drawerPaperLight,
                                            }}
                                            variant="permanent"
                                            open
                                        >
                                            {drawer}
                                        </Drawer>
                                    </Hidden>
                                </nav>
                                <main className={classes.content}>
                                    <h2 className={classes.chapterHeading}>Chapter 3: Lorem ipsum</h2>
                                    <p className={classes.chapter}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                        donec massa sapien faucibus et molestie ac.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                        donec massa sapien faucibus et molestie ac.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                        donec massa sapien faucibus et molestie ac.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                        donec massa sapien faucibus et molestie ac.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                        donec massa sapien faucibus et molestie ac.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                                        donec massa sapien faucibus et molestie ac.
        </p>
                                </main>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    readModeType: state.toggleReadMode
});


export default connect(mapStateToProps)(Read);

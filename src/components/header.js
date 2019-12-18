import { Link } from "gatsby";
import React, { useState } from "react";
import {
    Drawer, Button, List, ListItem, Divider, Typography, ListItemIcon, AppBar
} from "@material-ui/core";
import {
    Menu as MenuIcon, InfoRounded, AccountCircleRounded, TonalityRounded, CancelRounded, ExploreRounded
} from "@material-ui/icons/";
import colors from "../constants/colors";

const Header = ({ siteTitle }) => {
    const [drawerState, setDrawerState] = useState(false);
    const toggleDrawer = (newState) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerState(newState);
    };
    return (
        <AppBar style={styles.container} elevation="5">
            <Button onClick={toggleDrawer(!drawerState)}>
                <MenuIcon fontSize="large" style={styles.drawerButton} />
            </Button>
            <Drawer anchor="top" open={drawerState} onClose={toggleDrawer()}>
                <div style={styles.listContainer}>
                    <List>
                        <ListItem >
                            <ListItemIcon><ExploreRounded /></ListItemIcon>
                            <Link to="/" style={styles.inActive} activeStyle={styles.active} >
                                <Typography variant="h6" style={styles.listButton}>Home</Typography>
                            </Link>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon><InfoRounded /></ListItemIcon>
                            <Link to="/about" style={styles.inActive} activeStyle={styles.active}>
                                <Typography variant="h6" style={styles.listButton}>About Me</Typography>
                            </Link>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon><AccountCircleRounded /></ListItemIcon>
                            <Link to="/resume" style={styles.inActive} activeStyle={styles.active}>
                                <Typography variant="h6" style={styles.listButton}>Resume</Typography>
                            </Link>
                        </ListItem>
                        <ListItem >
                            <ListItemIcon><TonalityRounded /></ListItemIcon>
                            <Link to="/contacts" style={styles.inActive} activeStyle={styles.active}>
                                <Typography variant="h6" style={styles.listButton}>Contact</Typography>
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Button onClick={toggleDrawer(!drawerState)}>
                                <ListItemIcon><CancelRounded /></ListItemIcon>
                                <Typography variant="h7" style={styles.listButton}>Close</Typography>
                            </Button>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <Link to="/" style={styles.inActive} >
                <Typography variant="h6" style={styles.listButton}>{siteTitle}</Typography>
            </Link>
        </AppBar>
    );
};

const styles = {
    active: {
        backgroundColor: colors.sub,
        borderRadius: 50,
        textDecoration: "none",
        width: 150,
        display: "flex",
        justifyContent: "center"
    },
    inActive: {
        backgroundColor: colors.main,
        borderRadius: 50,
        textDecoration: "none",
        width: 150,
        display: "flex",
        justifyContent: "center"
    },
    container: {
        padding: 10,
        backgroundColor: colors.main,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alginItems: "center",
    },
    listContainer: {
        backgroundColor: colors.main
    },
    listButton: {
        color: colors.highlight,
        padding: 10,
    },
    drawerButton: {
        color: colors.highlight
    }
};

export default Header;

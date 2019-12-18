import React from "react";
import {
    Card, CardActions, CardContent, Typography, Button, Paper,
    Box, Grid, List, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core";
import {
    FaReact, FaGithub, FaNode
} from "react-icons/fa";
import { FiGitlab, } from "react-icons/fi";
import {
    IoLogoJavascript
} from "react-icons/io";
import {
    DiSwift, DiVisualstudio, DiAtom,
} from "react-icons/di";
import {
    ChevronRight
} from "@material-ui/icons/";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import colors from "../constants/colors";

// TODO: Add button for MYCV, MY Resume, more tech, more tools, more experience, more side project.

const IndexPage = () => (
    <>
        <Layout class="container">
            <SEO title="Welcome" />
            <Box mb={2}>
                <Paper elevation={5} style={styles.paperIntro}>
                    <Typography variant="h3" >Hello, welcome to my personal site.</Typography>
                </Paper>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <Paper elevation={5} style={styles.paperContent} >
                        <Typography variant="h5" >My name is Hoang and I am a Software Developer.</Typography>
                        <Typography variant="h6">It is my goal to become a Full-Stack Developer.</Typography>
                        <Button size="large" variant="outlined">
                            <Link to="/about" style={styles.buttonLink}>
                                <Typography >More About Me</Typography>
                            </Link>
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper elevation={5} style={styles.paperContent}>
                        <Button size="large" variant="outlined">My CV</Button>
                        <Button size="large" variant="outlined">My Full Resume</Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card elevation={5} style={styles.cardContent}>
                        <CardContent>
                            <Typography variant="h5">Some technologies that I am familiar with</Typography>
                            <IoLogoJavascript style={styles.icon} />
                            <FaNode style={styles.icon} />
                            <FaReact style={styles.icon} />
                            <DiSwift style={styles.icon} />
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="outlined">More technologies</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card elevation={5} style={styles.cardContent}>
                        <CardContent>
                            <Typography variant="h5">Tools that I love to use</Typography>
                            <DiVisualstudio style={styles.icon} />
                            <DiAtom style={styles.icon} />
                            <FiGitlab style={styles.icon} />
                            <FaGithub style={styles.icon} />
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="outlined">More tools</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card elevation={5} style={styles.cardContent}>
                        <CardContent>
                            <Typography variant="h5">As a Software Developer - Kangaroo DMS</Typography>
                            <Typography >A solution of Digital Management System for enterprise.</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="Colabborated with a team of 5 developers to create a full-stack solution for our customer: Kangaroo.vn" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="Comprehend the business model, develop ideas into prototype and finally build a React Native Application for Android and iOS." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="Combine REST api data, Redux Saga, and implement search/sorting algorithm." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="Techs: React, React Native, Redux Saga, REST API." />
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="outlined">More Work Experience</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card elevation={5} style={styles.cardContent}>
                        <CardContent>
                            <Typography variant="h5">Side Project - YouTubeMobile</Typography>
                            <Typography >A simple YouTube viewing app.</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="Simple app for viewing YouTube built with React Native, and YouTube API." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="Play, pause, auto play to YouTube playlist." />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ChevronRight />
                                    </ListItemIcon>
                                    <ListItemText primary="Techs: React, React Native, YouTube API." />
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions>
                            <Button size="large" variant="outlined">More Side Projects</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    </>
);

const styles = {
    paperIntro: {
        backgroundColor: colors.turtleGreen,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 10
    },
    paperContent: {
        backgroundColor: colors.turtleGreen,
        display: "inline-block",
        padding: 10,
    },
    icon: {
        width: 50,
        height: 50,
        margin: 20,
        color: colors.pullmanGreen
    },
    cardContent: {
        backgroundColor: colors.turtleGreen,
        padding: 10,
    },
    buttonLink: {
        textDecoration: "none",
        color: colors.black
    }
};
export default IndexPage;

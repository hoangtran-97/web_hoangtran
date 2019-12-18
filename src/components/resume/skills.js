/* @flow weak */

import React from "react";
import {
    FaReact, FaGithub, FaDocker, FaNode
} from "react-icons/fa";
import { FiGitlab, } from "react-icons/fi";
import {
    IoLogoHtml5, IoLogoJavascript
} from "react-icons/io";
import {
    DiSwift, DiJira, DiVisualstudio, DiMongodb, DiAtom
} from "react-icons/di";
import {
    Paper, Grid, List, ListItem, ListItemText, ListItemIcon,
    Typography
} from "@material-ui/core";
import ChevronRight from "@material-ui/icons/ChevronRight";
import styles from "./styles";

const Skills = () => (
    <>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Paper style={styles.iconContainer}>
                    <Typography variant="h4">Technical skill</Typography>
                    <IoLogoJavascript style={styles.icon} className="card" />
                    <FaNode style={styles.icon} className="card" />
                    <FaReact style={styles.icon} className="card" />
                    <DiSwift style={styles.icon} className="card" />
                    <IoLogoHtml5 style={styles.icon} className="card" />
                    <DiMongodb style={styles.icon} className="card" />
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="JavaScript" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Node.js" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="React / React Native" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Swift" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="HTML5" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="MongoDB" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Express" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Swift" />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper style={styles.iconContainer}>
                    <Typography variant="h4">Tools</Typography>
                    <FaGithub style={styles.icon} className="card" />
                    <FiGitlab style={styles.icon} className="card" />
                    <FaDocker style={styles.icon} className="card" />
                    <DiJira style={styles.icon} className="card" />
                    <DiVisualstudio style={styles.icon} className="card" />
                    <DiAtom style={styles.icon} className="card" />
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="GitHub / GitLab" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Docker" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Jira" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="VSCode" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ChevronRight />
                            </ListItemIcon>
                            <ListItemText primary="Atom" />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
        </Grid>
    </>
);
export default Skills;

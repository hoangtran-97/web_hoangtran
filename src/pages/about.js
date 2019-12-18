import React from "react";

import {
    Paper, Typography, Grid, Divider
} from "@material-ui/core";
import colors from "../constants/colors";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const About = () => (
    <Layout>
        <SEO title="About Me" />
        <div style={styles.container}>
            <div style={styles.imagesContainer}>
                <div style={styles.backGround}>
                    <Image alt="myBackGround" filename="coffee.jpg" style={styles.backGround} />
                </div>
                <div style={{
                    position: "relative",
                    width: "90vw",
                    height: 50
                }}
                >
                    <div style={styles.avatarContainer}>
                        <Image alt="myAvatar" filename="me.jpg" style={styles.avatar} />
                    </div>
                </div>
            </div>
        </div>
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Paper style={styles.rowStyle} elevation={5}>
                    <Typography variant="h4">Who am I?</Typography>
                    <Divider />
                    <Typography variant="h6">A Software Developer with a lot of curiosity.</Typography>
                    <Typography variant="h6">I develop products using React and React Native, I strive to become a Full-Stack/Mobile Developer.</Typography>
                    <Typography variant="h6">I love mobile technology and creating products to make our lives easier.</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={styles.rowStyle} elevation={5}>
                    <Typography variant="h4">More About Me</Typography>
                    <Divider />
                    <Typography variant="h6">I am a student from South-Eastern Finland University of Applied Sciences, XAMK.</Typography>
                    <Typography variant="h6">My degree program is Bachelor of Engineering, Information Technology.</Typography>
                    <Typography variant="h6">I majored in Networking, meaning my studies are related to networking devices, routers, switches, servers, virtualization, IoT,...</Typography>
                    <Typography variant="h6">However, I moved to learn programming to become a Full-Stack developer.</Typography>
                    <Typography variant="h6">
                        For me, it is more engaging, more challenging
                        but more rewarding and it is my dream to build something
                        on my own to improve our daily life.
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={styles.rowStyle} elevation={5}>
                    <Typography variant="h4">My Interests</Typography>
                    <Divider />
                    <Typography variant="h6">
                        <li>Two cups of coffee a day.</li>
                        <li>Mobile and Web programming.</li>
                        <li>Technology, watching them on YouTube or reading about them on Reddit then tinkering around with them.</li>
                        <li>Video Games(Strategy, Puzzle game or anything with a good story)</li>
                        <li>These mobile OSes</li>
                    </Typography>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="meego.jpeg" style={styles.osBackground} />
                    </div>
                    <Typography variant="h6">Meego, the first OS with no button for navigation(that I know of).</Typography>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="symbian.png" style={styles.osBackground} />
                    </div>
                    <Typography variant="h6">My first introduction to a Mobile Operating System.</Typography>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="sailfishos.jpeg" style={styles.osBackground} />
                    </div>
                    <Typography variant="h6">Sailfish OS, the successor of Meego, have the best navigation gestures in mobile OS.</Typography>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="iOS.png" style={styles.osBackground} />
                    </div>
                    <Typography variant="h6">It is intuitive and beautiful.</Typography>
                </Paper>
            </Grid>
        </Grid>
    </Layout >
);
const styles = {
    backGround: {
        width: "90vw",
        height: "50vh",
        borderRadius: 20,
    },
    container: {
        backgroundColor: colors.sub,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 50
    },
    textContainer: {
        maxWidth: "100%",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 50
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: colors.sub,
        borderStyle: "solid",
        borderWidth: 10,
    },
    avatarContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        position: "absolute",
        top: -100,
        left: "50%",
        marginLeft: -100
    },
    imagesContainer: {
        position: "relative",
        marginBottom: 60
    },
    osBackground: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    osBackgroundContainer: {
        width: 150,
        height: 150,
        margin: 10,
    },
    rowStyle: {
        backgroundColor: colors.main,
        display: "flex",
        padding: 10,
        flexDirection: "column",
    }
};
export default About;

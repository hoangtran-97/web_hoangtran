import React from "react";
import Row from "react-bootstrap/Row";
import { Paper, Typography } from "@material-ui/core";
import colors from "../constants/colors";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const About = () => (
    <Layout>
        <SEO title="About Me" />
        <Row style={styles.container}>
            <Row>
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
            </Row>
            <Row>
                <Paper style={styles.rowStyle} elevation={10}>
                    <Typography align="center" >Who am I?</Typography>
                    <Typography>React/React Native developer with a lot of curiosity.</Typography>
                    <Typography>I develop products using React and React Native, I strive to become a Full-Stack/Mobile Developer.</Typography>
                    <Typography>React introduced me to Declarative Programming, I believe it has forever changed programming.</Typography>
                    <Typography>React, React Native, Flutter, SwiftUI, they are all declarative and I would love to create products with them.</Typography>
                    <Typography>I love mobile technology and creating products to make our lives easier.</Typography>
                </Paper>
                <Paper style={styles.rowStyle} elevation={10}>
                    <Typography align="center">More About Me</Typography>
                    <Typography>I am a student from South-Eastern Finland University of Applied Sciences, XAMK.</Typography>
                    <Typography>My degree program is Bachelor of Engineering, Information Technology.</Typography>
                    <Typography>I majored in Networking, meaning my studies are related to networking devices, routers, switches, servers, virtualization, IoT,...</Typography>
                    <Typography>However, I moved to learn programming to become a Full-Stack developer.</Typography>
                    <Typography>
                        For me, it is more engaging, more challenging
                        but more rewarding and it is my dream to build something
                        on my own to improve peoples daily life,
                        especially a mobile product since the smartphone is a part of our lives nowadays.
                    </Typography>
                </Paper>
                <Paper style={styles.rowStyle} elevation={10}>
                    <Typography align="center">My Interests</Typography>
                    <Typography>
                        <li>Two cups of coffee a day.</li>
                        <li>Mobile and Web programming.</li>
                        <li>Technology, watching them on YouTube or reading about them on Reddit.</li>
                        <li>Video Games(Strategy, Puzzle game or anything with a good story)</li>
                        <li>These mobile OSes</li>
                    </Typography>
                    <Typography style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="meego.jpeg" style={styles.osBackground} />
                    </Typography>
                    <Typography>Meego, the first OS with no button for navigation(that I know of).</Typography>
                    <Typography style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="symbian.png" style={styles.osBackground} />
                    </Typography>
                    <Typography>My first mobile OS.</Typography>
                    <Typography style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="sailfishos.jpeg" style={styles.osBackground} />
                    </Typography>
                    <Typography>Sailfish OS, the successor of Meego.</Typography>
                    <Typography style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="iOS.png" style={styles.osBackground} />
                    </Typography>
                    <Typography>Everyone knows this one.</Typography>
                </Paper>
            </Row>
        </Row>
    </Layout >
);
const styles = {
    backGround: {
        width: "90vw",
        height: "50vh",
        borderRadius: 20,
    },
    container: {
        backgroundColor: colors.pullmanGreen,
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
        borderColor: colors.pullmanGreen,
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
        backgroundColor: colors.turtleGreen,
        display: "flex",
        flexDirection: "column",
        width: "90vw",
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 20,
    }
};
export default About;

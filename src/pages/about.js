import React from "react";
import Row from "react-bootstrap/Row";
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
                <div style={styles.rowStyle}>
                    <h1 align="center" >Who am I?</h1>
                    <h2>React/React Native developer with a lot of curiosity.</h2>
                    <p>I develop products using React and React Native, I strive to become a Full-Stack/Mobile Developer.</p>
                    <p>React introduced me to Declarative Programming, I believe it has forever changed programming.</p>
                    <p>React, React Native, Flutter, SwiftUI, they are all declarative and I would love to create products with them.</p>
                    <p>I love mobile technology and creating products to make our lives easier.</p>
                </div>
                <div style={styles.rowStyle}>
                    <h1 align="center">More About Me</h1>
                    <p>I am a student from South-Eastern Finland University of Applied Sciences, XAMK.</p>
                    <p>My degree program is Bachelor of Engineering, Information Technology.</p>
                    <p>I majored in Networking, meaning my studies are related to networking devices, routers, switches, servers, virtualization, IoT,...</p>
                    <p>However, I moved to learn programming to become a Full-Stack developer.</p>
                    <p>
                        For me, it is more engaging, more challenging
                        but more rewarding and it is my dream to build something
                        on my own to improve peoples daily life,
                        especially a mobile product since the smartphone is a part of our lives nowadays.
                    </p>
                </div>
                <div style={styles.rowStyle}>
                    <h1 align="center">My Interests</h1>
                    <ul>
                        <li>Two cups of coffee a day.</li>
                        <li>Mobile and Web programming.</li>
                        <li>Technology, watching them on YouTube or reading about them on Reddit.</li>
                        <li>Video Games(Strategy, Puzzle game or anything with a good story)</li>
                        <li>These mobile OSes</li>
                    </ul>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="meego.jpeg" style={styles.osBackground} />
                    </div>
                    <p>Meego, the first OS with no button for navigation(that I know of).</p>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="symbian.png" style={styles.osBackground} />
                    </div>
                    <p>My first mobile OS.</p>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="sailfishos.jpeg" style={styles.osBackground} />
                    </div>
                    <p>Sailfish OS, the successor of Meego.</p>
                    <div style={styles.osBackgroundContainer}>
                        <Image alt="OS" filename="iOS.png" style={styles.osBackground} />
                    </div>
                    <p>Everyone knows this one.</p>
                </div>
            </Row>
        </Row>
    </Layout>
);
const styles = {
    backGround: {
        width: "90vw",
        height: "50vh",
        borderRadius: 20,
    },
    container: {
        backgroundColor: colors.sonicSilver,
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
        borderColor: colors.sonicSilver,
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
        backgroundColor: colors.silverSand,
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

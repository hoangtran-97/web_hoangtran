import React, {Fragment} from "react";
import colors from "../constants/colors";
import Content from "../components/content";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

const About = () => (
    <Layout>
        <SEO title="About Me"/>
        <div style={styles.container}>
            <div style={styles.imagesContainer}>
                <div style={styles.backGround}>
                    <Image alt="myBackGround" filename="backGround.jpg" style={styles.backGround}/>
                </div>
                <div style={styles.avatarContainer}>
                    <Image alt="myAvatar" filename="me.jpg" style={styles.avatar}/>
                </div>
            </div>
            <div style={styles.textContainer}>
                <div style={styles.textSection}>
                    <h1 align="center">About Me</h1>
                    <p>
    My name is Hoang,
                        <br/>
    I am a student from South Eastern University of Applied Sciences, XAMK.
                        <br/>
    My degree program is Bacheclor of Engineering, Information Technology.
                        <br/>
    I majored in Networking, meaning my studies are related to networking devices, routers, switches, servers, virtualization, IoT,...
                        <br/>
    However, after 3 years of hardworking and earning various Cisco and MTA certificates, I find networking is not my cup of tea.
                        <br/>
    Instead, I moved to learn programming on my own full time, for me it is more engaging,
    more rewarding and its been my dream to build something on my own to improve peoples daily live,
    especially a mobile product since smartphone is a part of our lives nowadays.
                    </p>
                </div>
                <div style={styles.textSection}>
                    <h1 align="center">My Interest</h1>
                </div>
                <div style={styles.textSection}>
                    <h1 align="center">Lets Connect</h1>
                </div>
            </div>
        </div>
    </Layout>
);
const styles = {
    backGround: {
        width: 900,
        height: 500,
        borderRadius: 20
    },
    container: {
        backgroundColor: colors.sonicSilver,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20
    },
    textContainer: {
        maxWidth: "100%",
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
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
        top: "80%",
        left: "40%"
    },
    imagesContainer: {
        position: "relative",
        marginBottom: 100,
    },
    textSection: {
        width: "30%",
        backgroundColor: "green"
    },
};
export default About;

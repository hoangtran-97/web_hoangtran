import React, {Fragment} from "react";
import colors from "../constants/colors";
import Content from "../components/content";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import WhoAmI from "../components/whoAmI";
import MoreMe from "../components/moreMe";
import MyInterests from "../components/myInterests";

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
            <WhoAmI />
            <div style={styles.textContainer}>
                <MoreMe />
                <MyInterests />
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
        top: "80%",
        left: "40%"
    },
    imagesContainer: {
        position: "relative",
        marginBottom: 100,
    },
    textSection: {
        width: "30%",
    },
    osBackgroundContainer: {
        width: 150,
        height: 150,

    },
    osBackground: {
        borderRadius: 50,
        width: 100,
        height: 100,

    }
};
export default About;

import React from "react";
import {
    FiMail,
    FiGithub,
    FiFacebook,
    FiLinkedin,
    FiPhoneCall
} from "react-icons/fi";
import { Paper } from "@material-ui/core";
import colors from "../constants/colors";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Projects = () => (
    <Layout>
        <SEO title="Contacts" />
        <div style={styles.container}>
            <Paper style={styles.textSection} elevation={5}>
                <h1 align="center" style={styles.text}>Let&apos;s Connect</h1>
                <div>
                    <a
                        href="mailto:hoangtranxamk@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.anchor}
                    >
                        <FiMail style={styles.icon} />
                        hoangtranxamk@gmail.com
                    </a>
                    <a
                        href="https://github.com/hoangtran-97"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.anchor}
                    >
                        <FiGithub style={styles.icon} />
                        GitHub
                    </a>
                    <a
                        href="https://www.facebook.com/vuHoangTran97"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.anchor}
                    >
                        <FiFacebook style={styles.icon} />
                        Facebook
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hoangtranxamk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.anchor}
                    >
                        <FiLinkedin style={styles.icon} />
                        LinkedIn
                    </a>
                    <a
                        href="tel:+358 46 845 2553"
                        style={styles.anchor}
                    >
                        <FiPhoneCall style={styles.icon} />
                        +358 46 845 2553
                    </a>
                </div>
            </Paper>
        </div>
    </Layout>
);
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "93vh",
        backgroundColor: colors.sub
    },
    textSection: {
        display: "inline-block",
        backgroundColor: colors.main,
        padding: 50
    },
    icon: {
        width: 50,
        height: 50,
        margin: 20,
        color: colors.text
    },
    anchor: {
        display: "flex", alignItems: "center", color: colors.text
    },
    text: {
        color: colors.text
    }
};
export default Projects;

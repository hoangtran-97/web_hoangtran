/* @flow weak */

import React from "react";
import {
    FiMail,
    FiGithub,
    FiFacebook,
    FiLinkedin,
    FiPhoneCall
} from "react-icons/fi";
import colors from "../constants/colors";

const LetsConnect = () => (
    <div style={styles.textSection}>
        <h1 align="center">Lets Connect</h1>
        <div>
            <a
                href="mailto:hoangtranxamk@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.anchor}
            >
                <FiMail style={styles.icon}/>
                hoangtranxamk@gmail.com
            </a>
            <a
                href="https://github.com/hoangtran-97"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.anchor}
            >
                <FiGithub style={styles.icon}/>
                GitHub
            </a>
            <a
                href="https://www.facebook.com/vuHoangTran97"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.anchor}
            >
                <FiFacebook style={styles.icon}/>
                Facebook
            </a>
            <a
                href="https://www.linkedin.com/in/hoangtranxamk/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.anchor}
            >
                <FiLinkedin style={styles.icon}/>
                LinkedIn
            </a>
            <a
                href="tel:+358 46 845 2553"
                style={styles.anchor}
            >
                <FiPhoneCall style={styles.icon}/>
                +358 46 845 2553
            </a>
        </div>
    </div>
);

export default LetsConnect;

const styles = {
    textSection: {
        width: "60%",
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10
    },
    icon: {
        width: 50,
        height: 50,
        margin: 20,
        color: colors.gunMetal
    },
    anchor: {
        display: "flex", alignItems: "center"
    }
};

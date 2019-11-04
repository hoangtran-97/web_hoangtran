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
        <a
            href="mailto:hoangtranxamk@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FiMail style={styles.icon}/>
        </a>
        <a
            href="https://github.com/hoangtran-97"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FiGithub style={styles.icon}/>
        </a>
        <a
            href="https://www.facebook.com/vuHoangTran97"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FiFacebook style={styles.icon}/>
        </a>
        <a
            href="https://www.linkedin.com/in/hoangtranxamk/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FiLinkedin style={styles.icon}/>
        </a>
        <a href="tel:+358 46 845 2553">
            <FiPhoneCall style={styles.icon}/>
        </a>
    </div>
);

export default LetsConnect;

const styles = {
    textSection: {
        width: "30%",
        minWidth: 300,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    icon: {
        width: 50,
        height: 50,
        margin: 20,
        color: colors.gunMetal
    }
};

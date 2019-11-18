/* @flow weak */

import React, { useState } from "react";
import { FaReact, FaGithub, FaDocker } from "react-icons/fa";
import { FiGitlab, } from "react-icons/fi";
import {
    IoLogoHtml5, IoLogoCss3, IoLogoJavascript
} from "react-icons/io";
import {
    DiSwift, DiJira, DiVisualstudio, DiAtom, DiBootstrap
} from "react-icons/di";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import colors from "../../constants/colors";

const TechStack = () => {
    const [collapse, setCollapse] = useState(false);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        paddingTop: 20,
        margin: 10,
        height: collapse ? 0 : 650,
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    });
    return (
        <>
            <div
                style={styles.button}
                onClick={() => {
                    setCollapse(!collapse);
                }}
                onKeyPress={() => {
                    setCollapse(!collapse);
                }}
                role="button"
                tabIndex={0}
            >
                {!collapse
                    ? (<MdIndeterminateCheckBox style={styles.buttonIcon} />)
                    : (<MdAddBox style={styles.buttonIcon} />)}
                My Tech Stack
            </div>
            <animated.div
                style={animation}
            >

                {!collapse
                    ? (
                        <div>
                            <div>
                                <IoLogoHtml5 style={styles.icon} />
                                <IoLogoCss3 style={styles.icon} />
                                <DiBootstrap style={styles.icon} />
                                <IoLogoJavascript style={styles.icon} />
                                <FaReact style={styles.icon} />
                                <DiSwift style={styles.icon} />
                            </div>
                            <h3 align="center">Tools I am familiar with:</h3>
                            <div>
                                <FaGithub style={styles.icon} />
                                <FiGitlab style={styles.icon} />
                                <DiJira style={styles.icon} />
                                <FaDocker style={styles.icon} />
                                <DiVisualstudio style={styles.icon} />
                                <DiAtom style={styles.icon} />
                            </div>
                            <h3 align="center">Also worked with:</h3>
                            <ul>
                                <li>Postman</li>
                                <li>Realm Databases</li>
                                <li>Proto.io</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                    ) : null}

            </animated.div>
        </>
    );
};
export default TechStack;

const styles = {
    icon: {
        width: 50,
        height: 50,
        margin: 20,
        color: colors.silverSand
    },
    button: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: 35,
        fontWeight: "600",
        width: "100vw"
    },
    buttonIcon: {
        width: 30,
        height: 30,
        color: colors.silverSand,
        margin: 20
    }
};

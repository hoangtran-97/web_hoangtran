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
import styles from "./styles";

const TechStack = () => {
    const [collapse, setCollapse] = useState(true);
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
                    ? (<MdIndeterminateCheckBox style={styles.buttonIconBlack} />)
                    : (<MdAddBox style={styles.buttonIconBlack} />)}
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
                            <h3 align="center" style={styles.text}>Tools I am familiar with:</h3>
                            <div>
                                <FaGithub style={styles.icon} />
                                <FiGitlab style={styles.icon} />
                                <DiJira style={styles.icon} />
                                <FaDocker style={styles.icon} />
                                <DiVisualstudio style={styles.icon} />
                                <DiAtom style={styles.icon} />
                            </div>
                            <h3 align="center" style={styles.text}>Also worked with:</h3>
                            <ul style={styles.text}>
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

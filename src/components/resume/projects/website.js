import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import {
    animated, useSpring
} from "react-spring";
import * as easings from "d3-ease";
import styles from "../styles";

const Website = () => {
    const [collapse, setCollapse] = useState(false);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 630,
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    });
    return (
        <>
            <div
                style={styles.buttonSection}
                onClick={() => {
                    setCollapse(!collapse);
                }}
                onKeyPress={() => {
                    setCollapse(!collapse);
                }}
                role="button"
                tabIndex="-2"
            >
                {!collapse
                    ? (<MdIndeterminateCheckBox style={styles.buttonIcon} />)
                    : (<MdAddBox style={styles.buttonIcon} />)}
                Personal Website
            </div>
            <animated.div
                style={animation}
            >
                {!collapse
                    ? (
                        <div style={styles.subContainer}>
                            <p>It is this website, built to showcase my skills and projects so far.</p>
                            <ul>
                                Technologies used:
                                <li>
                                    <span style={styles.bold}>React</span>
                                    , I attemped to do all the styling using just inline styling, all the values are JS objects,
                                    I have not been sucessful in making the site responsive though, so it is not mobile friendly yet!
                                </li>
                                <li>
                                    Create-React-App, Gatsby, Next.js, I decided to go with
                                    <span style={styles.bold}> Gatsby </span>
                                    since it is the best option for a
                                    portfolio-static site and to leverage its Image and Link API.
                                </li>
                                <li>
                                    <span style={styles.bold}>React-Icons </span>
                                    is used to included high quality icons and ES6 import feature.
                                    <span style={styles.bold}>React-Spring </span>
                                    is used in conjuction with d3-ease to create beautiful and smooth animations.
                                </li>
                            </ul>
                        </div>
                    ) : null}
            </animated.div>
        </>
    );
};
export default Website;

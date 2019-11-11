/* @flow weak */

import React, {useState} from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import colors from "../constants/colors";
import dogeRun from "../gif/runDoge.gif";

const Projects = () => {
    const [collapse, setCollapse] = useState(false);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 100 : 1000,
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    });
    return (
        <animated.div
            style={animation}
        >
            <div
                style={styles.button}
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
                    ? (<MdIndeterminateCheckBox style={styles.buttonIcon}/>)
                    : (<MdAddBox style={styles.buttonIcon}/>)}
                Projects
            </div>
            { !collapse
                ? (
                    <div>
                        <h3 >Personal Website</h3>
                        <p>It is this website, built to showcase my skills and projects so far.</p>
                        <ul>
                            Technologies used:
                            <li>
                                <span style={styles.bold}>React</span>
                                , I attemped to do all the styling using just inline styling, all the values are JS objects,
                                <br />
                                I have not been sucessful in making the site responsive though, so it is not mobile friendly yet!
                            </li>
                            <li>
                                Create-React-App, Gatsby, Next.js, I decided to go with
                                <span style={styles.bold}> Gatsby </span>
                                since it is the best option for a
                                <br />
                                portfolio-static site and to leverage its Image and Link API.
                            </li>
                            <li>
                                <span style={styles.bold}>React-Icons </span>
                                is used to included high quality icons and ES6 import feature.
                                <br />
                                <span style={styles.bold}>React-Spring </span>
                                is used in conjuction with d3-ease to create beautiful and smooth animations.
                            </li>
                        </ul>
                        <h3>As React Native Developer at GMO RUNSYSTEM</h3>
                        <h4>
                            Jaccs(
                            <a
                                href="jaccs.co.jp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                            jaccs.co.jp
                            </a>
                            )
                        </h4>
                        <p>The aplication for our client at Jaccs,the main features are:</p>
                        <ul>
                            <li>Tracking employee&apos;s statistic and KPI.</li>
                            <li>Location, scheduling and check-in service for employees.</li>
                            <li>Client&apos;s databases for quick lookup and categorizing.</li>
                        </ul>
                        <p>Responsibilities:</p>
                        <ul>
                            <li>Create UI from application&apos;s prototype.</li>
                            <li>Loading modal, accessible application wide using redux.</li>
                            <li>Sending and accepting REST requests/responses to build the app&apos;s notification service.</li>
                            <li>Accept REST reponse, store them in RealmDB to show client&apos;s data.</li>
                            <li>Build search/lookup/filter funtion for application.</li>
                            <li>Working with map libary, drawing map markers.</li>
                            <li>Working with Microsoft&apos;s AppCenter for automated and OTA application update.</li>
                            <li>Handle bugs and feature requests post release.</li>
                        </ul>
                        <h3>Yakult</h3>
                        <h3>DMS</h3>
                        <h3>Moments</h3>
                        <h3>Daily Reminder</h3>
                        <h3>Daily Reminder</h3>
                        <h3>Run Doge Run</h3>
                        <img
                            src={dogeRun}
                            alt="Otter dancing with a fish"
                            width="500"
                        />
                    </div>
                ) : null}
        </animated.div>
    );
};
export default Projects;

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
        fontSize: 40,
        width: 500,
        fontWeight: "600"
    },
    buttonIcon: {
        width: 30,
        height: 30,
        color: colors.silverSand,
        margin: 20
    },
    bold: {fontWeight: "700"}
};

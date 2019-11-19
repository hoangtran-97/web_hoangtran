import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import Website from "./website";
import Jaccs from "./jaccs";
import Yakult from "./yakult";
import DMS from "./dms";
import styles from "../styles";
import Moments from "./moments";
import DailyReminder from "./dailyReminder";
import RunDogeRun from "./runDogeRun";

const Projects = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 4000,
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
                tabIndex="-2"
            >
                {!collapse
                    ? (<MdIndeterminateCheckBox style={styles.buttonIcon} />)
                    : (<MdAddBox style={styles.buttonIcon} />)}
                Projects
            </div>
            <animated.div
                style={animation}
            >
                {!collapse
                    ? (
                        <>
                            <Website />
                            <h3 align="center">As React Native Developer at GMO RUNSYSTEM</h3>
                            <DMS />
                            <Jaccs />
                            <Yakult />
                            <h3 align="center">Personal Projects</h3>
                            <Moments />
                            <DailyReminder />
                            <RunDogeRun />

                        </>
                    ) : null}
            </animated.div>
        </>
    );
};
export default Projects;

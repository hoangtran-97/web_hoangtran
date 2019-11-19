import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "../styles";
import dogeRun from "../../../gif/runDoge.gif";

const RunDogeRun = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 600,
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
                Run Doge Run (Game)
            </div>
            <animated.div
                style={animation}
            >

                {!collapse
                    ? (
                        <div style={styles.subContainer}>
                            <h4>My first SCRUM and Game project.</h4>
                            <p>Made with a team of three and Click Team Fusion.</p>
                            <p>As project manager, I learn many valuable lessons about project managements and teamwork and game making.</p>
                            <img
                                style={styles.runDogeRun}
                                src={dogeRun}
                                alt="a running doge"
                                width="500"
                            />
                            <a
                                href="https://run-doge-run.netlify.com/"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                Give Doge a visit!
                            </a>
                        </div>
                    ) : null}
            </animated.div>
        </>
    );
};
export default RunDogeRun;

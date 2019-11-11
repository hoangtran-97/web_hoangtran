import React, {useState} from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import colors from "../../constants/colors";
import dogeRun from "../../gif/runDoge.gif";
import Website from "./website";
import Jaccs from "./jaccs";
import Yakult from "./yakult";

const Projects = () => {
    const [collapse, setCollapse] = useState(false);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 100 : 2000,
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
                        <Website />
                        <h3>As React Native Developer at GMO RUNSYSTEM</h3>
                        <Jaccs />
                        <Yakult />
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

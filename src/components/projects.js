/* @flow weak */

import React, {useState} from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import colors from "../constants/colors";

const TechStack = () => {
    const [collapse, setCollapse] = useState(false);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 100 : 600
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
                        Projects
                    </div>
                ) : null}

        </animated.div>
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
        fontSize: 40,
        width: 500,
        fontWeight: "600"
    },
    buttonIcon: {
        width: 30,
        height: 30,
        color: colors.silverSand,
        margin: 20
    }
};

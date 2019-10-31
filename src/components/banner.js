/* @flow weak */

import React, {useState} from "react";
import { animated, useSpring } from "react-spring";
import colors from "../constants/colors";
import doge from "../images/doge.png";
import Image from "./image";

const getRandomPoint = (elementWidth, elementHeight) => {
    const x = `${(Math.random() * 60).toFixed(0)}%`;
    const y = `${(Math.random() * 75).toFixed(0)}%`;
    const array = [x, y];
    return array;
};
const Banner = () => {
    const [position, setPosition] = useState(["40%", "15%"]);
    const animation = useSpring({
        position: "absolute",
        top: position[0],
        right: position[1],
    });
    return (
        <div style={styles.banner}>
            <div>
                <h1 style={styles.text}>Well hello there!</h1>
                <h3 style={styles.text}>I guess you must be very interested in my work to be here</h3>
                <h3 style={styles.text}>Click on Doge if you want a face reveal!!!</h3>
                <h3 style={styles.text}>Or you can do what you came here for</h3>
                <h3 style={styles.text}>And checkout the above sections</h3>
            </div>
            <animated.div
                style={animation}
                onMouseEnter={() => {
                    setPosition(getRandomPoint());
                }}
                onMouseLeave={() => {
                    console.log(getRandomPoint());
                }}
            >
                <Image />
            </animated.div>
        </div>
    );
};
const styles = {
    banner: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: colors.sonicSilver,
        justifyContent: "flex-start",
        alignItems: "center",
        height: "95vh",
        paddingLeft: "15%"
    },
    text: {
        color: colors.gunMetal
    }
};
export default Banner;

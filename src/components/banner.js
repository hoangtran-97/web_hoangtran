/* @flow weak */

import React, {useState} from "react";
import { animated, useSpring } from "react-spring";
import colors from "../constants/colors";
import doge from "../images/doge.png";
import Image from "./image";

const Banner = () => {
    const [position, setPosition] = useState([60, 15]);
    // const [dogeRun, setDogeRun] = useState(true);
    const [title, setTitle] = useState("Well hello there!");
    const [gameStarted, setGame] = useState(false);
    const animation = useSpring({
        position: "absolute",
        top: `${position[0]}%`,
        right: `${position[1]}%`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 400,
        height: 400,
        flexDirection: "column"
    });
    const getRandomPoint = (elementWidth, elementHeight) => {
        const y = randomRange(0, 60);
        const x = randomRange(0, 70);
        const array = [y, x];
        return array;
    };
    const randomRange = (min, max) => {
        Math.ceil(min);
        Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return (
        <div style={styles.banner}>
            <div>
                <h1 style={styles.text}>{title}</h1>
                <h3 style={styles.text}>{!gameStarted ? "I guess you must be very interested in my work to be here" : "He loves his PRIVACY."}</h3>
                <h3 style={styles.text}>{!gameStarted ? "Click on Doge if you want a face reveal!!!" : "You are gonna have to catch him,"}</h3>
                <h3 style={styles.text}>{!gameStarted ? "Or you can do what you came here for" : "Click on him,"}</h3>
                <h3 style={styles.text}>{!gameStarted ? "And checkout the above sections" : "Then I'm sure he'll stop"}</h3>
            </div>
            <animated.div
                style={animation}
                onMouseEnter={() => {
                    gameStarted
                        ? setPosition(getRandomPoint())
                        : (
                            setGame(true),
                            setPosition(getRandomPoint()),
                            setTitle("Yeah I forgot to mention,"));
                }}
                onClick={() => {
                    setGame(false);
                    setPosition([40, 15]);
                }}
                onMouseLeave={() => { console.log(getRandomPoint()); }}
            >
                {
                    gameStarted
                        ? (<div style={styles.dogeComment}>Get the hell away from me!</div>)
                        : null
                }

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
    },
    dogeComment: {
        backgroundColor: colors.silverSand,
        width: 300,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        position: "absolute",
        top: -35,
        left: 200
    }
};
export default Banner;

/* @flow weak */

import React, {useState} from "react";
import { animated, useSpring } from "react-spring";
import colors from "../constants/colors";
import doge from "../images/doge.png";
import Image from "./image";

const getRandomPoint = (elementWidth, elementHeight) => {
    const x = `${(Math.random() * 70).toFixed(0)}%`;
    const y = `${(Math.random() * 80).toFixed(0)}%`;
    const array = [x, y];
    return array;
};
const Banner = () => {
    const [position, setPosition] = useState(["40%", "15%"]);
    const [dogeRun, setDogeRun] = useState(true);
    const [title, setTitle] = useState("Well hello there!");
    const [gameStarted, setGame] = useState(false);
    const animation = useSpring({
        position: "absolute",
        top: position[0],
        right: position[1],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 450,
        height: 450,
        flexDirection: "column"
    });
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
                    dogeRun
                        ? setPosition(getRandomPoint()) : null;
                    gameStarted
                        ? null
                        : (
                            setGame(true),
                            setTitle("Yeah I forgot to mention,"));
                }}
                onClick={() => {
                    setDogeRun(false);
                    setPosition(["40%", "15%"]);
                }}
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

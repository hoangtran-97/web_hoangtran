/* @flow weak */

import React, {useState} from "react";
import { animated, useSpring } from "react-spring";
import colors from "../constants/colors";
import doge from "../images/doge.png";
import Image from "./image";

const Banner = () => {
    const youCanDoIt = [
        "You can do it!",
        "Get him!!!",
        "He's laughing at you!!!",
        "C'on!!!!!",
        "Such wow, much effort",
        "Go doge go.....errrr.......wrong team!",
        "You're one click away from success!!"
    ];
    const [motivational, setMotivational] = useState("...");
    const [position, setPosition] = useState([40, 15, 0]);
    const [dogeRun, setDogeRun] = useState(true);
    const [title, setTitle] = useState("Well hello there!");
    const [gameStarted, setGame] = useState(false);
    const animation = useSpring({
        position: "absolute",
        top: `${position[0]}%`,
        right: `${position[1]}%`,
        width: 400,
        height: 400,
        transform: gameStarted ? `rotateZ(${position[2]}deg)` : "rotateZ(0deg)"
    });
    const getRandomPoint = (elementWidth, elementHeight) => {
        const y = randomRange(0, 60);
        const x = randomRange(0, 70);
        const z = randomRange(0, 180);
        const array = [y, x, z];
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

                {gameStarted ? (<h2 style={styles.motivational}>{motivational}</h2>) : null}
                <h1 style={styles.text}>{title}</h1>
                <h3 style={styles.text}>{!gameStarted ? "I guess you must be very interested in my work to be here" : "He loves his PRIVACY."}</h3>
                <h3 style={styles.text}>{!gameStarted ? "Click on DOGE if you want a face reveal!!!" : "You are gonna have to catch him,"}</h3>
                <h3 style={styles.text}>{!gameStarted ? "Or you can do what you came here for" : "Click on him,"}</h3>
                <h3 style={styles.text}>{!gameStarted ? "And checkout the above sections" : "Then I'm sure he'll stop"}</h3>
            </div>
            <animated.div
                style={animation}
                onMouseEnter={() => {
                    dogeRun ? (
                        setGame(true),
                        setPosition(getRandomPoint()),
                        setTitle("Yeah I forgot to mention,")) : null;
                }}
                onMouseLeave={() => {
                    const randomMotivational = youCanDoIt[Math.floor(Math.random() * youCanDoIt.length)];
                    setMotivational(randomMotivational);
                }}
                onClick={() => {
                    setGame(false);
                    setDogeRun(false);
                    setPosition([40, 15]);
                    setTitle("He won't run again,");
                }}
            >
                {
                    gameStarted
                        ? (<div style={styles.dogeComment}>Get the hell away from me!</div>)
                        : null
                }
                {
                    !gameStarted && !dogeRun
                        ? (<div style={styles.dogeComment}>My face is in the About Me section.</div>)
                        : null
                }
                <Image alt="The doge" filename="doge.png" />
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
        top: -40,
        left: 200
    },
    motivational: {
        color: colors.gunMetal,
        marginBottom: 150,
        backgroundColor: colors.silverSand,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        padding: 10,
    },
    textHighlight: {
        fontWeight: "700"
    }
};
export default Banner;

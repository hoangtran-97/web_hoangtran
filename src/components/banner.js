
import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import colors from "../constants/colors";
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
    const getRandomPoint = () => {
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
        <Row style={styles.banner}>
            <Col xs={8}>
                {gameStarted ? (<h2 style={styles.motivational}>{motivational}</h2>) : null}
                <h1 style={styles.text}>{title}</h1>
                <h3 style={styles.text}>{!gameStarted ? "I am sorry but this page " : "He loves his PRIVACY."}</h3>
                <h3 style={styles.text}>{!gameStarted ? "only works well in a desktop browser." : "You are gonna have to catch him,"}</h3>
                <h3 style={styles.text}>{!gameStarted ? "Click on Doge there" : "Click on him,"}</h3>
                <h3 style={styles.text}>{!gameStarted ? "To find out why." : "Then I'm sure he'll stop"}</h3>
                <h3 style={styles.text}>(and for a face reveal)</h3>
            </Col>
            <Col xs={4}>
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
                    <Image alt="The doge" filename="doge.png" style={styles.imagesRound} />
                </animated.div>
            </Col>
        </Row>
    );
};
const styles = {
    banner: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: colors.pullmanGreen,
        justifyContent: "flex-start",
        alignItems: "center",
        height: "95vh",
        paddingLeft: "15%"
    },
    text: {
        color: colors.silverSand
    },
    dogeComment: {
        color: colors.gunMetal,
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
    imagesRound: {
        borderRadius: "50%",
        width: 150,
        height: 150,
        boxShadow: "10px 5px 10px black"
    },
};
export default Banner;

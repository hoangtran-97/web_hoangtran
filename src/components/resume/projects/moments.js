import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "../styles";
import Image from "../../image";

const Moments = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 1600,
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
                Moments (React Native)
            </div>
            <animated.div
                style={animation}
            >

                {!collapse
                    ? (
                        <div style={styles.subContainer}>
                            <h4>This is my very first personal project.</h4>
                            <p>I learned a lot about React Native, Development practices, Designing in general.</p>
                            <div style={styles.imageMomentsSplash}>
                                <Image
                                    alt="Moments_Splash"
                                    filename="R_Moments_Splash.png"
                                    style={styles.imageMomentsSplash}
                                />
                            </div>
                            <p>The idea is to have a simple app, to snap one memorable moment at a time, and have it represent as a simple timeline.</p>
                            <div style={styles.imageMomentsMain}>
                                <Image
                                    alt="Moments_Main"
                                    filename="R_Moments_Main.png"
                                    style={styles.imageMomentsMain}
                                />
                            </div>
                        </div>
                    ) : null}
            </animated.div>
        </>
    );
};
export default Moments;

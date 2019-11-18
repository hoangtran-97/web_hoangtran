/* @flow weak */

import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import colors from "../../constants/colors";

const CV = () => {
    const [collapse, setCollapse] = useState(false);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 900,
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
                tabIndex="-1"
            >
                {!collapse
                    ? (<MdIndeterminateCheckBox style={styles.buttonIcon} />)
                    : (<MdAddBox style={styles.buttonIcon} />)}
                CV
            </div>
            <animated.div
                style={animation}
            >
                {!collapse
                    ? (
                        <div style={styles.container}>
                            <div style={styles.buttonDownload}>
                                <a
                                    href="https://drive.google.com/uc?export=download&id=1FBAb2dy9e3gVUE_ecZpzl2SCrljQ6iKX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.buttonDownloadText}
                                >
                                    Download
                                </a>
                            </div>
                            <iframe
                                src="https://drive.google.com/file/d/1FBAb2dy9e3gVUE_ecZpzl2SCrljQ6iKX/preview?usp=embed_googleplus"
                                allowFullScreen
                                title="CV"
                                style={styles.pdf}
                            />
                        </div>
                    ) : null}

            </animated.div>
        </>
    );
};
export default CV;

const styles = {
    button: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: 35,
        fontWeight: "600",
        width: "100vw"
    },
    buttonIcon: {
        width: 30,
        height: 30,
        color: colors.silverSand,
        margin: 20
    },
    container: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    buttonDownload: {
        backgroundColor: colors.silverSand,
        width: 150,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        margin: 10
    },
    pdf: {
        height: 700, width: "70vw"
    },
    buttonDownloadText: { textDecoration: "none", color: colors.gunMetal, fontWeight: "700" }
};

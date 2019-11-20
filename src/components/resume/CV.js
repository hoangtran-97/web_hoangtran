/* @flow weak */

import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "./styles";

const CV = () => {
    const [collapse, setCollapse] = useState(true);
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
                    ? (<MdIndeterminateCheckBox style={styles.buttonIconBlack} />)
                    : (<MdAddBox style={styles.buttonIconBlack} />)}
                CV
            </div>
            <animated.div
                style={animation}
            >
                {!collapse
                    ? (
                        <div style={styles.cvContainer}>
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

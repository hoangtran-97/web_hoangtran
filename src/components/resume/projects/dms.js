import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "../styles";

const DMS = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 600,
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
                DMS
            </div>
            <animated.div
                style={animation}
            >

                {!collapse
                    ? (
                        <div style={styles.subContainer}>
                            <p>The aplication for our client at kangaroo.vn, the main features are:</p>
                            <ul>
                                <li>Handle total client&apos;s bussiness infrastructure.</li>
                                <li>Built for multiple level of coporate employees.</li>
                                <li>Present datas in easily accesible manners with sort/search features</li>
                            </ul>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Built applications prototype conforming with client&apos;s expectations.</li>
                                <li>Sole mobile developer.</li>
                                <li>Create UI from application&apos;s prototype.</li>
                                <li>use REST request and Redux Saga to receive and store informations.</li>
                                <li>Sort data by dateTime/name/type/searchQuery.</li>
                            </ul>
                        </div>
                    ) : null}
            </animated.div>
        </>
    );
};
export default DMS;

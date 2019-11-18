import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "../styles";

const Yakult = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 650,
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
                Yakult
            </div>
            <animated.div
                style={animation}
            >
                {!collapse
                    ? (
                        <div style={styles.subContainer}>
                            <p>The aplication for our client at Yakult.co.uk, the main features are:</p>
                            <ul>
                                <li>Tracking employee&apos;s statistic and KPI.</li>
                                <li>Location, scheduling and check-in service for employees.</li>
                                <li>Delivery checking and storage inventory for daily deliveries.</li>
                                <li>Client&apos;s databases for quick lookup and categorizing.</li>
                            </ul>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Create UI from application&apos;s prototype.</li>
                                <li>Loading modal, accessible application wide using redux.</li>
                                <li>Sending and accepting REST requests/responses to build the app&apos;s notification service.</li>
                                <li>Handle bugs and feature requests post release.</li>
                            </ul>
                        </div>
                    ) : null}
            </animated.div>
        </>
    );
};
export default Yakult;

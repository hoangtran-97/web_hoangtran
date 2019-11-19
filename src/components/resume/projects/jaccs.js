import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "../styles";

const Jaccs = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 800,
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
                Jaccs
            </div>
            <animated.div
                style={animation}
            >
                {!collapse
                    ? (
                        <div style={styles.subContainer}>
                            <h4>The aplication for our client at Jaccs.com.vn, the main features are:</h4>
                            <ul>
                                <li>Tracking employee&apos;s statistic and KPI.</li>
                                <li>Location, scheduling and check-in service for employees.</li>
                                <li>Client&apos;s databases for quick lookup and categorizing.</li>
                            </ul>
                            <h4>Responsibilities:</h4>
                            <ul>
                                <li>Create UI from application&apos;s prototype.</li>
                                <li>Loading modal, accessible application wide using redux.</li>
                                <li>Sending and accepting REST requests/responses to build the app&apos;s notification service.</li>
                                <li>Accept REST reponse, store them in RealmDB to show client&apos;s data.</li>
                                <li>Build search/lookup/filter funtion for application.</li>
                                <li>Working with Google map libary, drawing map markers.</li>
                                <li>Working with Microsoft&apos;s AppCenter for automated and OTA application update.</li>
                                <li>Handle bugs and feature requests post release.</li>
                            </ul>
                        </div>
                    ) : null}
            </animated.div>
        </>
    );
};
export default Jaccs;

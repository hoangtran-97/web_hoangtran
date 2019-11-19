import React, { useState } from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "../styles";
import Image from "../../image";

const DailyReminder = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 0 : 2050,
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
                DailyReminder (React Native && SwiftUI)
            </div>
            <animated.div
                style={animation}
            >

                {!collapse
                    ? (
                        <div style={styles.subContainer}>
                            <h4>My ambituous second project.</h4>
                            <p>I love working with React Native, it introduced me to the world of Declarative Programming. However, it is without its problems.</p>
                            <p>
                                This small idea of a note taking app came up,
                                it is nothing earth shattering in terms of functionality but I want to compare how easy it is to implement it in SwiftUI.
                            </p>
                            <div style={styles.imageDailyReminderMain}>
                                <Image
                                    alt="R_DailyReminder_Main"
                                    filename="R_DailyReminder_Main.png"
                                    style={styles.imageDailyReminderMain}
                                />
                            </div>
                            <p>The above view is achived within a few hours in React Native, it only took one hour to do it in SwiftUI.</p>
                            <div style={styles.imageDailyReminderSwipe}>
                                <Image
                                    alt="R_DailyReminder_Swipe"
                                    filename="R_DailyReminder_Swipe.png"
                                    style={styles.imageDailyReminderSwipe}
                                />
                            </div>
                            <p>Swipe action? React Native: painfull with libaries, SwiftUI: 5 mins implementation.</p>
                            <div style={styles.imageDailyReminderNew}>
                                <Image
                                    alt="R_DailyReminder_New"
                                    filename="R_DailyReminder_New.png"
                                    style={styles.imageDailyReminderNew}
                                />
                            </div>
                            <p>Features: adding reminders by name and time, color coded, repeat by day of week.</p>
                        </div>
                    ) : null}
            </animated.div>
        </>
    );
};
export default DailyReminder;

import React, {useState} from "react";
import { MdAddBox, MdIndeterminateCheckBox } from "react-icons/md";
import { animated, useSpring } from "react-spring";
import * as easings from "d3-ease";
import styles from "./styles";

const Yakult = () => {
    const [collapse, setCollapse] = useState(true);
    const animation = useSpring({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: 10,
        paddingTop: 20,
        height: collapse ? 100 : 750,
        width: 700,
        config: {
            duration: 300,
            easing: easings.easeCubic
        }
    });
    return (
        <animated.div
            style={animation}
        >
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
                    ? (<MdIndeterminateCheckBox style={styles.buttonIcon}/>)
                    : (<MdAddBox style={styles.buttonIcon}/>)}
                <a
                    href="https://www.yakult.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Yakult
                </a>

            </div>
            { !collapse
                ? (
                    <div>
                        <p>The aplication for our client at Jaccs,the main features are:</p>
                        <ul>
                            <li>Tracking employee&apos;s statistic and KPI.</li>
                            <li>Location, scheduling and check-in service for employees.</li>
                            <li>Client&apos;s databases for quick lookup and categorizing.</li>
                        </ul>
                        <p>Responsibilities:</p>
                        <ul>
                            <li>Create UI from application&apos;s prototype.</li>
                            <li>Loading modal, accessible application wide using redux.</li>
                            <li>Sending and accepting REST requests/responses to build the app&apos;s notification service.</li>
                            <li>Accept REST reponse, store them in RealmDB to show client&apos;s data.</li>
                            <li>Build search/lookup/filter funtion for application.</li>
                            <li>Working with map libary, drawing map markers.</li>
                            <li>Working with Microsoft&apos;s AppCenter for automated and OTA application update.</li>
                            <li>Handle bugs and feature requests post release.</li>
                        </ul>
                    </div>
                ) : null}
        </animated.div>
    );
};
export default Yakult;

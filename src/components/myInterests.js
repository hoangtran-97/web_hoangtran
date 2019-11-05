/* @flow weak */

import React from "react";
import Image from "./image";

const MyInterests = () => (
    <div style={styles.textSection}>
        <h1 align="center">My Interests</h1>
        <ul>
            <li>Two cups of coffee a day.</li>
            <li>Mobile and Web programming.</li>
            <li>Technology, watching them on YouTube or reading about them on Reddit.</li>
            <li>Video Games(Strategy, Puzzle game or anything with a good story)</li>
            <li>
                These mobile OSes
            </li>
        </ul>
        <div style={styles.divRow}>
            <div style={styles.divCol}>
                <div style={styles.osBackgroundContainer}>
                    <Image alt="OS" filename="meego.jpeg" style={styles.osBackground}/>
                    <p>Meego, the first OS with no button for navigation(that I know of).</p>
                </div>

                <div style={styles.osBackgroundContainer}>
                    <Image alt="OS" filename="symbian.png" style={styles.osBackground}/>
                    <p>My first mobile OS.</p>
                </div>

            </div>
            <div style={styles.divCol}>
                <div style={styles.osBackgroundContainer}>
                    <Image alt="OS" filename="sailfishos.jpeg" style={styles.osBackground}/>
                    <p>Sailfish OS, the successor of Meego.</p>
                </div>

                <div style={styles.osBackgroundContainer}>
                    <Image alt="OS" filename="iOS.png" style={styles.osBackground}/>
                    <p>Everyone knows this one.</p>
                </div>

            </div>
        </div>
    </div>

);

export default MyInterests;

const styles = {
    textSection: {
        width: "60%",
        minWidth: 300,
        margin: 10
    },
    osBackgroundContainer: {
        width: 170,
        height: 170,
        margin: 50,
    },
    osBackground: {
        borderRadius: 50,
        width: 100,
        height: 100,
    },
    divRow: {
        display: "flex",
        flexDirection: "row",
    },
    divCol: {
        display: "flex", flexDirection: "column",
    }
};

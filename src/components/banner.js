/* @flow weak */

import React from "react";
import colors from "../constants/colors";
import doge from "../images/doge.png";
import Image from "./image";

const Banner = () => (
    <div style={styles.banner}>
        <div>
            <h1 style={styles.text}>Well hello there!</h1>
            <h3 style={styles.text}>I guess you must be very interested in my work to be here</h3>
            <h3 style={styles.text}>Click on Doge if you want a face reveal!!!</h3>
            <h3 style={styles.text}>Or you can do what you came here for</h3>
            <h3 style={styles.text}>And checkout the above sections</h3>
        </div>
        <Image />
    </div>
);
const styles = {
    banner: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: colors.sonicSilver,
        justifyContent: "space-around",
        alignItems: "center",
        height: "95vh",
    },
    text: {
        color: colors.gunMetal
    }
};
export default Banner;

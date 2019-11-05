/* @flow weak */

import React from "react";


const MoreMe = () => (
    <div style={styles.textSection}>
        <h1 align="center">More About Me</h1>
        <p>I am a student from South-Eastern Finland University of Applied Sciences, XAMK.</p>
        <p>My degree program is Bachelor of Engineering, Information Technology.</p>
        <p>I majored in Networking, meaning my studies are related to networking devices, routers, switches, servers, virtualization, IoT,...</p>
        <p>However, I moved to learn programming to become a Full-Stack developer.</p>
        <p>
                For me, it is more engaging, more challenging
                but more rewarding and it is my dream to build something
                on my own to improve peoples daily life,
                especially a mobile product since the smartphone is a part of our lives nowadays.
        </p>
    </div>
);

export default MoreMe;

const styles = {
    textSection: {
        width: "60%",
        minWidth: 300,
        margin: 10
    },
};

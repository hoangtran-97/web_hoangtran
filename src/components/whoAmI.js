/* @flow weak */

import React, {Fragment} from "react";


const WhoAmI = () => (
    <>
        <h1 align="center" style={styles.h1}>Who am I?</h1>
        <h2>React/React Native developer with a lot of curiosity.</h2>
        <p>I develop products using React and React Native, I strive to become a Full-Stack/Mobile Developer.</p>
        <p>React introduced me to Declarative Programming, I believe it has forever changed programming.</p>
        <p>React, React Native, Flutter, SwiftUI, they are all declarative and I would love to create products with them.</p>
        <p>I love mobile technology and creating products to make our lives easier.</p>
    </>

);

export default WhoAmI;

const styles = {
    h1: {textDecoration: "underline"}
};

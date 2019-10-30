/* @flow weak */

import React from 'react';
import colors from '../constants/colors';
import doge from '../images/doge.png';

const Banner = () => (
    <div style={styles.banner}>
        <p>Hello and welcome to my portfolio site.</p>
        <img
            src={doge}
            alt="This is Doge"
            style={styles.images}
        />
    </div>
);
const styles = {
    images: {
        borderRadius: '50%',
        width: 350,
        height: 350,
        boxShadow: '10px 5px 10px black'
    },
    tab: {
        backgroundColor: 'green'
    },
    banner: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.sonicSilver,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 500
    }
};
export default Banner;

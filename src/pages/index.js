import React from 'react';
import doge from '../images/doge.png';
import colors from '../constants/colors';

const IndexPage = () => {
    console.log('test');
    return (
        <div style={styles.header}>
            <p>Hello and welcome to my portfolio site.</p>
            <img
                src={doge}
                alt="This is Doge"
                style={styles.images}
            />
        </div>
    );
};
const styles = {
    images: {
        borderRadius: '50%',
        width: 350,
        height: 350
    },
    tab: {
        backgroundColor: 'green'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default IndexPage;

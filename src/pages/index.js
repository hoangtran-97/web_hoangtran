import React from "react"
import doge from '../images/doge.png';

const IndexPage = () => (

      <div style={styles.header}>
              <p>Hello and welcome to my portfolio site.</p>
              <img
                  src={doge}
                  alt="This is Doge"
                  style={styles.images}
              />
          </div>
)
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
        flexDirection: 'row'
    }
};

export default IndexPage

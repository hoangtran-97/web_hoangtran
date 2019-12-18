/* @flow weak */

import React from "react";
import {
    Button
} from "@material-ui/core";
import styles from "./styles";

const CV = () => (
    <>

        <div style={styles.cvContainer}>
            <Button style={styles.buttonDownload} >
                <a
                    href="https://drive.google.com/uc?export=download&id=1FBAb2dy9e3gVUE_ecZpzl2SCrljQ6iKX"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.buttonDownloadText}
                >
                    Download
                </a>
            </Button>
            <iframe
                src="https://drive.google.com/file/d/1FBAb2dy9e3gVUE_ecZpzl2SCrljQ6iKX/preview?usp=embed_googleplus"
                allowFullScreen
                title="CV"
                style={styles.pdf}
            />
        </div>

    </>
);
export default CV;

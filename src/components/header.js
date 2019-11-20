import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import colors from "../constants/colors";

const Header = ({ siteTitle }) => (
    <header style={styles.header}>
        <div style={styles.container}>
            <h4>
                <Link to="/" style={styles.h4} activeStyle={styles.active} >
                    {" "}
                    {siteTitle}
                    {" "}
                </Link>
            </h4>
            <p>
                <Link to="/about" style={styles.h4} activeStyle={styles.active}> About Me </Link>
            </p>

            <p>
                <Link to="/resume" style={styles.h4} activeStyle={styles.active}> Resume </Link>
            </p>
            <p>
                <Link to="/contacts" style={styles.h4} activeStyle={styles.active}> Contact </Link>
            </p>
        </div>
    </header>
);
Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "",
};
const styles = {
    active: {
        backgroundColor: colors.pullmanGreen, borderRadius: 50, padding: 10
    },
    h4: {
        color: "white",
        textDecoration: "none",
        padding: 5
    },
    container: {
        margin: "auto",
        maxWidth: 1080,
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    header: {
        background: colors.turtleGreen,
        marginBottom: 50
    }
};

export default Header;

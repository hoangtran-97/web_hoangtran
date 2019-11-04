import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import colors from "../constants/colors";

const Header = ({ siteTitle }) => (
    <header
        style={styles.header}
    >
        <div
            style={styles.container}
        >
            <h1>
                <Link to="/" style={styles.h4} activeStyle={styles.active} >
                    {" "}
                    {siteTitle}
                    {" "}
                </Link>
            </h1>
            <h4>
                <Link to="/about" style={styles.h4} activeStyle={styles.active}> About Me </Link>
            </h4>
            <h4>
                <Link to="/skills" style={styles.h4} activeStyle={styles.active}> Skills </Link>
            </h4>
            <h4>
                <Link to="/resume" style={styles.h4} activeStyle={styles.active}> Resume </Link>
            </h4>
            <h4>
                <Link to="/projects" style={styles.h4} activeStyle={styles.active}> Projects </Link>
            </h4>
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
    active: {backgroundColor: colors.sonicSilver, borderRadius: 50},
    h4: {
        color: "white",
        textDecoration: "none",
        padding: 10,
    },
    container: {
        margin: "0 auto",
        maxWidth: 1080,
        padding: "1.45rem 1.0875rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    header: {
        background: colors.gunMetal,
    }
};

export default Header;

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import colors from "../constants/colors";

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: colors.gunMetal,
        }}
    >
        <div
            style={styles.container}
        >
            <h1>
                <Link to="/" style={styles.h4} >
                    {" "}
                    {siteTitle}
                    {" "}
                </Link>
            </h1>
            <h4>
                <Link to="/about" style={styles.h4} > About Me </Link>
            </h4>
            <h4>
                <Link to="/skills" style={styles.h4} > Skills </Link>
            </h4>
            <h4>
                <Link to="/resume" style={styles.h4} > Resume </Link>
            </h4>
            <h4>
                <Link to="/projects" style={styles.h4} > Projects </Link>
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
    h4: {
        color: "white",
        textDecoration: "none",
    },
    container: {
        margin: "0 auto",
        maxWidth: 1080,
        padding: "1.45rem 1.0875rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
};

export default Header;

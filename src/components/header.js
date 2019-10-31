import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, {useState} from "react";
import colors from "../constants/colors";

const Header = ({ siteTitle }) => {
    const [activeTab, setActiveTab] = useState([true, false, false, false, false]);
    return (
        <header
            style={{
                background: colors.gunMetal,
            }}
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
};
Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: "",
};
const styles = {
    active: {backgroundColor: colors.sonicSilver, padding: 10, borderRadius: 20},
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

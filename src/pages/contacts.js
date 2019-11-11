import React from "react";
import colors from "../constants/colors";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LetsConnect from "../components/letsConnect";

const Projects = () => (
    <Layout>
        <SEO title="Contacts"/>
        <div style={styles.container}><LetsConnect /></div>
    </Layout>
);
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "93vh",
        backgroundColor: colors.sonicSilver
    }
};
export default Projects;

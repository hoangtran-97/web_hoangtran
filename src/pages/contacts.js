import React, {Fragment} from "react";
import colors from "../constants/colors";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LetsConnect from "../components/letsConnect";

const Projects = () => (
    <Layout>
        <SEO title="Hoang Tran"/>
        <div style={styles.container}><LetsConnect /></div>
    </Layout>
);
const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: colors.sonicSilver
    }
};
export default Projects;

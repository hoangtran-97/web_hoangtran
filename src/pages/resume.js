import React, {Fragment} from "react";
import colors from "../constants/colors";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TechStack from "../components/techStack";

const Resume = () => (
    <Layout>
        <SEO title="Resume"/>
        <div style={styles.container}><TechStack /></div>
    </Layout>
);
const styles = {
    container: {
        backgroundColor: colors.sonicSilver
    }
};
export default Resume;

import React from "react";
import colors from "../constants/colors";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TechStack from "../components/techStack";
import CV from "../components/CV";
import Projects from "../components/projects";

const Resume = () => (
    <Layout>
        <SEO title="Resume"/>
        <div style={styles.container}>
            <TechStack />
            <CV />
            <Projects />
        </div>
    </Layout>
);
const styles = {
    container: {
        backgroundColor: colors.sonicSilver,
    }
};
export default Resume;

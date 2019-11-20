import React from "react";
import Row from "react-bootstrap/Row";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TechStack from "../components/resume/techStack";
import CV from "../components/resume/CV";
import Projects from "../components/resume/projects";
import colors from "../constants/colors";

const Resume = () => (
    <Layout>
        <SEO title="Resume" />
        <Row style={styles.container}>
            <TechStack />
            <CV />
            <Projects />
        </Row>
    </Layout>
);
const styles = {
    container: {
        backgroundColor: colors.pullmanGreen,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }
};
export default Resume;

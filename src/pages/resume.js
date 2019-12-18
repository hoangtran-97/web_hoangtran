import React, { useState } from "react";
import {
    Tabs, Tab, Typography, Box, Grid
} from "@material-ui/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TechStack from "../components/resume/techStack";
import CV from "../components/resume/CV";
import Skills from "../components/resume/skills";
import colors from "../constants/colors";

function TabPanel(props) {
    const {
        children, value, index,
    } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const Resume = () => {
    const [activeTab, setActiveTab] = useState(0);
    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    return (
        <Layout>
            <SEO title="Resume" />
            <Grid>
                <Tabs
                    variant="fullWidth"
                    value={activeTab}
                    onChange={handleChange}
                    style={styles.tabs}
                    TabIndicatorProps={{ style: { background: colors.highlight } }}
                >
                    <Tab label="Skills" />
                    <Tab label="CV" />
                    <Tab label="Projects" />
                </Tabs>
                <TabPanel value={activeTab} index={0}>
                    <Skills />
                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                    <CV />
                </TabPanel>
                <TabPanel value={activeTab} index={2}>
                    Item Three
                </TabPanel>
            </Grid>
        </Layout>
    );
};
const styles = {
    container: {
        backgroundColor: colors.sub,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    tabs: {
        backgroundColor: colors.main
    }
};
export default Resume;

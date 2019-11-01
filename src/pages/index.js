import React from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Welcome"/>
        <Banner />
    </Layout>
);


export default IndexPage;

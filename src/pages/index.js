import React from 'react';
import Content from '../components/content';
import Banner from '../components/banner';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Hoang Tran"/>
        <Banner />
        <Content />
    </Layout>
);


export default IndexPage;

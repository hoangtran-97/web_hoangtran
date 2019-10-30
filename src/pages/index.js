import React from 'react';
import Content from '../components/content';
import Banner from '../components/banner';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
    console.log('test');
    return (
        <Layout>
            <SEO />
            <Banner />
            <Content />
        </Layout>
    );
};


export default IndexPage;

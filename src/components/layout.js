/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import colors from "../constants/colors";
import Header from "./header";
import "./layout.css";


const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <Container>
            <Row>
                <Header siteTitle={data.site.siteMetadata.title} />
            </Row>
            <Row>
                <main>{children}</main>
                <footer style={{backgroundColor: colors.gunMetal, color: "white"}}>
                       ©
                    {" "}
                    {new Date().getFullYear()}
                    , Built with
                    {" "}
                    <a style={{color: "white"}} href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
            </Row>
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

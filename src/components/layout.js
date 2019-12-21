/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Header from "./header";
import "./layout.css";
import colors from "../constants/colors";

const mainTheme = createMuiTheme({
    typography: {
        fontFamily: "Aleo",
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h5: {
            fontWeight: 700
        }
    },
    palette: {
        primary: {
            main: colors.main
        }
    }
});

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
        <ThemeProvider theme={mainTheme}>
            <Container>
                <Header siteTitle={data.site.siteMetadata.title} />
                <div className="spacer" />
                <main>{children}</main>
            </Container>
        </ThemeProvider>

    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

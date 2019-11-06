import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import colors from "../constants/colors";
// source: https://stackoverflow.com/questions/55122752/reusable-gatsby-image-component-with-dynamic-image-sources
const Image = (props) => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
        render={(data) => {
            const image = data.images.edges.find((n) => n.node.relativePath.includes(props.filename));
            if (!image) {
                return null;
            }

            // const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
            return (
                <Img
                    alt={props.alt}
                    fluid={image.node.childImageSharp.fluid}
                    imgStyle={props.style}
                />
            );
        }}
    />
);
export default Image;

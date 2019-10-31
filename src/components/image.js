import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import colors from "../constants/colors";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "doge.png" }) {
        childImageSharp {
            fixed(width: 400, height: 400) {
        ...GatsbyImageSharpFixed
      }
        }
      }
    }
  `);

    return (
        <Img
            fixed={data.placeholderImage.childImageSharp.fixed}
            imgStyle={styles.images}
            alt="The Doge"
        />
    );
};
const styles = {
    images: {
        borderRadius: "50%",
        width: 350,
        height: 350,
        boxShadow: "10px 5px 10px black"
    },
};
export default Image;

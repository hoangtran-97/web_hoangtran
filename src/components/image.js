import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import colors from "../constants/colors";

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

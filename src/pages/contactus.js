import React from 'react';
import Layout from '../components/Layout/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { graphql } from 'gatsby';
import Contact from '../components/Contact/Contact';

// define page query to return optimized image
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ({ data }) => (
  <Layout>
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Contact Us"
        info="We are happy to help in finding the right tour for you "
      ></Banner>
    </StyledHero>
    <Contact />
  </Layout>
);

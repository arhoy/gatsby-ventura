import React from 'react';
import Layout from '../components/Layout/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { graphql } from 'gatsby';
import SEO from '../components/SEO/SEO';

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
    <SEO title="Thank you page" description="Thank you for contacting Ventura Tours Today, We are happy to help you with all your adventure needs" />
    <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Thank you!"
        info="Our Team has received your request. We will contact you shortly"
      ></Banner>
    </StyledHero>
    
  </Layout>
);

import React from 'react';
import Layout from '../components/Layout/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { graphql } from 'gatsby';
import SEO from '../components/SEO/SEO';

// define page query to return optimized image
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = ({data}) => {
  return (
    <Layout>
      <SEO title = "About US"/>
        <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="About Us"
          info="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minima consectetur culpa ullam optio laboriosam officiis "
        >
        </Banner>
      </StyledHero>
    </Layout>
  );
};

export default About;

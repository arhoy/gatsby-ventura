import React from 'react';
import Layout from '../components/Layout/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { graphql } from 'gatsby';
import BlogList from '../components/Blog/BlogList';

// define page query to return optimized image
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
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
        title="Our Blog"
        info="A collection of stories and experiences from our happy customers and tour guides"
      ></Banner>
    </StyledHero>
    <BlogList />
  </Layout>
);

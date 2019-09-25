import React from 'react';
import Layout from '../components/Layout/Layout';
import Tours from '../components/Tours/Tours';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import { graphql } from 'gatsby';
import SEO from '../components/SEO/SEO';

export const getTours = graphql`
  query {
    tours: allContentfulTourExample {
      nodes {
        name
        slug
        tourLength
        price
        country
        images {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 2600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="Explore All Tours" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Amazing Tours"
          info="  Tours starting at $499. From coast to coast, beginner to expert we will help you find your perfect tour. Begin your journey today"
        />
      </StyledHero>

      <Tours tours={data.tours.nodes} />
    </Layout>
  );
};

export default tours;

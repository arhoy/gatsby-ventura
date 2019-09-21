import React from 'react';
import Layout from '../components/Layout/Layout';
import Tours from '../components/Tours/Tours';
import { graphql } from 'gatsby';

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
  }
`;

const tours = ({ data }) => {
  return (
    <Layout>
      <h1>Tours Page</h1>
      <Tours tours={data.tours.nodes} />
    </Layout>
  );
};

export default tours;

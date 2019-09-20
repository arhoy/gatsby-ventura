import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`;

const Headers = () => {
  const {
    site: { siteMetadata: d },
  } = useStaticQuery(getData);

  const { author, title } = d;

  return (
    <div>
      <h1>{author}</h1>
      <h1>{title}</h1>
    </div>
  );
};

export default Headers;

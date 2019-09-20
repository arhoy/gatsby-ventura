import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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

const HeaderStatic = () => {
  return (
    <StaticQuery
      query={getData}
      render={data => (
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
        </header>
      )}
    />
  );
};

export default HeaderStatic;

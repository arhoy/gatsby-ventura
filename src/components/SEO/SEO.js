import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData);
  const {
    siteTitle,
    siteDescription,
    author,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata;

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: 'en' }}>
      <meta name="description" content={description || siteDescription} />
      <meta name="image" content={image} />
    </Helmet>
  );
};

export default SEO;

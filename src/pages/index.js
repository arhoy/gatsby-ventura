import React from 'react';
import Layout from '../components/Layout/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import FeaturedTours from '../components/Home/FeaturedTours';
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

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Explore Tours, Tours for Everyone"
        description="Explore All our adventure Tours. Tours for Adventure seekers and tours for everyone. Go find your tour today!"
      />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Always Exploring"
          info="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minima consectetur culpa ullam optio laboriosam officiis "
        >
          <AniLink fade to="/tours" className="btn-white">
            Explore Tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  );
};

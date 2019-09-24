import React from 'react';
import Tour from '../Tours/Tour';
import { useStaticQuery, graphql } from 'gatsby';
import styles from '../../scss/items.module.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Title from '../StyledComponents/Title';

// get featured tours
const getTours = graphql`
  query {
    featuredTours: allContentfulTourExample(
      filter: { featured: { eq: true } }
    ) {
      nodes {
        name
        price
        slug
        country
        contentful_id
        tourLength
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const res = useStaticQuery(getTours);
  const tours = res.featuredTours.nodes;

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(tour => (
          <Tour key={tour.contentful_id} tour={tour} />
        ))}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  );
};

export default FeaturedTours;

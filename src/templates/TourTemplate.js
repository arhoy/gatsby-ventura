import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import styles from '../scss/template.module.scss';
import Image from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import { Link } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTourExample(slug: { eq: $slug }) {
      name
      price
      country
      tourLength
      startDate(formatString: "ddd MMM do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

const TourTemplate = ({ pageContext, data }) => {
  const { slug } = pageContext;
  const {
    name,
    images,
    description: { description },
    journey,
    price,
    country,
    tourLength,
    startDate,
  } = data.tour;

  console.log(`slug is ${slug}`);
  return (
    <Layout>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {images.map((item, index) => (
              <Image
                key={index}
                fluid={item.fluid}
                alt={name}
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon}></FaMoneyBillWave>
              Starting From ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4> Starts On : {startDate} </h4>
          <h4> Duration : {tourLength} days </h4>
          <p className={styles.description}> {description}</p>
          <h2> Daily Itinerary </h2>
          <ul className={styles.journey}>
            {journey.map(item => (
              <div key={item.id}>{item.day}</div>
            ))}
          </ul>
          <Link to="/tours">View All Tours</Link>
        </div>
      </section>
    </Layout>
  );
};

export default TourTemplate;

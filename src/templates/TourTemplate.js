import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import styles from '../scss/template.module.scss';
import Image from 'gatsby-image';
import { FaMoneyBillWave, FaMap } from 'react-icons/fa';
import { Link } from 'gatsby';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import Day from '../components/SingleTour/Day';

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

  const [mainImage, ...tourImages] = images;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid}>
        <Banner
          title="Chicago River Tour"
          info="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minima consectetur culpa ullam optio laboriosam officiis "
        />
      </StyledHero>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {startDate}</h4>
          <h4>duration : {tourLength} days</h4>
          <p className={styles.description}>{description}</p>

          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => {
              return <Day key={index} day={item.day} info={item.info} />;
            })}
          </div>
          <Link to="/tours" className="btn-primary">
            back to tours
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default TourTemplate;

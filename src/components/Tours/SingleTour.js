import React from 'react';
import { FaMap } from 'react-icons/fa';
import Image from 'gatsby-image';
import styles from '../../scss/tour.module.scss';
import { Link } from 'gatsby';

const SingleTour = ({ tour }) => {
  const { name, price, images, country, slug, tourLength } = tour;
  const mainImage = images[0].fluid;

  return (
    <article>
      <div className={styles.imgContainer}>
        <Image className={styles.img} fluid={mainImage} alt={name} />
        <Link to={`/tours/${slug}`} className={styles.link}>
          Learn More
        </Link>
      </div>
      <div className={styles.footer}>
        <h3> {name} </h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap /> {country}
          </h4>
          <div className={styles.details}>
            <h6>{tourLength} days </h6>
            <h6>starting at ${price} </h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleTour;

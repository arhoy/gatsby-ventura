import React from 'react';
import { FaMap } from 'react-icons/fa';
import Image from 'gatsby-image';
import styles from '../../scss/tour.module.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const SingleTour = ({ tour }) => {
  const { name, price, images, country, slug, tourLength } = tour;
  const mainImage = images[0].fluid;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{tourLength} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleTour;

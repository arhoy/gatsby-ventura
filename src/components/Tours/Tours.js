import React from 'react';
import SingleTour from './SingleTour';
import styles from '../../scss/items.module.scss';

const Tours = ({ tours }) => (
  <section className={styles.tours}>
    <h2>Our Tours</h2>
    <div className={styles.center}>
      {tours.map((tour, i) => (
        <div key={i}>
          <SingleTour tour={tour} />
        </div>
      ))}
    </div>
  </section>
);

export default Tours;

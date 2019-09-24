import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import styles from '../../scss/items.module.scss';

const Tours = ({ tours }) => {
  useEffect(() => {
    document.title = 'The Tours Page';
    setUpdatedTours(['Testing']);
  }, []);
  const [updatedTours, setUpdatedTours] = useState([]);
  return (
    <section className={styles.tours}>
      <h2>Our Tours</h2>
      <div className={styles.center}>
        {tours.map((tour, i) => (
          <div key={i}>
            <Tour tour={tour} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;

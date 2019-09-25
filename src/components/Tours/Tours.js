import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import styles from '../../scss/items.module.scss';
import Title from '../StyledComponents/Title';

const Tours = ({ tours }) => {
  useEffect(() => {
    setUpdatedTours(['Testing']);
  }, []);
  const [updatedTours, setUpdatedTours] = useState([]);
  console.info(updatedTours);
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
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

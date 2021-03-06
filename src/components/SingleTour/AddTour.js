import React from 'react';
import styles from '../../scss/components/SingleTour/AddTour.module.scss';

const AddTour = ({ name, price, id, startDate, src, slug }) => {
  console.info('tour added',slug)
  return (
    <button
      className={`snipcart-add-item ${styles.button}`}
      data-item-id={id}
      data-item-name={name}
      data-item-price={price}
      data-item-startDate={startDate}
      data-item-image={src}
      data-item-url={`https://ventura-gatsby-site-101.netlify.com/tours/${slug}`}
    >
      Add to Cart
    </button>
  );
};

export default AddTour;

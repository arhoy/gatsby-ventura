import React from 'react';
import styles from '../../scss/components/SingleTour/AddTour.module.scss';

const AddTour = ({ name, price, id, startDate, src }) => {
  return (
    <button
      className={`snipcart-add-item ${styles.button}`}
      data-item-id={id}
      data-item-name={name}
      data-item-price={price}
      data-item-startDate={startDate}
      data-item-image={src}
      data-item-url="https://ventura-gatsby-site-101.netflify.com/tours"
    >
      Add to Cart
    </button>
  );
};

export default AddTour;

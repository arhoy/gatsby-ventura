import React from 'react';

const AddTour = ({ name, price, id, startDate, src }) => {
  console.log('Source is', id, name, price, startDate);
  return (
    <button
      class="snipcart-add-item"
      data-item-id={id}
      data-item-name={name}
      data-item-price={price}
      data-item-startDate={startDate}
      data-item-image={src}
      data-item-url="https://ventura-gatsby-site-101.netflify.com/tours"
    >
      Buy Tour
    </button>
  );
};

export default AddTour;

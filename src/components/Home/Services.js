import React from 'react';
import services from '../../components/constants/services';
import styles from '../../scss/services.module.scss';
import Title from '../StyledComponents/Title';

const Services = () => {
  return (
    <section className={styles.services}>
      <Title title="Our" subtitle="Services" />
      <div className={styles.center}>
        {services.map(service => (
          <article key={service.title} className={styles.service}>
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;

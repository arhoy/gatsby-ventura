import React from 'react';
import Title from '../StyledComponents/Title';
import styles from '../../scss/about.module.scss';

import img from '../../images/defaultBcg.jpeg';

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="US" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            beatae placeat doloremque.
          </p>
          <button className = "btn-primary">Read More</button>
        </article>
      </div>
    </section>
  );
};

export default About;

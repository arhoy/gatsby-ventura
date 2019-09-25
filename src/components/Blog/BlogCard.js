import React from 'react';
import Image from 'gatsby-image';
import styles from '../../scss/blog-card.module.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogCard = ({ blog }) => {
  const { slug, title, images, published } = blog;
  console.log('image from BC', images);
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image fluid={images.fluid} className={styles.img} />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}> {published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default BlogCard;

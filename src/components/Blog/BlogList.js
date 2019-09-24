import React from 'react';
import BlogCard from './BlogCard';
import styles from '../../scss/blog.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../StyledComponents/Title';

// get blog post list
const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: title, order: ASC }) {
      nodes {
        createdAt(formatString: "LLLL")
        title
        id: contentful_id
        slug
        published(formatString: "MMMM Do, YYYY")
        title
        image: images {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);
  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blog" />
      <div className={styles.center}>
        {posts.nodes.map(post => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;

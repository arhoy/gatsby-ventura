import React from 'react';
import { graphql } from 'gatsby';
import styles from '../scss/blog.module.scss';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/StyledComponents/Title';
import Layout from '../components/Layout/Layout';

export const query = graphql`
  query getPosts($skip: Int, $limit: Int) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: ASC }
    ) {
      nodes {
        slug
        published(formatString: "MMM Do, YYYY")
        id: contentful_id
        title
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;
const BlogListTemplate = props => {
  const { data } = props;

  return (
    <Layout>
      <section className={styles.center}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.nodes.map(post => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogListTemplate;

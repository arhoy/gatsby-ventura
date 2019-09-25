import React from 'react';
import { graphql } from 'gatsby';
import styles from '../scss/blog.module.scss';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/StyledComponents/Title';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';

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
const BlogListTemplate = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? '/blogs' : `/blogs/${currentPage - 1}`;
  const nextPage = `/blogs/${currentPage + 1}`;
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
      <section className={styles.links}>
        {!isFirst && (
          <Link to={prevPage} className={styles.link}>
            Prev
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/blogs/${i === 0 ? '' : i + 1}`}
            className={
              i + 1 === currentPage
                ? `${styles.link} ${styles.active}`
                : `${styles.link}`
            }
          >
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={nextPage} className={styles.link}>
            Next
          </Link>
        )}
      </section>
    </Layout>
  );
};

export default BlogListTemplate;

import React from 'react';
import { graphql } from 'gatsby';
import styles from '../scss/single-blog.module.scss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout/Layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// run template query
export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMM Do, Y")
      text {
        json
      }
    }
  }
`;

const BlogTemplate = ({ data: { post } }) => {
  const {
    title,
    text: { json },
    published,
  } = post;

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const { file, title } = node.data.target.fields;
        return (
          <div>
            <h3>Gallery</h3>
            <img width="400" src={file['en-US'].url} alt={title} />
          </div>
        );
      },
      'embedded-entry-block': node => {
        const { name, images, description } = node.data.target.fields;
        return (
          <div>
            <h3>{name['en-US']}</h3>
            <img
              width="400"
              src={
                images['en-US'][0].fields.file['en-US'].url ||
                images['en-US'].fields.file['en-US'].url
              }
              alt={description['en-US']}
            />
            <p> {description['en-US']}</p>
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title} </h1>
          <h4> published: {published} </h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>

          <AniLink fade to="/blog" className="btn-primary">
            Return to Blog
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export default BlogTemplate;

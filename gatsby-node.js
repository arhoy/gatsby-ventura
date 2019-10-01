const path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      tours: allContentfulTourExample {
        nodes {
          slug
        }
      }

      posts: allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `);

  // standard tour template
  data.tours.nodes.forEach(tour => {
    createPage({
      path: `tours/${tour.slug}`,
      component: path.resolve('./src/templates/TourTemplate.js'),
      context: {
        slug: tour.slug,
      },
    });
  });
  // standard blog template
  data.posts.nodes.forEach(post => {
    createPage({
      path: `blog/${post.slug}`,
      component: path.resolve('./src/templates/BlogTemplate.js'),
      context: {
        slug: post.slug,
      },
    });
  });
  // blog template w/ pagination
  const posts = data.posts.nodes;
  const postsPerPage = 3;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve('./src/templates/BlogListTemplate.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};

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

  data.tours.nodes.forEach(tour => {
    createPage({
      path: `tours/${tour.slug}`,
      component: path.resolve('./src/templates/TourTemplate.js'),
      context: {
        slug: tour.slug,
      },
    });
  });

  data.posts.nodes.forEach(post => {
    createPage({
      path: `blog/${post.slug}`,
      component: path.resolve('./src/templates/BlogTemplate.js'),
      context: {
        slug: post.slug,
      },
    });
  });
};

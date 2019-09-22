import React from 'react';
import Layout from '../components/Layout/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import { Link } from 'gatsby';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Always Exploring"
        info="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minima consectetur culpa ullam optio laboriosam officiis "
      >
        <Link to="/tours" className="btn-white">
          Explore Tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
);

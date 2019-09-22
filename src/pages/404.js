import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from '../scss/error.module.scss';
import { Link } from 'gatsby';
import Banner from '../components/Banner';

const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner
          title="That is a dead end"
          info="This page has moved or does not exist, please return to previous page"
        >
          <Link className="btn-white" to="/">
            Return to Home Page
          </Link>
        </Banner>
      </header>
    </Layout>
  );
};

export default ErrorPage;

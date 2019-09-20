import React from 'react';
import HeaderHooks from '../examples/HeaderHooks';
import Layout from '../components/Layout/Layout';
import HeaderStatic from '../examples/HeaderStatic';

const Examples = () => {
  return (
    <Layout>
      <h1>Examples here</h1>
      <HeaderHooks />
      <hr />
      <HeaderStatic />
    </Layout>
  );
};

export default Examples;

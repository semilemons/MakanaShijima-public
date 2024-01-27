
import Layout from '../components/layout';
import React from 'react';

import FetchLatestMdOne from '../components/fetchLatestMdOne';

const IndexPage = () => {
  return (
    <Layout>
      <FetchLatestMdOne />
    </Layout>
  );
}

export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>My name is Makana!!</title>
    </>
  );
 };

export default IndexPage;


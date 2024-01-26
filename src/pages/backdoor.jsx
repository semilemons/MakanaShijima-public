import React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout';

export const query = graphql`
  query {
    allSitePage {
      nodes {
        path
      }
    }
  }
`

const AllPathsPage = ({ data }) => (
  <Layout>
    <h1>Welcome to back door!</h1>
    <ul>
      {data.allSitePage.nodes.map((node, index) => (
        <li key={index}>
          <Link to={node.path}>{node.path}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)


export const Head = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>バックドア！！</title>
    </>
  );
 };

export default AllPathsPage

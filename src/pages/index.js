import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout title="トップページ" description="トップページや">
    <h2>Atwood の法則</h2>
    <p>
      JavaScript で書けるアプリケーションは全て、最終的に JavaScript
      で書かれることになっている。
    </p>
    <p>
      Any application that can be written in JavaScript, will eventually be
      written in JavaScript.
    </p>
    <ul>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        return <li><Link to={`${node.slug}`}>{node.title}</Link></li>
      })}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

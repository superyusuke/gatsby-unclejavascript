import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

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
        const date = parse(node.createdAt)
        const formattedDate = format(date, 'YYYY/MM/DD')
        return <li><Link to={`${node.slug}`}>{node.title} {formattedDate}</Link></li>
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
          createdAt
        }
      }
    }
  }
`

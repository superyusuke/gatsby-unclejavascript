import React from 'react'
import { graphql, Link } from 'gatsby'
import 'ress'
import Layout from '../components/layout'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

const IndexPage = ({ data }) => (
  <Layout title="Javascript おじさん.com" description="JavaScript の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript おじさんこと中西が提供します。">
    <ul>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        const date = parse(node.createdAt)
        const formattedDate = format(date, 'YYYY/MM/DD')
        return (
          <li key={node.slug}>
            <Link to={`${node.slug}`}>
              {node.title} {formattedDate} | {node.tags.join(', ')}
            </Link>
          </li>
        )
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
          tags
        }
      }
    }
  }
`

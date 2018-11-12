import React from 'react'
import { graphql, Link } from 'gatsby'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout title="Tag ごとのページ" description="tag ごとのページ">
      <ul>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          const date = parse(node.createdAt)
          const formattedDate = format(date, 'YYYY/MM/DD')
          return (
            <li key={node.slug}>
              <Link to={`${node.slug}`}>
                {node.title} {formattedDate}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allContentfulBlogPost(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          id
          title
          description
          slug
          content {
            childMarkdownRemark {
              html
            }
            id
            content
          }
          createdAt
        }
      }
    }
  }
`
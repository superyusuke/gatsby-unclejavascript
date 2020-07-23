import * as React from 'react'
import { graphql, Link } from 'gatsby'
import 'ress'
import { Layout } from '../components/Layout'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

const IndexPage = ({ data }: { data: any }) => (
  <Layout title={''} headerTitle={''} description={''}>
    <ul>
      {data.allContentfulBlogPost.edges.map(({ node }, index) => {
        const date = format(parseISO(node.createdAt), 'yyyy/MM/dd')
        return (
          <li key={node.slug} data-index={index}>
            <Link to={`/${node.slug}`}>
              {node.title} <span className="index-list__date">{date}</span>
            </Link>
          </li>
        )
      })}
    </ul>
    {data.allContentfulBlogPost.edges.length} 記事
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          title
          slug
          createdAt
          updatedAt
          tags
        }
      }
    }
  }
`

import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const GraphQlTest = ({ data }) => {
  console.log(data)
  console.log(data.allMarkdownRemark.edges.map(({ node }, index) => node.html))
  return (
    <Layout>
      <h1>About Me</h1>
      {data.allMarkdownRemark.edges.map(({ node }, index) => {
        return <div key={index}>{node.html}</div>
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default GraphQlTest

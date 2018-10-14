import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const ThirdPage = ({ data }) => (
  <Layout>
    <h1>graphql</h1>
    <p>
      {data.site.siteMetadata.title} {data.site.siteMetadata.description}
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default ThirdPage

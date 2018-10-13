import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

const Header = styled.h1`
  color: red;
`

const IndexPage = () => (
  <Layout>
    <Header>JavaScript おじさん.com</Header>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage

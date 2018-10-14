import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import testStyles from '../components/test.module.css'

const Header = styled.h1`
  color: red;
`

const IndexPage = () => (
  <Layout
    title="トップページ"
    description="トップページや"
  >
    <Header>Atwood の法則</Header>
    <p className={testStyles.test}>
      JavaScript で書けるアプリケーションは全て、最終的に JavaScript
      で書かれることになっている。
    </p>
    <p>
      Any application that can be written in JavaScript, will eventually be
      written in JavaScript.
    </p>
  </Layout>
)

export default IndexPage

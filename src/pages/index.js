import React from 'react'
import Layout from '../components/layout'

const Header = styled.h1`
  color: red;
`

const IndexPage = () => (
  <Layout
    title="トップページ"
    description="トップページや"
  >
    <Header>Atwood の法則</Header>
    <p>
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

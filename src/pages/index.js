import React from 'react'
import 'ress'
import Layout from '../components/layout'
import { css } from 'emotion'

const cssStyle = css`
  background: red;
`

const IndexPage = () => (
  <Layout
    title="Javascript おじさん.com"
    description="JavaScript の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript おじさんこと中西が提供します。"
  >
    <h2 className={cssStyle}>JavaScript の宝石箱や！！</h2>
    <p>
      JavaScript
      の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript
      おじさんこと中西が提供します。
    </p>
  </Layout>
)

export default IndexPage

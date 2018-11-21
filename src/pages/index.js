import React from 'react'
import { graphql, Link } from 'gatsby'
import 'ress'
import Layout from '../components/layout'
import parse from 'date-fns/parse'
import format from 'date-fns/format'

const IndexPage = () => (
  <Layout
    title="Javascript おじさん.com"
    description="JavaScript の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript おじさんこと中西が提供します。"
  >
    <h2>JavaScript の宝石箱や！！</h2>
    <p>JavaScript の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript おじさんこと中西が提供します。</p>
  </Layout>
)

export default IndexPage

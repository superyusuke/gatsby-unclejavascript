import * as React from 'react'
import { Layout } from '../components/Layout'

const NotFoundPage = () => (
  <Layout
    headerTitle="not found"
    description="ページはありません"
    title="ページはありません"
  >
    <h1>NOT FOUND</h1>
    <p>
      なんらかの意図しないエラーが起きているので、JavaScript おじさんに連絡だ。
    </p>
  </Layout>
)

export default NotFoundPage

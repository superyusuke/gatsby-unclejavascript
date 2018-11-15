import React from 'react'
import { Link, graphql } from 'gatsby'
import 'ress'
import Layout from '../components/layout'
import _flattenDeep from 'lodash/flattenDeep'
import _uniq from 'lodash/uniq'

import '../components/category.scss'

const Category = ({ data }) => {
  const tags2DArray = data.allContentfulBlogPost.edges.map(
    ({ node }) => node.tags
  )
  const tagsArray = _uniq(_flattenDeep(tags2DArray))

  return (
    <Layout
      title="Javascript おじさん.com"
      description="JavaScript の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript おじさんこと中西が提供します。"
    >
      <ul>
        {tagsArray.map(tag => {
          return (
            <li className="category-list__item" key={tag}>
              <Link className="category-list__link" to={tag}>{tag}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          tags
        }
      }
    }
  }
`

export default Category

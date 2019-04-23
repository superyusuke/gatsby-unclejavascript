import React from 'react'
import { Link, graphql } from 'gatsby'
import 'ress'
import Layout from '../components/layout'
import _flattenDeep from 'lodash/flattenDeep'
import _countBy from 'lodash/countBy'
import _toPairs from 'lodash/toPairs'
import _sortBy from 'lodash/sortBy'

import '../components/category.scss'

const Category = ({ data }) => {
  const tags2DArray = data.allContentfulBlogPost.edges.map(
    ({ node }) => node.tags,
  )
  const categoryCountObject = _countBy(_flattenDeep(tags2DArray))
  const pairs = _toPairs(categoryCountObject)
  const sortedPairs = _sortBy(pairs, pair => pair[1]).reverse()

  return (
    <Layout
      title="Javascript おじさん.com"
      description="JavaScript の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript おじさんこと中西が提供します。"
    >
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginLeft: '-4px',
        }}
      >
        {sortedPairs.map(pair => {
          const tag = pair[0]
          const length = pair[1]
          return (
            <li className="category-list__item" key={tag}>
              <Link className="category-list__link" to={tag}>
                {tag}
                <span style={{ fontSize: '10px' }}>({length})</span>
              </Link>
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

import * as React from 'react'
import { Link, graphql } from 'gatsby'
import 'ress'
import { Layout } from 'src/components/Layout'
import { flattenDeep, countBy, toPairs, sortBy } from 'lodash'

import '../components/category.scss'

import { toIndexPage } from 'src/templates/blog-post'

const Category = ({ data }: { data: any }) => {
  const tags2DArray = data.allContentfulBlogPost.edges.map(
    ({ node }: { node: any }) => node.tags,
  )
  const categoryCountObject = countBy(flattenDeep(tags2DArray))
  const pairs = toPairs(categoryCountObject)
  const sortedPairs = sortBy(pairs, (pair) => pair[1]).reverse()

  return (
    <Layout
      title="Javascript おじさん.com"
      description="JavaScript の初心者から、職業エンジニアまで、幅広く役立つプログラミング情報を、JavaScript おじさんこと中西が提供します。"
      headerTitle="Javascript おじさん.com"
    >
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginLeft: '-4px',
        }}
      >
        {sortedPairs.map((pair) => {
          const tag = pair[0]
          const length = pair[1]
          return (
            <li className="category-list__item" key={tag}>
              <Link className="category-list__link" to={`/${toIndexPage(tag)}`}>
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

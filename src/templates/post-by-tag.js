/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/Layout'
import '../components/post-by-tag.scss'

import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

const tweet = css`
   {
    color: #ffd399;
    background: rgb(64, 169, 243);
    padding: 5px 20px;
    border-radius: 5px;
    margin: 0;

    @media screen and (max-width: 600px) {
      opacity: 0.7;
      bottom: 0;
      right: 0;
      position: fixed;
      margin: 5px;
    }
  }
`

export default ({ data, pageContext }) => {
  const { tag } = pageContext
  const encodedTag = encodeURI(tag)

  return (
    <Layout title={`${tag} のページ`} description={`${tag} ごとのページ`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${encodedTag}%0a&hashtags=UncleJavascript&url=https://uncle-javascript.com/${encodedTag}/&via=better_than_i_w`}
        css={tweet}
      >
        Tweet aa
      </a>
      <ul>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          const date = format(parseISO(node.createdAt), 'yyyy/MM/dd')
          return (
            <li key={node.slug}>
              <Link to={`/${node.slug}`}>
                {node.title} <span className="index-list__date">{date}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($tag: String!) {
    allContentfulBlogPost(
      filter: { tags: { eq: $tag } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          description
          slug
          content {
            childMarkdownRemark {
              html
            }
            id
            content
          }
          createdAt
        }
      }
    }
  }
`

// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { graphql, Link } from 'gatsby'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import Layout from '../components/layout'
import '../components/post-by-tag.scss'

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
  return (
    <Layout title={`${tag} のページ`} description={`${tag} ごとのページ`}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?text=${tag}%0a&hashtags=UncleJavascript&url=https://uncle-javascript.com/${tag}/&via=better_than_i_w`}
        className="tweet"
        css={tweet}
      >
        Tweet
      </a>
      <ul>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          const date = parse(node.createdAt)
          const formattedDate = format(date, 'YYYY/MM/DD')
          return (
            <li key={node.slug}>
              <Link to={`${node.slug}`}>
                {node.title}{' '}
                <span className="index-list__date">{formattedDate}</span>
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

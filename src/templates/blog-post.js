import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.contentfulBlogPost
  return (
    <Layout description={post.description} title={post.title}>
      <div className="post">
        <div className="title-wrapper">
          <h2 className="post-title">{post.title}</h2>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=${
              post.title
              }%0a&hashtags=UncleJavascript&url=https://uncle-javascript.com/${
              post.slug
              }/&via=better_than_i_w`}
            className="tweet"
          >
            Tweet
          </a>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html,
          }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
`

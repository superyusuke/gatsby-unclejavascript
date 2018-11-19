import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SwitchEnglish from 'src/components/SwitchEnglish'

export default ({ data }) => {
  const post = data.contentfulBlogPost
  const translatedMode = post.tags.some(o => o === 'Translated-Text')

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
        <SwitchEnglish translatedMode={translatedMode} />
        <div
          className="post-content"
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
      tags
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

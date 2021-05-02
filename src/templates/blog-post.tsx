import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from 'src/components/Layout'
import SwitchEnglish from 'src/components/SwitchEnglish'

import UdemyCM from 'src/components/cm/udemy'

export const toIndexPage = (tag) => {
  switch (tag) {
    case 'Vue Udemy': {
      return 'vue-vuex-udemy-text'
    }
    case 'Rails is JavaScript': {
      return 'rails-is-javascript'
    }
    default: {
      return tag
    }
  }
}

export default ({ data }) => {
  const post = data.contentfulBlogPost
  const translatedMode = post.tags.some(
    (o) => o === 'Translated-Text' || o === 'Translated Text',
  )

  const { content } = post
  if (!content) {
    console.warn(post)
    return <div>Error</div>
  }
  return (
    <Layout description={post.description} title={post.title}>
      <div className="post">
        <div className="title-wrapper">
          <h1 className="post-title">{post.title}</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?text=${post.title}%0a&hashtags=UncleJavascript&url=https://uncle-javascript.com/${post.slug}/&via=better_than_i_w`}
            className="tweet"
          >
            Tweet
          </a>
        </div>
        <div className="post-ui-wrapper">
          <div className="post-ui-item-wrapper">
            {post.tags.map((o) => {
              return (
                <Link
                  key={o}
                  to={`/${toIndexPage(o)}`}
                  className="post-ui-item"
                >
                  {o}
                </Link>
              )
            })}
          </div>
          <SwitchEnglish translatedMode={translatedMode} />
        </div>
        <UdemyCM />
        <div
          className="post-content"
          dangerouslySetInnerHTML={{
            __html: post.content.childMarkdownRemark.html,
          }}
        />
        <UdemyCM />
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

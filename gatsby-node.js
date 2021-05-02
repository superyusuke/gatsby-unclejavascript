const path = require(`path`)
const _flattenDeep = require('lodash/flattenDeep')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        slug: node.slug,
      },
    })
  })

  const result2 = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            tags
          }
        }
      }
    }
  `)

  const tags2DArray = result2.data.allContentfulBlogPost.edges.map(
    ({ node }) => node.tags,
  )
  const tagsArray = _flattenDeep(tags2DArray)

  tagsArray.forEach((tag) => {
    createPage({
      path: tag,
      component: path.resolve(`./src/templates/post-by-tag.tsx`),
      context: {
        tag,
      },
    })
  })
}

import React from "react"
import "./blog.styles.scss"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="blog__page__container">
        <ul className="blog__index__list">
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li className="blog__page__item" key={post.fields.slug}>
                <Link
                  className="blog__page__link"
                  to={post.fields.slug}
                  itemProp="url"
                >
                  <h2>{title}</h2>
                  <p>{post.frontmatter.date}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, Card } from "react-bootstrap"
import { GatsbyImage, getSrc, StaticImage } from "gatsby-plugin-image"
import { getImage } from "gatsby-plugin-image"

// import Card from 'react-bootstrap/Card'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div class="Grid-Container">
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <Container className="card-list" >
                  <Card>
                    <Link to={post.fields.slug} itemProp="url">
                      {/* <GatsbyImage */}
                      <StaticImage
                        class="card-image"
                      // image={getImage(post.frontmatter.image)}
                        src="../../content/blog/monitor/monitor.jpg"
                        alt={post.frontmatter.title}
                      />
                    </Link>
                    <p className="card-date">{post.frontmatter.date}</p>
                    <p class="card-title">
                      <span itemProp="headline">{title}</span>
                    </p>
                    <Card.Body class="card-description">
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </Card.Body>
                  </Card>
                </Container>
              </li>
            )
          })}
        </ol>
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
          title
          date(formatString: "MMMM DD, YYYY")
          image {
            childrenImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
              )
            }
          }
          description
        }
      }
    }
  }
`

// https://www.youtube.com/watch?v=qvawKezSR8I

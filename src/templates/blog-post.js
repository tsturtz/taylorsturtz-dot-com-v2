import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(0),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.authors && post.frontmatter.authors.length > 0 &&
            <Fragment>by&nbsp;
              {post.frontmatter.authors.map((author, idx) => {
                return (
                  <Fragment>
                    <a
                      key={idx}
                      href={author.github}
                      target="_blank"
                    >{author.name}
                    </a>
                    {(idx < post.frontmatter.authors.length - 2) ? `, ` : ''}
                    {(idx === post.frontmatter.authors.length - 2) ? `${post.frontmatter.authors.length > 2 ? ',' : ''} and ` : ''}
                  </Fragment>
                )
              })}
            </Fragment>
          }
          &nbsp;&bull;&nbsp;
          {post.frontmatter.date}
          &nbsp;&bull;&nbsp;
          {`${post.timeToRead} min read`}
        </p>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 &&
          <div style={{ marginBottom: rhythm(1) }}>
            {post.frontmatter.tags.map((tag, idx) => {
              return (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: rhythm(1 / 3),
                    borderRadius: rhythm(10),
                    padding: '.2rem .5rem',
                    marginRight: '.4rem',
                    backgroundColor: '#36B5A2',
                    color: '#fff',
                    verticalAlign: 'middle',
                    boxShadow: '1px 1px 0px 0px #00ffda',
                  }}
                >{tag}
                </span>
              )
            })}
          </div>
        }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          id="additional-resources"
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        authors {
          name
          github
          twitter
        }
        tags
      }
    }
  }
`

import React, { Fragment, Component } from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react';

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { portfolioTypePillStyles } from '../utils/consts'

import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    const disqusShortname = "taylorsturtz";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };

    console.log('ENV VAR TEST - ', process.env.GATSBY_TEST_ENV_VAR);
    let tags = []
    if (post.frontmatter.tags && post.frontmatter.tags.length > 0) {
      tags = post.frontmatter.tags.sort().map((tag, idx) => {
        return (
          <span
            key={idx}
            style={portfolioTypePillStyles}
          >{tag}
          </span>
        )
      })
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1 style={{ marginBottom: rhythm(1), fontFamily: 'Bitter, serif' }}>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(0),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
          &nbsp;&bull;&nbsp;
          {`${post.timeToRead} min read`}
        </p>
        <div style={{ marginBottom: rhythm(1) }}>
          {tags}
        </div>
        {post.frontmatter.authors && post.frontmatter.authors.length > 0 &&
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: rhythm(1) }}>
            {post.frontmatter.authors.map((author, idx) => {
              return (
                <Fragment key={idx}>
                  <img
                    src={profilePic}
                    alt={author.name}
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      width: rhythm(2),
                      height: rhythm(2),
                    }}
                  />
                  <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                    <p style={{ marginBottom: 0 }}>{author.name}</p>
                    <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                      {author.title}
                      {author.company ? ' at ' : ''}
                      {author.company}
                    </p>
                    <p style={{ marginBottom: 0, fontSize: rhythm(.4), fontStyle: 'italic' }}>
                      <a href={author.github} target="_blank">GitHub</a>
                      &nbsp;&bull;&nbsp;
                      <a href={author.twitter} target="_blank">Twitter</a>
                    </p>
                  </div>
                </Fragment>
              )
            })}
          </div>
        }
        <hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div id="additional-resources" style={{ display: 'none' }} />
        <hr style={{ marginBottom: rhythm(1.5), marginTop: rhythm(1.5) }} />

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
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
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
          title
          company
          github
          twitter
        }
        tags
      }
    }
  }
`

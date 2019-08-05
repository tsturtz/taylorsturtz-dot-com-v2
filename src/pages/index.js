import React, { Fragment, Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

const portfolioGrid = {
  display: 'grid',
  gridTemplateAreas: `'left center right'`,
  gridGap: '10px',
  padding: '10px',
}

class BlogIndex extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        <p style={{ marginTop: '30px' }}>
          I'm a software developer amongst other things... soccer fan, family man, nerd. I write empathetic code to build apps that users want to connect with. Regardless of the platform (web/mobile/CLI etc.), solving challenging problems and considering UX/DX is my jam.
          <br /><br />
          I currently work as a <em>Software Developer</em> pioneering front-end projects at <a href="https://www.ytel.com" className="greenTheme" target="blank_">Ytel</a>, a telecommunications API platform in Foothill Ranch, CA.
        </p>
        {/* PROJECTS */}
        <blockquote>
          <h3 id="projects">Projects</h3>
        </blockquote>
        <div style={portfolioGrid}>
          <div style={{ gridArea: 'left' }}>
            Web<br />
            <a href="https://tsturtz.github.io/angularJs-material-todoList/" className="greenTheme" target="blank_">Angular To-Do App</a><br />
            <a href="http://www.meetup-map.com" className="greenTheme" target="blank_">Meetup Map</a><br />
            <a href="http://realvalue.io" className="greenTheme" target="blank_">Real Value</a>
          </div>
          <div style={{ gridArea: 'right' }}>
            Mobile<br />
            <a href="https://github.com/tsturtz/i-want-my-bbtv" className="greenTheme" target="blank_">I Want My BB-TV</a><br />
            Bot<br />
            <a href="https://github.com/tsturtz/soccer6-slackbot-golang" className="greenTheme" target="blank_">Soccer6 Slack Bot</a>
          </div>
        </div>
        {/* BLOG */}
        <blockquote>
          <h3 id="blog">Blog</h3>
        </blockquote>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug

          let tags = []
          if (node.frontmatter.tags && node.frontmatter.tags.length > 0) {
            tags = node.frontmatter.tags.sort().map((tag, idx) => {
              return (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'Bitter, serif',
                    fontSize: rhythm(1 / 3),
                    borderRadius: rhythm(10),
                    padding: '.2rem .5rem',
                    marginRight: '.4rem',
                    backgroundColor: '#36B5A2',
                    color: '#fff',
                    verticalAlign: 'middle',
                    boxShadow: '1px 1px 0px 0px #00ffda',
                    whiteSpace: 'nowrap',
                  }}
                >{tag}
                </span>
              )
            })
          }

          return (
            <div key={node.fields.slug}>
              <h3 style={{ marginBottom: 0 }}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small style={{ marginRight: rhythm(1 / 3) }}>
                {node.frontmatter.date}
                &nbsp;&bull;&nbsp;
                {`${node.timeToRead} min read`}
              </small>
              <div>
                {tags}
              </div>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`

import React, { Fragment, Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import todoGif from '../assets/todo-square-optimized.gif'
import meetupmapGif from '../assets/meetupmap-square-optimized-small.gif'
import realValueGif from '../assets/realvalue-square-optimized-small.gif'
import soccer6 from '../assets/soccer6bot-square.png'

const portfolioGrid = {
  display: 'grid',
  gridTemplateAreas: `'left right'`,
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
          I'm a software developer amongst other things... eg: family man, soccer fan, music nerd. I write clean, empathetic code and build apps that users connect with directly. Regardless of the platform (web, mobile, CLI etc.), <strong>solving difficult problems and building UX/DX is my jam</strong>.
          <br /><br />
          I currently work as a Software Developer pioneering front-end web projects at <a href="https://www.ytel.com" className="greenTheme" target="_blank">Ytel</a>, a telecommunications API platform in Foothill Ranch, CA.
          <br /><br />
          Take a look at my personal <a href="#projects" className="greenTheme">projects</a> and <a href="#blog" className="greenTheme">blog</a> below and <a href="#contact" className="greenTheme">reach out</a> if you'd like to chat.
        </p>
        {/* PROJECTS */}
        <blockquote>
          <h3 id="projects"><strong className="accent">Projects</strong></h3>
        </blockquote>
        <div style={portfolioGrid}>
          <div style={{ gridArea: 'left' }}>
            <span
              style={{
                fontFamily: 'Bitter, serif',
                fontSize: rhythm(.5),
                borderRadius: rhythm(10),
                padding: '.2rem .5rem',
                marginRight: '.4rem',
                backgroundColor: '#36B5A2',
                color: '#fff',
                verticalAlign: 'middle',
                boxShadow: '1px 1px 0px 0px #00ffda',
                whiteSpace: 'nowrap',
              }}
            >Web
            </span>
            <br /><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={todoGif}
                alt={`Todo App`}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  width: rhythm(2),
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              />
              <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                <p style={{ marginBottom: 0 }}><a href="https://tsturtz.github.io/angularJs-material-todoList/" className="greenTheme" target="_blank">To-do For You</a><br /></p>
                <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                  AngularJS / Material / Firebase Auth
                </p>
              </div>
            </div>
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={meetupmapGif}
                alt={`Meetup Map`}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  width: rhythm(2),
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              />
              <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                <p style={{ marginBottom: 0 }}><a href="http://www.meetup-map.com" className="greenTheme" target="_blank">Meetup Map</a><br /></p>
                <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                  jQuery / Materialize
                </p>
              </div>
            </div>
            <br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={realValueGif}
                alt={`Real Value`}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  width: rhythm(2),
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              />
              <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                <p style={{ marginBottom: 0 }}><a href="http://realvalue.io" className="greenTheme" target="_blank">Real Value</a><br /></p>
                <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                  Angular / Material / Leaflet / Firebase DB
                </p>
              </div>
            </div>
          </div>
          <div style={{ gridArea: 'right' }}>
            <span
              style={{
                fontFamily: 'Bitter, serif',
                fontSize: rhythm(.5),
                borderRadius: rhythm(10),
                padding: '.2rem .5rem',
                marginRight: '.4rem',
                backgroundColor: '#36B5A2',
                color: '#fff',
                verticalAlign: 'middle',
                boxShadow: '1px 1px 0px 0px #00ffda',
                whiteSpace: 'nowrap',
              }}
            >Mobile
            </span>
            <br /><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={soccer6}
                alt={`Soccer6 Bot`}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  width: rhythm(2),
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              />
              <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                <p style={{ marginBottom: 0 }}><a href="https://github.com/tsturtz/i-want-my-bbtv" className="greenTheme" target="_blank">I Want My BB-TV</a><br /></p>
                <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                  React Native / Node (Express) / Mongo DB
                </p>
              </div>
            </div>
            <br />
            <span
              style={{
                fontFamily: 'Bitter, serif',
                fontSize: rhythm(.5),
                borderRadius: rhythm(10),
                padding: '.2rem .5rem',
                marginRight: '.4rem',
                backgroundColor: '#36B5A2',
                color: '#fff',
                verticalAlign: 'middle',
                boxShadow: '1px 1px 0px 0px #00ffda',
                whiteSpace: 'nowrap',
              }}
            >Bots
            </span>
            <br /><br />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={soccer6}
                alt={`Soccer6 Bot`}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  width: rhythm(2),
                  // clipPath: 'circle(50% at 50% 50%)',
                }}
              />
              <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                <p style={{ marginBottom: 0 }}><a href="https://github.com/tsturtz/soccer6-slackbot-golang" className="greenTheme" target="_blank">Soccer6 Slack Bot</a><br /></p>
                <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                  Golang
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* BLOG */}
        <blockquote>
          <h3 id="blog"><strong className="accent">Blog</strong></h3>
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
                <Link className="greyLink" style={{ boxShadow: 'none' }} to={node.fields.slug}>
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
        {/* <blockquote>
          <h3 id="blog"><strong className="accent">Resume</strong></h3>
        </blockquote> */}
        <blockquote>
          <h3 id="blog"><strong className="accent">Contact</strong></h3>
        </blockquote>
        ✉️ taylorsturtz@gmail.com
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

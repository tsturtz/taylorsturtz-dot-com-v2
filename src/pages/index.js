import React, { Fragment, Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

import meetupmapGif from '../assets/meetupmapOPT.gif'
import todoGif from '../assets/todoOPT.gif'
import realValueGif from '../assets/realValueOPT.gif'
// import thisSitePng from '../assets/thisSite.png'
import bbtvGif from '../assets/bbtvOPT.gif'
import soccer6Png from '../assets/soccer6BotScreenshot.png'
import semanticUiReactCountriesGif from '../assets/semanticUiReactCountriesOPT.gif'

import '@mdi/font/css/materialdesignicons.min.css';

const lightboxStyles = {
  maxHeight: '80vh',
  maxWidth: '90vw',
  marginBottom: 0,
  boxShadow: '0px 20px 35px rgba(0,0,0,0.5)',
}

class BlogIndex extends Component {
  state = {
    inIFrame: false,
    lightboxIndex: null,
  }

  componentDidMount = () => {
    if (typeof window !== 'undefined' && window.location !== window.parent.location) {
      this.setState({ inIFrame: true });
    }
  }

  setLightboxIndex = (e) => {
    e.preventDefault();
    const lightboxIndex = JSON.parse(e.target.getAttribute('lightboxindex'));
    this.setState({ lightboxIndex });
  }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    const { inIFrame, lightboxIndex } = this.state;

    return (
      <Fragment>

        {/* LIGHTBOX */}
        {lightboxIndex !== null && (
          <div
            style={{ position: 'fixed', backgroundColor: 'rgba(0,0,0,0.75)', height: '100vh', width: '100vw' }}
            lightboxindex="null"
            onClick={this.setLightboxIndex}
          />
        )}
        <div
          style={{
            position: 'fixed',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {lightboxIndex !== null && (
            <Fragment>
              <span
                className="mdi mdi-close"
                style={{
                  position: 'absolute',
                  top: '-25px',
                  right: '-20px',
                  fontSize: '20px',
                  cursor: 'pointer',
                  zIndex: 999,
                  color: 'white',
                }}
                lightboxindex="null"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                role="button"
                tabIndex="0"
              />
              {lightboxIndex === 0 && (
                <Fragment>
                  <iframe
                    src="https://taylorsturtz.com"
                    style={{
                      ...lightboxStyles,
                      width: '1000px',
                      height: '625px',
                      backgroundColor: 'white',
                      borderRadius: '10px',
                      border: '1px solid white',
                    }}
                  >
                    <p>Your browser does not support iframes.</p>
                  </iframe>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a
                      style={{ zIndex: 1 }}
                      className="whiteLink"
                      href="https://taylorsturtz.com"
                      target="_blank"
                    >
                      taylorsturtz.com <span className="mdi mdi-open-in-new" />
                    </a>
                    <a
                      style={{ zIndex: 1 }}
                      className="whiteLink"
                      href="https://github.com/nothingtoocrazy/taylorsturtz-blog"
                      target="_blank"
                    >
                      GitHub <span className="mdi mdi-open-in-new" />
                    </a>
                  </div>
                </Fragment>
              )}
              {lightboxIndex === 1 && (
                <Fragment>
                  <img
                    src={meetupmapGif}
                    alt="Meetup Map"
                    style={lightboxStyles}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a
                      className="whiteLink"
                      href="http://www.meetup-map.com"
                      target="_blank"
                    >
                      meetup-map.com <span className="mdi mdi-open-in-new" />
                    </a>
                    <a
                      className="whiteLink"
                      href="https://github.com/Xevnik/meetup_map"
                      target="_blank"
                    >
                      GitHub <span className="mdi mdi-open-in-new" />
                    </a>
                  </div>
                </Fragment>
              )}
              {lightboxIndex === 2 && (
                <Fragment>
                  <img
                    src={todoGif}
                    alt="TodoApp"
                    style={lightboxStyles}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a
                      className="whiteLink"
                      href="https://tsturtz.github.io/angularJs-material-todoList/"
                      target="_blank"
                    >
                      Live link <span className="mdi mdi-open-in-new" />
                    </a>
                    <a
                      className="whiteLink"
                      href="https://github.com/tsturtz/angularJs-material-todoList"
                      target="_blank"
                    >
                      GitHub <span className="mdi mdi-open-in-new" />
                    </a>
                  </div>
                </Fragment>
              )}
              {lightboxIndex === 3 && (
                <Fragment>
                  <img
                    src={realValueGif}
                    alt="RealValue"
                    style={lightboxStyles}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a
                      className="whiteLink"
                      href="http://realvalue.io"
                      target="_blank"
                    >
                      realvalue.io <span className="mdi mdi-open-in-new" />
                    </a>
                    <a
                      className="whiteLink"
                      href="https://github.com/tsturtz/realvalue"
                      target="_blank"
                    >
                      GitHub <span className="mdi mdi-open-in-new" />
                    </a>
                  </div>
                </Fragment>
              )}
              {lightboxIndex === 4 && (
                <Fragment>
                  <img
                    src={bbtvGif}
                    alt="I want my BB-TV"
                    style={lightboxStyles}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <a
                      className="whiteLink"
                      href="https://github.com/tsturtz/i-want-my-bbtv"
                      target="_blank"
                    >
                      GitHub <span className="mdi mdi-open-in-new" />
                    </a>
                  </div>
                </Fragment>
              )}
              {lightboxIndex === 5 && (
                <Fragment>
                  <img
                    src={soccer6Png}
                    alt="Soccer 6 Bot"
                    style={lightboxStyles}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <a
                      className="whiteLink"
                      href="https://github.com/tsturtz/soccer6-slackbot-golang"
                      target="_blank"
                    >
                      GitHub <span className="mdi mdi-open-in-new" />
                    </a>
                  </div>
                </Fragment>
              )}
              {lightboxIndex === 6 && (
                <Fragment>
                  <img
                    src={semanticUiReactCountriesGif}
                    alt="Semantic UI React Countries"
                    style={lightboxStyles}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <a
                      className="whiteLink"
                      href="https://www.npmjs.com/package/semantic-ui-react-countries"
                      target="_blank"
                    >
                      npm <span className="mdi mdi-open-in-new" />
                    </a>
                    <a
                      className="whiteLink"
                      href="https://github.com/tsturtz/semantic-ui-react-countries"
                      target="_blank"
                    >
                      GitHub <span className="mdi mdi-open-in-new" />
                    </a>
                  </div>
                </Fragment>
              )}
            </Fragment>
          )}
        </div>

        {/* LAYOUT */}
        <Layout location={this.props.location} title={siteTitle}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
          />
          <Bio />
          <p style={{ marginTop: '30px' }}>
            I'm a software dev amongst other things (runner / family man / soccer fan / music nerd). I write clean, empathetic code and build apps that users connect with directly. Regardless of the platform, <strong>solving difficult problems and building smooth user experiences is my jam</strong>.
            <br /><br />
            I currently work as a Software Developer pioneering front-end web projects at <a href="https://www.ytel.com" className="greenTheme" target="_blank">Ytel</a>, a telecommunications API platform in Foothill Ranch, CA.
            <br /><br />
            Take a look at my personal <a href="#projects" className="greenTheme">projects</a> and <a href="#blog" className="greenTheme">blog</a> below and <a href="#contact" className="greenTheme">reach out</a> if you'd like to chat.
          </p>

          {/* PROJECTS */}
          <blockquote>
            <h3 id="projects" style={{ zIndex: 0 }}><strong className="accent">Projects</strong></h3>
          </blockquote>

          <div className="portfolioGrid">

            <div className="grid1">
              <span
                style={{
                  fontFamily: 'Bitter, serif',
                  fontSize: rhythm(.4),
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
            </div>

            <div className="grid2">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <span className="mdi mdi-arrow-right" style={{ marginRight: '5px', color: '#ababab' }} />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  {inIFrame ? (
                    <Fragment>
                      <p style={{ marginBottom: 0 }} className="greenTheme">
                        This site
                      </p>
                      <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab' }}>
                        🙅‍♂️ <em>&lt;iframe/&gt; rEcUrSiOn!</em>
                      </p>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <p
                        style={{ marginBottom: 0, cursor: 'pointer' }}
                        className="greenTheme linkLikeStyle"
                        lightboxindex="0"
                        onClick={this.setLightboxIndex}
                        onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                        role="button"
                        tabIndex="0"
                      >
                        This site
                      </p>
                      <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                        React / Gatsby / Netlify
                      </p>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>

            <div className="grid3">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <span className="mdi mdi-arrow-right" style={{ marginRight: '5px', color: '#ababab' }} />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p
                    style={{ marginBottom: 0, cursor: 'pointer' }}
                    className="greenTheme linkLikeStyle"
                    lightboxindex="1"
                    onClick={this.setLightboxIndex}
                    onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                    role="button"
                    tabIndex="0"
                  >
                    Meetup Map
                  </p>
                  <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                    jQuery
                  </p>
                </div>
              </div>
            </div>

            <div className="grid4">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <span className="mdi mdi-arrow-right" style={{ marginRight: '5px', color: '#ababab' }} />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p
                    style={{ marginBottom: 0, cursor: 'pointer' }}
                    className="greenTheme linkLikeStyle"
                    lightboxindex="2"
                    onClick={this.setLightboxIndex}
                    onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                    role="button"
                    tabIndex="0"
                  >
                    To-do For You
                  </p>
                  <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                    AngularJS / Firebase
                  </p>
                </div>
              </div>
            </div>

            <div className="grid5">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <span className="mdi mdi-arrow-right" style={{ marginRight: '5px', color: '#ababab' }} />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p
                    style={{ marginBottom: 0, cursor: 'pointer' }}
                    className="greenTheme linkLikeStyle"
                    lightboxindex="3"
                    onClick={this.setLightboxIndex}
                    onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                    role="button"
                    tabIndex="0"
                  >
                    Real Value (POC)
                  </p>
                  <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                    AngularJS / Leaflet / D3 / Firebase
                  </p>
                </div>
              </div>
            </div>

            <div className="grid6">
              <span
                style={{
                  fontFamily: 'Bitter, serif',
                  fontSize: rhythm(.4),
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
            </div>

            <div className="grid7">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <span className="mdi mdi-arrow-right" style={{ marginRight: '5px', color: '#ababab' }} />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p
                    style={{ marginBottom: 0, cursor: 'pointer' }}
                    className="greenTheme linkLikeStyle"
                    lightboxindex="4"
                    onClick={this.setLightboxIndex}
                    onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                    role="button"
                    tabIndex="0"
                  >
                    I Want My BB-TV
                  </p>
                  <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                    React Native / Node (Express) / MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div className="grid8">
              <span
                style={{
                  fontFamily: 'Bitter, serif',
                  fontSize: rhythm(.4),
                  borderRadius: rhythm(10),
                  padding: '.2rem .5rem',
                  marginRight: '.4rem',
                  backgroundColor: '#36B5A2',
                  color: '#fff',
                  verticalAlign: 'middle',
                  boxShadow: '1px 1px 0px 0px #00ffda',
                  whiteSpace: 'nowrap',
                }}
              >Other
              </span>
            </div>

            <div className="grid9">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <span className="mdi mdi-arrow-right" style={{ marginRight: '5px', color: '#ababab' }} />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p
                    style={{ marginBottom: 0, cursor: 'pointer' }}
                    className="greenTheme linkLikeStyle"
                    lightboxindex="5"
                    onClick={this.setLightboxIndex}
                    onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                    role="button"
                    tabIndex="0"
                  >
                    Soccer6 Slack Bot
                  </p>
                  <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                    Golang / GoQuery (web scraper)
                  </p>
                </div>
              </div>
            </div>

            <div className="grid10">
              <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <span className="mdi mdi-arrow-right" style={{ marginRight: '5px', color: '#ababab' }} />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p
                    style={{ marginBottom: 0, cursor: 'pointer' }}
                    className="greenTheme linkLikeStyle"
                    lightboxindex="6"
                    onClick={this.setLightboxIndex}
                    onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                    role="button"
                    tabIndex="0"
                  >
                    Semantic UI React Countries
                  </p>
                  <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                    Node / npm (CLI tool)
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
            <h3 id="contact"><strong className="accent">Contact</strong></h3>
          </blockquote>
          ✉️ taylorsturtz@gmail.com
        </Layout>
      </Fragment>
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

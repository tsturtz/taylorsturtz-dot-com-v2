import React, { Fragment, Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Sitemap from '../components/Sitemap'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import { pillStyles } from '../utils/consts'

import meetupmapGif from '../assets/meetupmapOPT.gif'
import todoGif from '../assets/todoOPT.gif'
import realValueGif from '../assets/realValueOPT.gif'
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
const contactFormLabelStyles = {
  fontSize: 'small',
}
const contactFormInputStyles = {
  padding: '.25rem .75rem',
  width: '100%',
  marginBottom: '10px',
  borderRadius: '6px',
  border: '1px solid rgb(231, 231, 231)',
  boxShadow: 'rgb(204, 204, 204) 1px 1px 0px 0px inset',
  background: 'rgb(249, 249, 249)',
}

class BlogIndex extends Component {
  state = {
    isInIFrame: false,
    lightboxIndex: null,
    isSubmittingContact: false,
  }

  componentDidMount = () => {
    if (typeof window !== 'undefined' && window.location !== window.parent.location) {
      this.setState({ isInIFrame: true });
    }
  }

  setLightboxIndex = (e) => {
    const { isInIFrame } = this.state;
    if (isInIFrame) return;
    const lightboxIndex = JSON.parse(e.currentTarget.getAttribute('lightboxindex'));
    this.setState({ lightboxIndex });
  }

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    const { isInIFrame, lightboxIndex, isSubmittingContact } = this.state;

    return (
      <Fragment>

        {/* SUBMITTING CONTACT LOADER */}
        {isSubmittingContact && (
          <Fragment>
            <div style={{ position: 'fixed', backgroundColor: 'rgba(0,0,0,0.75)', height: '100vh', width: '100vw' }} />
            <div
              style={{
                position: 'fixed',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <span className="mdi mdi-loading rotating" style={{ color: '#FFF', fontSize: '3rem' }} />
            </div>
          </Fragment>
        )}

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

        {/* START CONTENT */}

        {/* LAYOUT */}
        <Layout location={this.props.location} title={siteTitle}>
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={siteTitle}
          />
          <Sitemap top />
          <Bio />
          <div className="aboutSection">
            <p>
              I'm a self-motivated software engineer from Irvine, CA with a background in design. I write <a href="https://www.benjaminjohnson.me/blog/empathetic-code/" target="_blank">empathetic code</a> and build full-stack applications that people connect with directly. Regardless of the platform, solving difficult problems and building <span className="wavy" data-text="smooth">smooth</span> user experiences is my jam.
              <br /><br />
              I currently work full-time as a <strong>Software Developer</strong> pioneering front-end web projects at <a href="https://www.ytel.com" target="_blank">Ytel</a>, a telecommunications API platform in Foothill Ranch, California.
              <div className="greyUnderline wavyDivider" style={{ marginBottom: '20px' }} />
              <div className="aboutSectionLetsChat">
                <em>Have a question or an intriguing idea? Lose my number? Am I ignoring your LinkedIn messages? </em>
                <a href="#contact" className="messageMeBtn">
                  {/* <span className="mdi mdi-message-text" /> */}
                  🤙 Let's chat!
                </a>
              </div>
            </p>
          </div>

          {/* PROJECTS */}
          <h2 id="projects" className="sectionTitle">Projects</h2>
          <div className="yellowUnderline wavyDivider" style={{ position: 'relative', top: '-10px', zIndex: '-1' }} />

          <p style={{ marginBottom: '10px' }}>
            <em style={{ color: '#ababab' }}>
              A handful of my personal and open source projects; check my
              <a href="https://twitter.com/taylorsturtz" target="_blank">
                &nbsp;
                <span className="mdi mdi-github-circle" style={{ marginRight: '2px', fontSize: '1.2rem', position: 'relative', top: '3px', zIndex: '-1' }} />
                GitHub
              </a>
              &nbsp;for more.
            </em>
          </p>

          <div className="portfolioGrid">

            <div className="grid1"><span style={{ ...pillStyles, fontSize: '.85rem' }}>Web</span></div>

            <div className="grid2">
              <div
                className="projectItem"
                lightboxindex="0"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => {
                  if (e.which === 13 || e.which === 32) {
                    this.setLightboxIndex(e);
                  }
                }}
                role="button"
                tabIndex="0"
              >
                <span className="mdi mdi-arrow-right" />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  {isInIFrame ? (
                    <div>
                      <p className="projectTitle">This site</p>
                      <p className="projectSubtitle">No <em>&lt;iFrAmE&gt; rEcUrSiOn!</em></p>
                    </div>
                  ) : (
                    <div>
                      <p className="projectTitle">This site</p>
                      <p className="projectSubtitle">React / Gatsby / Serverless Python</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid3">
              <div
                className="projectItem"
                lightboxindex="1"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                role="button"
                tabIndex="0"
              >
                <span className="mdi mdi-arrow-right" />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p className="projectTitle">Meetup Map</p>
                  <p className="projectSubtitle">jQuery / PHP</p>
                </div>
              </div>
            </div>

            <div className="grid4">
              <div
                className="projectItem"
                lightboxindex="2"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                role="button"
                tabIndex="0"
              >
                <span className="mdi mdi-arrow-right" />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p className="projectTitle">To-do For You</p>
                  <p className="projectSubtitle">AngularJS / Firebase</p>
                </div>
              </div>
            </div>

            <div className="grid5">
              <div
                className="projectItem"
                lightboxindex="3"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                role="button"
                tabIndex="0"
              >
                <span className="mdi mdi-arrow-right" />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p className="projectTitle">Real Value (POC)</p>
                  <p className="projectSubtitle">AngularJS / Leaflet / D3 / Firebase</p>
                </div>
              </div>
            </div>

            <div className="grid6"><span style={{ ...pillStyles, fontSize: '.85rem' }}>Mobile</span></div>

            <div className="grid7">
              <div
                className="projectItem"
                lightboxindex="4"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                role="button"
                tabIndex="0"
              >
                <span className="mdi mdi-arrow-right" />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p className="projectTitle">I Want My BB-TV</p>
                  <p className="projectSubtitle">React Native / Node (Express) / MongoDB</p>
                </div>
              </div>
            </div>

            <div className="grid8"><span style={{ ...pillStyles, fontSize: '.85rem' }}>Other</span></div>

            <div className="grid9">
              <div
                className="projectItem"
                lightboxindex="5"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                role="button"
                tabIndex="0"
              >
                <span className="mdi mdi-arrow-right" />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p className="projectTitle">Soccer6 Slack Bot</p>
                  <p className="projectSubtitle">Golang / GoQuery (web scraper)</p>
                </div>
              </div>
            </div>

            <div className="grid10">
              <div
                className="projectItem"
                lightboxindex="6"
                onClick={this.setLightboxIndex}
                onKeyUp={(e) => { if (e.which === 13 || e.which === 32) this.setLightboxIndex(e); }}
                role="button"
                tabIndex="0"
              >
                <span className="mdi mdi-arrow-right" />
                <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
                  <p className="projectTitle">Semantic UI React Countries</p>
                  <p className="projectSubtitle">Node / npm (CLI tool)</p>
                </div>
              </div>
            </div>

          </div>

          {/* BLOG */}
          <h2 id="blog" className="sectionTitle">Blog</h2>
          <div className="yellowUnderline wavyDivider" style={{ marginBottom: '20px', position: 'relative', top: '-10px', zIndex: '-1' }} />
          {posts.map(({ node }, blogIndex, blogArr) => {
            const title = node.frontmatter.title || node.fields.slug

            let tags = []
            if (node.frontmatter.tags && node.frontmatter.tags.length > 0) {
              tags = node.frontmatter.tags.sort().map((tag, idx) => {
                return (
                  <span
                    key={idx}
                    style={pillStyles}
                  >{tag}
                  </span>
                )
              })
            }

            return (
              <div key={node.fields.slug}>
                <h3 style={{ margin: 0 }}>
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
                <p style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                {blogIndex < blogArr.length - 1 && (
                  <div className="greyUnderline wavyDivider" style={{ position: 'relative', zIndex: '-1', top: '-25px', width: '90px' }} />
                )}
              </div>
            )
          })}

          {/* CONTACT */}
          <h2 id="contact" className="sectionTitle">Contact</h2>
          <div className="yellowUnderline wavyDivider" style={{ marginBottom: '10px', position: 'relative', top: '-10px', zIndex: '-1' }} />
          <div className="contactForm">
            <p>
              I'm currently <strong>unavailable</strong> for immediate hire <em>but I am always open to chat about new opportunities</em>.
            </p>
            <p>
              To reach me you could try me on social media...
              <br />
              <span className="mdi mdi-twitter socialIconsContact" style={{ verticalAlign: 'sub', color: '#4b4b4b', lineHeight: '1.2' }} />
              &nbsp;I'm fairly active on Twitter
              (<a href="https://twitter.com/taylorsturtz" target="_blank" style={{ lineHeight: 1 }}>
                <span>@taylorsturtz</span>
              </a>)
              <br />
              <span className="mdi mdi-linkedin-box socialIconsContact" style={{ verticalAlign: 'sub', color: '#4b4b4b', lineHeight: '1.2' }} />
              &nbsp;not so much on LinkedIn
              (<a href="https://linkedin.com/in/taylorsturtz" target="_blank" style={{ lineHeight: 1 }}>
                <span>/in/taylorsturtz</span>
              </a>)
            </p>
            <form
              action="https://us-central1-contact-form-249703.cloudfunctions.net/contact-form2"
              method="POST"
              onSubmit={() => {
                this.setState({ isSubmittingContact: true })
              }}
            >
              <span>...or better yet send me an email directly:</span>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <div style={{ width: '50%' }}>
                  <label htmlFor="name" style={{ ...contactFormLabelStyles }}>Name</label>
                  <input type="text" id="name" name="name" style={{ ...contactFormInputStyles }} required />
                </div>
                <div style={{ width: '3%' }}></div>
                <div style={{ width: '50%' }}>
                  <label htmlFor="email" style={{ ...contactFormLabelStyles }}>Email</label>
                  <input type="email" id="email" name="email" style={{ ...contactFormInputStyles }} required />
                </div>
              </div>
              <label htmlFor="message" style={{ ...contactFormLabelStyles }}>Message</label>
              <textarea rows="3" id="body" name="body" style={{ ...contactFormInputStyles, minWidth: '100%', maxWidth: '100%' }} required />
              <div className="formSubmitRow">
                <strong>Recruiters: <em>in-house recruiters only please!</em> ❤️</strong>
                <input type="submit" name="Submit" className="greenTheme submitButton" />
              </div>
            </form>
          </div>
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

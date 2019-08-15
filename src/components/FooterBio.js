import React, { PureComponent, Fragment } from 'react'
import 'typeface-bitter'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'
import { rhythm } from '../utils/typography'

class FooterBio extends PureComponent {
  render() {
    return (
      <Fragment>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={profilePic}
              alt="Taylor Sturtz"
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
              }}
            />
            <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
              <p style={{ marginBottom: 0 }}>Taylor Sturtz</p>
              <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                Software Developer
              </p>
            </div>
          </div>
          <p style={{ marginBottom: 0, fontSize: rhythm(.4), fontStyle: 'italic' }}>
            <a href="/#projects">Projects</a>
            &nbsp;&bull;&nbsp;
            <a href="/#blog">Blog</a>
            &nbsp;&bull;&nbsp;
            <a href="/resume" target="_blank">Resume</a>
            &nbsp;&bull;&nbsp;
            <a href="/gifs">GIFs</a>
            &nbsp;&bull;&nbsp;
            <a href="/#contact">Contact</a>
          </p>
        </div>
        <hr style={{ marginTop: '1.5rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>👨‍💻 <code>npx taylorsturtz</code></span>
          <div className="socialIcons">
            <a href="https://www.linkedin.com/in/taylorsturtz/" target="_blank" className="mdi mdi-linkedin-box" />
            <a href="https://twitter.com/taylorsturtz" target="_blank" className="mdi mdi-twitter" />
            <a href="https://github.com/tsturtz" target="_blank" className="mdi mdi-github-circle" />
            <a href="https://dev.to/tsturtz" target="_blank" className="mdi mdi-dev-to" />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default FooterBio

import React, { PureComponent } from 'react'
import 'typeface-bitter'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'
import { rhythm } from '../utils/typography'

class FooterBio extends PureComponent {
  render() {
    return (
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
          <a href="/#resume">Resume</a>
          &nbsp;&bull;&nbsp;
          <a href="/#contact">Contact</a>
          &nbsp;&bull;&nbsp;
          <a href="/gifs">GIFs</a>
        </p>
      </div>
    )
  }
}

export default FooterBio

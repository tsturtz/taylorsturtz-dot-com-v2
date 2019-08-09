import React, { Component } from 'react'
import { Link } from 'gatsby'

// Import typefaces
import 'typeface-bitter'

import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'
import { rhythm } from '../utils/typography'

class Bio extends Component {
  render() {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          src={profilePic}
          alt={`Taylor Sturtz`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
          }}
        />
        <p style={{ marginBottom: 0, marginLeft: '10px', lineHeight: '1.5', fontFamily: 'Bitter, serif' }}>
          <span style={{ paddingBottom: '5px', fontSize: rhythm(.75) }}>Hi 👋 I'm Taylor (Sturtz)</span><br />
          <span style={{ color: '#4b4b4b' }}>
            Check me out on
            <a href="https://github.com/tsturtz" className="greenTheme" target="_blank"> GitHub </a>
            and
            <a href="https://twitter.com/taylorsturtz" className="greenTheme" target="_blank"> Twitter</a>
          </span>
        </p>
      </div>
    )
  }
}

export default Bio

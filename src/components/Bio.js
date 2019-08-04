import React, { Component } from 'react'
import { Link } from 'gatsby'

// Import typefaces
import 'typeface-bitter'
import 'typeface-merriweather'

import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'
import { rhythm } from '../utils/typography'

class Bio extends Component {
  render() {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Link to={'/'}>
          <img
            src={profilePic}
            alt={`Taylor Sturtz`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(3),
            }}
          />
        </Link>
        <p style={{ marginBottom: 0, marginLeft: '10px', lineHeight: '1.5' }}>
          <span style={{ paddingBottom: '5px' }}>👋Hi, I'm Taylor. I write about my web dev experiences here.</span><br />
          <span>
            Check me out on
            <a href="https://github.com/tsturtz" className="greenTheme" target="_blank"> GitHub </a>
            &bull;
            Follow me on
            <a href="https://twitter.com/taylorsturtz" className="greenTheme" target="_blank"> Twitter</a>
          </span>
        </p>
      </div>
    )
  }
}

export default Bio

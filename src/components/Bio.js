import React, { Component } from 'react'
import { Link } from 'gatsby'

// Import typefaces
import 'typeface-bitter'

import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'
import { rhythm } from '../utils/typography'

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <img
          src={profilePic}
          alt={`Taylor Sturtz`}
          className="bioPic"
        />
        <p style={{ marginBottom: 0, lineHeight: '1.5', fontFamily: 'Bitter, serif' }}>
          <span className="bioGreeting" style={{ fontWeight: 700 }}>Hi, I'm Taylor Sturtz</span>
          <br />
          <em className="bioGreetingSubtitle">
            javascript junky / soccer hooligan / daddy shark
          </em>
          <em className="bioGreetingSubtitleMobile">
            <div>javascript junky</div>
            <div>soccer hooligan</div>
            <div>daddy shark</div>
          </em>
        </p>
      </div>
    )
  }
}

export default Bio

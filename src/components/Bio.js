import React from 'react'
import { Link } from 'gatsby'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
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
            Run <code style={{ color: '#4b4b4b' }}>npx taylorsturtz</code>
            &nbsp;or&nbsp;
            <a href="https://github.com/tsturtz" className="greenTheme" target="_blank">
              check me out on GitHub
            </a>
          </span>
        </p>
      </div>
    )
  }
}

export default Bio

import React from 'react'
import { Link } from 'gatsby'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../assets/nothingtoocrazy.svg'
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
            alt={`Nothing Too Crazy`}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: rhythm(3.5),
              height: rhythm(3.5),
            }}
          />
        </Link>
        <p style={{ marginBottom: 0, marginLeft: '10px', lineHeight: '1.5' }}>
          <span style={{ paddingBottom: '5px' }}>A collection of thoughts by a collection of devs</span><br />
          <a href="https://github.com/nothingtoocrazy" className="greenNTC" target="_blank">
            Check us out on GitHub
          </a>
        </p>
      </div>
    )
  }
}

export default Bio

import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './nothingtoocrazy.svg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Nothing Too Crazy`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Assembled by <strong>Nothing Too Crazy</strong><br />
          <a href="https://github.com/nothingtoocrazy">
            Check us out on GitHub
          </a>
        </p>
      </div>
    )
  }
}

export default Bio

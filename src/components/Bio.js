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
        style={{ display: 'flex', alignItems: 'center' }}
      >
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
        <p style={{ marginBottom: 0 }}>
          A collection of thoughts by <strong>Nothing Too Crazy</strong> devs<br />
          <a href="https://github.com/nothingtoocrazy" className="greenlink" target="_blank">
            Check us out on GitHub
          </a>
        </p>
      </div>
    )
  }
}

export default Bio

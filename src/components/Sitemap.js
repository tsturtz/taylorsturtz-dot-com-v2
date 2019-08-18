import React, { PureComponent, Fragment } from 'react'
import 'typeface-bitter'
import { rhythm } from '../utils/typography'

class Sitemap extends PureComponent {
  render() {
    const { orientation } = this.props;
    return (
      <div
        style={{
          display: 'block',
          textAlign: 'center',
          background: '#f3bc34',
          marginBottom: orientation === 'top' ? '30px' : 0,
          marginTop: orientation === 'bottom' ? '30px' : 0,
        }}
      >
        <div
          className="sitemapLinks"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '.8rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(26),
          }}
        >
          <a href="/#projects">Projects</a>
          <a href="/#blog">Blog</a>
          <a href="/resume" target="_blank">Resume</a>
          <a href="/#contact">Contact</a>
        </div>
      </div>
    )
  }
}

export default Sitemap

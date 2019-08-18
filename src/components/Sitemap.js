import React, { PureComponent, Fragment } from 'react'
import 'typeface-bitter'
import { rhythm } from '../utils/typography'

class Sitemap extends PureComponent {
  render() {
    const { top } = this.props;
    return (
      <div
        style={{
          display: 'block',
          margin: top ? '30px 0 50px' : '10px 0 30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: rhythm(26),
          }}
        >
          <div className="sitemapLinkUnderline">
            <a href="/#projects" className="sitemapLink">Projects</a>
          </div>
          <div className="sitemapLinkUnderline">
            <a href="/#blog" className="sitemapLink">Blog</a>
          </div>
          <div className="sitemapLinkUnderline">
            <a href="/resume" target="_blank" className="sitemapLink">Resume</a>
          </div>
          <div className="sitemapLinkUnderline">
            <a href="/#contact" className="sitemapLink">Contact</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sitemap

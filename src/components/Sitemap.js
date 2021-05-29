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
          margin: '20px 0 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            margin: '0 auto',
            maxWidth: rhythm(26),
            zIndex: 1000,
            position: 'relative',
          }}
        >
          <a href="/#projects" className="sitemapLinkContainer">
            <span className="sitemapLink">Projects</span>
            <div className="sitemapLinkUnderline">-----------</div>
            <div className="sitemapLinkUnderlineOverlay" />
          </a>
          <a href="/#blog" className="sitemapLinkContainer">
            <span className="sitemapLink">Blog</span>
            <div className="sitemapLinkUnderline">-----------</div>
            <div className="sitemapLinkUnderlineOverlay" />
          </a>
          <a href="/#contact" className="sitemapLinkContainer">
            <span className="sitemapLink">Contact</span>
            <div className="sitemapLinkUnderline">-----------</div>
            <div className="sitemapLinkUnderlineOverlay" />
          </a>
          <a href="/resume" target="_blank" className="sitemapLinkContainer">
            <span className="sitemapLink">Resume</span>
            <div className="sitemapLinkUnderline">-----------</div>
            <div className="sitemapLinkUnderlineOverlay" />
          </a>
        </div>
      </div>
    )
  }
}

export default Sitemap

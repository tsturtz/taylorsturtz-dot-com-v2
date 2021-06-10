import React, { PureComponent, Fragment } from 'react'
import 'typeface-bitter'
import profilePic from '../assets/profile-pics/taylorsturtz-london.png'
import { rhythm } from '../utils/typography'
import Sitemap from '../components/Sitemap'

class FooterBio extends PureComponent {
  render() {
    const { showButtons = true } = this.props

    return (
      <Fragment>
        <div className="greyUnderline wavyDivider" />
        {showButtons ? (
          <Sitemap />
        ) : <em style={{ display: 'inherit', textAlign: 'center', fontSize: 10 }}><span className="linkLikeStyle" style={{ cursor: 'pointer' }} onClick={() => window.print()}>Print-friendly mode</span> will print just the resume part of this page!</em>}
        <div className="footerBioContainer" style={{ paddingBottom: '30px' }}>
          <a href="/" className="footerBioLink">
            <img
              src={profilePic}
              alt="Taylor Sturtz"
              className="footerBioPic"
            />
            <div className="footerBioTitle">
              <p style={{ marginBottom: 0, fontSize: 16 }}>Taylor Sturtz</p>
              <span style={{ display: 'flex', alignItems: 'center', color: '#ababab', maxHeight: '15px', whiteSpace: 'nowrap' }}>
                <span className="mdi mdi-console-line" />
                &nbsp;
                <code>npx taylorsturtz</code>
              </span>
            </div>
          </a>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="socialIcons">
              <a href="https://www.linkedin.com/in/taylorsturtz/" target="_blank" className="mdi mdi-linkedin-box" />
              <a href="https://twitter.com/taylorsturtz" target="_blank" className="mdi mdi-twitter" />
              <a href="https://github.com/tsturtz" target="_blank" className="mdi mdi-github-circle" />
              <a href="https://dev.to/tsturtz" target="_blank" className="mdi mdi-dev-to" />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default FooterBio

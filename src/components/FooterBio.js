import React, { PureComponent, Fragment } from 'react'
import 'typeface-bitter'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'
import { rhythm } from '../utils/typography'
import Sitemap from '../components/Sitemap'

class FooterBio extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="greyUnderline wavyDivider" />
        <Sitemap />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={profilePic}
              alt="Taylor Sturtz"
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(2),
                height: rhythm(2),
              }}
            />
            <div style={{ paddingRight: rhythm(1), lineHeight: '1.5' }}>
              <p style={{ marginBottom: 0 }}>Taylor Sturtz</p>
              <span style={{ display: 'flex', alignItems: 'center', color: '#ababab', maxHeight: '15px' }}>
                <span className="mdi mdi-console-line" />
                &nbsp;
                <code>npx taylorsturtz</code>
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
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

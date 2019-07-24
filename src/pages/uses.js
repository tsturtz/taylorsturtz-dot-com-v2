import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import 'typeface-montserrat'

import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class UsesPage extends PureComponent {
  render() {
    return (
      <Layout location={this.props.location} style={{ background: 'black' }}>
        <h1 style={{ color: '#4D3E82', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
          I'm not influential enough to have a /uses page 🙃
        </h1>
        <hr style={{ marginTop: '2rem' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
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
              <p style={{ marginBottom: 0, fontSize: rhythm(.4), color: '#ababab', fontStyle: 'italic' }}>
                Software Developer
              </p>
            </div>
          </div>
          <p style={{ marginBottom: 0, fontSize: rhythm(.4), fontStyle: 'italic' }}>
            <a href="/" target="_blank">Blog</a>
            &nbsp;&bull;&nbsp;
            <a href="https://github.com/tsturtz" target="_blank">GitHub</a>
            &nbsp;&bull;&nbsp;
            <a href="https://twitter.com/taylorsturtz" target="_blank">Twitter</a>
          </p>
        </div>
      </Layout>
    )
  }
}

export default UsesPage

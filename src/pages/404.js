import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import lostGif from '../assets/lost.gif'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class NotFoundPage extends PureComponent {
  render() {
    return (
      <Layout location={this.props.location} style={{ background: 'black' }}>
        <h2>😱 404 Not Found</h2>
        <p>You must be...</p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/nQDUtjwoaTY?autoplay=1&loop=1&playlist=nQDUtjwoaTY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p><Link to={'/'}>👈 Visit my dev blog and portfolio</Link></p>
        <hr />
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

export default NotFoundPage

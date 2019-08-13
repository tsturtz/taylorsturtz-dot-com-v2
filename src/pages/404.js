import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import FooterBio from '../components/FooterBio'
import Bio from '../components/Bio'
import lostGif from '../assets/lost.gif'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class NotFoundPage extends PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <h2>😱 404 Not Found</h2>
        <p>You must be...</p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/nQDUtjwoaTY?autoplay=1&loop=1&playlist=nQDUtjwoaTY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p><Link to={'/'}>👈 Visit my site</Link></p>
      </Layout>
    )
  }
}

export default NotFoundPage

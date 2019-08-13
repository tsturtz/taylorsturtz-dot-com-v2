import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import 'typeface-bitter'

import { rhythm } from '../utils/typography'
import FooterBio from '../components/FooterBio'
import Layout from '../components/Layout'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class ContactFailure extends PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <img style={{ display: 'flex', margin: '60px auto 0', height: '220px' }} src="https://media3.giphy.com/media/ILhlmcFLnYEms/giphy-downsized.gif" alt="Confused"/>
        <h1 style={{ textAlign: 'center', fontFamily: 'Bitter, serif' }}>
          Uh oh...
        </h1>
        <h2 style={{ textAlign: 'center', fontFamily: 'Bitter, serif', marginTop: 0 }}>
          I have no idea where your message went.
        </h2>
        <h3 style={{ textAlign: 'center', marginTop: 0 }}>
          Please email me directly instead:&nbsp; ✉️ taylorsturtz@gmail.com
        </h3>
      </Layout>
    )
  }
}

export default ContactFailure

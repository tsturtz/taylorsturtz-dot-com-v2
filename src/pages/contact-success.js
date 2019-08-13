import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import 'typeface-bitter'

import { rhythm } from '../utils/typography'
import FooterBio from '../components/FooterBio'
import Layout from '../components/Layout'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class ContactSuccess extends PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <img style={{ display: 'flex', margin: '60px auto 0' }} src="https://i.imgflip.com/2k8mjk.jpg" alt="Tanks"/>
        <h2 style={{ textAlign: 'center', fontFamily: 'Bitter, serif' }}>
        ✔️ Your message has been sent.
        </h2>
      </Layout>
    )
  }
}

export default ContactSuccess

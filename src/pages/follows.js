import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import 'typeface-bitter'

import { rhythm } from '../utils/typography'
import FooterBio from '../components/FooterBio'
import Layout from '../components/Layout'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

class Follows extends PureComponent {
  render() {
    return (
      <Layout location={this.props.location}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Bitter, serif', marginTop: '90px' }}>
          This is where I'll list devs in the community I follow and for what reasons.
        </h2>
      </Layout>
    )
  }
}

export default Follows

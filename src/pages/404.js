import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import lostGif from '../assets/lost.gif'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} style={{ background: 'black' }}>
        <h1>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#4D3E82',
            }}
            to={'/'}
          >
            Nothing Too Crazy Blog
          </Link>
        </h1>
        {/* <Bio /> */}
        <hr style={{ marginTop: '2rem' }} />
        <h2>😱 404 Not Found</h2>
        <p>You must be...</p>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/nQDUtjwoaTY?autoplay=1&loop=1&playlist=nQDUtjwoaTY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>Click <Link to={'/'}>here</Link> for the blog</p>
      </Layout>
    )
  }
}

export default NotFoundPage

import React, { Component } from 'react'
import { Link } from 'gatsby'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Masonry from 'react-masonry-component'

import { rhythm } from '../utils/typography'
import Layout from '../components/Layout'
import Bio from '../components/Bio'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

const masonryOptions = { transitionDuration: 0 }
const imagesLoadedOptions = { background: '.my-bg-image-el' }

const gifUrls = [
  { alt: 'Nick Kroll Publizity face', url: 'https://78.media.tumblr.com/74b16b16729c99fcc39ee86dcac015aa/tumblr_inline_nip5xzv5R01r438xj.gif' },
  { alt: 'Carl Winslow - Uhhhh', url: 'https://media3.giphy.com/media/ILhlmcFLnYEms/giphy-downsized.gif' },
  { alt: 'Martin - Shenaynay - hold up', url: 'https://media3.giphy.com/media/26AHICv4otlZ0ruGk/giphy.gif' },
  { alt: 'Martin - Shenaynay', url: 'https://media1.tenor.com/images/846c731e2d620e8b3a6649330e4f53e7/tenor.gif' },
  { alt: 'Marsha Brady - Sure Jan', url: 'http://giphygifs.s3.amazonaws.com/media/38fblIIrHLMPe/giphy.gif' },
  { alt: 'Fuck yeah kid', url: 'https://media1.tenor.com/images/eec4d7d84836d936f96de9c307be53b2/tenor.gif' },
  { alt: 'Surprised owl', url: 'https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif' },
  { alt: 'Breakfast Club - cool', url: 'https://media.giphy.com/media/62PP2yEIAZF6g/giphy.gif' },
  { alt: 'Macho Man Randy Savage - OHHH YEAHHH', url: 'https://media.giphy.com/media/13DrdRI2JqdoLC/giphy.gif' },
  { alt: 'Kid blown away', url: 'https://media.tenor.com/images/8dcfa812e77878d454425a2aa46e2e2b/tenor.gif' },
  { alt: 'Last Man on Earth - Tandy - What?!', url: 'https://media.giphy.com/media/xgTlO6K7ZllZu/giphy.gif' },
  { alt: 'Last Man on Earth - Tandy - You dirty dog', url: 'https://media.giphy.com/media/l4hLzQ8GC0lmWd4SA/giphy.gif' },
  { alt: 'Last Man on Earth - Tandy - I\'d love to!', url: 'https://media.giphy.com/media/3o8doPV2heuYjdN2Fy/giphy.gif' },
  { alt: 'Kanye Smile then Serious', url: 'https://media1.tenor.com/images/6e1865c19c66b4f57b3e4e72f6b98134/tenor.gif' },
  { alt: 'Oh damn', url: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/14/asset/buzzfeed-prod-fastlane-03/anigif_sub-buzz-28578-1512589716-2.gif' },
]

class GifsPage extends Component {
  state = {
    copiedUrl: null,
    copiedAlt: null,
    dimmer: false,
  }

  gifs = gifUrls.map((gifUrl, idx) => (
    <CopyToClipboard
      key={idx}
      text={gifUrl.url}
      onCopy={(copiedUrl) => {
        const copiedAlt = gifUrls.find((gif) => gif.url === copiedUrl).alt;
        this.setState({ copiedUrl, copiedAlt })
      }}
    >
      <li className="no-list-style">
        <img
          src={gifUrl.url}
          alt={gifUrl.alt}
          onMouseOver={() => { this.setState({ dimmer: true }) }}
          onMouseOut={() => { this.setState({ dimmer: false }) }}
        />
      </li>
    </CopyToClipboard>
  ))

  render() {
    const { copiedUrl, copiedAlt, dimmer } = this.state;
    return (
      <Layout location={this.props.location} style={{ background: 'black' }}>
        <h1 style={{ color: '#4D3E82', textAlign: 'center' }}>
          A Choice (👌) Collection of GIFs
        </h1>
        <hr style={{ marginTop: '2rem' }} />
          {copiedUrl && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #36B5A2', margin: '0 10px 20px', padding: '5px 0' }}>
              <div>'<strong>{copiedAlt}</strong>' was copied to your clipboard</div>
              <div style={{ fontSize: '10px' }}>{<em>{copiedUrl}</em>}</div>
            </div>
          )}
          <Masonry
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={true}
            imagesLoadedOptions={imagesLoadedOptions}
          >
            {this.gifs}
          </Masonry>
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

export default GifsPage

import React, { Component } from 'react'
import { Link } from 'gatsby'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Masonry from 'react-masonry-component'
import 'typeface-bitter'

import { rhythm } from '../utils/typography'
import FooterBio from '../components/FooterBio'
import Layout from '../components/Layout'
import profilePic from '../assets/profile-pics/taylorsturtz-mischief.png'

const masonryOptions = { transitionDuration: 0 }
const imagesLoadedOptions = { background: '.my-bg-image-el' }

const gifUrls = [
  { alt: 'Nick Kroll Publizity face', url: 'https://78.media.tumblr.com/74b16b16729c99fcc39ee86dcac015aa/tumblr_inline_nip5xzv5R01r438xj.gif' },
  { alt: 'Carl Winslow - Uhhhh', url: 'https://media3.giphy.com/media/ILhlmcFLnYEms/giphy-downsized.gif' },
  { alt: 'Martin - Shenaynay - hold up', url: 'https://media3.giphy.com/media/26AHICv4otlZ0ruGk/giphy.gif' },
  { alt: 'Martin - Shenaynay', url: 'https://media1.tenor.com/images/846c731e2d620e8b3a6649330e4f53e7/tenor.gif' },
  { alt: 'Shanaynay Party', url: 'https://media.giphy.com/media/l3V0r5w28RhATL9zG/giphy.gif' },
  { alt: 'Marsha Brady - Sure Jan', url: 'https://giphygifs.s3.amazonaws.com/media/38fblIIrHLMPe/giphy.gif' },
  { alt: 'Fuck yeah kid', url: 'https://media1.tenor.com/images/eec4d7d84836d936f96de9c307be53b2/tenor.gif' },
  { alt: 'Surprised owl', url: 'https://media.giphy.com/media/vQqeT3AYg8S5O/giphy.gif' },
  { alt: 'Breakfast Club - cool', url: 'https://media.giphy.com/media/62PP2yEIAZF6g/giphy.gif' },
  { alt: 'Macho Man Randy Savage - OHHH YEAHHH', url: 'https://media.giphy.com/media/13DrdRI2JqdoLC/giphy.gif' },
  { alt: 'Kid blown away', url: 'https://media.tenor.com/images/8dcfa812e77878d454425a2aa46e2e2b/tenor.gif' },
  { alt: 'Last Man on Earth - Tandy - What?!', url: 'https://media.giphy.com/media/xgTlO6K7ZllZu/giphy.gif' },
  { alt: 'Last Man on Earth - Tandy - I\'d love to!', url: 'https://media.giphy.com/media/3o8doPV2heuYjdN2Fy/giphy.gif' },
  { alt: 'Kanye Smile then Serious', url: 'https://media1.tenor.com/images/6e1865c19c66b4f57b3e4e72f6b98134/tenor.gif' },
  { alt: 'Oh damn', url: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/14/asset/buzzfeed-prod-fastlane-03/anigif_sub-buzz-28578-1512589716-2.gif' },
  { alt: 'Judge Judy Looking at Computer', url: 'https://media.giphy.com/media/7yDthHaq2haXS/giphy.gif' },
  { alt: 'Extremely Shocked Dude', url: 'https://media.giphy.com/media/4WRfY6epo5vZ6/giphy.gif' },
  { alt: 'Prison Mike - "Tanks"', url: 'https://i.imgflip.com/2k8mjk.jpg' },
  { alt: 'Ali G - Respect', url: 'https://giphygifs.s3.amazonaws.com/media/8JiEPO8NRh15u/giphy.gif' },
  { alt: 'Bye!', url: 'https://media0.giphy.com/media/m9eG1qVjvN56H0MXt8/giphy-downsized.gif' },
  { alt: 'Gotcha', url: 'https://media1.giphy.com/media/3oz8xs8WYZr0dJV3kQ/source.gif' },
  { alt: 'Oh yaaa kid', url: 'https://media1.tenor.com/images/19401f67708c3bcff5b14d9cd655567e/tenor.gif' },
  { alt: 'Anger squint owl', url: 'https://media1.giphy.com/media/7NP07dTr1gZstAan9f/giphy-downsized.gif' },
  { alt: 'Excited girl', url: 'https://i.giphy.com/media/xTiN0CNHgoRf1Ha7CM/giphy-downsized.gif' },
  { alt: 'Emma Watson weird', url: 'https://media2.giphy.com/media/PEglcwKOSAjlu/giphy.gif' },
  { alt: 'Word!', url: 'https://i.giphy.com/media/xT1R9ERHwyzbCkIwla/giphy-downsized.gif' },
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
      <Layout location={this.props.location}>
        <h2 style={{ textAlign: 'center', fontFamily: 'Bitter, serif', marginTop: '90px' }}>
          A 👌 Collection of Reaction GIFs
        </h2>
        <div className="greyUnderline wavyDivider" style={{ marginBottom: '20px' }} />
        {copiedUrl && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #36B5A2', margin: '0 10px 20px', padding: '5px 0' }}>
            <div>'<strong className="accent">{copiedAlt}</strong>' was copied to your clipboard</div>
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
      </Layout>
    )
  }
}

export default GifsPage

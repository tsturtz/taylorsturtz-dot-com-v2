import React, { PureComponent, Fragment } from 'react'
import detectPrint from 'react-detect-print'
import { rhythm } from '../../utils/typography'
import { portfolioTypePillStyles } from '../../utils/consts'
import { ResumeComponent } from '../../components/ResumeComponent';

class Resume extends PureComponent {
  render() {
    const { printing } = this.props;
    // if (printing) {
    //   return (  )
    // }
    return (
      <Fragment>
        <div
          style={{
            display: 'block',
            textAlign: 'center',
            background: '#f3bc34',
          }}
          onClick={() => window.print()}
          role="button"
        >
          <span style={{ color: 'white', fontSize: '.8rem' }}>
            <span className="mdi mdi-printer" /> Print
          </span>
        </div>
        <div
          id="resume"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(26),
            padding: '20px 0',
          }}
        >
          <ResumeComponent print={false} pillStyles={portfolioTypePillStyles} />
        </div>
      </Fragment>
    )
  }
}

export default detectPrint(Resume)
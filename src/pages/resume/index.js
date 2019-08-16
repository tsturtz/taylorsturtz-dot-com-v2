import React, { PureComponent, Fragment } from 'react'
import { rhythm } from '../../utils/typography'
import { portfolioTypePillStyles } from '../../utils/consts'
import { ResumeComponent } from '../../components/ResumeComponent';

class Resume extends PureComponent {
  render() {
    return (
      <Fragment>
        <a
          href="/resume/print"
          style={{
            display: 'block',
            position: 'fixed',
            textAlign: 'center',
            lineHeight: 1,
            transform: 'rotate(45deg)',
            background: '#f3bc33',
            padding: '100px 100px 10px',
            right: '-125px',
            top: '-80px',
          }}
        >
          <small style={{ color: 'white' }}>
            <span className="mdi mdi-open-in-new" />
            <br />
            Print
            <br />
            version
          </small>
        </a>
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

export default Resume
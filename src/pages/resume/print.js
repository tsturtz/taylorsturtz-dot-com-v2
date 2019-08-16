import React, { PureComponent, Fragment } from 'react'
import { rhythm } from '../../utils/typography'
import { portfolioTypePillStylesPrint } from '../../utils/consts'
import { ResumeComponent } from '../../components/ResumeComponent';

class PrintResume extends PureComponent {
  // componentDidMount() {
  //   setTimeout(() => {
  //     window.print();
  //   }, 1000);
  // }
  render() {
    return (
      <div
        id="resume"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(26),
          padding: '20px 0',
        }}
      >
        <ResumeComponent print pillStyles={portfolioTypePillStylesPrint} />
      </div>
    )
  }
}

export default PrintResume
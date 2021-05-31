import React, { PureComponent, Fragment } from 'react'
import { rhythm } from '../utils/typography'
import resumePdf from '../assets/TAYLOR_STURTZ_RESUME.pdf'
import '@mdi/font/css/materialdesignicons.min.css'
import 'typeface-bitter'

const sectionMargins = {
  marginRight: 0,
  marginBottom: '8px',
  marginTop: '15px',
}

const skills = [
  'JavaScript / TypeScript',
  'Node.js',
  'React',
  'Redux',
  'React Native',
  'AngularJS',
  'Angular',
  'jQuery',
  'HTML',
  'CSS3 / SASS',
  'REST / GraphQL',
  'Git',
  'Linux',
  'Unit Testing',
  'Agile / Scrum',
  'Firebase',
  'CI/CD',
  'Serverless',
  'AWS / Azure / GCP',
  'MongoDB',
  'PHP / Laravel',
  'Webpack / Gulp / Grunt',
  'Golang',
  'Java / Spring',
];

class Resume extends PureComponent {
  render() {
    return (
      <Fragment>
        <div
          id="resume"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(26),
            padding: `10px ${rhythm(1.5)}`,
            background: '#fff',
          }}
        >
          <div className="topNav">
            <div className="topNavContent">
              <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
                <span className="mdi mdi-arrow-left" />&nbsp;Back to site
              </a>
              <div className="topNavButtons">
                <a href={resumePdf} download="TAYLOR_STURTZ_RESUME" className="resumeDownloadBtn">
                  <span className="mdi mdi-file-download" />&nbsp;Download (PDF)
                </a>
                <span
                  className="resumePrintBtn"
                  onClick={() => window.print()}
                >
                  <span className="mdi mdi-printer" />&nbsp;Print-friendly
                </span>
              </div>
            </div>
            <div className="yellowUnderline wavyDivider" />
          </div>
          <div className="resumeContent">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div id="nameAndTitle">
                <h1 style={{ margin: '0 0 10px 0' }}>Taylor Sturtz</h1>
                <blockquote style={{ marginBottom: '10px' }}>
                  <h3 id="title" style={{ margin: 0 }}><strong>Software Engineer / Irvine, CA</strong></h3>
                </blockquote>
              </div>
              <div id="contactInfo" style={{ margin: '11px 0 0 0', textAlign: 'right', width: '32%' }}>
                <h3 className="resume-contact-items" style={{ margin: '0 0 5px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mdi mdi-phone" style={{ color: '#ababab' }} />
                  <span className="phoneNumberPrint">949-500-3960</span>
                  <a className="phoneNumberWeb" href="tel:949-500-3960">949-500-3960</a>
                </h3>
                <h3 className="resume-contact-items" style={{ margin: '0 0 5px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mdi mdi-link-variant" style={{ color: '#ababab' }} />
                  <span className="websitePrint">taylorsturtz.com</span>
                  <a className="websiteWeb" href="https://taylorsturtz.com" target="_blank">taylorsturtz.com</a>
                </h3>
                <h3 className="resume-contact-items" style={{ margin: '0 0 5px 0', display: 'flex', justifyContent: 'space-between' }}>
                  <span className="mdi mdi-at" style={{ color: '#ababab' }} />
                    <span className="emailPrint">taylorsturtz@gmail.com</span>
                    <a className="emailWeb" href="mailto:taylorsturtz@gmail.com">taylorsturtz@gmail.com</a>
                </h3>
              </div>
            </div>
            <hr style={{ marginBottom: '8px' }} />
            <p style={{ marginBottom: '20px', lineHeight: 1.4 }}>
              <em>I write <span className="empatheticCodePrint">empathetic code</span><a className="empatheticCodeWeb" href="https://www.benjaminjohnson.me/blog/empathetic-code/" target="_blank">empathetic code</a> and build applications that people connect with directly. Regardless of the platform, solving difficult problems and building smooth user experiences is my jam.</em>
            </p>

            {/* SKILLS */}
            <blockquote style={{ ...sectionMargins }}>
              <h3 id="title" style={{ margin: '0 0 10px 0' }}><strong>Skills</strong><small>&nbsp;(in order of expertise / familiarity)</small></h3>
            </blockquote>
            <hr style={{ marginBottom: '8px' }} />
            <div style={{ width: '100%' }}>
              {skills.map((skill) => (
                <span className="skills">{skill}</span>
              ))}
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ width: '65%' }}>
                {/* EXPERIENCE */}
                <blockquote style={{ ...sectionMargins }}>
                  <h3 id="title" style={{ margin: '0 0 10px 0' }}><strong>Experience</strong></h3>
                </blockquote>
                <hr style={{ marginBottom: '8px' }} />
                {/* Blizzard */}
                <p style={{ margin: 0 }}>
                  <span>
                    <strong>Software Engineer</strong> &bull; <em>Blizzard Entertainment</em>
                    <br />
                    <small>
                      <em>May 2020 - present &bull; Irvine, CA</em>
                    </small>
                  </span>
                </p>
                <ul style={{ marginTop: '10px', marginBottom: '15px', position: 'relative', left: '15px', width: 'calc(100% - 15px)' }}>
                  <li style={{ margin: 0 }}>TBD</li>
                </ul>
                {/* Restaurant365 */}
                <p style={{ margin: 0 }}>
                  <span>
                    <strong>Software Engineer</strong> &bull; <em>Restaurant365</em>
                    <br />
                    <small>
                      <em>October 2019 - May 2020 &bull; Irvine, CA</em>
                    </small>
                  </span>
                </p>
                <ul style={{ marginTop: '10px', marginBottom: '15px', position: 'relative', left: '15px', width: 'calc(100% - 15px)' }}>
                  <li style={{ margin: 0 }}>Developed features using Typescript, React, AngularJS, and Node.js.</li>
                  <li style={{ margin: 0 }}>Created PDF manipulation microservices and deployed them to AWS and Azure using the Serverless Framework and GitLab CI.</li>
                  <li style={{ margin: 0 }}>Provided thorough code reviews, improved deployment processes, and greatly improved developer experience by enabling end-to-end, cross-platform local development.</li>
                </ul>
                {/* Ytel */}
                <p style={{ margin: 0 }}>
                  <span>
                    <strong>Software Developer</strong> &bull; <em>Ytel</em>
                    <br />
                    <small>
                      <em>March 2017 - Sept 2019 &bull; Foothill Ranch, CA</em>
                    </small>
                  </span>
                </p>
                <ul style={{ marginTop: '10px', marginBottom: '15px', position: 'relative', left: '15px', width: 'calc(100% - 15px)' }}>
                  <li style={{ margin: 0 }}>Built SSO and user management systems using JWTs and GraphQL.</li>
                  <li style={{ margin: 0 }}>Developed an interface for plotting and managing interactive nodes in a tree structure (similar to an org chart) on browser canvas.</li>
                  <li style={{ margin: 0 }}>Led development of React/Redux messaging campaign applications and maintained legacy apps written in PHP Laravel, Vue.js, and AngularJS.</li>
                  {/* <li style={{ margin: 0 }}>Introduced unit-testing to client-side code bases and maintained healthy coverage.</li> */}
                  <li style={{ margin: 0 }}>Wrote GitLab CI and Node.js scripts to drive forward DevOps culture and improve productivity and performance through automation.</li>
                  <li style={{ margin: 0 }}>Managed DNS, migrated, configured, and maintained web projects on an optimized LEMP stack virtual machine.</li>
                </ul>
                {/* MMG */}
                <p style={{ margin: 0 }}>
                  <span>
                    <strong>Design Team Lead</strong> &bull; <em>MMG INTL</em>
                    <br />
                    <small>
                      <em>July 2011 - Oct 2016 &bull; Orange, CA</em>
                    </small>
                  </span>
                </p>
                <ul style={{ marginTop: '10px', marginBottom: '20px', position: 'relative', left: '15px', width: 'calc(100% - 15px)' }}>
                </ul>

                {/* EDUCATION */}
                <blockquote style={{ ...sectionMargins }}>
                  <h3 id="title" style={{ margin: '0 0 10px 0' }}><strong>Education</strong></h3>
                </blockquote>
                <hr style={{ marginBottom: '8px' }} />
                {/* LearningFuze */}
                <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', lineHeight: 1.4 }}>
                  <span>
                    <strong>Web Development</strong> &bull; <em>LearningFuze</em>
                  </span>
                  <span><em>2016</em> &bull; Irvine, CA</span>
                </p>
                {/* OCC */}
                <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', lineHeight: 1.4 }}>
                  <span>
                    <strong>Web Design</strong> &bull; <em>Orange Coast College</em>
                  </span>
                  <span><em>2014</em> &bull; Costa Mesa, CA</span>
                </p>
                {/* CSULB */}
                <p style={{ margin: 0, display: 'flex', justifyContent: 'space-between', lineHeight: 1.4 }}>
                  <span>
                    <strong>B.A., Art History</strong> &bull; <em>California State University</em>
                  </span>
                  <span><em>2012</em> &bull; Long Beach, CA</span>
                </p>
              </div>

              <div style={{ width: '3%' }}></div>

              <div style={{ width: '32%' }}>

                {/* AWARDS */}
                <blockquote style={{ ...sectionMargins }}>
                  <h3 id="title" style={{ margin: '0 0 10px 0' }}><strong>Awards</strong></h3>
                </blockquote>
                <hr style={{ marginBottom: '8px' }} />
                {/* BAMF */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-trophy-award" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>Employee of the month</strong>
                      <br />
                      <small>
                        <em>Ytel &bull; July 2018</em>
                      </small>
                    </span>
                  </p>
                </div>
                {/* ACADEMIC LISTS */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-seal" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>President’s & Dean’s lists</strong>
                      <br />
                      <small>
                        <em>CSULB &bull; 2009 - 2012</em>
                      </small>
                    </span>
                  </p>
                </div>

                {/* ON THE WEB */}
                <blockquote style={{ ...sectionMargins }}>
                  <h3 id="title" style={{ margin: '0 0 10px 0' }}><strong>On the Web</strong></h3>
                </blockquote>
                <hr style={{ marginBottom: '8px' }} />
                {/* GitHub */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-github-circle" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>GitHub</strong>
                      <br />
                      <small>
                        <em className="githubPrint">tsturtz</em>
                        <a className="githubWeb" href="https://github.com/tsturtz" target="_blank">
                          <em>tsturtz</em>
                        </a>
                      </small>
                    </span>
                  </p>
                </div>
                {/* Twitter */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-twitter" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>Twitter</strong>
                      <br />
                      <small>
                        <em className="twitterPrint">@taylorsturtz</em>
                        <a className="twitterWeb" href="https://twitter.com/taylorsturtz" target="_blank">
                          <em>@taylorsturtz</em>
                        </a>
                      </small>
                    </span>
                  </p>
                </div>
                {/* LinkedIn */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-linkedin-box" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>LinkedIn</strong>
                      <br />
                      <small>
                        <em className="linkedinPrint">taylorsturtz</em>
                        <a className="linkedinWeb" href="https://linkedin.com/in/taylorsturtz" target="_blank">
                          <em>taylorsturtz</em>
                        </a>
                      </small>
                    </span>
                  </p>
                </div>

                {/* LANGUAGES */}
                <blockquote style={{ ...sectionMargins }}>
                  <h3 id="title" style={{ margin: '0 0 10px 0' }}><strong>Languages</strong></h3>
                </blockquote>
                <hr style={{ marginBottom: '8px' }} />
                {/* English */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-message-text" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>English</strong>
                      <br />
                      <small>
                        <em>Native</em>
                      </small>
                    </span>
                  </p>
                </div>
                {/* German */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-message-bulleted" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>German</strong>
                      <br />
                      <small>
                        <em>Limited proficiency</em>
                      </small>
                    </span>
                  </p>
                </div>
                {/* Spanish */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-message-processing" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>Spanish</strong>
                      <br />
                      <small>
                        <em>Beginner</em>
                      </small>
                    </span>
                  </p>
                </div>

                {/* INTERESTS */}
                <blockquote style={{ ...sectionMargins }}>
                  <h3 id="title" style={{ margin: '0 0 10px 0' }}><strong>Interests</strong></h3>
                </blockquote>
                <hr style={{ marginBottom: '8px' }} />
                {/* Soccer */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-soccer" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>Running / Hiking / Soccer</strong>
                      <br />
                      <small>
                        <em>I love doing stuff outdoors!</em>
                      </small>
                    </span>
                  </p>
                </div>
                {/* Music */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="mdi mdi-airplane-takeoff" style={{ fontSize: '1.3rem', color: '#ababab', marginRight: '10px' }} />
                  <p style={{ marginBottom: 0 }}>
                    <span>
                      <strong>Travel</strong>
                      <br />
                      <small>
                        <em>Last trip: England, France, & Germany</em>
                        <br />
                        <em>Next trip: Japan? New Zealand? Spain & Italy? A Disney cruise?</em>
                      </small>
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Resume
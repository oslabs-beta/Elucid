import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${pic02})` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                {/*<h2>TK Header Line</h2>*/}
                <p>
                An ever-growing number of software developers have turned to GraphQL’s query language to bolster their API game.
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
              GraphQL’s flexibility and potential for delivering precise responses with only the data a developer wants means less over- and under-fetching.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
              Yet, with all that potential comes added complications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)
export default One

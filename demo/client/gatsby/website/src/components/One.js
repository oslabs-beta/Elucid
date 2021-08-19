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
            <div className="col-7 col-12-medium">
              <header>
                <h2>Why Elucid?</h2>
                <p>
                GraphQL is awesome, but it's not without its complications.
                </p>
              </header>
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

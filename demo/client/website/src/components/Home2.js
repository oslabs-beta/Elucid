import React from 'react'
import pic03 from '../assets/images/pic03.gif'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <p>By replacing the static, explicit architecture of a RESTful API, GraphQL increases the conceptual complexity for a developer interacting with it.</p>
        </header>
        <p>
        Now, the burden is on them to make sense of the response in ways they didn’t have to worry about previously.
        </p>
        <p>In addition to lacking out-of-the-box HTTP status code manipulation, error messaging can also become vague and ambiguous. It’s not always clear when a null response field is the result of a queried-for data point simply not existing in the server, versus being the result of a malformed query or even an internal server error on the part of the GraphQL installation.
        </p>
      </div>
    </Fade>
    <ScrollLink
      to="three"
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

export default Two

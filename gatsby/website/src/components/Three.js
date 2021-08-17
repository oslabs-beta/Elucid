import React from 'react'
import pic04 from '../assets/images/pic04.gif'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{ backgroundImage: `url(${pic04})` }}
  >
    <span className="image fit main bottom">
      <img src={pic04} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          {/*<h2>Interdum felis blandit praesent sed augue</h2>*/}
          <p>We wanted to build an extension of graphql.js that wouldn’t require opting into an entire network layer ecosystem between client and server.</p>
        </header>
        <p>
        We just wanted something lightweight, direct, and easy to get off the ground. Something that felt less like an entire framework for developers to adopt, and more like a plugin to make their lives just a little bit easier and more illustrative when it comes to communicating with a GraphQL server.
        </p>
        <p>
        We believe Elucid is the most essential, minimalist error handling library for Javascript implementations of GraphQL available today. We hope you’ll give it a try and find that it helps illuminate the path forward in your own projects.
        </p>
        <ul className="actions">
          <li>
            <a href="/" className="button">
              See Elucid in Action
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="four"
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

export default Three

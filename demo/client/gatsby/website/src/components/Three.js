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
          <p>Elucid is an extension of graphql.js that improves GraphQL's error messaging and status code handling.</p>
        </header>
        <p>
        It's lightweight and easy to get off the ground. It's not an entire framework for developers to adopt, just something to make their lives a little easier.
        </p>
        <p>
        We believe Elucid is the most essential, minimalist error handling library for Javascript implementations of GraphQL available today. We hope you’ll give it a try and find that it helps illuminate the path forward in your own projects.
        </p>
        <ul className="actions">
          <li>
            <a href="/demo" className="button">
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

import React from 'react'
// import pic01 from '../assets/images/pic01.jpg'

import Elucid_Logo from '../assets/images/Elucid_Logo1.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Welcome to Elucid</h2>
        <p>
        GraphQL error handler for the rest of us.
          <br />
      
        </p>
      </header>
      <span className="image">
        <img src={Elucid_Logo} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
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
);

export default Banner

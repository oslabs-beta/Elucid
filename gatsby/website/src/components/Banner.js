import React from 'react'
// import pic01 from '../assets/images/pic01.jpg'

import Elucid_Logo from '../assets/images/Elucid_Logo1.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>ELUCID </h2>
        <p>
        Simple GraphQL error handling in a lightweight library.
          <br />
      
        </p>
      </header>
      <span className="image" id="home-lantern">
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

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
                <h2>Elucid User</h2>
                <p>
                As a web developer who has to balance my time well, 
                I'm looking to find a lightweight and opinionated error 
                handler for GraphQL                
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
              In the past, part of why I've resisted implementing connections
               to GraphQL APIs is because they return error codes that are starkly 
               different in what it takes on my end to make use of them.

              
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
              I know that I can make my own error handling logic 
               to address these issues, but that is a considerable cognitive load 
                and will take time when what I want is an out-of-the-box solution 
                that will require minimal change on my part.
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

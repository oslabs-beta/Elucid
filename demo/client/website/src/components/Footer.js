import React from 'react'

//Last part of the home page
const Footer = props => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a href="https://www.linkedin.com/company/elucid-dev" target="_blank" rel="noopener noreferrer" className="icon brands alt fa-linkedin-in">
          <span className="label">LinkedIn</span>
        </a>
      </li>
  
      <li>
        <a href="https://github.com/oslabs-beta/Elucid" target="_blank" rel="noopener noreferrer" className="icon brands alt fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>

      <li>
        <a href="/contact" className="icon solid alt fa-envelope">
          <span className="label">Email</span>
        </a>
      </li>

    </ul>
    <ul className="copyright">
      <li>&copy; Elucid. All rights reserved.</li>
    </ul>
  </footer>
)

export default Footer

import React from 'react'
import { Link } from 'gatsby'

const MobileMenu = props => (
  <nav>
    {props.menuLinks.map(link =>
      link.items ? (
        <React.Fragment key={link.name}>
          <Link className="link depth-0" to={link.link}>
            {link.name}
          </Link>
          <span className="indent-0"></span>
          {link.items.map(sublink =>
            sublink.items ? (
              <React.Fragment key={sublink.name}>
                <Link
                  style={{ marginLeft: `20px` }}
                  className="link depth-0"
                  to={sublink.link}
                >
                  {sublink.name}
                </Link>
                {sublink.items.map(nestedsublink => (
                  <div key={nestedsublink.name}>
                    <Link
                      style={{ marginLeft: `40px` }}
                      className="link depth-2"
                      to={nestedsublink.link}
                    >
                      {nestedsublink.name}
                    </Link>
                  </div>
                ))}
              </React.Fragment>
            ) : (
              <div key={sublink.name}>
                <Link
                  style={{ marginLeft: `20px` }}
                  className="link depth-1"
                  to={sublink.link}
                >
                  {sublink.name}
                </Link>
              </div>
            )
          )}
        </React.Fragment>
      ) : (
        <div key={link.name}>
          <Link className="link depth-0" to={link.link}>
            {link.name}
          </Link>
        </div>
      )
    )}
  </nav>
)

export default MobileMenu

import React from 'react'
import { Link } from 'gatsby'
import MobileMenu from './MobileMenu'

const timeoutLength = 300

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      mobileActiveClass: '',
      mouseOverButton: false,
      mouseOverMenu: false,
      mouseOverSubButton: false,
      mouseOverSubMenu: false,
    }
  }

  toggleHamburger = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => {
        // set the class for the mobile menu
        this.state.active
          ? this.setState({
              mobileActiveClass: 'navPanel-visible',
            })
          : this.setState({
              mobileActiveClass: '',
            })
      }
    )
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState)
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    }
  }

  enterButton = () => {
    this.setState({ mouseOverButton: true })
  }

  leaveButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverButton: false })
    }, timeoutLength)
  }

  enterMenu = () => {
    this.setState({ mouseOverMenu: true })
  }

  leaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false })
    }, timeoutLength)
  }

  enterSubButton = () => {
    this.setState({ mouseOverSubButton: true })
  }

  leaveSubButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubButton: false })
    }, timeoutLength)
  }

  enterSubMenu = () => {
    this.setState({ mouseOverSubMenu: true })
  }

  leaveSubMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverSubMenu: false })
    }, timeoutLength)
  }

  render() {
    const siteTitle = this.props.siteTitle
    const menuLinks = this.props.menuLinks
    const open = this.state.mouseOverButton || this.state.mouseOverMenu
    const subOpen = this.state.mouseOverSubButton || this.state.mouseOverSubMenu

    return (
      <React.Fragment>
        <div className={`navbar-menu ${this.state.mobileActiveClass}`}>
          <div id="titleBar">
            <a
              role="button"
              onClick={() => this.toggleHamburger()}
              className="toggle"
              aria-label="Open mobile menu"
            ></a>
            <span className="title">
              <Link to="/">{siteTitle}</Link>
            </span>
          </div>
          <div id="navPanel">
            <MobileMenu siteTitle={siteTitle} menuLinks={menuLinks} />
          </div>
        </div>

        <header id="header">
          <h1 id="logo">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <div className="navbar-menu">
            <nav>
              <ul style={{ display: 'flex', flex: 1 }}>
                {menuLinks.map(link =>
                  link.items ? (
                    <React.Fragment key={link.name}>
                      <li key={link.name}>
                        <Link
                          onMouseEnter={this.enterButton}
                          onMouseLeave={this.leaveButton}
                          className={link.cl}
                          to={link.link}
                        >
                          {link.name}
                        </Link>
                        <ul
                          style={
                            open
                              ? {
                                  display: `block`,
                                  background: `rgba(39, 40, 51, 0.965)`,
                                  position: `absolute`,
                                  right: `55%`,
                                  minWidth: `150px`,
                                  borderRadius: `5px`,
                                }
                              : { display: `none` }
                          }
                          onMouseEnter={this.enterMenu}
                          onMouseLeave={this.leaveMenu}
                        >
                          {link.items.map(sublink =>
                            sublink.items ? (
                              <React.Fragment key={sublink.name}>
                                <li
                                  key={sublink.name}
                                  style={{
                                    textAlign: `left`,
                                    marginLeft: `0`,
                                    paddingLeft: `0`,
                                    fontSize: `14px`,
                                    display: `block`,
                                    lineHeight: `2.5`,
                                  }}
                                >
                                  <Link
                                    onMouseEnter={this.enterSubButton}
                                    onMouseLeave={this.leaveSubButton}
                                    to={sublink.link}
                                  >
                                    {sublink.name}
                                  </Link>
                                  <ul
                                    style={
                                      subOpen
                                        ? {
                                            display: `block`,
                                            background: `rgba(39, 40, 51, 0.965)`,
                                            borderRadius: `5px`,
                                            position: `absolute`,
                                            right: `100%`,
                                            width: `100%`,
                                            marginTop: `-35px`,
                                          }
                                        : { display: `none` }
                                    }
                                    onMouseEnter={this.enterSubMenu}
                                    onMouseLeave={this.leaveSubMenu}
                                  >
                                    {sublink.items.map(nestedsublink => (
                                      <li
                                        key={nestedsublink.name}
                                        style={{
                                          textAlign: `left`,
                                          marginLeft: `0`,
                                          paddingLeft: `0`,
                                          fontSize: `14px`,
                                          whiteSpace: `nowrap`,
                                          lineHeight: `2.5`,
                                          display: `block`,
                                        }}
                                      >
                                        <Link to={nestedsublink.link}>
                                          {nestedsublink.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              </React.Fragment>
                            ) : (
                              <li
                                key={sublink.name}
                                style={{
                                  textAlign: `left`,
                                  marginLeft: `0`,
                                  paddingLeft: `0`,
                                  fontSize: `14px`,
                                  lineHeight: `2.5`,
                                  display: `block`,
                                }}
                              >
                                <Link to={sublink.link}>{sublink.name}</Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    </React.Fragment>
                  ) : (
                    <li key={link.name}>
                      <Link className={link.cl} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Header

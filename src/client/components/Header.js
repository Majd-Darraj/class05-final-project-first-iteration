import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import { stack as Menu } from "react-burger-menu";

class Header extends Component {
  state = { isShow: false, isMobile: null, menuOpen: false };
  constructor(props) {
    super(props);
    this.state = { isShow: false, isMobile: null, menuOpen: false };
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  showSettings = event => {
    event.preventDefault();
  };

  showBar = () => {
    const { isShow } = this.state;

    window.scrollY > 60
      ? !isShow && this.setState({ isShow: true })
      : isShow && this.setState({ isShow: false });
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  handleItemClick() {
    this.setState({ menuOpen: false });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.showBar);
    window.addEventListener("resize", this.mobileMenu);

    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobile: window.innerWidth < 767 ? true : false
        });
      },
      false
    );
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.showBar);
  //   window.removeEventListener("resize", this.mobileMenu);
  // }

  render() {
    const scrollClass = this.state.isShow ? "navbar-scroll" : "";
    const mobileViewClass = this.state.isMobile ? "-mobile" : "";
    // const classHideMobile = this.state.isMobile ? "hide" : "";
    // const classShowMobile = !this.state.isMobile ? "show" : "";

    return (
      <header className={`masthead${mobileViewClass} ${scrollClass}`}>
        <div className="header-navbar-container">
          <div className="site-branding-container">
            <a className="logo" href="/">
              <img
                alt="logo"
                src="https://raw.githubusercontent.com/HackYourFuture-CPH/class05-final-project/master/images/thread-logo.png"
              />
            </a>
          </div>
          <div className="navigation-menu-container">
            <div className={`mobile-navigation `}>
              <Menu right onStateChange={this.handleStateChange}>
                <NavLink
                  to="/Internships"
                  className="menu-item"
                  activeClassName="mobile-menu-item-active"
                  onClick={() => this.handleItemClick()}
                >
                  Internships
                </NavLink>
                <div className="line" />
                <NavLink
                  to="/Events"
                  className="menu-item"
                  activeClassName="mobile-menu-item-active"
                >
                  Events
                </NavLink>
                <div className="line" />
                <NavLink
                  to="/Mentors"
                  className="menu-item"
                  activeClassName="mobile-menu-item-active"
                >
                  Mentors
                </NavLink>
                <div className="line" />
                <NavLink
                  to="/Networking"
                  className="menu-item"
                  activeClassName="mobile-menu-item-active"
                >
                  Networking
                </NavLink>
                <div className="line" />
                <img
                  alt="logo"
                  className="menu-item mobile-menu-logo"
                  id="logo-menu"
                  src="https://raw.githubusercontent.com/HackYourFuture-CPH/class05-final-project/master/images/thread-logo.png"
                />
                <p id="menu-text">
                  Textile Hub for Refugees' Empowerment, Employment and
                  Entrepreneurship Advancement in Denmark
                </p>
              </Menu>
            </div>
            <nav className={`navigation`} role="navigation">
              <ul className="nav-menu">
                <li className="nav-item Internships">
                  <NavLink
                    to="/Internships"
                    className="menuLink nav-link"
                    activeClassName="active-main-link"
                  >
                    Internships
                  </NavLink>
                </li>
                <li className="nav-item Events">
                  <NavLink
                    to="/Events"
                    className="menuLink nav-link"
                    activeClassName="active-main-link"
                  >
                    Events
                  </NavLink>
                </li>
                <li className="nav-item Mentors">
                  <NavLink
                    to="/Mentors"
                    className="menuLink nav-link"
                    activeClassName="active-main-link"
                  >
                    Mentors
                  </NavLink>
                </li>
                <li className="nav-item Networking">
                  <NavLink
                    to="/Networking"
                    className=" nav-link"
                    activeClassName="active-main-link"
                  >
                    Networking
                  </NavLink>
                </li>
                {/* <li className="nav-item Footer-nav">About Us</li>
                <li className="nav-item Footer-nav">Contact Us</li> */}
                {/* <li className="nav-item admin">
                  <NavLink
                    to="/admin"
                    className=" nav-link"
                    activeClassName="active-main-link"
                  >
                    Login
                  </NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

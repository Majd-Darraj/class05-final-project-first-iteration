import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  state = { isShow: false, isMobileViewport: false };

  showBar = () => {
    const { isShow } = this.state;

    window.scrollY > 60
      ? !isShow && this.setState({ isShow: true })
      : isShow && this.setState({ isShow: false });

    //  this.prev = window.scrollY;
  };

  mobileMenu = () => {
    const { isMobileViewport } = this.state;

    window.width < 768
      ? !isMobileViewport && this.setState({ isMobileViewport: true })
      : isMobileViewport && this.setState({ isMobileViewport: false });

    //  this.prev = window.scrollY;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.showBar);
    window.addEventListener("resize", this.mobileMenu);
  }

  // componentWillUnmount(){
  //      window.removeEventListener('scroll', this.showBar);
  //      window.addEventListener("resize",this.mobileMenu);
  // }

  // render(){
  //     const classHide = this.state.isShow ? 'hide' : '';
  //     return <div className={`topbar ${classHide}`}>topbar</div>;
  // }

  render() {
    const scrollClass = this.state.isShow ? "navbar-scroll" : "";
    const mobileViewClass = this.state.mobileViewport ? "isMobile" : "";
    return (
      <header className={`masthead ${scrollClass}`}>
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
            <nav className={`navigation ${mobileViewClass}`} role="navigation">
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

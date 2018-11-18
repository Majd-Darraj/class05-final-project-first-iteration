import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="masthead">
        <div className="header-navbar-container">
          <div className="site-branding-container">
            <a className="logo" href="/Events">
              <img
                alt="logo"
                src="https://raw.githubusercontent.com/HackYourFuture-CPH/class05-final-project/master/images/thread-logo.png"
              />
            </a>
          </div>
          <div className="navigation-menu-container">
            <nav className="navigation">
              <ul className="nav-menu">
                <li className="nav-item Interships">
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
                <NavLink
                    to="/login"
                    className=" nav-link"
                    activeClassName="active-main-link"
                  >
                    Login
                  </NavLink>
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

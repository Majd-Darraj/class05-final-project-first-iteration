import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <div className="header-navbar-container">
        <div className="navigation-menu-container">
          <nav className="navigation">
            <ul>
              <li className="nav-item Internships">
                <Link to="/Internships" className="menuLink nav-link">
                  {" "}
                  Internships{" "}
                </Link>
              </li>
              <li className="nav item Events">
                <Link to="/Events" className="menuLink nav-link">
                  {" "}
                  Events{" "}
                </Link>
              </li>
              <div className="site-branding-container">
                <a className="logo" href="index.html">
                  <img
                    alt="logo"
                    src="https://raw.githubusercontent.com/HackYourFuture-CPH/class05-final-project/master/images/thread-logo.png"
                  />
                </a>
              </div>
              <li className="nav item Mentors">
                <Link to="/Mentors" className="menuLink nav-link">
                  {" "}
                  Mentors{" "}
                </Link>
              </li>
              <li className="nav item Networking">
                <Link to="/Networking" className=" nav-link">
                  {" "}
                  Networking{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

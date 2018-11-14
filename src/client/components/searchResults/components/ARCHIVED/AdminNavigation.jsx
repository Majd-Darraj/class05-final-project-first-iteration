import React, { Component } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default class AdminNavigation extends Component {
  render() {
    return (
      <>
        <div className="admin-nav">
          <div className="btns btns-admin-nav">
            <button className="readmore " key={this.props.id}>
              <NavLink
                to={`/Internships/edit`}
                className="menuLink nav-link admin-link"
                activeClassName="active-admin-link"
              >
                Internships
              </NavLink>
            </button>
            <button className="readmore archive-btn" key={this.props.id}>
              <NavLink
                to={`/Events/edit`}
                className="menuLink nav-link admin-link"
                activeClassName="active-admin-link"
              >
                Events
              </NavLink>
            </button>
            <button className="readmore archive-btn" key={this.props.id}>
              <NavLink
                to={`/Mentors/edit`}
                className="menuLink nav-link admin-link"
                activeClassName="active-admin-link"
              >
                Mentors
              </NavLink>
            </button>
            <button className="readmore archive-btn" key={this.props.id}>
              <NavLink
                to={`/Networking/edit`}
                className="menuLink nav-link admin-link"
                activeClassName="active-admin-link"
              >
                Networking
              </NavLink>
            </button>
          </div>
        </div>
      </>
    );
  }
}

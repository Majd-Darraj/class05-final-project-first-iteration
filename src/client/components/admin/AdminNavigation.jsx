import React, { Component } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";

export default class AdminNavigation extends Component {
  render() {
    return (
      <>
        <div className="admin-nav">
          <ul className="btns btns-admin-nav">
            <NavLink
              to={`/admin/internships`}
              className="readmore admin-btn"
              activeClassName="active-admin-link"
            >
              Internships
            </NavLink>
            <NavLink
              to={`/admin/events`}
              className="readmore admin-btn"
              activeClassName="active-admin-link"
            >
              Events
            </NavLink>
            <NavLink
              to={`/admin/mentors`}
              className="readmore admin-btn"
              activeClassName="active-admin-link"
            >
              Mentors
            </NavLink>
            <NavLink
              to={`/admin/networking`}
              className="readmore admin-btn"
              activeClassName="active-admin-link"
            >
              Networking
            </NavLink>
          </ul>
        </div>
      </>
    );
  }
}

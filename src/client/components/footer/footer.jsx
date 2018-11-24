import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="footer">
        <h1 className="mentors-cat-head">
          Our mentors offer help <span className="bold">free</span> of charge,
          with a smile!
        </h1>
        <p className="mentors-cat-p">
          Choose the help you need, or scroll down to check all the mentors!
        </p>
        <section className="mentors-offers">
          <button className="mentors-offers-item">Internships</button>
          <button className="mentors-offers-item">Events</button>
          <button className="mentors-offers-item">Mentors</button>
          <button className="mentors-offers-item">Networking</button>
        </section>
      </div>
    );
  }
}

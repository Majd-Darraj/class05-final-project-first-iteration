import React, { Component } from "react";

class InternshipCard extends Component {
  render() {
    //console.log(`this is item ${this.props.internship_title}`);
    return (
      <div className="internship-item">
        <div className="internship-item-info">
          <h1 className="internship-title">{this.props.title}</h1>
          <h2 className="internship-category">{this.props.category}</h2>
          <h2 className="internship-organisation">
            {this.props.organisation_name}
          </h2>
          <p className="internship-description">
            {this.props.organisation_description}
          </p>
        </div>
      </div>
    );
  }
}

export default InternshipCard;

import React, { Component } from "react";

class InternshipCard extends Component {
  render() {
    const {data} = this.props;
    // debugger;
    return (
      <div className="card-item internship-item">
        <div className="card-container internship-item-container">
          <div className="card-info-container">
            <div className="card-image-container">
              <div
                className="card-image internship-theme-image"
                style={{
                  backgroundImage: `url(${data.internship_theme_image})`
                }}
              />
            </div>
            <article className="card-info">
              <h1 className="internship-title">
                {data.internship_title}
              </h1>
              <h2 className="internship-category">
                {data.internship_category}
              </h2>
              <h2 className="internship-organisation">
                {data.organisation_name}
              </h2>
            </article>
          </div>
          <button className="readmore">Read More</button>
        </div>
      </div>
    );
  }
}

export default InternshipCard;

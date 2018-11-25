import React, { Component } from "react";
import { Link } from "react-router-dom";

class InternshipCard extends Component {
  render() {
    const { internshipsData } = this.props;

    return (
      <>
        <Link to={`/admin/internships/edit/${internshipsData.id}`}>
          <div className="card-item event-item">
            <div className="card-container event-item-container">
              <div className="card-info-container">
                <div className="card-image-container">
                  <div
                    className="card-image event-theme-image"
                    style={{
                      backgroundImage: `url(${
                        internshipsData.internship_theme_image
                      })`
                    }}
                  />
                </div>
                <article className="card-info">
                  <div className="card-information">
                    <h1 className="internship-title">
                      {internshipsData.internship_title}
                    </h1>
                    <h3 className="internship-category">
                      {internshipsData.internship_category}
                    </h3>
                    <h3 className="organisation-name">
                      {internshipsData.organisation_name}
                    </h3>
                  </div>

                  <div>
                    <p className="department">{internshipsData.department}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default InternshipCard;

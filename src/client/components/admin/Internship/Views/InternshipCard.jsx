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

                    <p className="internship-description">
                      {internshipsData.internship_description}
                    </p>

                    <p className="organisation-description">
                      {internshipsData.organisation_description}
                    </p>

                    <p className="internship_agreement">
                      {internshipsData.internship_agreement}
                    </p>

                    <p className="internship-requirements">
                      {internshipsData.internship_requirements}
                    </p>

                    <p className="application-requirements">
                      {internshipsData.application_requirements}
                    </p>

                    <p className="internship-availabiltiy-schedule">
                      {internshipsData.internship_availabiltiy_schedule}
                    </p>

                    <p className="location">{internshipsData.location}</p>

                    <p className="internship-add-date">
                      {internshipsData.internship_add_date}
                    </p>

                    <p className="internship_deadline">
                      {internshipsData.internship_deadline}
                    </p>

                    <p className="contact-person">
                      {internshipsData.contact_person}
                    </p>

                    <p className="phone-contact">
                      {internshipsData.phone_contact}
                    </p>

                    <p className="email-contact">
                      {internshipsData.email_contact}
                    </p>

                    <p className="organisation-address">
                      {internshipsData.organisation_address}
                    </p>

                    <p className="organisation-website">
                      {internshipsData.organisation_website}
                    </p>
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

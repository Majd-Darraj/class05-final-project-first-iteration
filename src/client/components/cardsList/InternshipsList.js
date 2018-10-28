import React, { Component } from "react";
import InternshipCard from "../cards/InternshipCard";
import Header from "../Header";
import Search from "../search/Search";
import { debug } from "util";
// import InternshipData from "../../database/InternshipData.json";

class InternshipsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      internshipsData: []
    };
  }

  componentDidMount = () => {
    fetch("/api/internships", {
      method: "GET"
    })
      .then(response => response.json())
      .then(internshipsData => {
        this.setState({
          isLoading: false,
          internshipsData: internshipsData
        });
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { isLoading, internshipsData } = this.state;
    // debugger;
    return (
      <>
        <div className="itemBefore">
          <Header />
          <Search />
        </div>
        <div className="page-content">
          <section
            className={`cards-list-container ${isLoading ? "is-loading" : ""}`}
          >
            <div className="internships-main-container">
              <div className="cards-list">
                {!isLoading && internshipsData.length > 0
                  ? internshipsData.map(internship => {
                      const {
                        id,
                        internship_title,
                        internship_category,
                        organisation_name,
                        department,
                        internship_description,
                        organisation_description,
                        internship_agreement,
                        internship_requirements,
                        application_requirements,
                        internship_availabiltiy_schedule,
                        travel_expenses,
                        location,
                        internship_add_date,
                        closing_date,
                        internship_deadline,
                        contact_person,
                        phone_contact,
                        email_contact,
                        organisation_address,
                        organisation_website,
                        internship_theme_image,
                        active
                      } = internship;

                      return (
                        <InternshipCard
                          internship_title={internship_title}
                          id={id}
                          key={id}
                          department={department}
                          internship_category={internship_category}
                          organisation_name={organisation_name}
                          internship_description={internship_description}
                          organisation_description={organisation_description}
                          internship_agreement={internship_agreement}
                          internship_requirements={internship_requirements}
                          application_requirements={application_requirements}
                          internship_availabiltiy_schedule={
                            internship_availabiltiy_schedule
                          }
                          travel_expenses={travel_expenses}
                          location={location}
                          internship_add_date={internship_add_date}
                          closing_date={closing_date}
                          internship_deadline={internship_deadline}
                          contact_person={contact_person}
                          phone_contact={phone_contact}
                          email_contact={email_contact}
                          organisation_address={organisation_address}
                          organisation_website={organisation_website}
                          internship_theme_image={internship_theme_image}
                          active={active}
                        />
                      );
                    })
                  : null}
              </div>
              <div className="loader">
                <div className="icon" />
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default InternshipsList;

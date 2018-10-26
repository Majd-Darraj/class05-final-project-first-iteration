import React, { Component } from "react";
import MentorCard from "../cards/MentorCard";
import Header from "../Header";

class MentorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentorsData: []
    };
  }

  componentDidMount = () => {
    fetch("/api/mentors", {
      method: "GET"
    })
      .then(response => response.json())
      .then(mentorsData => {
        this.setState({
          isLoading: false,
          mentorsData: mentorsData
        });
      })
      .catch(err => {
        console.log("caught error!", err);
      });
  };

  render() {
    const { mentorsData } = this.state;
    return (
      <div>
        <Header />
        <section className="cards-list-container">
          <div className="cards-list">
            {mentorsData.length > 0
              ? mentorsData.map(mentor => {
                  const {
                    id,
                    first_name,
                    last_name,
                    email,
                    gender,
                    profile_picture,
                    mentor_description,
                    languages,
                    availability,
                    offering,
                    area_location,
                    preferred_meeting_place,
                    affiliation,
                    active
                  } = mentor;

                  return (
                    <MentorCard
                      id={id}
                      key={id}
                      first_name={first_name}
                      last_name={last_name}
                      email={email}
                      gender={gender}
                      profile_picture={profile_picture}
                      mentor_description={mentor_description}
                      languages={languages}
                      availability={availability}
                      offering={offering}
                      area_location={area_location}
                      preferred_meeting_place={preferred_meeting_place}
                      affiliation={affiliation}
                      active={active}
                    />
                  );
                })
              : null}
          </div>
        </section>
      </div>
    );
  }
}

export default MentorsList;

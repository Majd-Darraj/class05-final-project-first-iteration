import React, { Component } from "react";
import MentorCard from "../cards/MentorCard";
import Header from "../Header";

class MentorsList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mentorsData: []
      };
    }
  
    componentDidMount = () => {
      this.fetchData();
    };
  
  
    fetchData() {
      fetch("https://raw.githubusercontent.com/paredesrichard/commandline/master/mentors.json"
      )
      .then(response => response.json())
      .then(parsedJSON =>
        parsedJSON.map(mentor => ({
          id: `${mentor.id}`,
          first_name: `${mentor.first_name}`,
          last_name: `${mentor.last_name}`,
          email: `${mentor.email}`,
          gender: `${mentor.gender}`,
          profile_picture: `${mentor.profile_picture}`,
          mentor_description: `${mentor.mentor_description}`,
          languages: `${mentor.languages}`,
          availability: `${mentor.availability}`,
          offering: `${mentor.offering}`,
          area_location: `${mentor.area_location}`,
          preferred_meeting_place: `${mentor.preferred_meeting_place}`,
          affiliation: `${mentor.affiliation}`,
          active: `${mentor.active}`,
        }))
      )
      .then(mentorsData => {
        this.setState({ mentorsData });
      });
  
  }
  render() {
    const { mentorsData } = this.state;
    return (
      <div>
        <Header />
        <section
          className="cards-list-container">
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
                    active,
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
                      availability= {availability}
                      offering= {offering} 
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















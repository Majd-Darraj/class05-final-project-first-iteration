import React, { Component } from "react";

import EventCard from "../../events/components/cards/cardItem";
import InternshipCard from "../../internships/components/cards/cardItem";
import MentorCard from "../../mentors/components/cards/cardItem";
import NetworkingCard from "../../networking/components/cards/cardItem";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SearchResults extends Component {
  state = {
    isLoading: true,
    data: []
  };

  fetchResults = searchQ => {
    // const searchQ = this.props.location.search.substring(3);

    const urls = [
      "/api/search/searchEvents",
      "/api/search/searchInternships",
      "/api/search/searchMentors",
      "/api/search/searchNetworking"
    ];

    Promise.all(
      urls.map(url =>
        fetch(`${url}?q=${searchQ}`, {
          method: "GET"
        }).then(res => res.json())
      )
    ).then(data => {
      // debugger;
      this.setState({
        isLoading: false,
        data: data
      });
    });
  };

  componentDidMount() {
    const searchQ = this.props.location.search.substring(3);

    this.fetchResults(searchQ);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = prevProps.location.search.substring(3);
    const newQuery = this.props.location.search.substring(3);

    if (prevQuery !== newQuery) {
      this.fetchResults(newQuery);
    }
  }

  render() {
    const eventsData = this.state.data[0];
    const internshipsData = this.state.data[1];
    const mentorsData = this.state.data[2];
    const networkingData = this.state.data[3];

    // debugger;
    return (
      <div>
        <div className="page-content">
          <section className="cards-list-container ">
            <div className="mentors-cat">
              <h1 className="mentors-cat-head">
                We found these <span className="bold">results</span> for you!
              </h1>
              <p className="mentors-cat-p">
                Search results seperated by section...
              </p>
              <FontAwesomeIcon icon={faArrowDown} className="down-arrow" />
              <section className="mentors-offers internships-div" />
            </div>
            <div className="cards-list">
              <div className="divider">
                <span>EVENTS</span>
              </div>
              {this.state.isLoading == false ? (
                eventsData && eventsData.length > 0 ? (
                  eventsData.map(event => {
                    return <EventCard data={event} key={event.id} />;
                  })
                ) : (
                  <h4>No records found in Events</h4>
                )
              ) : null}
              <div className="divider">
                <span>INTERNSHIPS</span>
              </div>
              {internshipsData && internshipsData.length > 0 ? (
                internshipsData.map(internship => {
                  return (
                    <InternshipCard
                      {...internship}
                      data={internship}
                      key={internship.id}
                    />
                  );
                })
              ) : (
                <h4>No records found in Internships</h4>
              )}
              <div className="divider">
                <span>MENTORS</span>
              </div>
              {mentorsData && mentorsData.length > 0 ? (
                mentorsData.map(mentor => {
                  return (
                    <MentorCard {...mentor} data={mentor} key={mentor.id} />
                  );
                })
              ) : (
                <h4>No records found in Mentors</h4>
              )}
              <div className="divider">
                <span>Networking</span>
              </div>
              {networkingData && networkingData.length > 0 ? (
                networkingData.map(networking => {
                  return (
                    <NetworkingCard
                      {...networking}
                      data={networking}
                      key={networking.id}
                    />
                  );
                })
              ) : (
                <h4>No records found in Networking</h4>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SearchResults;

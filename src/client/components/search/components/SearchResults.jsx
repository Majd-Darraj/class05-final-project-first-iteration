import React, { Component } from "react";

import EventCard from "../../events/components/cards/cardItem";
import InternshipCard from "../../cards/InternshipCard";
import MentorCard from "../../cards/MentorCard";
import NetworkingCard from "../../cards/NetworkingCard";

class SearchResults extends Component {
  state = {
    isLoading: true,
    data: []
  };

  fetchResults(query) {
    const urls = [
      "/api/search/searchEvents",
      "/api/search/searchInternships",
      "/api/search/searchMentors",
      "/api/search/searchNetworking"
    ];

    Promise.all(
      urls.map(url =>
        fetch(`${url}?q=${query}`, {
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
  }

  componentDidMount() {
    const searchQ = this.props.location.search.substring(3);

    console.log("SearchResults: Component did mount!");

    this.fetchResults(searchQ);
  }

  componentDidUpdate(prevProps) {
    const prevQuery = prevProps.location.search.substring(3);
    const newQuery = this.props.location.search.substring(3);

    console.log("SearchResults: Component did update!");

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
            <div className="cards-list">
              <div className="divider">
                <span>EVENTS</span>
              </div>
              {this.state.isLoading == false ? (
                eventsData && eventsData.length > 0 ? (
                  eventsData.map(event => {
                    return <EventCard eventsData={event} key={event.id} />;
                  })
                ) : (
                  <h4>No records found</h4>
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
                      internshipsData={internship}
                      key={internship.id}
                    />
                  );
                })
              ) : (
                <h4>No records found</h4>
              )}

              <div className="divider">
                <span>MENTORS</span>
              </div>
              {mentorsData && mentorsData.length > 0 ? (
                mentorsData.map(mentor => {
                  return (
                    <MentorCard
                      {...mentor}
                      mentorsData={mentor}
                      key={mentor.id}
                    />
                  );
                })
              ) : (
                <h4>No records found</h4>
              )}

              <div className="divider">
                <span>Networking</span>
              </div>
              {networkingData && networkingData.length > 0 ? (
                networkingData.map(networking => {
                  return (
                    <NetworkingCard
                      {...networking}
                      networkingData={networking}
                      key={networking.id}
                    />
                  );
                })
              ) : (
                <h4>No records found</h4>
              )}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SearchResults;

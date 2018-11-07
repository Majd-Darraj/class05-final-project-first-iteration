import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EventCard from "../cards/EventCard";
import Header from "../Header";
import Search from "../search/Search";

class EventPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      eventsData: [],
      more: null
    };
  }

  componentDidMount() {
    const url = "/api/events";
    const id = this.props.match.params.id;
    fetch(`${url}/${id}`, {
      method: "GET"
    })
      .then(response => response.json())

      .then(eventsData =>
        this.setState({
          isLoading: false,
          eventsData: eventsData,
          more: id
        })
      );
    debugger;
  }

  render() {
    const { isLoading, eventsData } = this.state;

    return (
      <div>
        <div className="itemBefore">
          <Header />
          <Search />
        </div>

        <div className="page-content">
          <section
            className={`cards-list-container cards-list-container-events ${
              isLoading ? "is-loading" : ""
            }`}
          >
            <div className="events-main-container">
              <div className="cards-list">
                <EventCard eventsData={eventsData} displayEditBtns={false} />
              </div>
              <div className="loader">
                <div className="icon" />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default EventPreview;

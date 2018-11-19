import React, { Component } from "react";

import EventCard from "../../events/components/cards/cardItem";

class SearchResults extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    debugger;
    const searchQ = this.props.location.search.substring(3);
    fetch(`/api/search?q=${searchQ}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        debugger;
        console.log({ dataFromSearch: data });
        console.table(data);
        this.setState({
          // isLoading: false,
          data: data
        });
      })
      .catch(err => {
        console.error("caught error!", err);
      });
  }
  render() {
    // const { data } = this.props;
    const { data } = this.state;
    return (
      <div>
        <div className="page-content">
          <section className="cards-list-container ">
            <div className="cards-list">
              <ul>
                {data && data.length > 0
                  ? data.map(event => {
                      return <EventCard eventsData={event} key={event.id} />;
                    })
                  : null}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default SearchResults;

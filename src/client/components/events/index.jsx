import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CardsListView from "./components/views/CardsListView";
import CardItemView from "./components/views/CardItemView";

class Events extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    const { url } = this.props.match;
    fetch(`/api/events`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        let mapData = data.map(event => {
          return {
            ...event,
            coords: {
              lat: event.event_geo_lat,
              lng: event.event_geo_lng
            }
          };
        });
        // debugger;
        this.setState({
          data: mapData
        });
      })
      .catch(err => {
        console.log(`caught error in ${url}`, err);
      });
  };

  render() {
    const { data } = this.state;
    // debugger;
    return (
      <>
        {this.state.data.length !== 0 ? (
          <Switch>
            <Route
              exact
              path="/Events"
              render={props => <CardsListView {...props} data={data} />}
            />
            <Route
              path={`/Events/preview/:id`}
              render={props => <CardItemView {...props} data={data} />}
            />
          </Switch>
        ) : null}
      </>
    );
  }
}

export default Events;

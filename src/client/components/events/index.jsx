import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import CardsListView from "./components/views/CardsListView";
import CardItemView from "./components/views/CardItemView";

class Events extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
    // debugger;
    const { url } = this.props.match;
    fetch(`/api${url}`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        });
      })
      .catch(err => {
        console.log(`caught error in ${url}`, err);
      });
  };

  render() {
    const { data } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        <Switch>
          <Route
            exact
            path={`${path}`}
            render={props => <CardsListView {...props} data={data} />}
          />
          <Route
            path={`${path}/preview/:id`}
            render={props => <CardItemView {...props} data={data} />}
          />
        </Switch>
      </>
    );
  }
}

export default Events;

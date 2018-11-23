import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CardsListView from "./components/views/CardsListView";
import CardItemView from "./components/views/CardItemView";

class Mentors extends Component {
  state = {
    data: []
  };

  componentDidMount = () => {
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
    return (
      <>
        {this.state.data.length !== 0 ? (
          <Switch>
            <Route
              exact
              path="/Mentors"
              render={props => <CardsListView {...props} data={data} />}
            />
            <Route
              path={`/Mentors/preview/:id`}
              render={props => <CardItemView {...props} data={data} />}
            />
          </Switch>
        ) : null}
      </>
    );
  }
}

export default Mentors;

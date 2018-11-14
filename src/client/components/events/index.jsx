import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import ListView from "./components/views/ListView";
// import CardView from "./components/views/CardView";
import AdminView from "./components/views/EditView";

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
    // debugger;
    return (
      <>
        <div className="admin-bar">
          <button className="readmore admin-btn" key="admin">
            <Link to={`${url}/admin`} className="menuLink nav-link admin-link">
              Admin view
            </Link>
          </button>
        </div>
        <Switch>
          <Route
            path={`${url}/admin`}
            render={props => <AdminView {...props} data={data} />}
          />
          <Route
            exact
            path={`${path}`}
            render={props => (
              <ListView
                // onEnter={this.mapData()}
                {...props}
                data={data}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default Events;

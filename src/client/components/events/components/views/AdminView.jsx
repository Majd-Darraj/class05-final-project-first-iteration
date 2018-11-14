import React from "react";
import {Link, Router, Switch } f
import EditCardItem from "../cards/EditCardItem";
import EditView from "../views/EditView";
import EditForm from '../../../mentor-form/edit-mentor'
// import Nav from "../ARCHIVED/AdminNavigation";
class AdminView extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    // debugger;
    const { data } = this.props;
    if (data.length > 0 || data !== undefined) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { data } = this.props;
    const { isLoading } = this.state;
    const { url } = this.props.match.url;
// debugger;
    // debugger;
    return (
      <>
        <Switch>
          <Route
            path={`${url}/edit/:id`}
            render={props => <EditForm {...props} data={data} />}
          />
          <Route
            exact
            path={`${path}`}
            render={ data => (
            <>
              <div className="divider">
              <span>EVENTS</span>
            </div>
            <div className="page-content edit-content">
              <section
                className={`cards-list-container cards-list-container-events ${
                  isLoading ? "is-loading" : ""
                }`}
              >
                <div className="events-main-container">
                  <div className="cards-list">
                    {data.length > 0
                      ? data.map(event => {
                          return <EditCardItem {...event} key={event.id} />;
                        })
                      : null}
                  </div>
                  <div className="loader">
                    <div className="icon" />
                  </div>
                </div>
              </section>
            </div> 
            </>
            )}
          />
        </Switch>

      </>
    );
  }
}

export default AdminView;

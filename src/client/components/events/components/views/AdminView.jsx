import React from "react";
import EditCardItem from "../cards/EditCardItem";
import Nav from "../ARCHIVED/AdminNavigation";
import { Switch, Route, Link } from "react-router-dom";

class EditView extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    // debugger;
    const { data } = this.props;
    if (data.length > 0) {
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
    const { url } = this.props.match;

    debugger;
    return (
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
                  : // make error handler (contact us form)
                    null}
              </div>
              <div className="loader">
                <div className="icon" />
              </div>
            </div>
          </section>
        </div>

        {/* // <Switch>
        //   <Route
        //     path={`${url}/edit`}
        //     render={props => <EditView {...props} data={data} />}
        //   />
        //   <Route
        //     exact
        //     path={`${path}`}
        //     render={props => (
        //       <ListView
        //         // onEnter={this.mapData()}
        //         {...props}
        //         data={data}
        //       />
        //     )}
        //   />
        //   <Route
        //     path={`${url}/preview/:id`}
        //     render={props => (
        //       <CardView
        //         {...props}
        //         allData={this.props}
        //         data={data.find(dataEntry => {
        //           return dataEntry.id === props.match.params.id;
        //         })}
        //       />
        //     )}
        //   />
        // </Switch> */}
      </>
    );
  }
}

export default EditView;

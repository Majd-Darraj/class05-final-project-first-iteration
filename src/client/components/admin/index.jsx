import React from "react";
// import EditCardItem from "../cards/EditCardItem";
// import Nav from "../ARCHIVED/AdminNavigation";
import { Switch, Route, Link } from "react-router-dom";

class EditView extends React.Component {
  state = {
    isLoading: true,
    data: []
  };

  componentDidMount = () => {
    const urls = [
      "/api/events",
      "/api/mentors",
      "/api/internships",
      "/api/networking"
    ];
    // debugger;

    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      data => {
        debugger;
        this.setState({
          isLoading: false,
          data: data
        });
      }
    );

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
    // const { data } = this.props;
    // const { isLoading } = this.state;
    // const { url } = this.props.match;

    // debugger;
    return (
      <>
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

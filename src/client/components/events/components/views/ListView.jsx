import React from "react";
import MapComponent from "../../../map-component/MapComponent";
import CardItem from "../cards/cardItem";

class ListView extends React.Component {
  state = {
    isLoading: true
  };

  componentWillMount = () => {
    if (this.props.match.url === "/Events") {
      this.setState({
        ...this.state,
        mapData: []
      });
    }
    // debugger;
  };

  componentDidUpdate = () => {
    const { data } = this.props;
    // debugger;
    if (data.length > 0 && this.state.mapData <= 0) {
      let mapData = data.map(event => {
        // debugger;
        return {
          ...event,
          coords: {
            lat: event.event_geo_lat,
            lng: event.event_geo_lng
          }
        };
      });

      this.setState({
        isLoading: false,
        mapData: mapData
      });
      // debugger;
    } else {
      return null;
    }
    // debugger;
  };

  render() {
    const { data } = this.props;
    const { isLoading, mapData } = this.state;

    // debugger;
    return (
      <>
        <div className="page-content">
          {this.props.match.url === "/Events" ? (
            <MapComponent
              mapCenter={{ lat: 55.6802303, lng: 12.5718571 }}
              setMarker
              Zoom={11}
              mapData={mapData}
              key="events"
            />
          ) : null}
          <section
            className={`cards-list-container ${
              this.props.match.url === "/Events"
                ? "cards-list-container-events "
                : ""
            } ${isLoading ? "is-loading" : ""}`}
          >
            <div className="events-main-container">
              <div className="cards-list">
                {data.length > 0
                  ? data.map(event => {
                      return <CardItem {...event} key={event.id} />;
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
    );
  }
}

export default ListView;

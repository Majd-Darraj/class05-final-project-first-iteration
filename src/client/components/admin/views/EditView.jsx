import React from "react";
import EditCardItem from "../cards/EditCardItem";

class EditView extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount = () => {
    debugger;
    const { eventsData } = this.props;
    if (eventsData.length > 0 || eventsData !== undefined) {
      this.setState({
        isLoading: false
      });
    } else {
      return null;
    }
  };

  render() {
    const { eventsData } = this.props;
    const { isLoading } = this.state;

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
                {eventsData.length > 0
                  ? eventsData.map(event => {
                      return (
                        <EditCardItem
                          {...this.props}
                          eventsData={event}
                          key={event.id}
                        />
                      );
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

export default EditView;

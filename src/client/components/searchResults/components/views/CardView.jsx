import React from "react";
import CardFull from "../cards/cardFull";
class CardView extends React.Component {
  state = {
    isLoading: true
  };

  componentWillMount = () => {
    const { data } = this.props;

    this.setState({
      ...this.state,
      data: data
    });
  };

  componentDidMount = () => {
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
    // fix id is undefined when passing to the key
    // const id = "";
    const { isLoading, data } = this.state;
    return (
      <>
        <div className="page-content">
          <section
            className={`cards-list-container cards-list-container-events full-card ${
              isLoading ? "is-loading" : ""
            }`}
          >
            <div className="events-main-container">
              <div className="cards-list">
                {<CardFull {...data} key={data.id} />}
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

export default CardView;

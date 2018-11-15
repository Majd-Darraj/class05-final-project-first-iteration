import React, { Component } from "react";

class BackBtn extends Component {
  static contextTypes = {
    router: () => true
  };

  render() {
    return (
      <button className="readmore" onClick={this.context.router.history.goBack}>
        Back
      </button>
    );
  }
}

export default BackBtn;

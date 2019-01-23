import React, { Component } from "react";

class Footer extends Component {
  scrollUp = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
      window.scrollTo(0, top - 15);
      setTimeout(this.scrollUp, 1);
    }
  };
  render() {
    return (
      <div className="ui container">
        <button
          style={{ margin: "10px" }}
          onClick={this.scrollUp}
          className="ui right floated compact labeled icon button primary"
        >
          <i className="arrow circle up icon" />
          Back to top
        </button>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.footerContainer = React.createRef();
  }

  state = { view: "view" };

  componentDidMount() {
    const footerContainer = this.footerContainer.current;
    console.log(footerContainer);

    const scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    console.log(scrollTop);

    if (!scrollTop < 0) {
      this.setState({ view: "view" });
    } else {
      this.setState({ view: "" });
    }
  }

  scrollUp = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
      window.scrollTo(0, top - 15);
      setTimeout(this.scrollUp, 1);
    }
  };
  render() {
    return (
      <div className={this.state.view}>
        <div className="ui container">
          <button
            ref={this.backTop}
            style={{
              margin: "10px",
              backgroundColor: "rgba(0, 181, 173, 0.7)"
            }}
            onClick={this.scrollUp}
            className="ui circular big right floated icon button primary back-top"
          >
            <i className="arrow circle up icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState({ term: "" });
  };

  render() {
    return (
      <div style={{ marginBottom: "20px" }} className="ui segment container">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              className="fluid"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

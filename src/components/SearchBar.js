import React, { Component } from "react";
import "./SearchBar.css";

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
          <div className="ui stackable grid field">
            <div className="twelve wide column">
              <input
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className="four wide column">
              <button class="fluid ui button teal">
                <i onClick={this.onFormSubmit} className="ui icon search" />{" "}
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

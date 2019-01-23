import React, { Component } from "react";

import Header from "./components/Header";
import moviesApi from "./api/moviesApi";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";

const KEY = "755bed67f4188fd1447c767c7cf82131";

class App extends Component {
  state = { videos: [], empty: true, noMovie: "" };
  componentDidMount() {
    this.setState({ noMovie: "Search for a movie..." });
  }

  onSearchSubmit = async term => {
    const response = await moviesApi.get("/search/movie", {
      params: {
        api_key: KEY,
        query: term,
        adult: false
      }
    });

    const results = response.data.results;

    function isEmpty(arr) {
      for (var key in arr) {
        if (arr.hasOwnProperty(key)) return false;
      }
      return true;
    }

    if (isEmpty(results)) {
      this.setState({
        empty: true,
        noMovie: `Sorry, we couldn't find: ${term}.`
      });
    } else {
      this.setState({ empty: false });
    }

    this.setState({ videos: results });

    this.renderContent();
  };

  renderContent() {
    if (this.state.empty) {
      return (
        <div className="ui container">
          <h3>{this.state.noMovie}</h3>
        </div>
      );
    }
    return <MovieList videos={this.state.videos} />;
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui container">
          <div className="ui three stackable cards link">
            {this.renderContent()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

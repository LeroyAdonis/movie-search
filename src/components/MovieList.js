import React from "react";
import "./MovieList.css";

const MoviesList = ({ videos, videoSelected }) => {
  const renderList = videos.map(video => {
    return (
      <div
        onClick={() => {
          console.log(videoSelected);
        }}
        key={video.id}
        className="ui card"
      >
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500/${video.poster_path}`}
            alt=""
          />
        </div>
        <div className="content">
          <div className="header">{video.title}</div>
          <div className="meta">
            <span style={{ fontWeight: "bold" }}>Release date: </span>
            {video.release_date}
          </div>
          <div className="description">{video.overview}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <span style={{ fontWeight: "bold" }}>Votes: </span>{" "}
            {video.vote_count}
          </span>
          <span>
            <span style={{ fontWeight: "bold" }}>Rating: </span>
            {video.vote_average}
          </span>
        </div>
      </div>
    );
  });
  return <React.Fragment>{renderList}</React.Fragment>;
};

export default MoviesList;

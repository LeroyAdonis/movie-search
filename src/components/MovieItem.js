import React from "react";

const MovieItem = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{props.videos}</h4>
        <p className="card-text">Text</p>
      </div>
    </div>
  );
};

export default MovieItem;

// Tile.js

import React from "react";

const Tile = ({ name, description, background }) => {
  return (
    <>
      <div
        className="tile"
        onClick={() => window.location.assign(`../${name}`)}
      >
        <div className="title">{name}</div>
        <div className="description">{description}</div>
      </div>
    </>
  );
};

export default Tile;

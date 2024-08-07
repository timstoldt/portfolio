// Tiles.js

import React from "react";
import Tile from "./tile/Tile";
import "./tiles.css";

const Tiles = ({ content }) => {
  return (
    <>
      {content.map((tile) => (
        <Tile key={tile.name} name={tile.name} description={tile.description} />
      ))}
    </>
  );
};

export default Tiles;

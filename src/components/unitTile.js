// import React, { useEffect, useState } from 'react';

// tile that shows unit information
function UnitTile({ unit }) {
  return (
    <div className="unit-tile-content">
      <div className="unit-tile-image">
        <img src={unit.pic} alt={unit.name} />
      </div>
      <div className="unit-tile-text">
        <p className="unit-tile-name">{unit.name}</p>
        <p className="unit-tile-cost">${unit.price}/DAY</p>
      </div>
    </div>
  );
}

export default UnitTile;

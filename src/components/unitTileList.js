import React, { useEffect, useState } from "react";

import UnitTile from "../components/unitTile";

function UnitTileList({ date }) {
  const [availableUnits, setAvailableUnits] = useState({}); // {"<unit>": "<price>"}
  // temp info
  const tempUnit = {
    name: "24' Avalon Pontoon 90HP",
    pic: "https://www.boattorch.com/toon.jpg",
    price: "425",
  };

  useEffect(() => {}, []);

  return (
    <div className="selectable-units">
      <label className="unitTileLabel">
        <input
          type="checkbox"
          name="unitTileRadioBtn"
          value="unit"
          checked
          //   onChange={onUnitSelection(date)}
        />
        <UnitTile className="selectable-unit-tile" unit={tempUnit}></UnitTile>
      </label>
    </div>
  );
}

export default UnitTileList;

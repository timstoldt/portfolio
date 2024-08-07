// Items.js

import React from "react";
import Item from "./item/item";

const Items = ({ content }) => {
  return (
    <>
      {content.map((item, idx) => (
        <Item key={idx} itemConent={item} />
      ))}
    </>
  );
};

export default Items;

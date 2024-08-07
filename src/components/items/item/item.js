import React from "react";

const Item = ({ itemConent }) => {
  return (
    <>
      <div className="item">
        {/* {for each key in item content other than title BOLD} */}
        {itemConent.name}
      </div>
    </>
  );
};

export default Item;

import React from "react";
import "./section.css";

const Section = ({ name, children }) => {
  return (
    <div className="section-container">
      <div className="big-title">{name}</div>
      <div className="container">{children}</div>
    </div>
  );
};

export default Section;

// Home.js

import React, { useEffect, useState } from "react";
// import Tiles from "../components/tiles/Tiles";
import Items from "../components/items/items";
import About from "./About";

function Education() {
  const [EduContent, setEduContent] = useState([
    {
      Title: "Univar",
      description: "Projects I have Completed",
    },
    {
      name: "DEVCOM",
      description: "Places I have worked",
    },
    {
      name: "BoatTorch",
      description: "Places I have studied",
    },
    {
      name: "AC",
      description: "All About Me",
    },
    {
      name: "Peterman",
      description: "How you can reach out to me",
    },
  ]);

  return (
    <>
      <Items content={EduContent} />
    </>
  );
}

export default Education;

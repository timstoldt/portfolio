// Home.js

import React, { useEffect, useState } from "react";
import Tiles from "../components/tiles/Tiles";
import Main from "../components/main/main";
import Section from "../components/section/section";
import Projects from "../components/projects/projects";

function Home() {
  const [tileContent, setTileContent] = useState([
    {
      name: "Projects",
      description: "Projects I have Completed",
    },
    {
      name: "Experience",
      description: "Places I have worked",
    },
    {
      name: "Education",
      description: "Places I have studied",
    },
    {
      name: "About",
      description: "All About Me",
    },
    {
      name: "Contact",
      description: "How you can reach out to me",
    },
    {
      name: "Resume",
      description: "quick and easy overview of my accomplishments",
    },
  ]);

  return (
    <>
      <Main />
      <Projects />
    </>
  );
}

export default Home;

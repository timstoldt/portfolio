// projects.js

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./projects.css";
import Section from "../section/section";
import SelectionList from "../selectionList/selectionList";

function Projects() {
  const projects = [
    {
      title: "Full-Stack Pontoon Rental Booking System",
      description:
        "I developed a comprehensive pontoon booking platform for my pontoon rental company. This application was built using ReactJS for a dynamic and responsive front-end user interface, Bootstrap for sleek, mobile-first design components, Python Flask to manage the back-end logic and server-side operations, and SQLite for a lightweight and efficient database solution. The website allows customers to seamlessly browse available pontoons, make reservations, and manage their bookings, ensuring a smooth and user-friendly experience.",
      prodLink: "https://booking.boattorch.com/boattorch",
    },
    {
      title: "Pontoon Rental Frontend Website",
      description:
        "I developed a dynamic front-end website for my pontoon rental company's booking platform. Utilizing ReactJS, the site delivers a responsive and interactive user experience, complemented by Bootstrap for modern and mobile-first design. This front-end seamlessly integrates with the back-end, providing customers with a smooth interface to browse the rental fleet, contact the owners, and view frequently asked questions and the rental contract. Visit the pontoon website to see it in action.",
      prodLink: "https://boattorch.com",
      gitLink: "https://github.com/timstoldt/BoatTorch-Frontend",
    },
    {
      title: "Melodio Music Sharing App",
      description:
        "I developed a music sharing social media app that leverages agile software development methodologies. This app, designed for both Android and iOS platforms using the Flutter Framework and Spotify API, offers cross-platform compatibility and a seamless user experience. The backend is powered by Python Flask and SQL, ensuring a secure and reliable database and server infrastructure. The app, used by over 50 users, effectively handles more than 2000 posts, providing a robust platform for music sharing and interaction.",
    },
    {
      title: "Portfolio Website",
      description:
        "Welcome to my portfolio website, a dazzling showcase built with ReactJS. It's a place where my projects strut their stuff, Bootstrap brings the style, and I pour my coding heart into every pixel. Dive in, explore, and see what I've been up to—because even websites need a portfolio!",
      prodLink: "./",
    },
  ];
  return (
    <>
      <Section name={"My Projects."}>
        <SelectionList content={projects} />
      </Section>
    </>
  );
}

export default Projects;

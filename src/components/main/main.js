// Main.js

import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./main.css";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="big-name">Hi, my name is Tim.</div>
        <div className="animation-container">
          <span>I am a </span>
          <TypeAnimation
            className="animation"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Software Engineer.",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Full-Stack Developer.",
              1000,
              "Problem-Solver.",
              1000,
              "Team-Player.",
              1000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
        </div>
        <div className="contact-items">
          <a
            href="https://www.linkedin.com/in/tim-stoldt"
            target="_blank"
            className="social-icon"
            rel="noreferrer"
          >
            <img
              className="contact-img"
              src="./images/linkedin.svg"
              alt="linkedIn"
              width={70}
              height={70}
            />
          </a>
          <a
            href="https://github.com/timstoldt"
            target="_blank"
            className="social-icon"
            rel="noreferrer"
          >
            <img
              className="contact-img"
              src="./images/github.svg"
              alt="github"
              width={70}
              height={70}
            />
          </a>
          <a
            href="mailto:tim@stoldt.us"
            className="social-icon"
            rel="noreferrer"
          >
            <img
              className="contact-img"
              src="./images/gmail.svg"
              alt="Gmail"
              width={70}
              height={70}
            />
          </a>
          <a className="resume-btn btn" target="_blank" href="./resume.pdf">
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Main;

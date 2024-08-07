import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="nav-container">
        <nav className="nav-bar">
          <a href="/" className="nav-btn nav-image">
            <img height="80" src="./logo.png" alt="T. Stoldt" />
            <div className="company-name">
              <h>Tim Stoldt</h>
              <p>Software Engineer</p>
            </div>
          </a>
          <div className={`nav-options`}>
            <Link className="nav-btn nav-item" to="/">
              Home
            </Link>
            <Link className="nav-btn nav-item" to="/resume">
              Resume
            </Link>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="menu-options">
            <Link
              className="nav-btn menu-item"
              to="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className="nav-btn menu-item"
              to="/resume"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Link>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default Navigation;

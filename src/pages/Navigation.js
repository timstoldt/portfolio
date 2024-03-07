// Navigation.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    
    <Outlet/>
    </>
  );
};

export default Navigation;

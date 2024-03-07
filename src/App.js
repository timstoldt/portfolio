// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navigation from './pages/Navigation';
import SelectUnit from './pages/SelectUnit';
import NewClient from './pages/NewClient';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/selectunit" element={<SelectUnit />}/>
                <Route path="/newclient" element={<NewClient />}/>
            </Route>
        </Routes>
    </Router>
  );
};

export default App;

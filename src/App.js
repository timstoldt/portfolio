// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/navigation.js";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/resume"
            element={
              <embed
                alt="my resume"
                title="Resume"
                type="application/pdf"
                src="resume.pdf"
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

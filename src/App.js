import React from "react";
import Navigation from "./Navigation";
import {BrowserRouter as  Router, Route,Routes,} from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import "./style.css";

const App = () => {
  return (
    <>
      
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={""} />
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

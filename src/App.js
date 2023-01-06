import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Loader from "./components/Loader";
// import LoaderTwo from "./components/LoaderTwo";

function App() {
  return (
    <React.Fragment>
      <Loader />
      <Router>
        <Navbar />
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

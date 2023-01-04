import "./App.css";
import { useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import MobileNavContext from "./store/mobile-nav-context";

function App() {
  // const [mobileNavbarIsShown, setMobileNavbarIsShown] = useState(false);

  // let mobileNavCtx = useContext(MobileNavContext);

  // useEffect(() => {
  //   setMobileNavbarIsShown(mobileNavCtx.isShown);
  // }, [mobileNavCtx.isShown]);

  return (
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
  );
}

export default App;

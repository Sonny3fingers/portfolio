import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <React.Fragment>
      {loader && <Loader />}
      <Router>
        <Navbar />
        <MobileNavbar />
        <AnimatedRoutes />
      </Router>
    </React.Fragment>
  );
}

export default App;

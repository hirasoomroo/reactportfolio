import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/navbar.css";


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
        
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/About"> About Me </Link>
        <Link to="/Projects"> Projects </Link>
        <Link to="/Contact"> Contact Me </Link>
      </div>
    </div>
  );
}

export default Navbar;
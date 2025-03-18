import React from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css"; // Import CSS

const Navbar = ({ colorMode, toggleColorMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Product Store 🛒</Link>
      </div>

      <div className="navbar-links">
        {/* Create Button with Normal Plus Icon */}
        <Link to="/create">
          <button className="icon-btn">➕</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

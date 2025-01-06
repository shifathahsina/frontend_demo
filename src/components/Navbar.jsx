import React from 'react';
import { Link } from 'react-router-dom';
; // Assuming you will create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/path/to/logo.png" alt="Logo" className="logo" /> {/* Replace with your logo path */}
        <span className="brand-name">Brand Name</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/Aboutus">About Us</Link>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
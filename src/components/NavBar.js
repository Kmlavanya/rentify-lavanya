import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-link">Home</Link> 
    <Link to="/login" className="nav-link">Login</Link>
    <Link to="/register" className="nav-link">Register</Link>
    <Link to="/seller-dashboard" className="nav-link">Seller Dashboard</Link>
    <Link to="/buyer-dashboard" className="nav-link">Buyer Dashboard</Link>
  </nav>
);

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="container">
      <h2 className="title">Welcome to Rentify</h2>
      <p className="quote">"Find your next home with ease and comfort."</p> {/* Add catchy quote here */}
      <div className="button-container">
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
        <Link to="/register">
          <button className="button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

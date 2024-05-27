import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import SellerDashboard from './pages/SellerDashboard';

import Home from './pages/Home';
import BuyerDashboard from './pages/BuyerDashboard';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from 'react';
import PostProperty from './PostProperty';
import PropertyList from './PropertyList';
import './SellerDashboard.css';

function SellerDashboard() {
  const [view, setView] = useState('post');

  return (
    <div className="seller-dashboard">
      <h2>Seller Dashboard</h2>
      <div className="button-container">
        <button className={view === 'post' ? 'active' : ''} onClick={() => setView('post')}>Post Your Property</button>
        <button className={view === 'view' ? 'active' : ''} onClick={() => setView('view')}>View Your Properties</button>
      </div>
      <div className="content-container">
        {view === 'post' && <PostProperty />}
        {view === 'view' && <PropertyList />}
      </div>
    </div>
  );
}

export default SellerDashboard;

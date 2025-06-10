import React from 'react';
import './FooterTop.css';
import { useNavigate } from 'react-router';

const FooterTop = () => {
    const navigate = useNavigate()
  return (
    <section className="hero-fixed-section">
      <div className="overlay-content">
        <h1>Adventure is just a click away—come travel with us!</h1>
        <p>Are You Ready To Join Us On Your Next Trip?</p>
        <button onClick={() => navigate('/packages')} className="hero-btn">View Package</button>
      </div>
    </section>
  );
};

export default FooterTop;

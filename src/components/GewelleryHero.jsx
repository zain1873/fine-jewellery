import React from 'react';

const HighJewelryHero = () => {
  return (
    <div className="high-jewelry-hero">
      <div className="container-fluid">
        <div className="row align-items-center">
          
          {/* Jewelry Image Section */}
          <div className="col-lg-8 col-md-7">
            <div className="jewelry-image-container">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="High Jewelry Diamond and Pink Gemstone Necklace" 
                className="hero-jewelry-image"
              />
              <div className="sparkle-effect"></div>
              <div className="glow-effect"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="col-lg-4 col-md-5">
            <div className="hero-content">
              <div className="category-label">HIGH JEWELRY</div>
              <h1 className="hero-title">
                REACH FOR THE<br />
                STARS
              </h1>
              <div className="discover-button-container">
                <button className="discover-button">
                  DISCOVER
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="stars-background"></div>
      <div className="gradient-overlay"></div>
    </div>
  );
};

export default HighJewelryHero;
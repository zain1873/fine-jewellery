import React from 'react';

const HighJewelryHero = () => {
  return (
    <div className="high-jewelry-hero position-relative">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          
          {/* Jewelry Image Section */}
          <div className="col-lg-8 col-md-7 p-0">
            <div className="jewelry-image-container h-100">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="High Jewelry Diamond and Pink Gemstone Necklace" 
                className="hero-jewelry-image img-fluid w-100 h-100 object-fit-cover"
              />
              <div className="sparkle-effect"></div>
              <div className="glow-effect"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-4 col-md-5 d-flex align-items-center justify-content-center">
            <div className="hero-content text-center px-4">
              <div className="category-label text-uppercase fw-bold mb-3">
                HIGH JEWELRY
              </div>
              <h1 className="hero-title fw-semibold mb-4">
                REACH FOR THE<br />STARS
              </h1>
              <div className="discover-button-container">
                <button className="discover-button btn btn-light px-4 py-2 fw-bold">
                  DISCOVER
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background Elements */}
      <div className="stars-background position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div>
    </div>
  );
};

export default HighJewelryHero;

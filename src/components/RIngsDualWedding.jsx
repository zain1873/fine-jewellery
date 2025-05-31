import React from 'react';
import rings from '../images/wedding-rings.webp'
import ringsecond from '../images/Engagement-rings-banner.webp'

const DualCollectionSection = () => {
  return (
    <div className="dual-collection-section">
      <div className="collection-container">
        
        {/* COCOS Section - Left */}
        <div className="collection-item coco-crush">
          <div className="collection-image-wrapper">
            <img 
              src={rings} 
              alt="COCOS Gold Rings" 
              className="collection-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="collection-content" data-aos="fade-top" data-aos-delay="300" data-aos-duration="1000">
            <h2 className="collection-title">CAMÉLIA</h2>
            <div className="discover-link-container">
              <a href="#coco-crush" className="discover-link">
                DISCOVER
              </a>
            </div>
          </div>
        </div>

        {/* Collection N°5 Section - Right */}
        <div className="collection-item collection-n5">
          <div className="collection-image-wrapper">
            <img 
              src={ringsecond} 
              alt="Collection N°5 Diamond Watch" 
              className="collection-image"
            />
            <div className="image-overlay light"></div>
          </div>
          <div className="collection-content"  data-aos="fade-top" data-aos-delay="300" data-aos-duration="1000">
            <h2 className="collection-title">RUBAN</h2>
            <div className="discover-link-container">
              <a href="#collection-n5" className="discover-link">
                DISCOVER
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DualCollectionSection;
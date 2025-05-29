import React from 'react';

const DualCollectionSection = () => {
  return (
    <div className="dual-collection-section">
      <div className="collection-container">
        
        {/* COCOS Section - Left */}
        <div className="collection-item coco-crush">
          <div className="collection-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="COCOS Gold Rings" 
              className="collection-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="collection-content" data-aos="fade-top" data-aos-delay="300" data-aos-duration="1000">
            <h2 className="collection-title">COCOS</h2>
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
              src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Collection N°5 Diamond Watch" 
              className="collection-image"
            />
            <div className="image-overlay light"></div>
          </div>
          <div className="collection-content"  data-aos="fade-top" data-aos-delay="300" data-aos-duration="1000">
            <h2 className="collection-title">COLLECTION N°5</h2>
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
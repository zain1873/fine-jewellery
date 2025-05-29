import React from 'react';
import jewelleryImg from '../images/palace-img.webp'
const ChanelJewelrySection = () => {
  return (
    <div className="chanel-jewelry-section"  data-aos="fade-top" data-aos-delay="300" data-aos-duration="1000">
      <div className="container">
        {/* Header Content */}
        <div className="header-content">
          <div className="collection-number">COLLECTION N°5</div>
          <h1 className="main-title">
            THE SAVOIR-FAIRE OF CHANEL FINE<br />
            JEWELRY
          </h1>
          <p className="description">
            All the savoir-faire and spirit of the House captured in a fine jewelry collection where rigor and roundness combine to<br />
            create perfect harmony in an infinite sparkle.
          </p>
          <div className="discover-link-container">
            <a href="#discover" className="discover-link">
              DISCOVER
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="container">
         <div class="">
             <div className="jewelry-image-container" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
            <div class="jewellery-sec-img">
                <img className='obj_fit' src={jewelleryImg} alt=""/>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ChanelJewelrySection;
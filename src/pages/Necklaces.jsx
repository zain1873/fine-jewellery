import React from 'react'
import Parent from "../components/Parent"
import bannerImg from "../images/necklaces-new.png";


function Necklaces() {
  return (
   <Parent>
      <div className="container">
        <div class="banner-info">
          <div className="row align-items-center">
          <div className="col-lg-6"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          <div class="banner-info p-lg-3 py-2">
              <h1 className="mb-4 banner-text left">Necklaces</h1>
            <p className="bottom">Explore our collection of Fine Jewelry and more.</p>
              <button className="see-more-btn top">SEE MORE</button>
          </div>
          </div>

          <div className="col-lg-6">
            <div className="banner-img "  data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000">
              <img src={bannerImg} alt="Chanel Banner" className="obj_fit" />
            </div>
          </div>
        </div>
        </div>
      </div>
   </Parent>
  )
}

export default Necklaces
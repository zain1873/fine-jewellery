import React from "react";
import Parent from "../components/Parent";
import bannerImg from "../images/Try-on-banner.webp";
import tryImg from "../images/TRY-on-image.webp";
import tryImgTwo from "../images/try-on-2.webp";
import FAQ from "../components/Faq";
import Appointment from "../components/Appointment";

function TryOn() {
  return (
    <Parent>
      <div className="container">
        <div class="banner-info">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="banner-info p-lg-3 py-2">
                <h1 className="mb-4 banner-text left">CHANEL TRY ON</h1>
                <p className="bottom">
                  Virtually try on the House’s Watches and Fine Jewelry
                  creations, along with looks from the CHANEL Style Guide.
                </p>
                <button className="see-more-btn top">GET STARTED</button>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="banner-img "
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={bannerImg} alt="Chanel Banner" className="obj_fit" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sideby section */}
      <div className="container">
        <div class="banner-info sideby-info-container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <div
                className="banner-img "
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={tryImg} alt="Chanel Banner" className="obj_fit" />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="banner-info sideby-info p-lg-3 py-2">
                <p className="bottom">
                  In 18K BEIGE GOLD, yellow gold or white gold*, with or without
                  diamonds... Explore exceptional pieces inspired by the codes
                  of the House. *White gold with a thin layer of Rhodium plating
                  for color
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div class="banner-info sideby-info-container">
          <div className="row align-items-center justify-content-center">
            
            <div className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div class="banner-info sideby-info p-lg-3 py-2">
                <p className="bottom">
                  In 18K BEIGE GOLD, yellow gold or white gold*, with or without
                  diamonds... Explore exceptional pieces inspired by the codes
                  of the House. *White gold with a thin layer of Rhodium plating
                  for color
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="banner-img "
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <img src={tryImgTwo} alt="Chanel Banner" className="obj_fit" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ/>
     <Appointment/>

    </Parent>
  );
}

export default TryOn;

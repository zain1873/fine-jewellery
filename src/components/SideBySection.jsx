import React from "react";
import goldImg from "../images/gold-img.webp";
import palace from "../images/palace-img.webp";

const SideBySection = () => {
  return (
    <>
      {/* Section 1: Content Left, Image Right */}
      <div className="beige-gold-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="content-wrapper">
                <h2 className="section-title">18K BEIGE GOLD</h2>
                <p className="section-description">
                  The color of a creation inspired by the vision of Gabrielle
                  Chanel, for whom beige was a refuge. To design a watch or a
                  piece of jewelry in 18K BEIGE GOLD is to give it a distinctive
                  radiance. The signature of CHANEL Watches and Fine Jewelry.
                </p>
                <div className="discover-link-container">
                  <a href="#discover" className="discover-link">
                    DISCOVER
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="image-wrapper">
                <div className="beige-gold-image">
                  <img
                    src={goldImg}
                    alt="18K Beige Gold Jewelry with Diamond"
                    className="obj_fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Image Left, Content Right */}
      <div className="beige-gold-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 order-lg-1 order-md-1 order-2">
              <div className="image-wrapper">
                <div className="beige-gold-image">
                  <img
                    src={palace}
                    alt="18K Beige Gold Jewelry with Diamond"
                    className="obj_fit"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 order-lg-2 order-md-2 order-1">
              <div className="content-wrapper">
                <h2 className="section-title">8 Place Vendôme</h2>
                <p className="section-description">
                  A showcase for CHANEL Watches and Fine Jewelry, the historic
                  building at 18 Place Vendôme houses the Creation Studios, the
                  High Jewelry workshop, the Patrimoine and the boutique. A
                  legendary address where
                </p>
                <div className="discover-link-container">
                  <a href="#discover" className="discover-link">
                    DISCOVER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBySection;

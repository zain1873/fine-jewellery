import React from 'react';
import bannerImg from '../images/banner-img.jpeg';
import Parent from '../components/Parent';
import ChanelRecommendations from '../components/Recommendation';
import JewelryCategories from '../components/Categories';
import ChanelJewelrySection from '../components/Jewellery';
import SideBySection from '../components/SideBySection';
import DualCollectionSection from '../components/DualCollection';
import GewelleryHero from '../components/GewelleryHero';


function Home() {
  return (
    <Parent>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-4">Fine Jewelry</h1>
            <p>Explore our collection of Fine Jewelry and more.</p>
          </div>
          <div className="col-lg-6">
            <div className="banner-img">
              <img src={bannerImg} alt="Chanel Banner" className="obj_fit" />
            </div>
          </div>
        </div>
      </div>

      <ChanelRecommendations/>
      <JewelryCategories/>
      <ChanelJewelrySection/>
      <SideBySection/>
      <DualCollectionSection/>
      <GewelleryHero />

    </Parent>


  );
}

export default Home;

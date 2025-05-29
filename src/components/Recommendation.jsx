import React, { useState, useEffect } from 'react';

import product1 from '../images/single-earing.webp';
import product2 from '../images/coco-earing.webp';
import product3 from '../images/earings.webp';
import product4 from '../images/coco-earing.webp';
import product5 from '../images/single-earing.webp';

const ChanelRecommendations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const products = [
    {
      id: 1,
      name: "COCO CRUSH SINGLE EARRING",
      description: "Quilted motif, 18K white gold, diamonds",
      price: "$2,300",
      image: product1,
      hasClickCollect: true,
      hasTryOn: false
    },
    {
      id: 2,
      name: "COMÈTE GÉODE EARRINGS",
      description: "Medium version, 18K white gold, diamonds",
      price: "$11,100",
      image: product2,
      hasClickCollect: true,
      hasTryOn: false
    },
    {
      id: 3,
      name: "COCO CRUSH SINGLE EARRING",
      description: "Quilted motif, 18K BEIGE GOLD",
      price: "$1,400",
      image: product3,
      hasClickCollect: true,
      hasTryOn: true
    },
    {
      id: 4,
      name: "COCO CRUSH BRACELET",
      description: "Medium version, 18K white gold",
      price: "$3,200",
      image: product4,
      hasClickCollect: true,
      hasTryOn: false
    },
    {
      id: 5,
      name: "COMÈTE NECKLACE",
      description: "Long version, 18K white gold, diamonds",
      price: "$8,900",
      image: product5,
      hasClickCollect: true,
      hasTryOn: true
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 992) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / itemsPerView);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="chanel-recommendations py-5">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Recommended For You</h2>

        <div className="slider-container position-relative">
          <button className="navigation-arrows nav-prev" onClick={prevSlide} disabled={currentSlide === 0}>‹</button>
          <button className="navigation-arrows nav-next" onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>›</button>

          <div className="slider-wrapper">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${(100 / itemsPerView) * currentSlide}%)` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card"
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                    maxWidth: `${100 / itemsPerView}%`
                  }}
                >
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-image obj_fit" />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    {product.hasClickCollect && <button className="click-collect-btn">Click & Collect</button>}
                    <div className="product-price">{product.price}*</div>
                    {product.hasTryOn && (
                      <div className="try-on-container">
                        <button className="try-on-btn">
                          <span className="try-on-icon">👓</span> Try On
                        </button>
                      </div>
                    )}
                    <a href="#" className="view-details">View details →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pagination-container text-center mt-4">
          <div className="pagination-info mb-2">
            {currentSlide + 1} / {totalSlides}
          </div>
          <div className="pagination-dots mb-3">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                className={`pagination-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          <button className="see-more-btn">See More</button>
        </div>
      </div>
    </div>
  );
};

export default ChanelRecommendations;

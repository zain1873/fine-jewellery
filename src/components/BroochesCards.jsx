import React from 'react';

import product from '../images/brooches-new.png';


const BroochesCards = () => {
  const products = [
    {
      id: 1,
      name: "COCOS SINGLE EARRING",
      description: "Quilted motif, 18K white gold, diamonds",
      price: "$2,300",
      hasClickCollect: true,
      image: product,
      hasTryOn: false
    },
    {
      id: 2,
      name: "COMÈTE GÉODE EARRINGS",
      description: "Medium version, 18K white gold, diamonds",
      price: "$11,100",
      hasClickCollect: true,
      image: product,
      hasTryOn: false
    },
    {
      id: 3,
      name: "COCOS SINGLE EARRING",
      description: "Quilted motif, 18K BEIGE GOLD",
      price: "$1,400",
      hasClickCollect: true,
      image: product,
      hasTryOn: true
    },
    {
      id: 4,
      name: "COCOS BRACELET",
      description: "Medium version, 18K white gold",
      price: "$3,200",
      hasClickCollect: true,
      image: product,
      hasTryOn: false
    },
    {
      id: 5,
      name: "COMÈTE NECKLACE",
      description: "Long version, 18K white gold, diamonds",
      price: "$8,900",
      hasClickCollect: true,
      image: product,
      hasTryOn: true
    }
  ];

  return (
    <div className="chanel-recommendations py-lg-5 py-3 top" data-aos="fade-bottom" data-aos-delay="300" data-aos-duration="1000">
      <div className="container">
        <h2 className="section-title mb-4 text-center">Brooches</h2>

        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} className="product-image obj_fit" />
                </div>
                <div className="product-info" data-aos="fade-top" data-aos-delay="300" data-aos-duration="1000">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  {product.hasClickCollect && <button className="click-collect-btn">Click & Collect</button>}
                  <div className="product-price">{product.price}*</div>
          
                  <a href="#" className="view-details">View details →</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="see-more-btn">See More</button>
        </div>
      </div>
    </div>
  );
};

export default BroochesCards;

import React from 'react';
import ringImg from '../images/rings.webp';
import braceletImg from '../images/bracelets.webp';
import necklaceImg from '../images/necklaces.webp';
import earringsImg from '../images/earings.webp';

const JewelryCategories = () => {
  const categories = [
    {
      id: 1,
      title: 'SEE RINGS',
      image: ringImg,
      link: '#rings'
    },
    {
      id: 2,
      title: 'SEE BRACELETS',
      image: braceletImg,
      link: '#bracelets'
    },
    {
      id: 3,
      title: 'SEE NECKLACES',
      image: necklaceImg,
      link: '#necklaces'
    },
    {
      id: 4,
      title: 'SEE EARRINGS',
      image: earringsImg,
      link: '#earrings'
    }
  ];

  return (
    <div className="jewelry-categories-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">DISCOVER BY CATEGORY</h2>
          <a href="#all" className="see-all-link">SEE ALL FINE JEWELRY</a>
        </div>

        <div className="row justify-content-center">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-3 col-md-6 col-sm-6 mb-4 text-center">
              <div className="category-card">
                <img
                  src={category.image}
                  alt={category.title}
                  className="obj_fit category-image mb-3"
                />
                <a href={category.link} className="category-link">
                  {category.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelryCategories;

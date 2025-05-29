import React from 'react';

const ChanelDiscoverCategories = () => {
  const categories = [
    {
      id: 1,
      name: "RINGS",
      image: "💍",
      link: "SEE RINGS"
    },
    {
      id: 2,
      name: "BRACELETS", 
      image: "🔗",
      link: "SEE BRACELETS"
    },
    {
      id: 3,
      name: "NECKLACES",
      image: "📿",
      link: "SEE NECKLACES"
    },
    {
      id: 4,
      name: "EARRINGS",
      image: "👂",
      link: "SEE EARRINGS"
    }
  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`Clicked on ${categoryName}`);
    // Handle navigation logic here
  };

  const handleSeeAllClick = () => {
    console.log('See all fine jewelry clicked');
    // Handle see all navigation here
  };

  return (
    <div className="chanel-discover-categories">
      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12">
            <div className="section-header">
              <h2 className="section-title">Discover by Category</h2>
              <button 
                className="see-all-link"
                onClick={handleSeeAllClick}
              >
                See All Fine Jewelry
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="row justify-content-center">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="category-item">
                <div className="category-image-container">
                  <div className="category-image">
                    {category.image}
                  </div>
                </div>
                <div className="category-info">
                  <button 
                    className="category-link"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.link}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChanelDiscoverCategories;
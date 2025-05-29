import React, { useState } from 'react';
import '../styles/footer.css'; // Import external CSS

const ChanelFooter = () => {
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Handle newsletter signup logic here
  };

  const handleStoreSearch = (e) => {
    e.preventDefault();
    console.log('Store search:', location);
    // Handle store search logic here
  };

  return (
    <div className="chanel-footer-container">

      <footer className="chanel-footer-container">
        <div className="footer-top">
          <div className="container">
            {/* Suggested Price Section */}
            <div className="row">
              <div className="col-12">
                <div className="suggested-price">
                  <p>
                    *Suggested retail price. <a href="#">More information</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="row footer-main">
              {/* Contact an Advisor */}
              <div className="col-lg-4 col-md-12">
                <div className="footer-section">
                  <h3 className="footer-title">Contact an Advisor</h3>
                  <p className="footer-text contact-text">
                    CHANEL Client Care is available Monday to Sunday, 7 AM to 12 AM ET. to answer all your questions.
                  </p>
                  <p className="footer-text">
                    Please <a href="#" className="contact-link">email us</a>, call{' '}
                    <a href="tel:1.800.550.0005" className="contact-link">1.800.550.0005</a>{' '}
                    or live chat with a CHANEL Advisor.
                  </p>
                </div>
              </div>

              {/* Find a Store */}
              <div className="col-lg-4 col-md-12">
                <div className="footer-section">
                  <h3 className="footer-title">Find a Store</h3>
                  <p className="footer-text">
                    Enter a location to find the closest CHANEL stores
                  </p>
                  <div className="input-group-custom">
                    <input
                      type="text"
                      className="form-control-custom"
                      placeholder="City or zip code"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleStoreSearch(e)}
                    />
                    <span className="input-icon search-icon" onClick={handleStoreSearch}>
                      🔍
                    </span>
                    <span className="input-icon location-icon">
                      📍
                    </span>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="col-lg-4 col-md-12">
                <div className="footer-section">
                  <h3 className="footer-title">Newsletter</h3>
                  <p className="footer-text">
                    Subscribe to receive news from CHANEL
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="newsletter-button">
                      OK <span className="arrow-icon">→</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


      </footer>
    </div>
  );
};

export default ChanelFooter;
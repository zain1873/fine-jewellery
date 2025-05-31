import React from 'react';

const ChanelViewing = () => {
  return (
    <div className="chanel-viewing-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
            {/* CHANEL Logo */}
            <div className="chanel-logo mb-5">
              <div className="logo-box">
                CHANEL
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="viewing-title mb-4">
              ARRANGE A VIEWING
            </h1>
            
            {/* Description */}
            <p className="viewing-description mb-5">
              Discover the House's latest creations with a CHANEL Advisor in boutique during a personalized appointment.
            </p>
            
            {/* Book Appointment Button */}
            <a href="/booking-an-appointment">
            <button className="btn book-appointment-btn">
              BOOK AN APPOINTMENT
            </button>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .chanel-viewing-container {
          min-height: 100vh;
          background-color: #f8f9fa;
          display: flex;
          align-items: center;
          padding: 60px 0;
        }
        
        .chanel-logo {
          display: flex;
          justify-content: center;
        }
        
        .logo-box {
          border: 2px solid #000;
          padding: 8px 16px;
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #000;
          background-color: transparent;
        }
        
        .viewing-title {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 4px;
          color: #000;
          font-family: 'Arial', sans-serif;
          margin-bottom: 2rem;
        }
        
        .viewing-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          max-width: 500px;
          margin: 0 auto 3rem auto;
          font-family: 'Arial', sans-serif;
        }
        
        .book-appointment-btn {
          background-color: transparent;
          border: 2px solid #000;
          color: #000;
          padding: 12px 32px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          font-family: 'Arial', sans-serif;
        }
        
        .book-appointment-btn:hover {
          background-color: #000;
          color: #fff;
          border-color: #000;
        }
        
        @media (max-width: 768px) {
          .viewing-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .viewing-description {
            font-size: 0.95rem;
            padding: 0 20px;
          }
          
          .chanel-viewing-container {
            padding: 40px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ChanelViewing;
import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "WHAT IS CHANEL TRY ON?",
      answer: "CHANEL Try On is an innovative virtual experience that allows you to virtually try on CHANEL products using augmented reality technology. This digital tool enables you to see how our makeup, accessories, and fragrances look on you from the comfort of your home, providing a personalized and immersive shopping experience."
    },
    {
      question: "WHY IS THE LOADING TIME SLOW?",
      answer: "Loading times may vary depending on your internet connection speed and device performance. Our Try On experience uses advanced 3D rendering and augmented reality technology, which requires processing power. For optimal performance, we recommend using a stable internet connection and ensuring your device meets the minimum system requirements."
    },
    {
      question: "HOW IS PERSONAL DATA PROTECTED?",
      answer: "CHANEL is committed to protecting your privacy and personal data. We use industry-standard encryption and security measures to safeguard your information. Your virtual try-on sessions are processed locally on your device when possible, and any data shared with our servers is encrypted and handled in accordance with our Privacy Policy and applicable data protection regulations."
    },
    {
      question: "HOW CAN I OPTIMIZE THE EXPERIENCE?",
      answer: "To optimize your CHANEL Try On experience, ensure you have good lighting, position your face clearly within the camera frame, and use a stable internet connection. Remove any glasses or accessories that might interfere with facial recognition, and make sure your camera lens is clean. For best results, use the experience on a desktop or tablet with a high-quality camera."
    },
    {
      question: "DOES THE EXPERIENCE ACCURATELY REFLECT REALITY?",
      answer: "Our Try On technology uses advanced algorithms and color-matching systems to provide a realistic representation of how products will look on you. While the virtual experience is highly accurate, slight variations may occur due to screen calibration, lighting conditions, and individual device settings. We continuously improve our technology to enhance accuracy and realism."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            
            <div className="faq-list">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <div 
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="question-text">{item.question}</span>
                    <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  
                  <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                    <div className="answer-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
          </div>
  );
};

export default FAQ;
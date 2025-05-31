import React, { useState } from 'react';
import Parent from '../components/Parent';
import FAQ from '../components/Faq';

const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Appointment booked:', formData);
    // Handle form submission here
    alert('Appointment request submitted! We will contact you within 24 hours to confirm.');
  };

  const services = [
    'Personal Consultation',
    'Custom Jewelry Design',
    'Ring Sizing & Repair',
    'Jewelry Appraisal',
    'Bridal Collection Viewing',
    'Private Shopping Experience'
  ];

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  return (
    <Parent>
          <div className="appointment-booking">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="brand-logo mb-4">
                <div className="logo-box">LUMINA</div>
              </div>
              <h1 className="hero-title">Book Your Private Appointment</h1>
              <p className="hero-subtitle">
                Experience our exquisite jewelry collection with personalized service in our exclusive showroom
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="booking-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="booking-card">
                <div className="card-header">
                  <h2 className="form-title">Schedule Your Visit</h2>
                  <p className="form-subtitle">Fill in your details and we'll confirm your appointment within 24 hours</p>
                </div>
                
                <div className="booking-form">
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="form-control custom-input"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="form-control custom-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control custom-input"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control custom-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Service Type *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-control custom-select"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Preferred Date *</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="form-control custom-input"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className="form-label">Preferred Time *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="form-control custom-select"
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="form-label">Special Requests or Notes</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="form-control custom-textarea"
                      placeholder="Tell us about your preferences, special occasions, or any specific pieces you'd like to see..."
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="button" onClick={handleSubmit} className="btn booking-btn">
                      CONFIRM APPOINTMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-grid">
                <div className="contact-item">
                  <h3>Showroom Hours</h3>
                  <p>Monday - Saturday<br/>10:00 AM - 6:00 PM</p>
                  <p>Sunday by appointment only</p>
                </div>
                <div className="contact-item">
                  <h3>Location</h3>
                  <p>123 Luxury Avenue<br/>Fashion District<br/>New York, NY 10001</p>
                </div>
                <div className="contact-item">
                  <h3>Contact</h3>
                  <p>Phone: +1 (555) 123-4567<br/>Email: appointments@lumina.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FAQ/>
    </Parent>
  );
};

export default AppointmentBooking;
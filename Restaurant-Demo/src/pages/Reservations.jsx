import React, { useState } from 'react';
import { FiAlertTriangle, FiX } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Reservations.css';

export default function Reservations() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDemoModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  return (
    <div className="reservations page-transition">
      <SEO
        title="Reservations"
        description="Book your table at Your Website Name and enjoy an exceptional dining experience."
        keywords="restaurant reservation, book table, dining reservation"
        url="https://example.com/reservations"
      />

      {/* Demo Warning Modal */}
      {showDemoModal && (
        <div className="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
          <div className="demo-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDemoModal(false)}>
              <FiX />
            </button>
            <div className="demo-modal-icon">
              <FiAlertTriangle />
            </div>
            <h3 className="demo-modal-title">This is a Demo Website</h3>
            <p className="demo-modal-message">
              You cannot make reservations on this demo website. 
              This is just a portfolio demonstration to showcase our web development skills.
            </p>
            <div className="demo-modal-actions">
              <button className="btn btn-primary" onClick={() => setShowDemoModal(false)}>
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="reservations-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Make a <span className="gradient-text">Reservation</span>
            </h1>
            <p className="page-subtitle">
              Reserve your table and ensure a perfect dining experience
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section reservations-section">
        <div className="container">
          <div className="reservations-grid">
            <AnimatedSection direction="left">
              <div className="reservation-info">
                <h2 className="section-title">Reservation Details</h2>
                <p className="info-desc">
                  Fill out the form to reserve your table. We'll confirm your reservation
                  via email or phone within 24 hours.
                </p>
                <div className="info-items">
                  <div className="info-item">
                    <span className="info-label">Location:</span>
                    <span className="info-value">456 Gourmet Avenue, Mumbai</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Hours:</span>
                    <span className="info-value">Mon - Sun: 11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Phone:</span>
                    <span className="info-value">+91 99302 71670</span>
                  </div>
                </div>
                <div className="demo-notice glass-card">
                  <FiAlertTriangle className="notice-icon" />
                  <div className="notice-content">
                    <h4>Demo Website Notice</h4>
                    <p>
                      This is a demo website. Reservations made here are for demonstration 
                      purposes only and will not be processed.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="reservation-form-wrapper glass-card">
                <h3 className="form-title">Book Your Table</h3>
                <form onSubmit={handleSubmit} className="reservation-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="guests">Number of Guests</label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="10+">10+ Guests</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="occasion">Occasion (Optional)</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                    >
                      <option value="">Select Occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests (Optional)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Any dietary restrictions or special requests..."
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    Reserve Table
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
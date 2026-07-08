import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiAlertTriangle, FiX } from 'react-icons/fi';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Contact.css';

export default function Contact() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    message: ''
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

  return (
    <div className="contact page-transition">
      <SEO
        title="Contact"
        description="Get in touch with us for any inquiries about our design and development services."
        keywords="contact design agency, get in touch, project inquiry"
        url="https://example.com/contact"
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
              You cannot send messages or make contact submissions on this demo website. 
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
      <section className="contact-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="page-subtitle">
              Have a project in mind? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection direction="left">
              <div className="contact-info">
                <h2 className="section-title">Contact Information</h2>
                <p className="contact-desc">
                  Reach out to us through any of the following channels. We're here to help!
                </p>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <FiMapPin />
                    </div>
                    <div className="info-content">
                      <h4>Address</h4>
                      <p>{config.address}</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <FiMail />
                    </div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <a href={`mailto:${config.email}`}>{config.email}</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">
                      <FiPhone />
                    </div>
                    <div className="info-content">
                      <h4>Phone</h4>
                      <a href={`tel:${config.phone}`}>{config.phone}</a>
                    </div>
                  </div>
                </div>
                <div className="business-hours">
                  <h4>Business Hours</h4>
                  <p>{config.businessHours}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="contact-form-wrapper glass-card">
                <h3 className="form-title">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
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
                      <label htmlFor="email">Email Address</label>
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
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Enter subject"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="budget">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      >
                        <option value="">Select Budget</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                    <FiSend /> Send Message
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
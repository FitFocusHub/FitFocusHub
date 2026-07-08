import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiSend, FiMail, FiPhone, FiMapPin, FiMessageCircle,
  FiUser, FiBriefcase, FiDollarSign, FiFileText
} from 'react-icons/fi';
import config from '../data/config.json';
import services from '../data/services.json';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import { SEO } from '../components/SEO';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `
*New Project Inquiry*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🏢 *Business:* ${formData.business}
💼 *Service:* ${formData.service}
💰 *Budget:* ${formData.budget}
📝 *Message:* ${formData.message}
━━━━━━━━━━━━━━━━━━
    `.trim();

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        business: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 2000);
  };

  const contactInfo = [
    { icon: <FiPhone />, label: 'Phone', value: config.phone, link: `tel:${config.phone}` },
    { icon: <FiMail />, label: 'Email', value: config.email, link: `mailto:${config.email}` },
    { icon: <FiMapPin />, label: 'Location', value: config.address, link: null },
  ];

  const budgetOptions = [
    'Under ₹10,000',
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    'Above ₹1,00,000',
  ];

  return (
    <div className="contact-page page-transition">
      <SEO
        title="Contact Us"
        description="Contact FitFocusHub for website development, graphic design, video editing, and digital marketing services. WhatsApp us for instant response."
        keywords="contact digital agency, website development company, web design contact, graphic design inquiry, video editing service, WhatsApp contact, India"
        url="https://fitfocushub.github.io/FitFocusHub/contact"
      />
      <PageHeader
        title="Contact Us"
        subtitle="Ready to start your project? Get in touch with us today!"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="contact-info">
                <h2 className="contact-info-title">Let's Talk</h2>
                <p className="contact-info-desc">
                  Have a project in mind? We'd love to hear about it.
                  Reach out to us and let's create something amazing together.
                </p>

                <div className="info-cards">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="info-card">
                      <div className="info-icon">{info.icon}</div>
                      <div className="info-content">
                        <span className="info-label">{info.label}</span>
                        {info.link ? (
                          <a href={info.link} className="info-value">{info.value}</a>
                        ) : (
                          <span className="info-value">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="social-section">
                  <h4 className="social-title">Follow Us</h4>
                  <div className="social-buttons">
                    <a
                      href={`https://api.whatsapp.com/send?phone=${config.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn whatsapp"
                    >
                      <FiMessageCircle /> WhatsApp
                    </a>
                    <a
                      href={`mailto:${config.email}`}
                      className="social-btn email"
                    >
                      <FiMail /> Email
                    </a>
                  </div>
                </div>

                {/* Google Map */}
                <div className="map-container">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635768123456!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <form className="contact-form glass-card" onSubmit={handleSubmit}>
                <h3 className="form-title">Send Us a Message</h3>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser size={14} /> Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <FiPhone size={14} /> Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail size={14} /> Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="business">
                      <FiBriefcase size={14} /> Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      placeholder="Your business name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">
                      <FiFileText size={14} /> Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">
                      <FiDollarSign size={14} /> Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select your budget</option>
                      {budgetOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">
                    <FiFileText size={14} /> Message
                  </label>
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

                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FiSend /> Send Message on WhatsApp
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaCut, FaSpa, FaHandSparkles, FaPaintBrush, FaUserTie, FaHeart, FaStar, FaTimes, FaMapMarkerAlt, FaPhone, FaArrowRight } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './SalonTemplate.css';

const Salon = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  const services = [
    { name: 'Haircut & Styling', icon: FaCut, price: '₹499', duration: '45 min', desc: 'Expert cuts tailored to your face shape and style preference.' },
    { name: 'Deep Cleansing Facial', icon: FaSpa, price: '₹899', duration: '60 min', desc: 'Rejuvenating facial treatment for glowing, healthy skin.' },
    { name: 'Full Body Massage', icon: FaHandSparkles, price: '₹1299', duration: '90 min', desc: 'Relaxing therapeutic massage to relieve tension and stress.' },
    { name: 'Gel Manicure', icon: FaPaintBrush, price: '₹599', duration: '45 min', desc: 'Long-lasting gel polish with nail art and cuticle care.' },
    { name: 'Spa Pedicure', icon: FaHandSparkles, price: '₹699', duration: '60 min', desc: 'Complete foot care with scrub, mask, and massage.' },
    { name: 'Bridal Package', icon: FaHeart, price: '₹4999', duration: '4 hrs', desc: 'Complete bridal makeover including hair, makeup, and spa.' },
  ];

  const stylists = [
    { name: 'Priya Sharma', role: 'Hair Stylist', exp: '8 years exp', specialties: 'Cuts, Color, Balayage' },
    { name: 'Ananya Reddy', role: 'Skin Specialist', exp: '6 years exp', specialties: 'Facials, Acne Treatment' },
    { name: 'Meera Joshi', role: 'Makeup Artist', exp: '10 years exp', specialties: 'Bridal, HD Makeup' },
    { name: 'Nisha Verma', role: 'Nail Artist', exp: '5 years exp', specialties: 'Nail Art, Gel Polish' },
  ];

  const packages = [
    { name: 'Basic Glow', price: '₹1499', features: ['Haircut & Blow Dry', 'Basic Facial', 'Manicure', 'Free Consultation'], popular: false },
    { name: 'Signature Package', price: '₹2999', features: ['Haircut & Styling', 'Deep Cleansing Facial', 'Gel Manicure & Pedicure', 'Head Massage', 'Free Hair Spa'], popular: true },
    { name: 'Bridal Royale', price: '₹7999', features: ['Bridal Hairdo', 'HD Makeup', 'Full Body Massage', 'Bridal Facial', 'Manicure & Pedicure', 'Pre-bridal Skin Prep'], popular: false },
  ];

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="salon-app">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <nav className="salon-nav">
        <div className="salon-nav-inner">
          <div className="salon-logo">
            <FaCut className="salon-logo-icon" />
            <span>Your Salon</span>
          </div>
          <div className="salon-nav-links">
            <a href="#services">Services</a>
            <a href="#team">Stylists</a>
            <a href="#pricing">Packages</a>
            <a href="#booking">Book</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="salon-nav-settings" onClick={() => setShowSettings(true)}>Settings</button>
        </div>
      </nav>

      <section className="salon-hero">
        <div className="salon-hero-overlay"></div>
        <motion.div className="salon-hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1>Unleash Your <span className="salon-accent">Inner Beauty</span></h1>
          <p>Premium hair, skin, and nail services crafted to perfection. Experience luxury like never before.</p>
          <div className="salon-hero-btns">
            <button className="salon-btn-primary" onClick={() => setShowModal(true)}>Book Appointment</button>
            <a href="#services" className="salon-btn-secondary">Explore Services <FaArrowRight /></a>
          </div>
        </motion.div>
        <div className="salon-hero-shape"></div>
      </section>

      <section id="services" className="salon-services">
        <motion.div className="salon-section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <span className="salon-section-tag">What We Offer</span>
          <h2>Our Premium Services</h2>
          <p>From hair transformations to skin rejuvenation, we deliver excellence in every service.</p>
        </motion.div>
        <div className="salon-services-grid">
          {services.map((s, i) => (
            <motion.div key={i} className="salon-service-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="salon-service-icon"><s.icon /></div>
              <h3>{s.name}</h3>
              <p className="salon-service-desc">{s.desc}</p>
              <div className="salon-service-meta">
                <span className="salon-service-price">{s.price}</span>
                <span className="salon-service-duration">{s.duration}</span>
              </div>
              <button className="salon-service-btn" onClick={() => setShowModal(true)}>Book Now</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="team" className="salon-team">
        <div className="salon-section-header">
          <span className="salon-section-tag">Meet The Experts</span>
          <h2>Our Stylists</h2>
          <p>Talented professionals dedicated to making you look and feel your best.</p>
        </div>
        <div className="salon-team-grid">
          {stylists.map((s, i) => (
            <motion.div key={i} className="salon-team-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: i * 0.15 }}>
              <div className="salon-team-avatar">
                <FaUserTie />
              </div>
              <h3>{s.name}</h3>
              <span className="salon-team-role">{s.role}</span>
              <span className="salon-team-exp">{s.exp}</span>
              <p className="salon-team-specs">{s.specialties}</p>
              <div className="salon-team-stars">
                {[...Array(5)].map((_, j) => <FaStar key={j} />)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="salon-pricing">
        <div className="salon-section-header">
          <span className="salon-section-tag">Choose Your Plan</span>
          <h2>Packages & Pricing</h2>
          <p>Affordable luxury packages designed to give you the best value.</p>
        </div>
        <div className="salon-pricing-grid">
          {packages.map((p, i) => (
            <motion.div key={i} className={`salon-pricing-card ${p.popular ? 'salon-pricing-popular' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: i * 0.15 }}>
              {p.popular && <div className="salon-pricing-badge">Most Popular</div>}
              <h3>{p.name}</h3>
              <div className="salon-pricing-price">{p.price}</div>
              <ul>
                {p.features.map((f, j) => <li key={j}><FaStar className="salon-pricing-check" /> {f}</li>)}
              </ul>
              <button className="salon-btn-primary" onClick={() => setShowModal(true)}>Buy Package</button>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="booking" className="salon-booking">
        <div className="salon-booking-content">
          <motion.div className="salon-booking-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
            <span className="salon-section-tag">Ready for a Makeover?</span>
            <h2>Book Your Appointment</h2>
            <p>Schedule your visit in just a few clicks. Walk in as a guest, walk out as royalty.</p>
            <button className="salon-btn-primary" onClick={() => setShowModal(true)}>Book Appointment</button>
          </motion.div>
          <motion.div className="salon-booking-form-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <form className="salon-booking-form" onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}>
              <input type="text" placeholder="Your Name" />
              <input type="tel" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address" />
              <select defaultValue="">
                <option value="" disabled>Select Service</option>
                {services.map((s, i) => <option key={i}>{s.name}</option>)}
              </select>
              <input type="date" />
              <input type="time" />
              <button type="submit" className="salon-btn-primary">Confirm Booking</button>
            </form>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="salon-contact">
        <div className="salon-section-header">
          <span className="salon-section-tag">Get In Touch</span>
          <h2>Contact Us</h2>
        </div>
        <div className="salon-contact-grid">
          <div className="salon-contact-card">
            <FaMapMarkerAlt className="salon-contact-icon" />
            <h4>Visit Us</h4>
            <p>123 Beauty Lane, Fashion Street, Mumbai, Maharashtra 400001</p>
          </div>
          <div className="salon-contact-card">
            <FaPhone className="salon-contact-icon" />
            <h4>Call Us</h4>
            <p>+91 98765 43210</p>
          </div>
          <div className="salon-contact-card">
            <FaEnvelope className="salon-contact-icon" />
            <h4>Email Us</h4>
            <p>fitfocushub2@gmail.com</p>
          </div>
        </div>
      </section>

      <TemplateFooter
        websiteName="Your Salon"
        email="fitfocushub2@gmail.com"
        instagram1="@mohammad_s4kib"
        instagram2="@abhaytiwari6434"
        onSettingsClick={() => setShowSettings(true)}
      />
    </div>
  );
};

export default Salon;

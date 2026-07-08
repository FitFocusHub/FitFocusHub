import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaHotel, FaConciergeBell, FaSwimmingPool, FaDumbbell, FaUtensils, FaWifi, FaParking, FaSpa, FaStar, FaTimes, FaMapMarkerAlt, FaPhone, FaArrowRight, FaBed, FaBath, FaUsers, FaExpandArrowsAlt } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './HotelTemplate.css';

const Hotel = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  const rooms = [
    {
      name: 'Standard Room',
      price: '₹2,999',
      perNight: '/night',
      desc: 'Comfortable room with city views and modern amenities.',
      features: [
        { icon: FaBed, text: 'Queen Bed' },
        { icon: FaBath, text: 'Private Bath' },
        { icon: FaWifi, text: 'Free WiFi' },
        { icon: FaExpandArrowsAlt, text: '280 sq ft' },
      ],
      capacity: '2 Guests',
    },
    {
      name: 'Deluxe Suite',
      price: '₹5,999',
      perNight: '/night',
      desc: 'Spacious suite with panoramic views and premium comforts.',
      features: [
        { icon: FaBed, text: 'King Bed' },
        { icon: FaBath, text: 'Jacuzzi Bath' },
        { icon: FaWifi, text: 'Free WiFi' },
        { icon: FaExpandArrowsAlt, text: '450 sq ft' },
      ],
      capacity: '2 Guests',
      popular: true,
    },
    {
      name: 'Royal Penthouse',
      price: '₹12,999',
      perNight: '/night',
      desc: 'Ultimate luxury with private terrace and butler service.',
      features: [
        { icon: FaBed, text: 'King Bed' },
        { icon: FaBath, text: 'Steam & Sauna' },
        { icon: FaWifi, text: 'Free WiFi' },
        { icon: FaExpandArrowsAlt, text: '800 sq ft' },
      ],
      capacity: '4 Guests',
    },
  ];

  const amenities = [
    { icon: FaSwimmingPool, name: 'Infinity Pool', desc: 'Temperature-controlled rooftop pool with stunning views' },
    { icon: FaDumbbell, name: 'Fitness Center', desc: 'State-of-the-art equipment and personal trainers' },
    { icon: FaUtensils, name: 'Fine Dining', desc: 'Multi-cuisine restaurant with private dining options' },
    { icon: FaSpa, name: 'Luxury Spa', desc: 'Full-service spa with Ayurvedic and modern treatments' },
    { icon: FaWifi, name: 'High-Speed WiFi', desc: 'Complimentary high-speed internet throughout the hotel' },
    { icon: FaParking, name: 'Valet Parking', desc: 'Complimentary valet and secure underground parking' },
    { icon: FaConciergeBell, name: '24/7 Concierge', desc: 'Personal concierge service for all your needs' },
    { icon: FaHotel, name: 'Airport Transfer', desc: 'Luxury car transfers to and from the airport' },
  ];

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="hotel-app">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} />

      <nav className="hotel-nav">
        <div className="hotel-nav-inner">
          <div className="hotel-logo">
            <FaHotel className="hotel-logo-icon" />
            <span>Your Hotel</span>
          </div>
          <div className="hotel-nav-links">
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#gallery">Gallery</a>
            <a href="#booking">Book</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="hotel-nav-settings" onClick={() => setShowSettings(true)}>Settings</button>
        </div>
      </nav>

      <section className="hotel-hero">
        <div className="hotel-hero-overlay"></div>
        <motion.div className="hotel-hero-content" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="hotel-hero-tag">Welcome to Luxury</span>
          <h1>Where Elegance <br />Meets <span className="hotel-accent">Excellence</span></h1>
          <p>An extraordinary escape crafted for those who appreciate the finer things in life.</p>
          <div className="hotel-hero-btns">
            <button className="hotel-btn-primary" onClick={() => setShowModal(true)}>Book Your Stay</button>
            <a href="#rooms" className="hotel-btn-secondary">View Rooms <FaArrowRight /></a>
          </div>
        </motion.div>
        <div className="hotel-hero-shape"></div>
      </section>

      <section id="rooms" className="hotel-rooms">
        <motion.div className="hotel-section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
          <span className="hotel-section-tag">Accommodations</span>
          <h2>Luxurious Rooms & Suites</h2>
          <p>Each room is a sanctuary of comfort, designed to exceed your every expectation.</p>
        </motion.div>
        <div className="hotel-rooms-grid">
          {rooms.map((r, i) => (
            <motion.div key={i} className={`hotel-room-card ${r.popular ? 'hotel-room-popular' : ''}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.5, delay: i * 0.15 }}>
              {r.popular && <div className="hotel-room-badge">Most Popular</div>}
              <div className="hotel-room-visual">
                <FaBed className="hotel-room-visual-icon" />
              </div>
              <div className="hotel-room-body">
                <div className="hotel-room-header">
                  <h3>{r.name}</h3>
                  <span className="hotel-room-capacity"><FaUsers /> {r.capacity}</span>
                </div>
                <p className="hotel-room-desc">{r.desc}</p>
                <div className="hotel-room-features">
                  {r.features.map((f, j) => (
                    <span key={j} className="hotel-room-feature">
                      <f.icon /> {f.text}
                    </span>
                  ))}
                </div>
                <div className="hotel-room-footer">
                  <div className="hotel-room-price">
                    {r.price}<span>{r.perNight}</span>
                  </div>
                  <button className="hotel-btn-primary hotel-btn-sm" onClick={() => setShowModal(true)}>Book Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="amenities" className="hotel-amenities">
        <div className="hotel-section-header">
          <span className="hotel-section-tag">World-Class</span>
          <h2>Premium Amenities</h2>
          <p>Everything you need for an unforgettable stay, all under one roof.</p>
        </div>
        <div className="hotel-amenities-grid">
          {amenities.map((a, i) => (
            <motion.div key={i} className="hotel-amenity-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className="hotel-amenity-icon"><a.icon /></div>
              <h4>{a.name}</h4>
              <p>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="gallery" className="hotel-gallery">
        <div className="hotel-section-header">
          <span className="hotel-section-tag">Visual Journey</span>
          <h2>Hotel Gallery</h2>
          <p>A glimpse into the world of luxury that awaits you.</p>
        </div>
        <div className="hotel-gallery-grid">
          {['Lobby & Reception', 'Deluxe Suite', 'Infinity Pool', 'Fine Dining Restaurant', 'Luxury Spa', 'Royal Penthouse'].map((item, i) => (
            <motion.div key={i} className="hotel-gallery-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <div className="hotel-gallery-placeholder">
                <FaHotel />
                <span>{item}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="booking" className="hotel-booking">
        <div className="hotel-booking-content">
          <motion.div className="hotel-booking-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6 }}>
            <span className="hotel-section-tag">Reserve Now</span>
            <h2>Book Your Perfect Stay</h2>
            <p>Secure your reservation today and experience a world of unparalleled luxury and comfort.</p>
            <div className="hotel-booking-highlights">
              <div className="hotel-booking-highlight">
                <FaStar className="hotel-highlight-icon" />
                <div>
                  <h4>Best Rate Guarantee</h4>
                  <p>We match any lower price found online.</p>
                </div>
              </div>
              <div className="hotel-booking-highlight">
                <FaStar className="hotel-highlight-icon" />
                <div>
                  <h4>Free Cancellation</h4>
                  <p>Cancel up to 24 hours before check-in.</p>
                </div>
              </div>
              <div className="hotel-booking-highlight">
                <FaStar className="hotel-highlight-icon" />
                <div>
                  <h4>Complimentary Breakfast</h4>
                  <p>Enjoy daily breakfast on the house.</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="hotel-booking-form-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <form className="hotel-booking-form" onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}>
              <div className="hotel-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="hotel-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="hotel-form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your phone" />
              </div>
              <div className="hotel-form-group">
                <label>Room Type</label>
                <select defaultValue="">
                  <option value="" disabled>Select room type</option>
                  {rooms.map((r, i) => <option key={i}>{r.name}</option>)}
                </select>
              </div>
              <div className="hotel-form-row">
                <div className="hotel-form-group">
                  <label>Check-in</label>
                  <input type="date" />
                </div>
                <div className="hotel-form-group">
                  <label>Check-out</label>
                  <input type="date" />
                </div>
              </div>
              <div className="hotel-form-group">
                <label>Special Requests</label>
                <textarea placeholder="Any special requests or notes..." rows={3}></textarea>
              </div>
              <button type="submit" className="hotel-btn-primary">Reserve Now</button>
            </form>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="hotel-contact">
        <div className="hotel-section-header">
          <span className="hotel-section-tag">Reach Us</span>
          <h2>Contact Information</h2>
        </div>
        <div className="hotel-contact-grid">
          <div className="hotel-contact-card">
            <FaMapMarkerAlt className="hotel-contact-icon" />
            <h4>Location</h4>
            <p>456 Luxury Avenue, Royal District, Jaipur, Rajasthan 302001</p>
          </div>
          <div className="hotel-contact-card">
            <FaPhone className="hotel-contact-icon" />
            <h4>Phone</h4>
            <p>+91 98765 43210</p>
          </div>
          <div className="hotel-contact-card">
            <FaEnvelope className="hotel-contact-icon" />
            <h4>Email</h4>
            <p>fitfocushub2@gmail.com</p>
          </div>
        </div>
      </section>

      <TemplateFooter
        websiteName="Your Hotel"
        email="fitfocushub2@gmail.com"
        instagram1="@mohammad_s4kib"
        instagram2="@abhaytiwari6434"
        onSettingsClick={() => setShowSettings(true)}
      />
    </div>
  );
};

export default Hotel;

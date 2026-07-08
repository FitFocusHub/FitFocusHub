import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiMenu, FiX, FiMapPin, FiPhone, FiMail, FiClock,
  FiArrowRight, FiStar, FiCheck, FiSend, FiGlobe, FiShield,
  FiUsers, FiCalendar, FiTrendingUp
} from 'react-icons/fi';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './TravelTemplate.css';

const destinations = [
  { id: 1, name: 'Maldives Paradise', emoji: '🏝️', price: 34999, per: 'per person', desc: 'Crystal clear waters, white sandy beaches, and luxurious overwater villas.', rating: 4.9, duration: '5D / 4N' },
  { id: 2, name: 'Swiss Alps Trek', emoji: '⛰️', price: 59999, per: 'per person', desc: 'Breathtaking mountain views, alpine meadows, and thrilling adventure sports.', rating: 4.8, duration: '7D / 6N' },
  { id: 3, name: 'Tokyo Explorer', emoji: '🗼', price: 44999, per: 'per person', desc: 'Ancient temples, futuristic skyline, and unforgettable street food tours.', rating: 4.7, duration: '6D / 5N' },
  { id: 4, name: 'Patagonia Adventure', emoji: '🏔️', price: 74999, per: 'per person', desc: 'Untamed wilderness, massive glaciers, and epic trekking routes.', rating: 4.9, duration: '10D / 9N' },
];

const features = [
  { icon: <FiShield size={24} />, title: 'Verified & Safe', desc: 'Every trip is fully insured with 24/7 emergency support for total peace of mind.' },
  { icon: <FiGlobe size={24} />, title: '500+ Destinations', desc: 'From tropical beaches to alpine peaks — we cover every corner of the globe.' },
  { icon: <FiUsers size={24} />, title: 'Expert Local Guides', desc: 'Knowledgeable guides who bring every destination to life with insider stories.' },
  { icon: <FiTrendingUp size={24} />, title: 'Best Price Guarantee', desc: 'We match any competitor price and include exclusive perks at no extra cost.' },
];

const testimonials = [
  { name: 'Priya Sharma', avatar: 'PS', text: 'Our Maldives trip was absolutely magical! Everything was perfectly arranged from start to finish. The resort was stunning and the staff were incredibly helpful.', rating: 5, trip: 'Maldives Paradise' },
  { name: 'Rahul Verma', avatar: 'RV', text: 'The Swiss Alps trek was a life-changing experience. The views were breathtaking and our guide was extremely knowledgeable. Highly recommend!', rating: 5, trip: 'Swiss Alps Trek' },
  { name: 'Ananya Patel', avatar: 'AP', text: 'Tokyo was a perfect blend of tradition and modernity. The food tour was the highlight of our trip. Can\'t wait to go back!', rating: 5, trip: 'Tokyo Explorer' },
];

function formatPrice(p) {
  return `₹${p.toLocaleString('en-IN')}`;
}

export default function TravelTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('booking');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const destinationsRef = useRef(null);
  const whyUsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDemo = (type, name) => {
    setModalType(type);
    setModalItem(name);
    setShowModal(true);
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="travel-template">
      {/* Navbar */}
      <nav className="travel-navbar">
        <div className="travel-navbar-inner">
          <div className="travel-logo">Wanderlust Travels</div>
          <ul className="travel-nav-links">
            <li><span onClick={() => scrollTo(heroRef)}>Home</span></li>
            <li><span onClick={() => scrollTo(statsRef)}>Stats</span></li>
            <li><span onClick={() => scrollTo(destinationsRef)}>Destinations</span></li>
            <li><span onClick={() => scrollTo(whyUsRef)}>Why Us</span></li>
            <li><span onClick={() => scrollTo(testimonialsRef)}>Reviews</span></li>
            <li><span onClick={() => scrollTo(contactRef)}>Contact</span></li>
          </ul>
          <div className="travel-nav-right">
            <button className="travel-mobile-toggle"><FiMenu /></button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="travel-hero" ref={heroRef}>
        <div className="travel-hero-bg" />
        <div className="travel-hero-overlay" />
        <div className="travel-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="travel-hero-content"
          >
            <div className="travel-hero-badge">
              <FiGlobe size={14} /> Explore the World
            </div>
            <h1>Your Next <span>Adventure</span> Awaits</h1>
            <p>Discover breathtaking destinations, curated travel packages, and unforgettable experiences. Your dream vacation is just one click away.</p>
            <div className="travel-hero-buttons">
              <span className="travel-btn travel-btn-primary" onClick={() => scrollTo(destinationsRef)}>
                Explore Destinations <FiArrowRight />
              </span>
              <span className="travel-btn travel-btn-secondary" onClick={() => scrollTo(statsRef)}>
                Learn More
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="travel-stats" ref={statsRef}>
        <div className="travel-container">
          <div className="travel-stats-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="travel-stat-card"
            >
              <h3>500+</h3>
              <p>Destinations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="travel-stat-card"
            >
              <h3>10K+</h3>
              <p>Happy Travelers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="travel-stat-card"
            >
              <h3>4.9</h3>
              <p>Average Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="travel-stat-card"
            >
              <h3>15+</h3>
              <p>Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="travel-destinations" ref={destinationsRef}>
        <div className="travel-container">
          <div className="travel-section-header">
            <h2>Popular <span>Destinations</span></h2>
            <p>Handpicked destinations for your next unforgettable journey</p>
          </div>
          <div className="travel-destinations-grid">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="travel-destination-card"
              >
                <div className="travel-destination-image">
                  <span className="travel-destination-emoji">{dest.emoji}</span>
                </div>
                <div className="travel-destination-info">
                  <h3>{dest.name}</h3>
                  <p>{dest.desc}</p>
                  <div className="travel-destination-meta">
                    <span className="travel-destination-duration">
                      <FiCalendar size={13} /> {dest.duration}
                    </span>
                    <span className="travel-destination-rating">
                      <FiStar size={14} fill="#0ea5e9" /> {dest.rating}
                    </span>
                  </div>
                  <div className="travel-destination-price-row">
                    <span className="travel-destination-price">{formatPrice(dest.price)}</span>
                    <span className="travel-destination-per">{dest.per}</span>
                  </div>
                  <button
                    className="travel-btn travel-btn-primary travel-btn-full"
                    onClick={() => openDemo('booking', dest.name)}
                  >
                    Book Trip
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="travel-why-us" ref={whyUsRef}>
        <div className="travel-container">
          <div className="travel-section-header">
            <h2>Why <span>Choose Us</span></h2>
            <p>We go above and beyond to make every trip extraordinary</p>
          </div>
          <div className="travel-features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="travel-feature-card"
              >
                <div className="travel-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="travel-testimonials" ref={testimonialsRef}>
        <div className="travel-container">
          <div className="travel-section-header">
            <h2>Traveler <span>Reviews</span></h2>
            <p>See what our happy travelers have to say</p>
          </div>
          <div className="travel-testimonials-grid">
            {testimonials.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="travel-testimonial-card"
              >
                <div className="travel-testimonial-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FiStar key={i} size={14} fill="#0ea5e9" />
                  ))}
                </div>
                <p className="travel-testimonial-text">"{review.text}"</p>
                <div className="travel-testimonial-author">
                  <div className="travel-testimonial-avatar">{review.avatar}</div>
                  <div>
                    <h4>{review.name}</h4>
                    <p>Traveled to {review.trip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="travel-contact" ref={contactRef}>
        <div className="travel-container">
          <div className="travel-contact-grid">
            <div className="travel-contact-info">
              <h2>Let's <span>Connect</span></h2>
              <p>Ready to plan your dream trip? Reach out to our travel experts and we'll create a personalized itinerary just for you.</p>
              <div className="travel-info-item">
                <FiPhone /> <span>+91 98765 43210</span>
              </div>
              <div className="travel-info-item">
                <FiMail /> <span>hello@wanderlusttravels.com</span>
              </div>
              <div className="travel-info-item">
                <FiMapPin /> <span>123 Travel Avenue, Mumbai, India</span>
              </div>
              <div className="travel-info-item">
                <FiClock /> <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
            <div className="travel-contact-form">
              <div className="travel-form-row">
                <div className="travel-form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="travel-form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="travel-form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>
              <div className="travel-form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your dream trip..." />
              </div>
              <button
                className="travel-btn travel-btn-primary travel-btn-full"
                onClick={() => openDemo('booking', 'Contact Message')}
              >
                <FiSend /> Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name="Wanderlust Travels" onSettingsClick={() => setShowSettings(true)} />

      <DemoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        itemName={modalItem}
      />
    </div>
  );
}

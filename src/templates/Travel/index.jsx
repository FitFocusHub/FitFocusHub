import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMenu, FiX, FiMapPin, FiPhone, FiMail, FiClock,
  FiArrowRight, FiStar, FiCalendar, FiUsers, FiCheck,
  FiSend, FiGlobe, FiCompass, FiTrendingUp, FiShield
} from 'react-icons/fi';
import { FaUmbrellaBeach, FaMountain, FaCity, FaHiking } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './TravelTemplate.css';

const destinations = [
  { id: 1, name: 'Maldives Paradise', type: 'beach', emoji: '🏝️', tag: 'trending', price: 34999, per: 'per person', desc: 'Crystal clear waters, white sandy beaches, and overwater villas.', rating: 4.9, duration: '5 Days / 4 Nights' },
  { id: 2, name: 'Swiss Alps Trek', type: 'mountain', emoji: '⛰️', tag: 'popular', price: 59999, per: 'per person', desc: 'Breathtaking mountain views, alpine meadows, and adventure sports.', rating: 4.8, duration: '7 Days / 6 Nights' },
  { id: 3, name: 'Tokyo Explorer', type: 'city', emoji: '🗼', tag: 'popular', price: 44999, per: 'per person', desc: 'Ancient temples, futuristic tech, and incredible street food.', rating: 4.7, duration: '6 Days / 5 Nights' },
  { id: 4, name: 'Patagonia Adventure', type: 'adventure', emoji: '🏔️', tag: 'trending', price: 74999, per: 'per person', desc: 'Untamed wilderness, glaciers, and epic trekking routes.', rating: 4.9, duration: '10 Days / 9 Nights' },
];

const packages = [
  {
    name: 'Explorer',
    subtitle: 'Perfect for solo travelers',
    price: '₹24,999',
    per: '/ person',
    features: ['3-Star Hotel Stay', 'Guided City Tours', 'Airport Transfers', 'Breakfast Included', 'Travel Insurance'],
  },
  {
    name: 'Voyager',
    subtitle: 'Best value for couples',
    price: '₹49,999',
    per: '/ couple',
    popular: true,
    features: ['4-Star Resort Stay', 'Private Tours', 'Airport Transfers', 'All Meals Included', 'Spa Session', 'Adventure Activities'],
  },
  {
    name: 'Luxe',
    subtitle: 'Ultimate luxury experience',
    price: '₹99,999',
    per: '/ person',
    features: ['5-Star Villa Stay', 'Personal Concierge', 'Private Jet Transfers', 'Michelin Dining', 'Unlimited Spa', 'VIP Experiences', '24/7 Support'],
  },
];

const reviews = [
  { name: 'Priya Sharma', avatar: 'PS', text: 'Our Maldives trip was absolutely magical! Everything was perfectly arranged from start to finish. The resort was stunning and the staff were incredibly helpful.', rating: 5, trip: 'Maldives Paradise' },
  { name: 'Rahul Verma', avatar: 'RV', text: 'The Swiss Alps trek was a life-changing experience. The views were breathtaking and our guide was extremely knowledgeable. Highly recommend!', rating: 5, trip: 'Swiss Alps Trek' },
  { name: 'Ananya Patel', avatar: 'AP', text: 'Tokyo was a perfect blend of tradition and modernity. The food tour was the highlight of our trip. Can\'t wait to go back!', rating: 4, trip: 'Tokyo Explorer' },
];

export default function TravelTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('booking');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);

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
          <div className="travel-logo">Your Travel</div>
          <ul className="travel-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="travel-nav-right">
            <button className="travel-mobile-toggle"><FiMenu /></button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="travel-hero" id="home">
        <div className="travel-hero-bg" />
        <div className="travel-hero-grid" />
        <div className="travel-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="travel-hero-content"
          >
            <div className="travel-hero-badge">
              <FiCompass size={14} /> Explore the World
            </div>
            <h1>Find Your Next <span>Adventure</span> Awaits</h1>
            <p>Discover breathtaking destinations, curated travel packages, and unforgettable experiences. Your dream vacation is just one click away.</p>
            <div className="travel-hero-buttons">
              <a href="#destinations" className="travel-btn travel-btn-primary">
                Explore Destinations <FiArrowRight />
              </a>
              <a href="#packages" className="travel-btn travel-btn-secondary">
                View Packages
              </a>
            </div>
            <div className="travel-hero-stats">
              <div className="travel-stat">
                <h3>500+</h3>
                <p>Destinations</p>
              </div>
              <div className="travel-stat">
                <h3>10K+</h3>
                <p>Happy Travelers</p>
              </div>
              <div className="travel-stat">
                <h3>4.9</h3>
                <p>Average Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations */}
      <section className="travel-destinations" id="destinations">
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
                <div className={`travel-destination-image ${dest.type}`}>
                  <span>{dest.emoji}</span>
                  <span className={`travel-destination-tag travel-tag-${dest.tag}`}>
                    {dest.tag}
                  </span>
                </div>
                <div className="travel-destination-info">
                  <h3>{dest.name}</h3>
                  <p>{dest.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: '#6b7280', fontSize: '13px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><FiCalendar size={13} /> {dest.duration}</span>
                  </div>
                  <div className="travel-destination-meta">
                    <div>
                      <span className="travel-destination-price">{formatPrice(dest.price)} <span>{dest.per}</span></span>
                    </div>
                    <div className="travel-destination-rating">
                      <FiStar size={14} fill="#fbbf24" /> {dest.rating}
                    </div>
                  </div>
                  <button
                    className="travel-btn travel-btn-primary travel-btn-sm travel-btn-full"
                    style={{ marginTop: '16px' }}
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

      {/* Packages */}
      <section className="travel-packages" id="packages">
        <div className="travel-container">
          <div className="travel-section-header">
            <h2>Travel <span>Packages</span></h2>
            <p>Choose the perfect package that suits your travel style</p>
          </div>
          <div className="travel-packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`travel-package-card ${pkg.popular ? 'popular' : ''}`}
              >
                {pkg.popular && <span className="travel-package-badge">Most Popular</span>}
                <h3>{pkg.name}</h3>
                <p className="subtitle">{pkg.subtitle}</p>
                <div className="travel-package-price">{pkg.price}<span>{pkg.per}</span></div>
                <ul className="travel-package-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i}><FiCheck size={16} /> {feature}</li>
                  ))}
                </ul>
                <button
                  className={`travel-btn ${pkg.popular ? 'travel-btn-primary' : 'travel-btn-secondary'} travel-btn-full`}
                  onClick={() => openDemo('booking', `${pkg.name} Package`)}
                >
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="travel-reviews" id="reviews">
        <div className="travel-container">
          <div className="travel-section-header">
            <h2>Traveler <span>Reviews</span></h2>
            <p>See what our happy travelers have to say</p>
          </div>
          <div className="travel-reviews-grid">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="travel-review-card"
              >
                <div className="travel-review-stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FiStar key={i} size={14} fill="#fbbf24" />
                  ))}
                </div>
                <p className="travel-review-text">"{review.text}"</p>
                <div className="travel-review-author">
                  <div className="travel-review-avatar">{review.avatar}</div>
                  <div className="travel-review-author-info">
                    <h4>{review.name}</h4>
                    <p>Traveled to {review.trip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="travel-booking" id="booking">
        <div className="travel-container">
          <div className="travel-section-header">
            <h2>Book Your <span>Trip</span></h2>
            <p>Fill in the details and we'll craft your perfect itinerary</p>
          </div>
          <div className="travel-booking-form">
            <div className="travel-form-row">
              <div className="travel-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="travel-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="travel-form-row">
              <div className="travel-form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="travel-form-group">
                <label>Number of Travelers</label>
                <input type="number" placeholder="2" min="1" />
              </div>
            </div>
            <div className="travel-form-row">
              <div className="travel-form-group">
                <label>Destination</label>
                <select>
                  <option value="">Select destination</option>
                  <option>Maldives Paradise</option>
                  <option>Swiss Alps Trek</option>
                  <option>Tokyo Explorer</option>
                  <option>Patagonia Adventure</option>
                </select>
              </div>
              <div className="travel-form-group">
                <label>Travel Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="travel-form-group">
              <label>Special Requests</label>
              <textarea placeholder="Any dietary requirements, accessibility needs, or special occasions?" />
            </div>
            <button
              className="travel-btn travel-btn-accent travel-btn-full"
              onClick={() => openDemo('booking', 'Trip Booking')}
            >
              <FiSend /> Book Trip Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="travel-contact" id="contact">
        <div className="travel-container">
          <div className="travel-contact-grid">
            <div className="travel-contact-info">
              <h2>Let's <span>Connect</span></h2>
              <p>Ready to plan your dream trip? Reach out to our travel experts and we'll create a personalized itinerary just for you.</p>
              <div className="travel-info-item">
                <FiPhone /> <span>+91 98765 43210</span>
              </div>
              <div className="travel-info-item">
                <FiMail /> <span>fitfocushub2@gmail.com</span>
              </div>
              <div className="travel-info-item">
                <FiMapPin /> <span>example.com, Your City, India</span>
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

      <TemplateFooter name="Your Travel" onSettingsClick={() => setShowSettings(true)} />

      {/* Demo Modal */}
      <DemoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        itemName={modalItem}
      />
    </div>
  );
}

function formatPrice(p) {
  return `₹${p.toLocaleString('en-IN')}`;
}

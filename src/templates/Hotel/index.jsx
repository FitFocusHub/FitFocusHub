import React, { useState, useRef } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './HotelTemplate.css';

const HotelTemplate = () => {
  const [modalType, setModalType] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const roomsRef = useRef(null);
  const amenitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleBookRoom = () => {
    setModalType('booking');
  };

  const navLinks = [
    { label: 'Home', ref: heroRef },
    { label: 'About', ref: aboutRef },
    { label: 'Rooms', ref: roomsRef },
    { label: 'Amenities', ref: amenitiesRef },
    { label: 'Gallery', ref: galleryRef },
    { label: 'Testimonials', ref: testimonialsRef },
    { label: 'Contact', ref: contactRef },
  ];

  const rooms = [
    {
      name: 'Deluxe Room',
      price: 299,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600',
      description: 'Spacious room with city views, king bed, and modern amenities.',
      features: ['King Bed', 'City View', 'Free WiFi', 'Room Service'],
    },
    {
      name: 'Royal Suite',
      price: 599,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600',
      description: 'Luxurious suite with separate living area and premium features.',
      features: ['Living Area', 'Ocean View', 'Jacuzzi', 'Butler Service'],
    },
    {
      name: 'Presidential Suite',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      description: 'Ultimate luxury with panoramic views and exclusive privileges.',
      features: ['Panoramic View', 'Private Pool', 'Private Chef', 'Helipad Access'],
    },
  ];

  const amenities = [
    { icon: '🏊', name: 'Infinity Pool', description: 'Rooftop pool with stunning skyline views' },
    { icon: '💆', name: 'Luxury Spa', description: 'Full-service spa with signature treatments' },
    { icon: '💪', name: 'Fitness Center', description: 'State-of-the-art equipment and trainers' },
    { icon: '🍽️', name: 'Fine Dining', description: 'Award-winning restaurant with world cuisine' },
    { icon: '🍸', name: 'Sky Bar', description: 'Craft cocktails with panoramic city views' },
    { icon: '🧖', name: 'Sauna & Steam', description: 'Traditional Finnish sauna and steam rooms' },
    { icon: '🎾', name: 'Tennis Court', description: 'Professional courts with night lighting' },
    { icon: '🅿️', name: 'Valet Parking', description: 'Complimentary valet service for guests' },
  ];

  const gallery = [
    { image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600', title: 'Hotel Exterior' },
    { image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600', title: 'Grand Lobby' },
    { image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600', title: 'Pool Area' },
    { image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', title: 'Restaurant' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Business Traveler', rating: 5, text: 'Absolutely stunning hotel! The service was impeccable and the room exceeded all expectations.' },
    { name: 'Michael Chen', role: 'Wedding Guest', rating: 5, text: 'The Royal Suite was breathtaking. Our wedding reception was held here and everything was perfect.' },
    { name: 'Emma Williams', role: 'Vacationer', rating: 5, text: 'Best hotel experience ever. The spa treatments were divine and the rooftop pool is a dream.' },
  ];

  return (
    <div className="hotel-template">
      <Settings />

      <nav className="hotel-nav">
        <div className="hotel-nav-container">
          <span className="hotel-logo" onClick={() => scrollTo(heroRef)}>
            Royal Heritage Hotel
          </span>
          <button className="hotel-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
          <ul className={`hotel-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {navLinks.map((link, i) => (
              <li key={i}>
                <span onClick={() => scrollTo(link.ref)}>{link.label}</span>
              </li>
            ))}
            <li>
              <span className="hotel-nav-btn" onClick={handleBookRoom}>
                Book Now
              </span>
            </li>
          </ul>
        </div>
      </nav>

      <section ref={heroRef} className="hotel-hero">
        <div className="hotel-hero-overlay" />
        <div className="hotel-hero-content">
          <p className="hotel-hero-subtitle">Welcome to</p>
          <h1 className="hotel-hero-title">Royal Heritage Hotel</h1>
          <p className="hotel-hero-tagline">Experience Timeless Luxury in the Heart of the City</p>
          <button className="hotel-btn hotel-btn-primary" onClick={handleBookRoom}>
            Book Your Stay
          </button>
        </div>
      </section>

      <section ref={statsRef} className="hotel-stats">
        <div className="hotel-stats-container">
          <div className="hotel-stat-item">
            <span className="hotel-stat-number">25+</span>
            <span className="hotel-stat-label">Years of Excellence</span>
          </div>
          <div className="hotel-stat-item">
            <span className="hotel-stat-number">150+</span>
            <span className="hotel-stat-label">Luxury Rooms</span>
          </div>
          <div className="hotel-stat-item">
            <span className="hotel-stat-number">98%</span>
            <span className="hotel-stat-label">Guest Satisfaction</span>
          </div>
          <div className="hotel-stat-item">
            <span className="hotel-stat-number">50+</span>
            <span className="hotel-stat-label">Awards Won</span>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="hotel-about">
        <div className="hotel-about-container">
          <div className="hotel-about-content">
            <h2 className="hotel-section-subtitle">Our Story</h2>
            <h3 className="hotel-section-title">A Legacy of Royal Hospitality</h3>
            <p>
              Founded in 1998, Royal Heritage Hotel has been setting the standard for luxury hospitality
              for over two decades. Our commitment to excellence has earned us recognition as one of
              the world's finest hotels.
            </p>
            <p>
              Every detail, from our hand-selected art collections to our award-winning cuisine,
              reflects our dedication to providing an unparalleled guest experience that honors
              both tradition and modern elegance.
            </p>
            <button className="hotel-btn hotel-btn-outline" onClick={handleBookRoom}>
              Experience Our Legacy
            </button>
          </div>
          <div className="hotel-about-image">
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" alt="Hotel Lobby" />
          </div>
        </div>
      </section>

      <section ref={roomsRef} className="hotel-rooms">
        <div className="hotel-rooms-container">
          <h2 className="hotel-section-subtitle">Accommodations</h2>
          <h3 className="hotel-section-title">Our Luxurious Rooms & Suites</h3>
          <div className="hotel-rooms-grid">
            {rooms.map((room, i) => (
              <div key={i} className="hotel-room-card">
                <div className="hotel-room-image">
                  <img src={room.image} alt={room.name} />
                  <span className="hotel-room-price">${room.price}/night</span>
                </div>
                <div className="hotel-room-info">
                  <h4>{room.name}</h4>
                  <p>{room.description}</p>
                  <ul className="hotel-room-features">
                    {room.features.map((feat, j) => (
                      <li key={j}>{feat}</li>
                    ))}
                  </ul>
                  <button className="hotel-btn hotel-btn-primary" onClick={handleBookRoom}>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={amenitiesRef} className="hotel-amenities">
        <div className="hotel-amenities-container">
          <h2 className="hotel-section-subtitle">World-Class Facilities</h2>
          <h3 className="hotel-section-title">Hotel Amenities</h3>
          <div className="hotel-amenities-grid">
            {amenities.map((amenity, i) => (
              <div key={i} className="hotel-amenity-card">
                <span className="hotel-amenity-icon">{amenity.icon}</span>
                <h4>{amenity.name}</h4>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="hotel-gallery">
        <div className="hotel-gallery-container">
          <h2 className="hotel-section-subtitle">Visual Tour</h2>
          <h3 className="hotel-section-title">Photo Gallery</h3>
          <div className="hotel-gallery-grid">
            {gallery.map((item, i) => (
              <div key={i} className="hotel-gallery-card">
                <img src={item.image} alt={item.title} />
                <div className="hotel-gallery-overlay">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} className="hotel-testimonials">
        <div className="hotel-testimonials-container">
          <h2 className="hotel-section-subtitle">Guest Experiences</h2>
          <h3 className="hotel-section-title">What Our Guests Say</h3>
          <div className="hotel-testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="hotel-testimonial-card">
                <div className="hotel-testimonial-stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="hotel-testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef} className="hotel-contact">
        <div className="hotel-contact-container">
          <h2 className="hotel-section-subtitle">Get in Touch</h2>
          <h3 className="hotel-section-title">Contact Us</h3>
          <div className="hotel-contact-grid">
            <div className="hotel-contact-info">
              <div className="hotel-contact-item">
                <span className="hotel-contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>123 Royal Avenue, Luxury District, New York, NY 10001</p>
                </div>
              </div>
              <div className="hotel-contact-item">
                <span className="hotel-contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="hotel-contact-item">
                <span className="hotel-contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>reservations@royalheritagehotel.com</p>
                </div>
              </div>
              <div className="hotel-contact-item">
                <span className="hotel-contact-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>24/7 Front Desk Service</p>
                </div>
              </div>
            </div>
            <form className="hotel-contact-form" onSubmit={(e) => { e.preventDefault(); handleBookRoom(); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="tel" placeholder="Your Phone" required />
              <textarea placeholder="Your Message" rows={5} required />
              <button type="submit" className="hotel-btn hotel-btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <TemplateFooter />

      {modalType && (
        <DemoModal
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </div>
  );
};

export default HotelTemplate;

import React, { useState, useRef, useEffect } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './HotelTemplate.css';

const HotelTemplate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const heroRef = useRef(null);
  const welcomeRef = useRef(null);
  const roomsRef = useRef(null);
  const amenitiesRef = useRef(null);
  const tourRef = useRef(null);
  const reviewsRef = useRef(null);
  const offersRef = useRef(null);
  const bookingRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'Home', ref: heroRef },
    { label: 'Story', ref: welcomeRef },
    { label: 'Rooms', ref: roomsRef },
    { label: 'Amenities', ref: amenitiesRef },
    { label: 'Reviews', ref: reviewsRef },
    { label: 'Offers', ref: offersRef },
    { label: 'Contact', ref: contactRef },
  ];

  const rooms = [
    {
      name: 'Deluxe Room',
      price: '3,499',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800',
      desc: 'A sanctuary of comfort with rich walnut furnishings, ambient lighting, and a private balcony overlooking the garden courtyard.',
      features: ['King Bed', 'Garden View', 'Rain Shower', 'Mini Bar'],
    },
    {
      name: 'Royal Suite',
      price: '7,999',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
      desc: 'Elegance redefined with a separate drawing room, handwoven silks, and floor-to-ceiling windows framing the city skyline.',
      features: ['Living Room', 'City View', 'Jacuzzi', 'Butler Service'],
    },
    {
      name: 'Presidential Suite',
      price: '18,999',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800',
      desc: 'The pinnacle of opulence — a private terrace, art collection, dedicated chef, and an experience reserved for the most distinguished guests.',
      features: ['Private Terrace', 'Art Collection', 'Private Chef', 'Helipad Access'],
    },
  ];

  const amenities = [
    { icon: '🏊', name: 'Infinity Pool', desc: 'Temperature-controlled rooftop oasis' },
    { icon: '🧖', name: 'Royal Spa', desc: 'Ancient therapies, modern luxury' },
    { icon: '💪', name: 'Elite Gym', desc: 'Personal trainers & recovery suite' },
    { icon: '🍽️', name: 'Fine Dining', desc: 'Michelin-starred culinary journey' },
    { icon: '🍸', name: 'Champagne Bar', desc: 'Curated vintages & mixology' },
    { icon: '🎾', name: 'Tennis Court', desc: 'Clay courts with night play' },
    { icon: '🌳', name: 'Zen Garden', desc: 'Meditation & tranquility spaces' },
    { icon: '🅿️', name: 'Valet Parking', desc: 'Complimentary 24/7 valet service' },
  ];

  const reviews = [
    {
      name: 'Arjun Mehta',
      role: 'Business Tycoon',
      rating: 5,
      text: 'An experience that redefines what luxury means. The Presidential Suite felt like stepping into a private palace. Every detail was curated to perfection.',
      avatar: 'https://i.pravatar.cc/120?img=11',
    },
    {
      name: 'Priya Sharma',
      role: 'Fashion Designer',
      rating: 5,
      text: 'The Royal Spa was transcendent. I left feeling completely renewed. The staff anticipated my every need without being intrusive — true hospitality.',
      avatar: 'https://i.pravatar.cc/120?img=5',
    },
    {
      name: 'James Whitfield',
      role: 'Diplomat',
      rating: 5,
      text: 'I have stayed at the finest hotels across six continents. Royal Heritage stands alone. The attention to detail is almost supernatural.',
      avatar: 'https://i.pravatar.cc/120?img=12',
    },
    {
      name: 'Ananya Reddy',
      role: 'Wedding Planner',
      rating: 5,
      text: 'We hosted a 400-guest wedding here. The coordination was flawless, the cuisine extraordinary, and the guests are still raving about it months later.',
      avatar: 'https://i.pravatar.cc/120?img=9',
    },
  ];

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="rh-root">
      {/* ====== TRANSPARENT NAV ====== */}
      <nav className={`rh-nav ${scrolled ? 'rh-nav--solid' : ''}`}>
        <div className="rh-nav-inner">
          <div className="rh-nav-spacer" />
          <span className="rh-logo" onClick={() => scrollTo(heroRef)}>
            <span className="rh-logo-crown">♛</span> Royal Heritage
          </span>
          <ul className={`rh-nav-links ${mobileOpen ? 'rh-nav-links--open' : ''}`}>
            {navLinks.map((l, i) => (
              <li key={i}><span onClick={() => scrollTo(l.ref)}>{l.label}</span></li>
            ))}
            <li>
              <span className="rh-nav-book" onClick={() => setModalOpen(true)}>Book Stay</span>
            </li>
          </ul>
          <button className="rh-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ====== PARALLAX HERO ====== */}
      <section ref={heroRef} className="rh-hero">
        <div className="rh-hero-parallax" />
        <div className="rh-hero-overlay" />
        <div className="rh-hero-content">
          <p className="rh-hero-eyebrow">Est. 1998 &middot; A Legacy of Grandeur</p>
          <h1 className="rh-hero-title">Royal Heritage<br/>Hotel</h1>
          <div className="rh-hero-divider"><span>♛</span></div>
          <p className="rh-hero-sub">Where Timeless Elegance Meets Modern Luxury</p>
          <button className="rh-btn rh-btn-gold" onClick={() => setModalOpen(true)}>
            Reserve Your Escape
          </button>
        </div>
        <div className="rh-hero-scroll" onClick={() => scrollTo(welcomeRef)}>
          <span>↓</span>
        </div>
      </section>

      {/* ====== WELCOME STORY ====== */}
      <section ref={welcomeRef} className="rh-welcome">
        <div className="rh-welcome-inner">
          <div className="rh-welcome-left">
            <p className="rh-label">Our Heritage</p>
            <h2 className="rh-heading">A Story Written in Gold & Stone</h2>
            <div className="rh-welcome-line" />
            <p className="rh-body">
              Nestled in the heart of the city, Royal Heritage Hotel was born from a vision
              to create more than accommodation — a living testament to craftsmanship, culture,
              and the art of gracious living.
            </p>
            <p className="rh-body">
              Every corridor tells a story. Every room is a chapter of comfort. From the
              hand-carved marble lobbies to the silk-draped suites, we have woven heritage
              with innovation to craft an experience that lingers long after you leave.
            </p>
            <p className="rh-body">
              For over two decades, dignitaries, artists, and travelers seeking the extraordinary
              have chosen Royal Heritage not merely as a destination, but as a feeling.
            </p>
          </div>
          <div className="rh-welcome-right">
            <div className="rh-welcome-img-stack">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600"
                alt="Hotel Grand Lobby"
                className="rh-welcome-img-main"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400"
                alt="Hotel Interior"
                className="rh-welcome-img-accent"
              />
              <div className="rh-welcome-badge">
                <span className="rh-welcome-badge-num">25+</span>
                <span className="rh-welcome-badge-text">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ROOMS ====== */}
      <section ref={roomsRef} className="rh-rooms">
        <div className="rh-rooms-inner">
          <p className="rh-label-center">Accommodations</p>
          <h2 className="rh-heading-center">Suites & Rooms</h2>
          <div className="rh-rooms-grid">
            {rooms.map((r, i) => (
              <div key={i} className="rh-room-card">
                <div className="rh-room-img-wrap">
                  <img src={r.image} alt={r.name} />
                  <div className="rh-room-price-tag">
                    <span className="rh-room-price-symbol">₹</span>
                    <span className="rh-room-price-num">{r.price}</span>
                    <span className="rh-room-price-per">/night</span>
                  </div>
                </div>
                <div className="rh-room-body">
                  <h3 className="rh-room-name">{r.name}</h3>
                  <p className="rh-room-desc">{r.desc}</p>
                  <div className="rh-room-features">
                    {r.features.map((f, j) => (
                      <span key={j} className="rh-room-feature">{f}</span>
                    ))}
                  </div>
                  <button className="rh-btn rh-btn-gold rh-room-btn" onClick={() => setModalOpen(true)}>
                    Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== AMENITIES ICON GRID ====== */}
      <section ref={amenitiesRef} className="rh-amenities">
        <div className="rh-amenities-inner">
          <p className="rh-label-center">World-Class Facilities</p>
          <h2 className="rh-heading-center">Hotel Amenities</h2>
          <div className="rh-amenity-grid">
            {amenities.map((a, i) => (
              <div key={i} className="rh-amenity-cell">
                <div className="rh-amenity-icon-wrap">
                  <span className="rh-amenity-icon">{a.icon}</span>
                </div>
                <h4 className="rh-amenity-name">{a.name}</h4>
                <p className="rh-amenity-desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VIRTUAL TOUR ====== */}
      <section ref={tourRef} className="rh-tour">
        <div className="rh-tour-inner">
          <div className="rh-tour-placeholder">
            <div className="rh-tour-play">
              <span className="rh-tour-play-icon">▶</span>
            </div>
            <p className="rh-tour-label">Virtual Tour</p>
            <p className="rh-tour-sub">Walk Through Our Spaces From Anywhere in the World</p>
          </div>
          <div className="rh-tour-info">
            <p className="rh-label">Immersive Experience</p>
            <h2 className="rh-heading">Take a Virtual Walk</h2>
            <div className="rh-welcome-line" />
            <p className="rh-body">
              Explore our grand lobbies, opulent suites, serene spa, and world-class dining —
              all from the comfort of your screen. Our 360° virtual tour lets you experience
              Royal Heritage before you arrive.
            </p>
            <p className="rh-body">
              Powered by cutting-edge technology, every corner is captured in stunning detail.
              See the texture of the silk, the warmth of the lighting, and the elegance that
              defines us.
            </p>
            <button className="rh-btn rh-btn-outline" onClick={() => setModalOpen(true)}>
              Start Virtual Tour
            </button>
          </div>
        </div>
      </section>

      {/* ====== GUEST REVIEWS ====== */}
      <section ref={reviewsRef} className="rh-reviews">
        <div className="rh-reviews-inner">
          <p className="rh-label-center">Guest Experiences</p>
          <h2 className="rh-heading-center">What They Say About Us</h2>
          <div className="rh-reviews-grid">
            {reviews.map((rev, i) => (
              <div key={i} className="rh-review-card">
                <div className="rh-review-stars">
                  {'★'.repeat(rev.rating)}
                </div>
                <p className="rh-review-text">"{rev.text}"</p>
                <div className="rh-review-author">
                  <img src={rev.avatar} alt={rev.name} className="rh-review-avatar" />
                  <div>
                    <strong className="rh-review-name">{rev.name}</strong>
                    <span className="rh-review-role">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SPECIAL OFFERS ====== */}
      <section ref={offersRef} className="rh-offers">
        <div className="rh-offers-inner">
          <div className="rh-offer-banner">
            <div className="rh-offer-badge">Limited Time</div>
            <h2 className="rh-offer-title">Monsoon Luxury Escape</h2>
            <p className="rh-offer-desc">
              3 nights in a Royal Suite &middot; Complimentary Spa &middot; Candlelight Dinner
              &middot; Airport Transfers — All at <strong>20% OFF</strong>
            </p>
            <p className="rh-offer-price">Starting from ₹12,999 <span>/night</span></p>
            <button className="rh-btn rh-btn-gold" onClick={() => setModalOpen(true)}>
              Claim This Offer
            </button>
          </div>
        </div>
      </section>

      {/* ====== BOOKING CTA ====== */}
      <section ref={bookingRef} className="rh-cta">
        <div className="rh-cta-inner">
          <h2 className="rh-cta-title">Begin Your Royal Journey</h2>
          <p className="rh-cta-sub">
            Your story at Royal Heritage begins with a single step. Let us craft an experience
            that is uniquely yours.
          </p>
          <button className="rh-btn rh-btn-gold" onClick={() => setModalOpen(true)}>
            Book Your Stay Now
          </button>
        </div>
      </section>

      {/* ====== CONTACT + MAP ====== */}
      <section ref={contactRef} className="rh-contact">
        <div className="rh-contact-inner">
          <div className="rh-contact-details">
            <p className="rh-label">Reach Us</p>
            <h2 className="rh-heading">Get in Touch</h2>
            <div className="rh-welcome-line" />
            <div className="rh-contact-items">
              <div className="rh-contact-item">
                <span className="rh-contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>42 Heritage Lane, Luxury District<br/>New Delhi, India 110001</p>
                </div>
              </div>
              <div className="rh-contact-item">
                <span className="rh-contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="rh-contact-item">
                <span className="rh-contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>example@gmail.com</p>
                </div>
              </div>
              <div className="rh-contact-item">
                <span className="rh-contact-icon">📷</span>
                <div>
                  <strong>Instagram</strong>
                  <p>@mohammad_s4kib</p>
                </div>
              </div>
            </div>
            <form className="rh-contact-form" onSubmit={(e) => { e.preventDefault(); setModalOpen(true); }}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows={4} required />
              <button type="submit" className="rh-btn rh-btn-gold">Send Inquiry</button>
            </form>
          </div>
          <div className="rh-contact-map">
            <div className="rh-map-placeholder">
              <span className="rh-map-pin">📍</span>
              <p>Map Placeholder</p>
              <p className="rh-map-sub">Google Maps integration goes here</p>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter
        name="Royal Heritage Hotel"
        onSettingsClick={() => setShowSettings(true)}
      />

      {modalOpen && (
        <DemoModal
          type="booking"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HotelTemplate;

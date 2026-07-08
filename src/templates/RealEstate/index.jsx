import React, { useState, useRef } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './RealEstateTemplate.css';

const properties = [
  {
    id: 1,
    title: 'Luxury Apartment in Bandra',
    location: 'Mumbai',
    price: '₹1.2 Cr',
    area: '1,250 sq ft',
    beds: 3,
    type: 'Apartment',
    image: null
  },
  {
    id: 2,
    title: 'Modern Villa in Whitefield',
    location: 'Bangalore',
    price: '₹85 L',
    area: '2,100 sq ft',
    beds: 4,
    type: 'Villa',
    image: null
  },
  {
    id: 3,
    title: 'Penthouse in Connaught Place',
    location: 'Delhi',
    price: '₹45 L',
    area: '980 sq ft',
    beds: 2,
    type: 'Penthouse',
    image: null
  },
  {
    id: 4,
    title: 'Sea View Flat in Juhu',
    location: 'Mumbai',
    price: '₹2.5 Cr',
    area: '1,800 sq ft',
    beds: 3,
    type: 'Flat',
    image: null
  },
  {
    id: 5,
    title: 'Farmhouse in Devanahalli',
    location: 'Bangalore',
    price: '₹68 L',
    area: '3,200 sq ft',
    beds: 4,
    type: 'Farmhouse',
    image: null
  },
  {
    id: 6,
    title: 'Heritage Haveli in Mehrauli',
    location: 'Delhi',
    price: '₹1.8 Cr',
    area: '2,500 sq ft',
    beds: 5,
    type: 'Haveli',
    image: null
  }
];

const services = [
  {
    icon: '🏠',
    title: 'Buy Property',
    description: 'Find your dream home from our curated collection of premium properties across India.'
  },
  {
    icon: '💰',
    title: 'Sell Property',
    description: 'Get the best value for your property with our expert valuation and marketing support.'
  },
  {
    icon: '🔑',
    title: 'Rent Property',
    description: 'Discover rental options that match your lifestyle and budget requirements.'
  },
  {
    icon: '📈',
    title: 'Invest',
    description: 'Make smart real estate investments with our market insights and portfolio guidance.'
  }
];

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'First-time Homebuyer',
    content: 'Prime Properties made buying my first home effortless. Their team guided me through every step and found the perfect apartment in Mumbai.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    role: 'Property Investor',
    content: 'Exceptional investment advice! They helped me build a diverse portfolio across Bangalore and Delhi with excellent returns.',
    rating: 5
  },
  {
    name: 'Rahul Mehta',
    role: 'NRI Client',
    content: 'As someone living abroad, I trusted Prime Properties with my investments. Their transparency and professionalism are unmatched.',
    rating: 5
  }
];

export default function RealEstateTemplate() {
  const [showSettings, setShowSettings] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  const heroRef = useRef(null);
  const propertiesRef = useRef(null);
  const servicesRef = useRef(null);
  const howItWorksRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInquire = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleScheduleVisit = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const stats = [
    { number: '2,500+', label: 'Properties Sold' },
    { number: '1,200+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' }
  ];

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="realestate-template">
      <nav className="realestate-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">🏗️</span>
            <span className="logo-text">Prime Properties</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollTo(heroRef)}>Home</button>
            <button onClick={() => scrollTo(propertiesRef)}>Properties</button>
            <button onClick={() => scrollTo(servicesRef)}>Services</button>
            <button onClick={() => scrollTo(howItWorksRef)}>How It Works</button>
            <button onClick={() => scrollTo(testimonialsRef)}>Testimonials</button>
            <button onClick={() => scrollTo(contactRef)}>Contact</button>
          </div>
          <button className="nav-cta" onClick={() => setShowModal(true)}>
            List Property
          </button>
        </div>
      </nav>

      <section ref={heroRef} className="realestate-hero">
        <div className="hero-content">
          <div className="hero-badge">TRUSTED BY 1200+ CLIENTS</div>
          <h1>Find Your Perfect<br />Property Today</h1>
          <p className="hero-subtitle">
            India's most trusted real estate platform. Discover premium properties 
            in Mumbai, Delhi, Bangalore and beyond.
          </p>

          <div className="hero-search">
            <div className="search-field">
              <label>Location</label>
              <select 
                value={searchLocation} 
                onChange={(e) => setSearchLocation(e.target.value)}
              >
                <option value="">Select Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>
            <div className="search-field">
              <label>Property Type</label>
              <select 
                value={searchType} 
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="flat">Flat</option>
                <option value="farmhouse">Farmhouse</option>
              </select>
            </div>
            <div className="search-field">
              <label>Price Range</label>
              <select 
                value={searchPrice} 
                onChange={(e) => setSearchPrice(e.target.value)}
              >
                <option value="">Select Budget</option>
                <option value="under50L">Under ₹50 Lakh</option>
                <option value="50L-1Cr">₹50 Lakh - ₹1 Crore</option>
                <option value="1Cr-2Cr">₹1 Crore - ₹2 Crore</option>
                <option value="above2Cr">Above ₹2 Crore</option>
              </select>
            </div>
            <button className="search-btn">
              <span>🔍</span> Search
            </button>
          </div>

          <div className="hero-trust">
            <span className="trust-item">✓ Verified Properties</span>
            <span className="trust-item">✓ Legal Assistance</span>
            <span className="trust-item">✓ Best Price Guarantee</span>
          </div>
        </div>
      </section>

      <section ref={propertiesRef} className="realestate-properties">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">FEATURED LISTINGS</span>
            <h2>Featured Properties</h2>
            <p>Handpicked premium properties across major cities</p>
          </div>

          <div className="properties-grid">
            {properties.map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  {property.image ? (
                    <img src={property.image} alt={property.title} />
                  ) : (
                    <div className="image-placeholder">
                      <span>🏠</span>
                      <span>No Image</span>
                    </div>
                  )}
                  <span className="property-type-badge">{property.type}</span>
                  <span className="property-location-badge">{property.location}</span>
                </div>
                <div className="property-details">
                  <h3 className="property-title">{property.title}</h3>
                  <p className="property-location">📍 {property.location}</p>
                  <div className="property-specs">
                    <span className="spec">📐 {property.area}</span>
                    <span className="spec">🛏️ {property.beds} Beds</span>
                  </div>
                  <div className="property-price-row">
                    <span className="property-price">{property.price}</span>
                    <div className="property-actions">
                      <button 
                        className="btn-inquire"
                        onClick={() => handleInquire(property)}
                      >
                        Inquire
                      </button>
                      <button 
                        className="btn-schedule"
                        onClick={() => handleScheduleVisit(property)}
                      >
                        Schedule Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="realestate-services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">WHAT WE OFFER</span>
            <h2>Our Services</h2>
            <p>Comprehensive real estate solutions for all your needs</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={howItWorksRef} className="realestate-how-it-works">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">SIMPLE PROCESS</span>
            <h2>How It Works</h2>
            <p>Find your dream property in just 3 easy steps</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">🔍</div>
              <h3>Search Properties</h3>
              <p>Browse through our extensive collection of verified properties using smart filters for location, budget, and type.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">📅</div>
              <h3>Schedule Visit</h3>
              <p>Book a property visit at your convenience. Our agents will arrange everything and provide complete guidance.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">🔑</div>
              <h3>Move In</h3>
              <p>Complete the paperwork, finalize the deal, and get your keys. We handle all legal formalities for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="realestate-stats">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} className="realestate-testimonials">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">CLIENT STORIES</span>
            <h2>What Our Clients Say</h2>
            <p>Trusted by thousands of happy homeowners</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {'⭐'.repeat(testimonial.rating)}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef} className="realestate-contact">
        <div className="section-container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <span className="section-tag">GET IN TOUCH</span>
              <h2>Ready to Find Your Dream Property?</h2>
              <p>Fill out the form and our property experts will get back to you within 24 hours.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <span className="contact-label">Call Us</span>
                    <span className="contact-value">+91 XXXXX XXXXX</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <span className="contact-label">Email Us</span>
                    <span className="contact-value">example@gmail.com</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <span className="contact-label">Visit Us</span>
                    <span className="contact-value">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); setShowModal(true); }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="example@gmail.com" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Property Type</label>
                    <select>
                      <option>Select Type</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                      <option>Penthouse</option>
                      <option>Flat</option>
                      <option>Farmhouse</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select>
                      <option>Select Budget</option>
                      <option>Under ₹50 Lakh</option>
                      <option>₹50 Lakh - ₹1 Crore</option>
                      <option>₹1 Crore - ₹2 Crore</option>
                      <option>Above ₹2 Crore</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea rows="4" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter
        siteName="Prime Properties"
        onSettingsClick={() => setShowSettings(true)}
      />

      {showModal && (
        <DemoModal
          type="booking"
          onClose={() => {
            setShowModal(false);
            setSelectedProperty(null);
          }}
        />
      )}
    </div>
  );
}

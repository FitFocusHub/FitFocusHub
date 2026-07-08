import { useRef, useState } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './RealEstateTemplate.css';

const properties = [
  {
    id: 1,
    title: 'Oceanview Villa',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    sqft: '3,200',
    location: 'Malibu, CA',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Downtown Penthouse',
    price: '$875,000',
    beds: 2,
    baths: 2,
    sqft: '1,800',
    location: 'Manhattan, NY',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Suburban Family Home',
    price: '$520,000',
    beds: 5,
    baths: 3,
    sqft: '2,800',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Mountain Retreat',
    price: '$690,000',
    beds: 3,
    baths: 2,
    sqft: '2,100',
    location: 'Aspen, CO',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop',
  },
];

const services = [
  {
    icon: '🏡',
    title: 'Property Sales',
    desc: 'Expert guidance through every step of buying or selling your home with maximum market exposure.',
  },
  {
    icon: '🔑',
    title: 'Property Management',
    desc: 'Full-service management for landlords — tenant screening, rent collection, and maintenance.',
  },
  {
    icon: '📊',
    title: 'Market Analysis',
    desc: 'Data-driven insights and comparable market analysis to price your property competitively.',
  },
  {
    icon: '🤝',
    title: 'Investment Advisory',
    desc: 'Strategic advice on real estate investments, portfolio growth, and market timing.',
  },
];

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'First-Time Homebuyer',
    quote: 'Prime Properties made my dream of owning a home a reality. Their team was patient, knowledgeable, and always had my best interests at heart.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'David Chen',
    role: 'Property Investor',
    quote: 'I have worked with many agencies, but none compare to Prime Properties. They helped me build a portfolio that generates consistent returns.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Luxury Home Seller',
    quote: 'Sold my property above asking price in just two weeks. The marketing strategy was outstanding and the communication was flawless.',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
];

export default function RealEstateTemplate() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const propertiesRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('booking');

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (type = 'booking') => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="re-template">
      <nav className="re-nav">
        <div className="re-nav-inner">
          <div className="re-logo">
            <span className="re-logo-icon">🏡</span>
            <span className="re-logo-text">Prime Properties</span>
          </div>
          <div className="re-nav-links">
            <span onClick={() => scrollTo(heroRef)}>Home</span>
            <span onClick={() => scrollTo(statsRef)}>About</span>
            <span onClick={() => scrollTo(propertiesRef)}>Properties</span>
            <span onClick={() => scrollTo(servicesRef)}>Services</span>
            <span onClick={() => scrollTo(testimonialsRef)}>Testimonials</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
          </div>
          <button className="re-nav-cta" onClick={() => openModal('booking')}>
            Schedule Visit
          </button>
        </div>
      </nav>

      <section ref={heroRef} className="re-hero">
        <div className="re-hero-overlay" />
        <div className="re-hero-content">
          <h1 className="re-hero-title">
            Find Your <span className="re-accent">Dream Home</span>
          </h1>
          <p className="re-hero-subtitle">
            Premium real estate services tailored to your lifestyle. From luxury estates to charming family homes — we bring you the finest properties.
          </p>
          <div className="re-hero-actions">
            <button className="re-btn re-btn-primary" onClick={() => openModal('booking')}>
              Schedule a Visit
            </button>
            <button className="re-btn re-btn-outline" onClick={() => scrollTo(propertiesRef)}>
              Browse Properties
            </button>
          </div>
        </div>
        <div className="re-hero-stats">
          <div className="re-hero-stat">
            <strong>500+</strong>
            <span>Properties Sold</span>
          </div>
          <div className="re-hero-stat">
            <strong>98%</strong>
            <span>Client Satisfaction</span>
          </div>
          <div className="re-hero-stat">
            <strong>25+</strong>
            <span>Years Experience</span>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="re-stats">
        <div className="re-stats-grid">
          <div className="re-stat-card">
            <div className="re-stat-number">$2.4B</div>
            <div className="re-stat-label">Total Sales Volume</div>
          </div>
          <div className="re-stat-card">
            <div className="re-stat-number">1,200+</div>
            <div className="re-stat-label">Homes Sold</div>
          </div>
          <div className="re-stat-card">
            <div className="re-stat-number">350+</div>
            <div className="re-stat-label">Active Listings</div>
          </div>
          <div className="re-stat-card">
            <div className="re-stat-number">15</div>
            <div className="re-stat-label">Office Locations</div>
          </div>
        </div>
      </section>

      <section ref={propertiesRef} className="re-properties">
        <div className="re-section-header">
          <h2 className="re-section-title">Featured Properties</h2>
          <p className="re-section-subtitle">Handpicked premium listings available now</p>
        </div>
        <div className="re-properties-grid">
          {properties.map((p) => (
            <div key={p.id} className="re-property-card">
              <div className="re-property-image">
                <img src={p.image} alt={p.title} />
                <span className="re-property-badge">{p.price}</span>
              </div>
              <div className="re-property-info">
                <h3 className="re-property-title">{p.title}</h3>
                <p className="re-property-location">{p.location}</p>
                <div className="re-property-features">
                  <span>{p.beds} Beds</span>
                  <span>{p.baths} Baths</span>
                  <span>{p.sqft} Sqft</span>
                </div>
                <button className="re-btn re-btn-primary re-btn-sm" onClick={() => openModal('booking')}>
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={servicesRef} className="re-services">
        <div className="re-section-header">
          <h2 className="re-section-title">Our Services</h2>
          <p className="re-section-subtitle">Comprehensive real estate solutions for every need</p>
        </div>
        <div className="re-services-grid">
          {services.map((s, i) => (
            <div key={i} className="re-service-card">
              <div className="re-service-icon">{s.icon}</div>
              <h3 className="re-service-title">{s.title}</h3>
              <p className="re-service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={testimonialsRef} className="re-testimonials">
        <div className="re-section-header">
          <h2 className="re-section-title">What Our Clients Say</h2>
          <p className="re-section-subtitle">Real stories from happy homeowners</p>
        </div>
        <div className="re-testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="re-testimonial-card">
              <div className="re-testimonial-quote">"{t.quote}"</div>
              <div className="re-testimonial-author">
                <img src={t.avatar} alt={t.name} className="re-testimonial-avatar" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={contactRef} className="re-contact">
        <div className="re-contact-inner">
          <div className="re-contact-info">
            <h2 className="re-section-title">Get In Touch</h2>
            <p className="re-contact-desc">Ready to find your perfect property? Contact us today for a free consultation.</p>
            <div className="re-contact-details">
              <div className="re-contact-item">
                <span className="re-contact-icon">📍</span>
                <span>123 Real Estate Blvd, Suite 100, Los Angeles, CA 90001</span>
              </div>
              <div className="re-contact-item">
                <span className="re-contact-icon">📞</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="re-contact-item">
                <span className="re-contact-icon">✉️</span>
                <span>info@primeproperties.com</span>
              </div>
            </div>
            <button className="re-btn re-btn-primary" onClick={() => openModal('booking')}>
              Schedule a Visit
            </button>
          </div>
          <form className="re-contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" className="re-input" />
            <input type="email" placeholder="Your Email" className="re-input" />
            <input type="tel" placeholder="Phone Number" className="re-input" />
            <select className="re-input">
              <option value="">Interested In</option>
              <option value="buying">Buying a Home</option>
              <option value="selling">Selling a Home</option>
              <option value="investing">Real Estate Investment</option>
              <option value="management">Property Management</option>
            </select>
            <textarea placeholder="Tell us about your needs..." className="re-input re-textarea" rows={4} />
            <button type="submit" className="re-btn re-btn-primary re-btn-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <TemplateFooter templateName="Prime Properties" accentColor="#14b8a6" />
      <Settings />

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
    </div>
  );
}

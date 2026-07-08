import React, { useRef, useState } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './CafeTemplate.css';

export default function CafeTemplate() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const menuRef = useRef(null);
  const specialRef = useRef(null);
  const loyaltyRef = useRef(null);
  const galleryRef = useRef(null);
  const findUsRef = useRef(null);
  const contactRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const navItems = [
    { label: 'Home', ref: heroRef },
    { label: 'Our Story', ref: storyRef },
    { label: 'Menu', ref: menuRef },
    { label: 'Specials', ref: specialRef },
    { label: 'Loyalty', ref: loyaltyRef },
    { label: 'Gallery', ref: galleryRef },
    { label: 'Find Us', ref: findUsRef },
    { label: 'Contact', ref: contactRef },
  ];

  const menuCategories = ['All', 'Coffee', 'Cold Drinks', 'Pastries', 'Sandwiches'];

  const menuItems = [
    { name: 'Espresso', price: '₹150', category: 'Coffee', image: '☕', desc: 'Rich, bold single shot' },
    { name: 'Cappuccino', price: '₹180', category: 'Coffee', image: '☕', desc: 'Creamy foam perfection' },
    { name: 'Cafe Latte', price: '₹200', category: 'Coffee', image: '☕', desc: 'Smooth & milky delight' },
    { name: 'Mocha', price: '₹220', category: 'Coffee', image: '☕', desc: 'Chocolate meets espresso' },
    { name: 'Iced Coffee', price: '₹190', category: 'Cold Drinks', image: '🧊', desc: 'Chilled & refreshing' },
    { name: 'Cold Brew', price: '₹210', category: 'Cold Drinks', image: '🧊', desc: 'Steeped 12 hours' },
    { name: 'Mango Smoothie', price: '₹240', category: 'Cold Drinks', image: '🥭', desc: 'Tropical freshness' },
    { name: 'Brownie', price: '₹120', category: 'Pastries', image: '🍫', desc: 'Fudgy chocolate bliss' },
    { name: 'Croissant', price: '₹140', category: 'Pastries', image: '🥐', desc: 'Flaky & buttery' },
    { name: 'Cinnamon Roll', price: '₹160', category: 'Pastries', image: '🍞', desc: 'Warm & gooey' },
    { name: 'Club Sandwich', price: '₹250', category: 'Sandwiches', image: '🥪', desc: 'Triple-layer classic' },
    { name: 'Paneer Wrap', price: '₹220', category: 'Sandwiches', image: '🌯', desc: 'Spicy & loaded' },
  ];

  const filteredMenu = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const todaySpecial = {
    name: 'Hazelnut Cappuccino',
    price: '₹180',
    originalPrice: '₹250',
    desc: 'Our signature hazelnut-infused cappuccino with a sprinkle of cocoa. Perfect for cozy evenings!',
    tag: 'Today\'s Special',
    image: '☕',
  };

  const loyaltySteps = [
    { step: '1', title: 'Sign Up', desc: 'Join our loyalty program', icon: '📋' },
    { step: '2', title: 'Earn Points', desc: '₹1 = 1 point on every order', icon: '⭐' },
    { step: '3', title: 'Unlock Rewards', desc: '100 points = Free drink', icon: '🎁' },
  ];

  const galleryImages = [
    { alt: 'Cozy Interior', emoji: '🛋️', caption: 'Our cozy corner' },
    { alt: 'Fresh Coffee', emoji: '☕', desc: 'Freshly brewed' },
    { alt: 'Baked Goods', emoji: '🧁', caption: 'Baked daily' },
    { alt: 'Outdoor Seating', emoji: '🌿', caption: 'Garden vibes' },
    { alt: 'Latte Art', emoji: '🎨', caption: 'Art in every cup' },
    { alt: 'Happy Customers', emoji: '😊', caption: 'Smile & sip' },
  ];

  return (
    <div className="cafe-template">
      {/* Sidebar Nav - Desktop */}
      <nav className="cafe-sidebar">
        <div className="cafe-sidebar-brand">
          <span className="cafe-brand-icon">☕</span>
          <span className="cafe-brand-text">Brew & Bean</span>
        </div>
        <div className="cafe-sidebar-links">
          {navItems.map((item) => (
            <span
              key={item.label}
              onClick={() => scrollTo(item.ref)}
              className="cafe-sidebar-link"
            >
              {item.label}
            </span>
          ))}
        </div>
        <div className="cafe-sidebar-cta">
          <button onClick={() => openModal('order')} className="cafe-sidebar-order-btn">
            Order Now
          </button>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="cafe-mobile-nav">
        <div className="cafe-mobile-brand">☕ Brew & Bean</div>
        <button 
          className="cafe-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="cafe-mobile-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="cafe-mobile-menu" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <span
                key={item.label}
                onClick={() => scrollTo(item.ref)}
                className="cafe-mobile-link"
              >
                {item.label}
              </span>
            ))}
            <button onClick={() => { openModal('order'); setMobileMenuOpen(false); }} className="cafe-mobile-order-btn">
              Order Now
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="cafe-hero">
        <div className="cafe-hero-bg"></div>
        <div className="cafe-hero-content">
          <div className="cafe-open-badge">
            <span className="cafe-open-dot"></span>
            Open Now
          </div>
          <h1 className="cafe-hero-title">Brew & Bean Cafe</h1>
          <p className="cafe-hero-subtitle">Handcrafted coffee & fresh bites since 2018</p>
          <p className="cafe-hero-tagline">Where every sip tells a story</p>
          <div className="cafe-hero-buttons">
            <button onClick={() => scrollTo(menuRef)} className="cafe-btn-warm">
              Explore Menu
            </button>
            <button onClick={() => openModal('order')} className="cafe-btn-outline">
              Order Now
            </button>
          </div>
        </div>
        <div className="cafe-hero-scroll">
          <span>↓ Scroll</span>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="cafe-story">
        <div className="cafe-story-container">
          <div className="cafe-story-image">
            <span className="cafe-story-emoji">🏠</span>
          </div>
          <div className="cafe-story-content">
            <span className="cafe-section-tag">Our Story</span>
            <h2>A Warm Corner for Coffee Lovers</h2>
            <p>
              Brew & Bean Cafe was born from a passion for exceptional coffee and a desire to create 
              a warm, welcoming space for our community. We source our beans directly from sustainable 
              farms and roast them in small batches to bring out the perfect flavor profile.
            </p>
            <p>
              Every cup we serve is a labor of love — from the careful selection of our ingredients 
              to the skilled hands of our baristas. We believe coffee is more than a drink; it's 
              an experience that brings people together.
            </p>
            <div className="cafe-story-stats">
              <div className="cafe-story-stat">
                <span className="cafe-stat-num">50K+</span>
                <span className="cafe-stat-text">Cups Served</span>
              </div>
              <div className="cafe-story-stat">
                <span className="cafe-stat-num">4.9★</span>
                <span className="cafe-stat-text">Rating</span>
              </div>
              <div className="cafe-story-stat">
                <span className="cafe-stat-num">7+</span>
                <span className="cafe-stat-text">Years</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section ref={menuRef} className="cafe-menu">
        <div className="cafe-menu-header">
          <span className="cafe-section-tag">Our Menu</span>
          <h2>Crafted with Love</h2>
        </div>
        
        {/* Filter Tabs */}
        <div className="cafe-menu-tabs">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cafe-menu-tab ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="cafe-menu-grid">
          {filteredMenu.map((item) => (
            <div key={item.name} className="cafe-menu-card">
              <div className="cafe-menu-card-image">{item.image}</div>
              <div className="cafe-menu-card-body">
                <div className="cafe-menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="cafe-menu-card-price">{item.price}</span>
                </div>
                <p className="cafe-menu-card-desc">{item.desc}</p>
                <button onClick={() => openModal('order')} className="cafe-menu-card-btn">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Today's Special Section */}
      <section ref={specialRef} className="cafe-special">
        <div className="cafe-special-container">
          <div className="cafe-special-image">
            <span className="cafe-special-emoji">{todaySpecial.image}</span>
          </div>
          <div className="cafe-special-content">
            <span className="cafe-special-tag">{todaySpecial.tag}</span>
            <h2>{todaySpecial.name}</h2>
            <p className="cafe-special-desc">{todaySpecial.desc}</p>
            <div className="cafe-special-pricing">
              <span className="cafe-special-price">{todaySpecial.price}</span>
              <span className="cafe-special-original">{todaySpecial.originalPrice}</span>
            </div>
            <button onClick={() => openModal('order')} className="cafe-btn-warm">
              Grab This Deal
            </button>
          </div>
        </div>
      </section>

      {/* Loyalty Program Section */}
      <section ref={loyaltyRef} className="cafe-loyalty">
        <div className="cafe-loyalty-container">
          <span className="cafe-section-tag light">Loyalty Program</span>
          <h2>Sip, Earn, Repeat</h2>
          <p className="cafe-loyalty-desc">Join our loyalty program and earn rewards with every purchase!</p>
          
          <div className="cafe-loyalty-steps">
            {loyaltySteps.map((step) => (
              <div key={step.step} className="cafe-loyalty-step">
                <div className="cafe-loyalty-icon">{step.icon}</div>
                <div className="cafe-loyalty-step-num">Step {step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="cafe-loyalty-cta">
            <button onClick={() => openModal('membership')} className="cafe-btn-warm">
              Join Now — It's Free!
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="cafe-gallery">
        <div className="cafe-gallery-header">
          <span className="cafe-section-tag">Gallery</span>
          <h2>Our Space</h2>
        </div>
        <div className="cafe-gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="cafe-gallery-item">
              <div className="cafe-gallery-emoji">{img.emoji}</div>
              <div className="cafe-gallery-overlay">
                <span>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Find Us Section */}
      <section ref={findUsRef} className="cafe-findus">
        <div className="cafe-findus-container">
          <div className="cafe-findus-info">
            <span className="cafe-section-tag">Find Us</span>
            <h2>Visit Our Cafe</h2>
            
            <div className="cafe-findus-details">
              <div className="cafe-findus-item">
                <span className="cafe-findus-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>123 Coffee Lane, Bean City, BC 45678</p>
                </div>
              </div>
              
              <div className="cafe-findus-item">
                <span className="cafe-findus-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Mon - Fri: 7:00 AM — 9:00 PM</p>
                  <p>Sat - Sun: 8:00 AM — 10:00 PM</p>
                </div>
              </div>

              <div className="cafe-findus-item">
                <span className="cafe-findus-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="cafe-findus-item">
                <span className="cafe-findus-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cafe-findus-map">
            <div className="cafe-map-placeholder">
              <span>🗺️</span>
              <p>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="cafe-contact">
        <div className="cafe-contact-container">
          <span className="cafe-section-tag">Get in Touch</span>
          <h2>Let's Connect</h2>
          <p className="cafe-contact-desc">Have a question or want to place a large order? Reach out to us!</p>
          
          <div className="cafe-contact-grid">
            <div className="cafe-contact-card">
              <span className="cafe-contact-icon">📱</span>
              <h3>Call Us</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
            <div className="cafe-contact-card">
              <span className="cafe-contact-icon">✉️</span>
              <h3>Email Us</h3>
              <p>example@gmail.com</p>
            </div>
            <div className="cafe-contact-card">
              <span className="cafe-contact-icon">📸</span>
              <h3>Follow Us</h3>
              <p>@mohammad_s4kib</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <TemplateFooter 
        name="Brew & Bean Cafe" 
        onSettingsClick={() => openModal('settings')} 
      />
      
      <Settings />
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        templateName="Brew & Bean Cafe"
      />
    </div>
  );
}

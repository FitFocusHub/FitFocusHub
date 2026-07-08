import React, { useState, useRef } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './TravelTemplate.css';

export default function TravelTemplate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('booking');
  const [settingsOpen, setSettingsOpen] = useState(false);

  const heroRef = useRef(null);
  const destinationsRef = useRef(null);
  const whyUsRef = useRef(null);
  const packagesRef = useRef(null);
  const storiesRef = useRef(null);
  const newsletterRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openBookingModal = () => {
    setModalType('booking');
    setModalOpen(true);
  };

  const destinations = [
    {
      id: 1,
      name: 'Goa',
      tagline: 'Sun, Sand & Serenity',
      price: '₹12,999',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      name: 'Manali',
      tagline: 'Mountain Magic Awaits',
      price: '₹15,999',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      name: 'Kerala',
      tagline: 'God\'s Own Country',
      price: '₹18,999',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      name: 'Ladakh',
      tagline: 'Where Earth Touches Sky',
      price: '₹22,999',
      image: 'https://images.unsplash.com/photo-1626016308238-a5e0e0e5e0c6?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      name: 'Jaipur',
      tagline: 'Royal Heritage Experience',
      price: '₹11,999',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      name: 'Varanasi',
      tagline: 'Eternal Spiritual Journey',
      price: '₹9,999',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop'
    }
  ];

  const features = [
    {
      icon: '🗺️',
      title: 'Expert Local Guides',
      description: 'Passionate explorers who know every hidden gem and secret trail'
    },
    {
      icon: '🛡️',
      title: '100% Safe Travel',
      description: 'Complete safety protocols and 24/7 emergency support'
    },
    {
      icon: '🎯',
      title: 'Customized Itineraries',
      description: 'Tailor-made adventures designed just for you'
    },
    {
      icon: '💰',
      title: 'Best Price Guarantee',
      description: 'Unbeatable prices without compromising quality'
    },
    {
      icon: '🎒',
      title: 'All-Inclusive Packages',
      description: 'Everything sorted - flights, stays, activities & meals'
    },
    {
      icon: '⭐',
      title: '5-Star Experiences',
      description: 'Rated best adventure company by thousands of travelers'
    }
  ];

  const packages = [
    {
      id: 'budget',
      name: 'Budget Explorer',
      price: '₹9,999',
      period: 'per person',
      features: [
        '3 Days / 2 Nights',
        'Budget Hotels',
        'Breakfast Only',
        'Group Activities',
        'Shared Transport',
        'Basic Itinerary'
      ],
      popular: false
    },
    {
      id: 'standard',
      name: 'Adventure Seeker',
      price: '₹19,999',
      period: 'per person',
      features: [
        '5 Days / 4 Nights',
        '3-Star Hotels',
        'All Meals Included',
        'Small Group Activities',
        'Private Transport',
        'Custom Itinerary',
        'Airport Transfers',
        'Travel Insurance'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Luxury Wanderer',
      price: '₹39,999',
      period: 'per person',
      features: [
        '7 Days / 6 Nights',
        '5-Star Resorts',
        'All Meals + Premium Dining',
        'Private Experiences',
        'Luxury Vehicles',
        'Personal Guide',
        'VIP Access',
        'Spa & Wellness',
        'Photography Service',
        'Concierge Support'
      ],
      popular: false
    }
  ];

  const stories = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      quote: 'Wanderlust Travels turned my dream Ladakh trip into reality. The untouched landscapes and the warmth of the locals made it a life-changing journey!',
      avatar: '👩‍🦱'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      location: 'Delhi',
      quote: 'The Kerala backwaters experience was magical! Every moment felt like a scene from a movie. Can\'t wait for my next adventure with them.',
      avatar: '👨‍💼'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      location: 'Bangalore',
      quote: 'From the royal forts of Jaipur to the sacred ghats of Varanasi, every destination was curated to perfection. Truly unforgettable!',
      avatar: '👩‍🎤'
    }
  ];

  return (
    <div className="travel-template">
      {/* Floating Navigation */}
      <nav className="floating-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">✈</span>
            <span className="logo-text">Wanderlust Travels</span>
          </div>
          <div className="nav-links">
            <button onClick={() => scrollTo(heroRef)}>Home</button>
            <button onClick={() => scrollTo(destinationsRef)}>Destinations</button>
            <button onClick={() => scrollTo(packagesRef)}>Packages</button>
            <button onClick={() => scrollTo(storiesRef)}>Stories</button>
            <button onClick={() => scrollTo(contactRef)}>Contact</button>
          </div>
          <button className="nav-cta" onClick={openBookingModal}>Book Trip</button>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="hero-section">
        <div className="parallax-bg">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">Adventure Awaits</span>
          <h1 className="hero-title">
            Explore The <span className="highlight">Untamed</span> World
          </h1>
          <p className="hero-subtitle">
            Journey beyond boundaries. Discover hidden trails, untouched landscapes, 
            and create memories that last a lifetime.
          </p>
          <div className="hero-actions">
            <button className="btn-explore" onClick={() => scrollTo(destinationsRef)}>
              <span>Explore Now</span>
              <span className="arrow">→</span>
            </button>
            <button className="btn-watch">
              <span className="play-icon">▶</span>
              <span>Watch Stories</span>
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Adventures</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Travelers</span>
            </div>
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Destinations</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll to Explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section ref={destinationsRef} className="destinations-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Popular Destinations</span>
            <h2>Where Will Your Next <span className="highlight">Adventure</span> Take You?</h2>
            <p>Handpicked destinations that promise unforgettable experiences</p>
          </div>
          <div className="destinations-grid">
            {destinations.map(dest => (
              <div key={dest.id} className="destination-card">
                <div className="card-image">
                  <img src={dest.image} alt={dest.name} />
                  <div className="card-overlay">
                    <span className="dest-price">{dest.price}</span>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{dest.name}</h3>
                  <p>{dest.tagline}</p>
                  <button className="btn-dest" onClick={openBookingModal}>Explore Trip →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section ref={whyUsRef} className="features-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why Travel With Us</span>
            <h2>Your Adventure, <span className="highlight">Our Passion</span></h2>
            <p>We don't just plan trips, we craft experiences that stay with you forever</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Packages Comparison */}
      <section ref={packagesRef} className="packages-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Travel Packages</span>
            <h2>Choose Your <span className="highlight">Adventure Style</span></h2>
            <p>Flexible packages designed to match every traveler's dream</p>
          </div>
          <div className="packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="price">
                    <span className="amount">{pkg.price}</span>
                    <span className="period">{pkg.period}</span>
                  </div>
                </div>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`btn-package ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={openBookingModal}
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traveler Stories */}
      <section ref={storiesRef} className="stories-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Traveler Stories</span>
            <h2>Voices From <span className="highlight">The Road</span></h2>
            <p>Real stories from real travelers who explored with us</p>
          </div>
          <div className="stories-grid">
            {stories.map(story => (
              <div key={story.id} className="story-card">
                <div className="story-quote">"</div>
                <p className="story-text">{story.quote}</p>
                <div className="story-author">
                  <span className="author-avatar">{story.avatar}</span>
                  <div className="author-info">
                    <span className="author-name">{story.name}</span>
                    <span className="author-location">{story.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="newsletter-section">
        <div className="section-container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <span className="section-tag">Stay Connected</span>
              <h2>Get <span className="highlight">Exclusive</span> Travel Deals</h2>
              <p>Subscribe to our newsletter and be the first to know about special offers, new destinations, and travel tips.</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn-subscribe">Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Get In Touch</span>
            <h2>Ready For Your Next <span className="highlight">Adventure</span>?</h2>
            <p>We'd love to help you plan your dream trip</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h4>Call Us</h4>
                  <p>+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h4>Email Us</h4>
                  <p>example@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📸</span>
                <div>
                  <h4>Follow Us</h4>
                  <p>@mohammad_s4kib</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone" />
              <textarea placeholder="Your Message" rows="4"></textarea>
              <button className="btn-send" onClick={openBookingModal}>Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* Settings Button */}
      <button className="settings-btn" onClick={() => setSettingsOpen(true)}>
        ⚙
      </button>

      {/* Footer */}
      <TemplateFooter 
        templateName="Wanderlust Travels"
        onSettingsClick={() => setSettingsOpen(true)}
      />

      {/* Modals */}
      <DemoModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        type={modalType} 
      />
      <Settings 
        isOpen={settingsOpen} 
        onClose={() => setSettingsOpen(false)} 
      />
    </div>
  );
}

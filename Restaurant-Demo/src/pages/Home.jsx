import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiClock, FiMapPin } from 'react-icons/fi';
import { FaUtensils, FaWineGlassAlt, FaConciergeBell, FaStar } from 'react-icons/fa';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Home.css';

export default function Home() {
  const features = [
    { icon: <FaUtensils />, title: 'Fine Dining', description: 'Exquisite dishes prepared by our expert chefs using the finest ingredients.' },
    { icon: <FaWineGlassAlt />, title: 'Premium Drinks', description: 'Curated selection of wines, cocktails, and beverages.' },
    { icon: <FaConciergeBell />, title: 'Exceptional Service', description: 'Our dedicated staff ensures an unforgettable dining experience.' },
    { icon: <FaStar />, title: 'Award Winning', description: 'Recognized for culinary excellence and outstanding service.' },
  ];

  const menuHighlights = [
    { name: 'Grilled Salmon', price: '$28', description: 'Fresh Atlantic salmon with herbs' },
    { name: 'Filet Mignon', price: '$45', description: 'Prime beef tenderloin' },
    { name: 'Truffle Pasta', price: '$22', description: 'Handmade pasta with black truffle' },
    { name: 'Caesar Salad', price: '$15', description: 'Classic recipe with parmesan crisp' },
  ];

  return (
    <div className="home page-transition">
      <SEO
        title="Home"
        description="Experience culinary excellence with our carefully crafted dishes and exceptional dining atmosphere."
        keywords="restaurant, fine dining, gourmet, cuisine, food, dining"
        url="https://example.com"
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-badge"
            >
              <FaStar size={14} />
              <span>Award Winning Restaurant</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-title"
            >
              A Culinary Journey{' '}
              <span className="gradient-text">Like No Other</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              Indulge in a symphony of flavors crafted by our award-winning chefs.
              Every dish tells a story of passion, precision, and the finest ingredients.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-buttons"
            >
              <Link to="/menu" className="btn btn-primary btn-lg">
                View Menu <FiArrowRight />
              </Link>
              <Link to="/reservations" className="btn btn-secondary btn-lg">
                Make Reservation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hero-info"
            >
              <div className="info-item">
                <FiClock className="info-icon" />
                <span>{config.businessHours}</span>
              </div>
              <div className="info-divider"></div>
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <span>{config.address}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              An exceptional dining experience that engages all your senses
            </p>
          </AnimatedSection>
          <div className="features-grid">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="feature-card glass-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Menu Highlights</h2>
            <p className="section-subtitle">
              Signature dishes that define our culinary excellence
            </p>
          </AnimatedSection>
          <div className="highlights-grid">
            {menuHighlights.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="highlight-card glass-card">
                  <div className="highlight-price">{item.price}</div>
                  <h3 className="highlight-name">{item.name}</h3>
                  <p className="highlight-desc">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/menu" className="btn btn-outline">
                View Full Menu <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h2 className="cta-title">Ready for an Unforgettable Dining Experience?</h2>
              <p className="cta-description">
                Reserve your table today and embark on a culinary journey that will delight your taste buds.
              </p>
              <div className="cta-buttons">
                <Link to="/reservations" className="btn btn-primary btn-lg">
                  Reserve Now <FiArrowRight />
                </Link>
                <Link to="/order" className="btn btn-secondary btn-lg">
                  Order Online
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
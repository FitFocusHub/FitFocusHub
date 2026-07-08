import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaPaintBrush } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './GraphicDesign.css';

export default function GraphicDesign() {
  const services = [
    'Logo Design',
    'Brand Identity',
    'Business Cards',
    'Brochures & Flyers',
    'Social Media Graphics',
    'Posters & Banners',
    'Packaging Design',
    'Stationery Design'
  ];

  const portfolioItems = [
    { name: 'TechStart Brand Identity', description: 'Complete brand identity for a tech startup' },
    { name: 'Restaurant Menu Design', description: 'Elegant menu design for fine dining' },
    { name: 'Event Poster Series', description: 'Dynamic posters for music festival' },
    { name: 'Corporate Stationery', description: 'Professional stationery set' },
  ];

  return (
    <div className="graphic-design page-transition">
      <SEO
        title="Graphic Design"
        description="Professional graphic design services including logos, brand identity, and marketing materials."
        keywords="graphic design, logo design, brand identity, marketing materials"
        url="https://example.com/graphic-design"
      />

      {/* Hero Section */}
      <section className="graphic-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              <span className="gradient-text">Graphic Design</span>
            </h1>
            <p className="page-subtitle">
              Stunning visual designs that capture attention and convey your message
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            <AnimatedSection direction="left">
              <div className="service-info">
                <h2 className="section-title">Our Services</h2>
                <p className="service-desc">
                  We offer comprehensive graphic design solutions to help your brand
                  stand out in the competitive market.
                </p>
                <ul className="service-list">
                  {services.map((service, index) => (
                    <li key={index} className="service-item">
                      <FiCheck className="check-icon" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary">
                  Get Started <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="service-image">
                <div className="image-placeholder">
                  <FaPaintBrush size={80} />
                  <span>Graphic Design</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              Explore our graphic design portfolio
            </p>
          </AnimatedSection>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="portfolio-card glass-card">
                  <div className="portfolio-image">
                    <div className="image-placeholder">
                      <FaPaintBrush size={40} />
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h3 className="portfolio-name">{item.name}</h3>
                    <p className="portfolio-desc">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
              <p className="cta-description">
                Let's create stunning visuals that make your brand unforgettable.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
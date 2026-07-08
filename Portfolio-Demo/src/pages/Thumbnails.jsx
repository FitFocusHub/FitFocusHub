import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaImage } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Thumbnails.css';

export default function Thumbnails() {
  const services = [
    'YouTube Thumbnails',
    'Social Media Graphics',
    'Blog Headers',
    'Podcast Covers',
    'Twitch Thumbnails',
    'Custom Illustrations',
    'A/B Testing Variants',
    'Brand Consistent Designs'
  ];

  const portfolioItems = [
    { name: 'Gaming Thumbnail Series', description: 'Eye-catching thumbnails for gaming channel' },
    { name: 'Tech Review Thumbnails', description: 'Clean, modern thumbnails for tech content' },
    { name: 'Cooking Channel Series', description: 'Appetizing food thumbnails' },
    { name: 'Fitness Content Pack', description: 'Dynamic thumbnails for fitness videos' },
  ];

  return (
    <div className="thumbnails page-transition">
      <SEO
        title="Thumbnails"
        description="Eye-catching thumbnail designs that increase click-through rates and engagement."
        keywords="YouTube thumbnails, thumbnail design, social media graphics"
        url="https://example.com/thumbnails"
      />

      {/* Hero Section */}
      <section className="thumbnails-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              <span className="gradient-text">Thumbnails</span>
            </h1>
            <p className="page-subtitle">
              Eye-catching thumbnails that increase click-through rates
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
                  We create compelling thumbnails that grab attention and drive
                  more clicks to your content.
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
                  <FaImage size={80} />
                  <span>Thumbnail Design</span>
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
              Explore our thumbnail design portfolio
            </p>
          </AnimatedSection>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="portfolio-card glass-card">
                  <div className="portfolio-image">
                    <div className="image-placeholder">
                      <FaImage size={40} />
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
              <h2 className="cta-title">Want More Clicks?</h2>
              <p className="cta-description">
                Let's create thumbnails that make people click.
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
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaVideo } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './VideoEditing.css';

export default function VideoEditing() {
  const services = [
    'YouTube Video Editing',
    'Social Media Content',
    'Corporate Videos',
    'Motion Graphics',
    'Color Grading',
    'Sound Design',
    'Video Restoration',
    'Animated Explainers'
  ];

  const portfolioItems = [
    { name: 'Product Launch Video', description: 'Dynamic product showcase video' },
    { name: 'Corporate Training Series', description: 'Educational video series' },
    { name: 'Music Video Editing', description: 'Creative music video production' },
    { name: 'Social Media Campaign', description: 'Short-form content for Instagram' },
  ];

  return (
    <div className="video-editing page-transition">
      <SEO
        title="Video Editing"
        description="Professional video editing services for YouTube, social media, and corporate content."
        keywords="video editing, YouTube editing, motion graphics, corporate videos"
        url="https://example.com/video-editing"
      />

      {/* Hero Section */}
      <section className="video-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              <span className="gradient-text">Video Editing</span>
            </h1>
            <p className="page-subtitle">
              Professional video editing to bring your stories to life
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
                  We offer comprehensive video editing solutions to help you create
                  compelling visual content.
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
                  <FaVideo size={80} />
                  <span>Video Editing</span>
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
              Explore our video editing portfolio
            </p>
          </AnimatedSection>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="portfolio-card glass-card">
                  <div className="portfolio-image">
                    <div className="image-placeholder">
                      <FaVideo size={40} />
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
              <h2 className="cta-title">Ready to Create Amazing Videos?</h2>
              <p className="cta-description">
                Let's bring your vision to life with professional video editing.
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
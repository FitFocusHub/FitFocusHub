import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap } from 'react-icons/fi';
import { FaPalette, FaPaintBrush, FaVideo, FaImage, FaRocket, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Home.css';

export default function Home() {
  const features = [
    { icon: <FaPaintBrush />, title: 'Graphic Design', description: 'Stunning visual designs that capture attention and convey your message.' },
    { icon: <FaVideo />, title: 'Video Editing', description: 'Professional video editing to bring your stories to life.' },
    { icon: <FaImage />, title: 'Thumbnails', description: 'Eye-catching thumbnails that increase click-through rates.' },
    { icon: <FaPalette />, title: 'Brand Identity', description: 'Complete brand identity design for a cohesive look.' },
    { icon: <FaRocket />, title: 'Web Development', description: 'Modern, responsive websites built with the latest technologies.' },
    { icon: <FaLightbulb />, title: 'Creative Strategy', description: 'Strategic creative solutions tailored to your goals.' },
  ];

  const portfolioItems = [
    { name: 'Brand Identity Project', category: 'Graphic Design', image: null },
    { name: 'Product Video', category: 'Video Editing', image: null },
    { name: 'YouTube Thumbnails', category: 'Thumbnails', image: null },
    { name: 'Website Redesign', category: 'Web Development', image: null },
  ];

  const stats = [
    { number: config.stats.projectsCompleted, label: 'Projects Done' },
    { number: config.stats.happyClients, label: 'Happy Clients' },
    { number: config.stats.teamMembers, label: 'Team Members' },
    { number: config.stats.yearsExperience, label: 'Years Experience' },
  ];

  return (
    <div className="home page-transition">
      <SEO
        title="Home"
        description="We create stunning digital experiences through graphic design, video editing, and web development."
        keywords="graphic design, video editing, thumbnails, web development, portfolio"
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
              <FiZap size={14} />
              <span>Creative Design Agency</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-title"
            >
              We Create{' '}
              <span className="gradient-text">Digital Experiences</span>
              <br />That Inspire
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              From stunning graphics to compelling videos, we transform your ideas
              into powerful visual content that elevates your brand.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-buttons"
            >
              <Link to="/portfolio" className="btn btn-primary btn-lg">
                View Portfolio <FiArrowRight />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get in Touch
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hero-stats"
            >
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}+</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive creative solutions to elevate your brand
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

      {/* Portfolio Preview */}
      <section className="section portfolio-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              Explore our latest projects that showcase our expertise
            </p>
          </AnimatedSection>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="portfolio-card glass-card">
                  <div className="portfolio-image">
                    <div className="image-placeholder">
                      <FaPalette size={40} />
                    </div>
                    <div className="portfolio-overlay">
                      <span className="view-project">View Project</span>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <span className="portfolio-category">{item.category}</span>
                    <h3 className="portfolio-name">{item.name}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/portfolio" className="btn btn-outline">
                View All Projects <FiArrowRight />
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
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Let's collaborate and create something extraordinary together.
                Get in touch with us today!
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get in Touch <FiArrowRight />
                </Link>
                <Link to="/pricing" className="btn btn-secondary btn-lg">
                  View Pricing
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
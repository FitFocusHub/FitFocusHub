import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaPalette, FaPaintBrush, FaVideo, FaImage, FaGlobe, FaMobileAlt } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Services.css';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaPaintBrush />,
      title: 'Graphic Design',
      description: 'Professional graphic design services including logos, brochures, posters, and brand identity.',
      features: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'Social Media Graphics'],
      price: 'Starting from $500'
    },
    {
      id: 2,
      icon: <FaVideo />,
      title: 'Video Editing',
      description: 'High-quality video editing services for YouTube, social media, and corporate videos.',
      features: ['YouTube Videos', 'Social Media Content', 'Corporate Videos', 'Motion Graphics'],
      price: 'Starting from $200'
    },
    {
      id: 3,
      icon: <FaImage />,
      title: 'Thumbnails',
      description: 'Eye-catching thumbnails that increase click-through rates and engagement.',
      features: ['YouTube Thumbnails', 'Social Media', 'Blog Headers', 'Custom Designs'],
      price: 'Starting from $50'
    },
    {
      id: 4,
      icon: <FaGlobe />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies.',
      features: ['Landing Pages', 'Business Websites', 'E-commerce', 'Web Applications'],
      price: 'Starting from $1000'
    },
    {
      id: 5,
      icon: <FaMobileAlt />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions for web and mobile applications.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
      price: 'Starting from $800'
    },
    {
      id: 6,
      icon: <FaPalette />,
      title: 'Brand Strategy',
      description: 'Strategic brand development to help your business stand out.',
      features: ['Brand Research', 'Positioning', 'Messaging', 'Visual Identity'],
      price: 'Starting from $1500'
    },
  ];

  return (
    <div className="services page-transition">
      <SEO
        title="Services"
        description="Explore our comprehensive range of creative design and development services."
        keywords="graphic design services, video editing, web development, brand strategy"
        url="https://example.com/services"
      />

      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="page-subtitle">
              Comprehensive creative solutions to elevate your brand
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="service-card glass-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <FiCheck className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-price">{service.price}</div>
                  <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>
                    Get Started
                  </Link>
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
              <h2 className="cta-title">Need a Custom Solution?</h2>
              <p className="cta-description">
                We can create tailored solutions to meet your specific requirements.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
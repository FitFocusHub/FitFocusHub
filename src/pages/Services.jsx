import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiCheck, FiClock
} from 'react-icons/fi';
import {
  FaGlobe, FaPaintBrush, FaVideo, FaChartLine,
  FaShoppingCart, FaImage, FaFilm, FaPalette,
  FaStar, FaCreditCard, FaMobileAlt, FaShareAlt,
  FaMapMarkerAlt, FaBrain, FaRocket
} from 'react-icons/fa';
import services from '../data/services.json';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import './Services.css';

const iconMap = {
  Globe: FaGlobe,
  Layout: FaPaintBrush,
  Briefcase: FaRocket,
  BarChart3: FaChartLine,
  ShoppingCart: FaShoppingCart,
  Image: FaImage,
  Film: FaFilm,
  Palette: FaPalette,
  Sparkles: FaStar,
  CreditCard: FaCreditCard,
  Smartphone: FaMobileAlt,
  Share2: FaShareAlt,
  MapPin: FaMapMarkerAlt,
  Brain: FaBrain,
};

export default function Services() {
  return (
    <div className="services-page page-transition">
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive digital solutions to elevate your brand and drive business growth"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FaGlobe;
              return (
                <AnimatedSection key={service.id} delay={index * 0.05}>
                  <div className="service-detail-card glass-card">
                    <div className="service-detail-left">
                      <div className="service-detail-icon">
                        <IconComponent />
                      </div>
                      <div className="service-detail-info">
                        <h3 className="service-detail-name">{service.name}</h3>
                        <p className="service-detail-desc">{service.description}</p>
                        <div className="service-meta">
                          <span className="service-meta-item">
                            <FiClock size={14} />
                            {service.deliveryTime}
                          </span>
                          <span className="service-meta-item service-price-tag">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="service-detail-right">
                      <div className="service-features">
                        {service.features.map((feature, i) => (
                          <span key={i} className="feature-chip">
                            <FiCheck size={12} />
                            {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${encodeURIComponent(`Hello! I am interested in ${service.name} service. Can we discuss?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Get Quote <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section services-cta">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h2 className="cta-title">Need a Custom Solution?</h2>
              <p className="cta-description">
                We offer tailored solutions for unique business requirements.
                Let's discuss your project!
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

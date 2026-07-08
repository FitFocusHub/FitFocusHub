import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';
import pricing from '../data/pricing.json';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import { SEO } from '../components/SEO';
import './Pricing.css';

export default function Pricing() {
  return (
    <div className="pricing-page page-transition">
      <SEO
        title="Pricing"
        description="Affordable website development pricing: Starter ₹2,499, Business ₹4,999, Premium ₹9,999, Enterprise ₹15,999. One-time payment, no hidden charges."
        keywords="website price, web development cost, website development pricing, cheap website, affordable website India, one time payment website, website packages"
        url="https://fitfocushub.github.io/FitFocusHub/pricing"
      />
      <PageHeader
        title="Pricing"
        subtitle="Transparent pricing plans designed to fit businesses of all sizes"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pricing' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 0.1}>
                <div className={`pricing-card glass-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <div className="popular-badge">Most Popular</div>}
                  <div className="pricing-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-tagline">{plan.tagline}</p>
                    <div className="plan-price">
                      <span className="price">{plan.price}</span>
                      <span className="price-note">{plan.priceNote}</span>
                    </div>
                  </div>
                  <div className="pricing-features">
                    <h4 className="features-title">What's Included</h4>
                    <ul className="features-list">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="feature-item included">
                          <FiCheck size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.excluded.length > 0 && (
                      <ul className="features-list excluded">
                        {plan.excluded.map((feature, i) => (
                          <li key={i} className="feature-item">
                            <FiX size={16} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${encodeURIComponent(`Hello! I am interested in the ${plan.name} plan. Can we discuss?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-block`}
                  >
                    {plan.cta} <FiArrowRight />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-faq">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Custom Solutions</h2>
            <p className="section-subtitle">
              Need something specific? We offer custom packages tailored to your unique requirements.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="text-center">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Custom Quote <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

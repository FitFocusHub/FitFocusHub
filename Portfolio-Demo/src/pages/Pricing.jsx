import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Pricing.css';

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '99',
      period: 'project',
      description: 'Perfect for small projects and startups.',
      features: [
        '1 Design Concept',
        '2 Revision Rounds',
        'Source Files',
        'Commercial License',
        '3 Day Delivery',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Professional',
      price: '299',
      period: 'project',
      description: 'Best value for growing businesses.',
      features: [
        '3 Design Concepts',
        'Unlimited Revisions',
        'Source Files',
        'Commercial License',
        '5 Day Delivery',
        'Brand Guidelines',
        'Social Media Kit',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '799',
      period: 'project',
      description: 'Complete solution for established brands.',
      features: [
        '5 Design Concepts',
        'Unlimited Revisions',
        'Source Files',
        'Commercial License',
        '7 Day Delivery',
        'Brand Guidelines',
        'Social Media Kit',
        'Motion Graphics',
        'Priority Support',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pricing page-transition">
      <SEO
        title="Pricing"
        description="Transparent pricing for our graphic design and creative services."
        keywords="design pricing, graphic design cost, video editing price"
        url="https://example.com/pricing"
      />

      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="page-subtitle">
              Choose the plan that best suits your project needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section pricing-section">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 0.1}>
                <div className={`pricing-card glass-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <FiCheck className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                    style={{ width: '100%' }}
                  >
                    Get Started <FiArrowRight />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Common questions about our pricing
            </p>
          </AnimatedSection>
          <div className="faq-grid">
            <AnimatedSection delay={0.1}>
              <div className="faq-card glass-card">
                <h4 className="faq-question">What's included in the source files?</h4>
                <p className="faq-answer">
                  Source files include editable files (AI, PSD, EPS) along with exported formats (PNG, JPG, PDF).
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="faq-card glass-card">
                <h4 className="faq-question">How many revisions do I get?</h4>
                <p className="faq-answer">
                  Basic plan includes 2 revisions, while Professional and Enterprise plans include unlimited revisions.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="faq-card glass-card">
                <h4 className="faq-question">Can I upgrade my plan later?</h4>
                <p className="faq-answer">
                  Yes, you can upgrade your plan at any time. The price difference will be applied to your project.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
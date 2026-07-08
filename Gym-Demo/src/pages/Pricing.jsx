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
      price: '999',
      period: 'month',
      description: 'Perfect for beginners starting their fitness journey.',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        '2 group classes per week',
      ],
      popular: false,
    },
    {
      id: 2,
      name: 'Premium',
      price: '1999',
      period: 'month',
      description: 'Most popular choice for serious fitness enthusiasts.',
      features: [
        'Full gym access',
        'All group classes',
        'Personal trainer session (2x/month)',
        'Nutrition consultation',
        'Sauna access',
        'Towel service',
      ],
      popular: true,
    },
    {
      id: 3,
      name: 'Elite',
      price: '3999',
      period: 'month',
      description: 'Ultimate package for maximum results.',
      features: [
        'Unlimited gym access',
        'All group classes',
        'Personal trainer (4x/month)',
        'Custom nutrition plan',
        'Sauna & spa access',
        'Priority booking',
        'Guest passes (2x/month)',
        'Exclusive member events',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pricing page-transition">
      <SEO
        title="Pricing"
        description="Choose the perfect membership plan that fits your fitness goals and budget."
        keywords="gym pricing, membership plans, fitness subscription"
        url="https://example.com/pricing"
      />

      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Membership <span className="gradient-text">Plans</span>
            </h1>
            <p className="page-subtitle">
              Choose the plan that best suits your fitness goals and lifestyle
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
                    <span className="currency">₹</span>
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
                    to="/membership" 
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
              Common questions about our membership plans
            </p>
          </AnimatedSection>
          <div className="faq-grid">
            <AnimatedSection delay={0.1}>
              <div className="faq-card glass-card">
                <h4 className="faq-question">Can I upgrade my plan later?</h4>
                <p className="faq-answer">
                  Yes, you can upgrade your plan at any time. The price difference will be prorated for the remaining days in your billing cycle.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="faq-card glass-card">
                <h4 className="faq-question">Is there a cancellation fee?</h4>
                <p className="faq-answer">
                  No, there are no cancellation fees. You can cancel your membership anytime before your next billing date.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="faq-card glass-card">
                <h4 className="faq-question">Do you offer student discounts?</h4>
                <p className="faq-answer">
                  Yes, we offer special discounts for students with valid student ID. Contact us for more details.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
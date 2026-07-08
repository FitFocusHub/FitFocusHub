import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiAlertTriangle, FiX } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Membership.css';

export default function Membership() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '999',
      period: 'month',
      features: ['Gym access', 'Locker room', '2 classes/week'],
    },
    {
      id: 2,
      name: 'Premium',
      price: '1999',
      period: 'month',
      features: ['Full access', 'All classes', 'Personal trainer 2x/month'],
      popular: true,
    },
    {
      id: 3,
      name: 'Elite',
      price: '3999',
      period: 'month',
      features: ['Unlimited access', 'All classes', 'Personal trainer 4x/month'],
    },
  ];

  const handleBuyClick = (plan) => {
    setSelectedPlan(plan);
    setShowDemoModal(true);
  };

  return (
    <div className="membership page-transition">
      <SEO
        title="Membership"
        description="Join our gym today and start your fitness transformation."
        keywords="gym membership, join gym, fitness membership"
        url="https://example.com/membership"
      />

      {/* Demo Warning Modal */}
      {showDemoModal && (
        <div className="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
          <div className="demo-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDemoModal(false)}>
              <FiX />
            </button>
            <div className="demo-modal-icon">
              <FiAlertTriangle />
            </div>
            <h3 className="demo-modal-title">This is a Demo Website</h3>
            <p className="demo-modal-message">
              You cannot buy membership or make any purchases on this demo website. 
              This is just a portfolio demonstration to showcase our web development skills.
            </p>
            {selectedPlan && (
              <div className="demo-modal-plan">
                <p>You tried to purchase: <strong>{selectedPlan.name} Plan - ₹{selectedPlan.price}/{selectedPlan.period}</strong></p>
              </div>
            )}
            <div className="demo-modal-actions">
              <button className="btn btn-primary" onClick={() => setShowDemoModal(false)}>
                I Understand
              </button>
              <Link to="/pricing" className="btn btn-secondary" onClick={() => setShowDemoModal(false)}>
                View Plans
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="membership-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Get Your <span className="gradient-text">Membership</span>
            </h1>
            <p className="page-subtitle">
              Choose a plan and start your fitness journey today
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="section membership-section">
        <div className="container">
          <div className="membership-grid">
            {plans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 0.1}>
                <div className={`membership-card glass-card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="currency">₹</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <FiCheck className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
                    style={{ width: '100%' }}
                    onClick={() => handleBuyClick(plan)}
                  >
                    Buy Now <FiArrowRight />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section info-section">
        <div className="container">
          <AnimatedSection>
            <div className="info-card glass-card">
              <div className="demo-badge">
                <FiAlertTriangle />
                <span>Demo Website</span>
              </div>
              <h2 className="info-title">This is a Portfolio Demo</h2>
              <p className="info-description">
                This website is created for demonstration purposes only. All features including 
                membership purchase, payment processing, and user registration are simulated. 
                No real transactions will be processed.
              </p>
              <p className="info-description">
                If you're interested in building a similar website for your business, 
                please contact us at <a href="mailto:fitfocushub2@gmail.com">fitfocushub2@gmail.com</a>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
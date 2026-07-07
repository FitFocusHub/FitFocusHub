import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMessageCircle, FiLayers, FiPenTool, FiCode, FiCheckCircle, FiHeadphones } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import './Process.css';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: <FiMessageCircle size={32} />,
      title: 'Contact',
      description: 'Reach out to us through WhatsApp, email, or our contact form. Share your project requirements and goals.',
      details: ['Initial consultation', 'Project briefing', 'Requirements gathering', 'Timeline discussion']
    },
    {
      number: '02',
      icon: <FiLayers size={32} />,
      title: 'Discussion',
      description: 'We analyze your requirements, research your industry, and plan the perfect strategy for your project.',
      details: ['Strategy planning', 'Market research', 'Competitor analysis', 'Project roadmap']
    },
    {
      number: '03',
      icon: <FiPenTool size={32} />,
      title: 'Design',
      description: 'Our designers create stunning mockups and prototypes that bring your vision to life.',
      details: ['UI/UX Design', 'Wireframing', 'Prototype creation', 'Design approval']
    },
    {
      number: '04',
      icon: <FiCode size={32} />,
      title: 'Development',
      description: 'Our developers build your project using the latest technologies for optimal performance.',
      details: ['Frontend development', 'Backend integration', 'Feature implementation', 'Code review']
    },
    {
      number: '05',
      icon: <FiCheckCircle size={32} />,
      title: 'Testing',
      description: 'Rigorous quality assurance testing ensures everything works flawlessly across all devices.',
      details: ['Functional testing', 'Performance testing', 'Cross-browser testing', 'Bug fixes']
    },
    {
      number: '06',
      icon: <FiHeadphones size={32} />,
      title: 'Delivery & Support',
      description: 'We deliver your project with full documentation and provide ongoing support.',
      details: ['Project handover', 'Documentation', 'Training session', 'Ongoing support']
    }
  ];

  return (
    <div className="process-page page-transition">
      <PageHeader
        title="Our Process"
        subtitle="A proven 6-step workflow that ensures quality, transparency, and timely delivery"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Process' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="process-timeline">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`process-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="step-connector">
                    <div className="step-number">{step.number}</div>
                    {index < steps.length - 1 && <div className="step-line"></div>}
                  </div>
                  <div className="step-content glass-card">
                    <div className="step-icon">{step.icon}</div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.description}</p>
                    <ul className="step-details">
                      {step.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-cta">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-description">
                Follow our proven process to bring your project to life.
                Contact us today to begin your digital journey!
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Start Your Project <FiArrowRight />
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=919930271670&text=Hello! I would like to start a project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <FiMessageCircle /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi';
import faq from '../data/faq.json';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-page page-transition">
      <PageHeader
        title="FAQ"
        subtitle="Find answers to commonly asked questions about our services and process"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'FAQ' },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faq.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.05}>
                <div className={`faq-item glass-card ${openIndex === index ? 'active' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-cta">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h2 className="cta-title">Still Have Questions?</h2>
              <p className="cta-description">
                Can't find the answer you're looking for? Please reach out to our friendly team.
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

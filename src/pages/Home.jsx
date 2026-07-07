import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight, FiCheck, FiZap, FiShield, FiClock,
  FiHeadphones, FiStar, FiChevronDown, FiChevronUp,
  FiSend, FiMessageCircle
} from 'react-icons/fi';
import {
  FaGlobe, FaPaintBrush, FaVideo, FaChartLine,
  FaRocket, FaLightbulb, FaUsers, FaAward
} from 'react-icons/fa';
import config from '../data/config.json';
import services from '../data/services.json';
import projects from '../data/projects.json';
import testimonials from '../data/testimonials.json';
import faq from '../data/faq.json';
import AnimatedSection from '../components/AnimatedSection';
import StatsCounter from '../components/StatsCounter';
import ComingSoon from '../components/ComingSoon';
import './Home.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredFaq = faq.slice(0, 5);

  const whyChooseUs = [
    { icon: <FaRocket />, title: 'Fast Delivery', description: 'We deliver projects on time, every time. Our streamlined process ensures quick turnaround without compromising quality.' },
    { icon: <FaPaintBrush />, title: 'Modern Design', description: 'Stunning, contemporary designs that make your brand stand out in the digital landscape.' },
    { icon: <FiShield />, title: 'Quality Assured', description: 'Every project undergoes rigorous testing to ensure flawless performance across all devices.' },
    { icon: <FiHeadphones />, title: '24/7 Support', description: 'Round-the-clock support to address any concerns and keep your digital presence running smoothly.' },
  ];

  const processSteps = [
    { number: '01', title: 'Contact', description: 'Reach out to us with your project requirements.' },
    { number: '02', title: 'Discussion', description: 'We analyze your needs and plan the perfect solution.' },
    { number: '03', title: 'Design', description: 'Our team creates stunning mockups for your approval.' },
    { number: '04', title: 'Development', description: 'We bring the design to life with clean, efficient code.' },
    { number: '05', title: 'Testing', description: 'Rigorous QA to ensure everything works perfectly.' },
    { number: '06', title: 'Delivery', description: 'Launch your project with full support and training.' },
  ];

  return (
    <div className="home page-transition">
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
              <span>Premium Digital Agency</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-title"
            >
              We Craft{' '}
              <span className="gradient-text">Digital Experiences</span>
              <br />That Drive Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              From stunning websites to compelling visuals, we transform your ideas
              into powerful digital solutions that elevate your brand and accelerate growth.
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
              <a
                href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${encodeURIComponent('Hello! I am interested in your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <FiMessageCircle /> Contact on WhatsApp
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hero-stats"
            >
              <StatsCounter end={config.stats.projectsCompleted} suffix="+" label="Projects Done" />
              <div className="stat-divider"></div>
              <StatsCounter end={config.stats.happyClients} suffix="+" label="Happy Clients" />
              <div className="stat-divider"></div>
              <StatsCounter end={config.stats.yearsExperience} suffix="+" label="Years Experience" />
              <div className="stat-divider"></div>
              <StatsCounter end={config.stats.teamMembers} label="Team Members" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section featured-services">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </AnimatedSection>
          <div className="services-grid">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Link to="/services" className="service-card glass-card">
                  <div className="service-icon">
                    <FaGlobe />
                  </div>
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-desc">{service.description}</p>
                  <div className="service-price">{service.price}</div>
                  <span className="service-link">
                    Learn More <FiArrowRight />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/services" className="btn btn-outline">
                View All Services <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="section featured-portfolio">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              Explore our latest projects that showcase our expertise and creativity
            </p>
          </AnimatedSection>
          {featuredProjects.length > 0 ? (
            <div className="portfolio-grid">
              {featuredProjects.map((project, index) => (
                <AnimatedSection key={project.id} delay={index * 0.1}>
                  <Link to={`/portfolio/${project.slug}`} className="portfolio-card">
                    <div className="portfolio-thumb">
                      {project.thumbnail ? (
                        <img src={project.thumbnail} alt={project.name} />
                      ) : (
                        <div className="portfolio-placeholder">
                          <FaGlobe size={40} />
                        </div>
                      )}
                      <div className="portfolio-overlay">
                        <span className="view-project">View Project</span>
                      </div>
                    </div>
                    <div className="portfolio-info">
                      <span className="portfolio-category">{project.category}</span>
                      <h3 className="portfolio-name">{project.name}</h3>
                      <p className="portfolio-desc">{project.description}</p>
                      <div className="portfolio-tech">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <ComingSoon title="Portfolio Coming Soon" description="We are working on amazing projects. Stay tuned!" />
          )}
          <AnimatedSection>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/portfolio" className="btn btn-outline">
                View All Projects <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-us">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We deliver excellence through innovation, quality, and dedication
            </p>
          </AnimatedSection>
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="why-card glass-card">
                  <div className="why-icon">{item.icon}</div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section our-process">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A streamlined workflow that ensures quality and timely delivery
            </p>
          </AnimatedSection>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="process-card">
                  <div className="process-number">{step.number}</div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="process-arrow">
                      <FiArrowRight />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section testimonials-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Client Reviews</h2>
            <p className="section-subtitle">
              What our clients say about working with us
            </p>
          </AnimatedSection>
          {featuredTestimonials.length > 0 ? (
            <div className="testimonials-grid">
              {featuredTestimonials.map((testimonial, index) => (
                <AnimatedSection key={testimonial.id} delay={index * 0.1}>
                  <div className="testimonial-card glass-card">
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.name}</h4>
                        <p className="author-role">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <ComingSoon title="Reviews Coming Soon" description="Client testimonials will appear here." />
          )}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section faq-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services
            </p>
          </AnimatedSection>
          <div className="faq-list">
            {featuredFaq.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <div className={`faq-item glass-card ${openFaq === index ? 'active' : ''}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    {openFaq === index ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/faq" className="btn btn-outline">
                View All FAQs <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h2 className="cta-title">Ready to Start Your Project?</h2>
              <p className="cta-description">
                Let's discuss your ideas and create something extraordinary together.
                Get in touch with us today!
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <FiSend /> Get in Touch
                </Link>
                <a
                  href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${encodeURIComponent('Hello! I would like to discuss a project.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  <FiMessageCircle /> WhatsApp Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

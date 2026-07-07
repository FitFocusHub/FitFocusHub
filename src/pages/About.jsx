import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTarget, FiEye, FiHeart, FiCheck } from 'react-icons/fi';
import { FaRocket, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import StatsCounter from '../components/StatsCounter';
import './About.css';

export default function About() {
  const values = [
    { icon: <FiHeart />, title: 'Passion', description: 'We are passionate about creating digital experiences that make a difference.' },
    { icon: <FaRocket />, title: 'Innovation', description: 'We stay ahead of the curve with the latest technologies and design trends.' },
    { icon: <FiTarget />, title: 'Excellence', description: 'We strive for excellence in every project we undertake.' },
    { icon: <FaUsers />, title: 'Collaboration', description: 'We work closely with our clients to bring their vision to life.' },
  ];

  const milestones = [
    { year: '2021', title: 'Founded', description: 'FitFocusHub was founded with a vision to deliver premium digital solutions.' },
    { year: '2022', title: 'Growth', description: 'Expanded our team and services to serve clients across India.' },
    { year: '2023', title: 'Milestone', description: 'Completed 100+ projects and served 80+ happy clients.' },
    { year: '2024', title: 'Innovation', description: 'Introduced AI-powered solutions and expanded into new markets.' },
  ];

  return (
    <div className="about-page page-transition">
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey, mission, and the team behind FitFocusHub"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About' },
        ]}
      />

      {/* Agency Story */}
      <section className="section about-story">
        <div className="container">
          <div className="story-grid">
            <AnimatedSection>
              <div className="story-content">
                <h2 className="story-title">Our Story</h2>
                <p className="story-text">
                  FitFocusHub was born from a passion for creating exceptional digital experiences.
                  What started as a small team of dedicated professionals has grown into a full-service
                  digital agency trusted by businesses across industries.
                </p>
                <p className="story-text">
                  We believe that every business deserves a powerful online presence. Our mission is to
                  transform ideas into digital realities that drive growth, engagement, and success.
                  With years of experience and a commitment to excellence, we deliver solutions that
                  exceed expectations.
                </p>
                <div className="story-stats">
                  <StatsCounter end={config.stats.projectsCompleted} suffix="+" label="Projects" />
                  <StatsCounter end={config.stats.happyClients} suffix="+" label="Clients" />
                  <StatsCounter end={config.stats.yearsExperience} suffix="+" label="Years" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="story-visual">
                <div className="visual-card glass-card">
                  <div className="visual-icon"><FaAward /></div>
                  <h3>Award Winning</h3>
                  <p>Recognized for excellence in digital design and development</p>
                </div>
                <div className="visual-card glass-card">
                  <div className="visual-icon"><FaLightbulb /></div>
                  <h3>Creative Solutions</h3>
                  <p>Innovative approaches to solve complex business challenges</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <AnimatedSection>
              <div className="mv-card glass-card">
                <div className="mv-icon"><FiTarget size={32} /></div>
                <h3 className="mv-title">Our Mission</h3>
                <p className="mv-text">
                  To empower businesses with cutting-edge digital solutions that drive growth,
                  enhance user experiences, and create lasting impact in the digital landscape.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="mv-card glass-card">
                <div className="mv-icon"><FiEye size={32} /></div>
                <h3 className="mv-title">Our Vision</h3>
                <p className="mv-text">
                  To be the leading digital agency known for innovation, quality, and client success.
                  We envision a future where every business thrives in the digital world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </AnimatedSection>
          <div className="values-grid">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="value-card glass-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-desc">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              What sets us apart from the competition
            </p>
          </AnimatedSection>
          <div className="why-list">
            {[
              'Custom solutions tailored to your needs',
              'Modern tech stack for optimal performance',
              'Transparent communication throughout',
              'On-time delivery guaranteed',
              'Post-launch support included',
              'Competitive pricing with no hidden fees',
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="why-item">
                  <FiCheck size={20} />
                  <span>{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h2 className="cta-title">Ready to Work With Us?</h2>
              <p className="cta-description">
                Let's create something extraordinary together. Get in touch today!
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Your Project <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

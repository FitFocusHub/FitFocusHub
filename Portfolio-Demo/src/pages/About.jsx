import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaPalette, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './About.css';

export default function About() {
  const values = [
    { icon: <FaPalette />, title: 'Creativity', description: 'Pushing boundaries with innovative design solutions.' },
    { icon: <FaLightbulb />, title: 'Innovation', description: 'Embracing new ideas and technologies.' },
    { icon: <FaUsers />, title: 'Collaboration', description: 'Working together to achieve the best results.' },
    { icon: <FaAward />, title: 'Excellence', description: 'Striving for perfection in every project.' },
  ];

  const team = [
    { name: 'Alex Johnson', role: 'Creative Director', specialization: 'Brand Strategy' },
    { name: 'Maria Garcia', role: 'Lead Designer', specialization: 'Graphic Design' },
    { name: 'David Kim', role: 'Video Editor', specialization: 'Motion Graphics' },
    { name: 'Sarah Wilson', role: 'Web Developer', specialization: 'Frontend Development' },
  ];

  return (
    <div className="about page-transition">
      <SEO
        title="About Us"
        description="Learn about our passion for design and our mission to create impactful digital experiences."
        keywords="about design agency, creative team, design philosophy"
        url="https://example.com/about"
      />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              About <span className="gradient-text">Your Website Name</span>
            </h1>
            <p className="page-subtitle">
              Discover our story and passion for creating exceptional designs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <AnimatedSection direction="left">
              <div className="story-content">
                <h2 className="section-title">Our Story</h2>
                <p>
                  Founded in 2021, Your Website Name has been at the forefront of digital design.
                  What started as a small creative studio has grown into a full-service design agency
                  with a portfolio of successful projects across various industries.
                </p>
                <p>
                  Our mission is simple: to help brands stand out in the digital landscape through
                  innovative design, compelling visuals, and strategic creativity.
                </p>
                <Link to="/portfolio" className="btn btn-primary">
                  View Our Work <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="story-image">
                <div className="image-placeholder">
                  <FaPalette size={80} />
                  <span>Our Studio</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide our creative process
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

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The creative minds behind our exceptional work
            </p>
          </AnimatedSection>
          <div className="team-grid">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="team-card glass-card">
                  <div className="team-avatar">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-specialization">{member.specialization}</p>
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
              <h2 className="cta-title">Ready to Work With Us?</h2>
              <p className="cta-description">
                Let's create something amazing together.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start a Project <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
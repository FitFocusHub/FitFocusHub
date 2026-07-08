import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaUtensils, FaHeart, FaAward, FaUsers } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './About.css';

export default function About() {
  const values = [
    { icon: <FaUtensils />, title: 'Quality Ingredients', description: 'We source only the finest and freshest ingredients.' },
    { icon: <FaHeart />, title: 'Passion for Food', description: 'Every dish is crafted with love and attention to detail.' },
    { icon: <FaAward />, title: 'Excellence', description: 'Striving for perfection in every aspect of dining.' },
    { icon: <FaUsers />, title: 'Community', description: 'Building relationships through exceptional food.' },
  ];

  const team = [
    { name: 'Chef Marco', role: 'Executive Chef', specialization: 'Italian Cuisine' },
    { name: 'Sarah Chen', role: 'Pastry Chef', specialization: 'French Pastry' },
    { name: 'James Wilson', role: 'Sous Chef', specialization: 'Asian Fusion' },
    { name: 'Emma Davis', role: 'Restaurant Manager', specialization: 'Hospitality' },
  ];

  return (
    <div className="about page-transition">
      <SEO
        title="About Us"
        description="Learn about our passion for culinary excellence and our journey to becoming an award-winning restaurant."
        keywords="about restaurant, restaurant history, chef team, culinary excellence"
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
              A story of passion, dedication, and culinary excellence
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
                  Founded in 2016, Your Website Name has been serving exquisite cuisine
                  and creating unforgettable dining experiences. What started as a small
                  family restaurant has grown into an award-winning culinary destination.
                </p>
                <p>
                  Our philosophy is simple: use the finest ingredients, prepare them with
                  passion, and serve them in an atmosphere that makes every guest feel special.
                </p>
                <Link to="/menu" className="btn btn-primary">
                  Explore Our Menu <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="story-image">
                <div className="image-placeholder">
                  <FaUtensils size={80} />
                  <span>Restaurant Image</span>
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
              The principles that guide our culinary journey
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
              The talented individuals behind our culinary creations
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
              <h2 className="cta-title">Experience Our Cuisine</h2>
              <p className="cta-description">
                Join us for an unforgettable dining experience.
              </p>
              <Link to="/reservations" className="btn btn-primary btn-lg">
                Reserve Your Table <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
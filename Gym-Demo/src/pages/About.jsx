import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaUsers, FaAward } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './About.css';

export default function About() {
  const values = [
    { icon: <FaDumbbell />, title: 'Excellence', description: 'We strive for excellence in everything we do.' },
    { icon: <FaHeartbeat />, title: 'Passion', description: 'Passion drives us to help you achieve your goals.' },
    { icon: <FaUsers />, title: 'Community', description: 'Building a supportive fitness community.' },
    { icon: <FaAward />, title: 'Results', description: 'Delivering real, measurable results.' },
  ];

  const team = [
    { name: 'John Doe', role: 'Head Trainer', specialization: 'Strength & Conditioning' },
    { name: 'Sarah Smith', role: 'Yoga Instructor', specialization: 'Vinyasa & Hatha Yoga' },
    { name: 'Mike Johnson', role: 'Fitness Coach', specialization: 'HIIT & Cardio' },
    { name: 'Emily Brown', role: 'Nutrition Expert', specialization: 'Diet Planning' },
  ];

  return (
    <div className="about page-transition">
      <SEO
        title="About Us"
        description="Learn about our mission to transform lives through fitness."
        keywords="about gym, fitness center, gym team, gym history"
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
              Discover our story and mission to help you achieve your fitness goals
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
                  Founded in 2021, Your Website Name has been at the forefront of the fitness revolution.
                  What started as a small gym has grown into a comprehensive fitness center with
                  state-of-the-art facilities and a community of dedicated fitness enthusiasts.
                </p>
                <p>
                  Our mission is simple: to provide the best fitness experience possible. We believe
                  that everyone deserves access to quality fitness facilities and expert guidance,
                  regardless of their fitness level or goals.
                </p>
                <Link to="/membership" className="btn btn-primary">
                  Join Our Community <FiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="story-image">
                <div className="image-placeholder">
                  <FaDumbbell size={80} />
                  <span>Gym Image</span>
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

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Expert professionals dedicated to your fitness journey
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
              <h2 className="cta-title">Ready to Transform Your Life?</h2>
              <p className="cta-description">
                Join our community and start your fitness journey today.
              </p>
              <Link to="/membership" className="btn btn-primary btn-lg">
                Get Started <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
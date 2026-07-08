import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap, FiShield, FiClock, FiUsers } from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaFire, FaTrophy, FaRunning, FaAppleAlt } from 'react-icons/fa';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Home.css';

export default function Home() {
  const features = [
    { icon: <FaDumbbell />, title: 'Modern Equipment', description: 'State-of-the-art fitness equipment for all your workout needs.' },
    { icon: <FaHeartbeat />, title: 'Expert Trainers', description: 'Certified professionals to guide your fitness journey.' },
    { icon: <FaFire />, title: 'Group Classes', description: 'High-energy group workouts to keep you motivated.' },
    { icon: <FaTrophy />, title: 'Proven Results', description: 'Track your progress and achieve your fitness goals.' },
    { icon: <FaRunning />, title: 'Cardio Zone', description: 'Dedicated area for cardiovascular workouts.' },
    { icon: <FaAppleAlt />, title: 'Nutrition Plans', description: 'Customized diet plans to complement your training.' },
  ];

  const stats = [
    { number: config.stats.members, label: 'Active Members' },
    { number: config.stats.trainers, label: 'Expert Trainers' },
    { number: config.stats.classes, label: 'Weekly Classes' },
    { number: config.stats.yearsExperience, label: 'Years Experience' },
  ];

  const classes = [
    { name: 'HIIT Training', time: '6:00 AM - 7:00 AM', trainer: 'John Doe' },
    { name: 'Yoga Flow', time: '8:00 AM - 9:00 AM', trainer: 'Sarah Smith' },
    { name: 'Strength Training', time: '10:00 AM - 11:00 AM', trainer: 'Mike Johnson' },
    { name: 'Spin Class', time: '5:00 PM - 6:00 PM', trainer: 'Emily Brown' },
  ];

  return (
    <div className="home page-transition">
      <SEO
        title="Home"
        description="Transform your body and mind with our state-of-the-art facilities and expert trainers."
        keywords="gym, fitness, workout, training, health, wellness, personal training"
        url="https://example.com"
      />

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
              <span>Premium Fitness Center</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-title"
            >
              Transform Your Body,{' '}
              <span className="gradient-text">Transform Your Life</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              Join the ultimate fitness experience with modern equipment, expert trainers,
              and a supportive community that helps you achieve your goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-buttons"
            >
              <Link to="/membership" className="btn btn-primary btn-lg">
                Start Your Journey <FiArrowRight />
              </Link>
              <Link to="/classes" className="btn btn-secondary btn-lg">
                Explore Classes
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hero-stats"
            >
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}+</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              Everything you need to achieve your fitness goals under one roof
            </p>
          </AnimatedSection>
          <div className="features-grid">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="feature-card glass-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-desc">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Classes */}
      <section className="section classes-section">
        <div className="container">
          <AnimatedSection>
            <h2 className="section-title">Today's Classes</h2>
            <p className="section-subtitle">
              Join our expert-led classes and push your limits
            </p>
          </AnimatedSection>
          <div className="classes-grid">
            {classes.map((cls, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="class-card glass-card">
                  <div className="class-time">{cls.time}</div>
                  <h3 className="class-name">{cls.name}</h3>
                  <p className="class-trainer">Trainer: {cls.trainer}</p>
                  <Link to="/membership" className="btn btn-outline">
                    Book Now
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/classes" className="btn btn-outline">
                View All Classes <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <div className="cta-glow"></div>
              <h2 className="cta-title">Ready to Start Your Fitness Journey?</h2>
              <p className="cta-description">
                Join today and get a free personal training session. Transform your body and mind with our expert guidance.
              </p>
              <div className="cta-buttons">
                <Link to="/membership" className="btn btn-primary btn-lg">
                  Join Now <FiArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Contact Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
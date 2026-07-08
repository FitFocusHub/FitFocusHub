import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaFire, FaRunning, FaLeaf, FaBiking } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Classes.css';

export default function Classes() {
  const classes = [
    {
      id: 1,
      name: 'HIIT Training',
      description: 'High-intensity interval training to burn calories and build endurance.',
      time: '6:00 AM - 7:00 AM',
      trainer: 'John Doe',
      intensity: 'High',
      icon: <FaFire />,
      schedule: ['Mon', 'Wed', 'Fri']
    },
    {
      id: 2,
      name: 'Yoga Flow',
      description: 'Dynamic yoga sequences to improve flexibility and mindfulness.',
      time: '8:00 AM - 9:00 AM',
      trainer: 'Sarah Smith',
      intensity: 'Medium',
      icon: <FaLeaf />,
      schedule: ['Tue', 'Thu', 'Sat']
    },
    {
      id: 3,
      name: 'Strength Training',
      description: 'Build muscle and increase strength with progressive overload.',
      time: '10:00 AM - 11:00 AM',
      trainer: 'Mike Johnson',
      intensity: 'High',
      icon: <FaDumbbell />,
      schedule: ['Mon', 'Wed', 'Fri']
    },
    {
      id: 4,
      name: 'Spin Class',
      description: 'High-energy cycling workout to boost cardiovascular fitness.',
      time: '5:00 PM - 6:00 PM',
      trainer: 'Emily Brown',
      intensity: 'High',
      icon: <FaBiking />,
      schedule: ['Tue', 'Thu', 'Sat']
    },
    {
      id: 5,
      name: 'Cardio Blast',
      description: 'Fun cardio workout to burn fat and improve endurance.',
      time: '7:00 PM - 8:00 PM',
      trainer: 'John Doe',
      intensity: 'Medium',
      icon: <FaHeartbeat />,
      schedule: ['Mon', 'Wed', 'Fri']
    },
    {
      id: 6,
      name: 'Functional Training',
      description: 'Improve everyday movement patterns and prevent injuries.',
      time: '4:00 PM - 5:00 PM',
      trainer: 'Mike Johnson',
      intensity: 'Medium',
      icon: <FaRunning />,
      schedule: ['Tue', 'Thu', 'Sat']
    },
  ];

  return (
    <div className="classes page-transition">
      <SEO
        title="Classes"
        description="Explore our wide range of fitness classes designed to help you achieve your goals."
        keywords="gym classes, fitness classes, HIIT, yoga, strength training"
        url="https://example.com/classes"
      />

      {/* Hero Section */}
      <section className="classes-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Our <span className="gradient-text">Classes</span>
            </h1>
            <p className="page-subtitle">
              Discover a variety of classes designed to challenge and inspire you
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="section classes-section">
        <div className="container">
          <div className="classes-grid">
            {classes.map((cls, index) => (
              <AnimatedSection key={cls.id} delay={index * 0.1}>
                <div className="class-card glass-card">
                  <div className="class-header">
                    <div className="class-icon">{cls.icon}</div>
                    <div className={`class-intensity ${cls.intensity.toLowerCase()}`}>
                      {cls.intensity}
                    </div>
                  </div>
                  <h3 className="class-name">{cls.name}</h3>
                  <p className="class-desc">{cls.description}</p>
                  <div className="class-details">
                    <div className="detail-item">
                      <FiClock className="detail-icon" />
                      <span>{cls.time}</span>
                    </div>
                    <div className="detail-item">
                      <FiUser className="detail-icon" />
                      <span>{cls.trainer}</span>
                    </div>
                  </div>
                  <div className="class-schedule">
                    {cls.schedule.map((day, i) => (
                      <span key={i} className="schedule-day">{day}</span>
                    ))}
                  </div>
                  <Link to="/membership" className="btn btn-outline" style={{ width: '100%' }}>
                    Book Class
                  </Link>
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
              <h2 className="cta-title">Can't Find What You're Looking For?</h2>
              <p className="cta-description">
                We offer personalized training sessions tailored to your specific needs.
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
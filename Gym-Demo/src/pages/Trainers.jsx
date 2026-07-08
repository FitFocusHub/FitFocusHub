import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiInstagram, FiMail } from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaRunning, FaAppleAlt } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Trainers.css';

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Head Trainer',
      specialization: 'Strength & Conditioning',
      experience: '8 years',
      certifications: ['NASM Certified', 'CSCS'],
      bio: 'John is passionate about helping clients build strength and confidence through progressive training methods.',
      icon: <FaDumbbell />
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'Yoga Instructor',
      specialization: 'Vinyasa & Hatha Yoga',
      experience: '6 years',
      certifications: ['RYT-200', 'Yoga Alliance'],
      bio: 'Sarah brings mindfulness and flexibility to fitness through her unique yoga sequences.',
      icon: <FaHeartbeat />
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Fitness Coach',
      specialization: 'HIIT & Cardio',
      experience: '5 years',
      certifications: ['ACE Certified', 'TRX Certified'],
      bio: 'Mike specializes in high-intensity workouts that deliver maximum results in minimal time.',
      icon: <FaRunning />
    },
    {
      id: 4,
      name: 'Emily Brown',
      role: 'Nutrition Expert',
      specialization: 'Diet Planning',
      experience: '7 years',
      certifications: ['Registered Dietitian', 'ISSN Certified'],
      bio: 'Emily creates personalized nutrition plans to complement your fitness journey.',
      icon: <FaAppleAlt />
    },
  ];

  return (
    <div className="trainers page-transition">
      <SEO
        title="Trainers"
        description="Meet our expert team of certified fitness trainers dedicated to your success."
        keywords="gym trainers, fitness trainers, personal trainers, yoga instructor"
        url="https://example.com/trainers"
      />

      {/* Hero Section */}
      <section className="trainers-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Our <span className="gradient-text">Trainers</span>
            </h1>
            <p className="page-subtitle">
              Expert professionals dedicated to helping you achieve your fitness goals
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="section trainers-section">
        <div className="container">
          <div className="trainers-grid">
            {trainers.map((trainer, index) => (
              <AnimatedSection key={trainer.id} delay={index * 0.1}>
                <div className="trainer-card glass-card">
                  <div className="trainer-avatar">
                    <div className="avatar-icon">{trainer.icon}</div>
                  </div>
                  <h3 className="trainer-name">{trainer.name}</h3>
                  <p className="trainer-role">{trainer.role}</p>
                  <p className="trainer-specialization">{trainer.specialization}</p>
                  <div className="trainer-experience">
                    <span className="experience-label">Experience:</span>
                    <span className="experience-value">{trainer.experience}</span>
                  </div>
                  <div className="trainer-certifications">
                    {trainer.certifications.map((cert, i) => (
                      <span key={i} className="certification-tag">{cert}</span>
                    ))}
                  </div>
                  <p className="trainer-bio">{trainer.bio}</p>
                  <div className="trainer-social">
                    <a href="#" className="social-link">
                      <FiInstagram />
                    </a>
                    <a href="#" className="social-link">
                      <FiMail />
                    </a>
                  </div>
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
              <h2 className="cta-title">Want Personal Training?</h2>
              <p className="cta-description">
                Get one-on-one sessions with our expert trainers tailored to your specific goals.
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
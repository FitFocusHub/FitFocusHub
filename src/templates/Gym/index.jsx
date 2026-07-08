import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiArrowLeft,
  FiMenu, FiX, FiStar, FiMessageCircle
} from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './GymTemplate.css';

const gymData = {
  name: "Your Gym Name",
  tagline: "Transform Your Body, Transform Your Life",
  description: "Premium fitness center with world-class equipment and expert trainers. Push your limits and become the best version of yourself.",
  phone: "+91 98765 43210",
  email: "info@yourgym.com",
  address: "123 Fitness Street, Mumbai, Maharashtra 400001",
  timing: "Mon-Sat: 5:00 AM - 11:00 PM",
  services: [
    { icon: <FaDumbbell />, name: "Strength Training", desc: "Build muscle with our premium equipment and guided programs." },
    { icon: <FaHeartbeat />, name: "Cardio Zone", desc: "Burn calories with advanced cardio machines and heart-rate tracking." },
    { icon: <FaUsers />, name: "Yoga & Group Classes", desc: "Zumba, Yoga, HIIT and more in our spacious studio." },
    { icon: <FaCalendarAlt />, name: "Personal Training", desc: "1-on-1 training with certified expert coaches." },
  ],
  pricing: [
    { name: "Basic", price: "₹999", period: "/mo", features: ["Gym Access", "Cardio Zone", "Locker Room", "Free Water"] },
    { name: "Premium", price: "₹1,999", period: "/mo", features: ["All Basic Features", "Group Classes", "Sauna Access", "Steam Room", "Towel Service"] },
    { name: "VIP", price: "₹3,999", period: "/mo", features: ["All Premium Features", "Personal Trainer", "Custom Diet Plan", "Priority Access", "Guest Passes", "Recovery Zone"] },
  ],
  testimonials: [
    { name: "Rahul Sharma", rating: 5, text: "Best gym I've ever been to! The trainers are incredible and the equipment is top-notch. Lost 15kg in 3 months." },
    { name: "Priya Patel", rating: 5, text: "The group classes are amazing. I've never been more consistent with my workouts. Love the community here!" },
    { name: "Amit Kumar", rating: 5, text: "Personal training changed my life. My trainer created a perfect plan for me. Highly recommended!" },
  ]
};

export default function GymTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('membership');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBuyMembership = (planName) => {
    setModalType('membership');
    setModalItem(planName);
    setShowModal(true);
  };

  const handleJoinNow = () => {
    setModalType('booking');
    setModalItem('membership');
    setShowModal(true);
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="gym-template">
      <DemoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        itemName={modalItem}
      />

      {/* Navbar */}
      <nav className="gym-nav">
        <div className="gym-nav-container">
          <a href="#" className="gym-nav-logo">
            <FaDumbbell /> {gymData.name}
          </a>
          <button className="gym-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`gym-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Plans</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="gym-nav-cta" onClick={() => { handleJoinNow(); setMobileMenuOpen(false); }}>
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gym-hero">
        <div className="gym-hero-bg"></div>
        <div className="gym-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="gym-hero-content"
          >
            <span className="gym-hero-badge">Welcome to {gymData.name}</span>
            <h1>{gymData.tagline}</h1>
            <p>{gymData.description}</p>
            <div className="gym-hero-buttons">
              <button className="btn btn-primary" onClick={handleJoinNow}>
                Join Now <FiArrowRight />
              </button>
              <a href="#pricing" className="btn btn-secondary">
                View Plans
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="gym-services" id="services">
        <div className="gym-container">
          <h2>Our Services</h2>
          <p className="gym-section-sub">Everything you need to reach your fitness goals</p>
          <div className="gym-services-grid">
            {gymData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gym-service-card"
              >
                <div className="gym-service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="gym-pricing" id="pricing">
        <div className="gym-container">
          <h2>Membership Plans</h2>
          <p className="gym-section-sub">Choose the plan that fits your fitness journey</p>
          <div className="gym-pricing-grid">
            {gymData.pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`gym-price-card ${index === 1 ? 'popular' : ''}`}
              >
                {index === 1 && <span className="popular-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="gym-price">
                  {plan.price}<span className="gym-price-period">{plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={`btn btn-full ${index === 1 ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => handleBuyMembership(plan.name)}
                >
                  Buy Membership
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gym-testimonials" id="testimonials">
        <div className="gym-container">
          <h2>What Our Members Say</h2>
          <p className="gym-section-sub">Real stories from real members</p>
          <div className="gym-testimonials-grid">
            {gymData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="gym-testimonial-card"
              >
                <div className="gym-testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar key={i} className="star-filled" />
                  ))}
                </div>
                <p className="gym-testimonial-text">"{testimonial.text}"</p>
                <div className="gym-testimonial-author">
                  <div className="gym-testimonial-avatar">{testimonial.name.charAt(0)}</div>
                  <span>{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="gym-contact" id="contact">
        <div className="gym-container">
          <h2>Contact Us</h2>
          <p className="gym-section-sub">Visit us or get in touch</p>
          <div className="gym-contact-grid">
            <div className="gym-contact-info">
              <div className="gym-info-item">
                <FiMapPin /> <div><strong>Address</strong><br />{gymData.address}</div>
              </div>
              <div className="gym-info-item">
                <FiPhone /> <div><strong>Phone</strong><br />{gymData.phone}</div>
              </div>
              <div className="gym-info-item">
                <FiMail /> <div><strong>Email</strong><br />{gymData.email}</div>
              </div>
              <div className="gym-info-item">
                <FiClock /> <div><strong>Timing</strong><br />{gymData.timing}</div>
              </div>
            </div>
            <div className="gym-contact-cta">
              <FiMessageCircle />
              <h3>Ready to Start?</h3>
              <p>Drop us a message on WhatsApp and we'll get back to you instantly.</p>
              <a
                href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I want to join ' + gymData.name)}`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name={gymData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

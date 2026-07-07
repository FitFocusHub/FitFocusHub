import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import './GymTemplate.css';

const gymData = {
  name: "Iron Forge Gym",
  tagline: "Transform Your Body, Transform Your Life",
  description: "Premium fitness center with world-class equipment and expert trainers.",
  phone: "+91 98765 43210",
  email: "info@ironforgegym.com",
  address: "Mumbai, Maharashtra",
  timing: "Mon-Sat: 5:00 AM - 11:00 PM",
  services: [
    { icon: <FaDumbbell />, name: "Strength Training", desc: "Build muscle with our premium equipment" },
    { icon: <FaHeartbeat />, name: "Cardio Zone", desc: "Burn calories with advanced cardio machines" },
    { icon: <FaUsers />, name: "Group Classes", desc: "Zumba, Yoga, HIIT and more" },
    { icon: <FaCalendarAlt />, name: "Personal Training", desc: "1-on-1 training with expert coaches" },
  ],
  pricing: [
    { name: "Basic", price: "₹999/mo", features: ["Gym Access", "Cardio Zone", "Locker"] },
    { name: "Premium", price: "₹1,999/mo", features: ["All Basic", "Group Classes", "Sauna", "Steam"] },
    { name: "VIP", price: "₹3,999/mo", features: ["All Premium", "Personal Trainer", "Diet Plan", "Priority Access"] },
  ]
};

export default function GymTemplate() {
  return (
    <div className="gym-template">
      {/* Hero */}
      <section className="gym-hero">
        <div className="gym-hero-bg"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="gym-hero-content"
          >
            <h1>{gymData.tagline}</h1>
            <p>{gymData.description}</p>
            <div className="gym-hero-buttons">
              <a href={`https://api.whatsapp.com/send?phone=${gymData.phone.replace(/\D/g, '')}`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Join Now <FiArrowRight />
              </a>
              <a href={`tel:${gymData.phone}`} className="btn btn-secondary">
                <FiPhone /> Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="gym-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="gym-services-grid">
            {gymData.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
      <section className="gym-pricing">
        <div className="container">
          <h2>Membership Plans</h2>
          <div className="gym-pricing-grid">
            {gymData.pricing.map((plan, index) => (
              <div key={index} className={`gym-price-card ${index === 1 ? 'popular' : ''}`}>
                {index === 1 && <span className="popular-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="gym-price">{plan.price}</div>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href={`https://api.whatsapp.com/send?phone=${gymData.phone.replace(/\D/g, '')}&text=Hi! I want to join ${plan.name} plan`} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Join Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="gym-contact">
        <div className="container">
          <div className="gym-contact-grid">
            <div className="gym-contact-info">
              <h2>Visit Us</h2>
              <div className="gym-info-item">
                <FiMapPin /> <span>{gymData.address}</span>
              </div>
              <div className="gym-info-item">
                <FiPhone /> <span>{gymData.phone}</span>
              </div>
              <div className="gym-info-item">
                <FiMail /> <span>{gymData.email}</span>
              </div>
              <div className="gym-info-item">
                <FiClock /> <span>{gymData.timing}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

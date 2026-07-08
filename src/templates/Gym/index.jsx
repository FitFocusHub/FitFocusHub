import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight,
  FiMenu, FiX, FiStar, FiMessageCircle, FiUsers, FiAward, FiHeart
} from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaUsers, FaCalendarAlt, FaFire, FaBolt } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './GymTemplate.css';

const gymData = {
  name: "Iron Forge Gym",
  tagline: "Transform Your Body, Transform Your Life",
  description: "Premium fitness center with world-class equipment and expert trainers. Push your limits and become the best version of yourself.",
  phone: "+91 98765 43210",
  email: "info@ironforgegym.com",
  address: "123 Fitness Street, Mumbai, Maharashtra 400001",
  timing: "Mon-Sat: 5:00 AM - 11:00 PM",
  about: "Founded in 2019, Iron Forge Gym has been helping people achieve their fitness goals. With state-of-the-art equipment and certified trainers, we provide everything you need for your fitness journey.",
  stats: { members: 2000, trainers: 15, experience: 5, classes: 50 },
  services: [
    { icon: <FaDumbbell />, name: "Strength Training", desc: "Build muscle with our premium equipment and guided programs." },
    { icon: <FaHeartbeat />, name: "Cardio Zone", desc: "Burn calories with advanced cardio machines and heart-rate tracking." },
    { icon: <FaUsers />, name: "Yoga & Group Classes", desc: "Zumba, Yoga, HIIT and more in our spacious studio." },
    { icon: <FaCalendarAlt />, name: "Personal Training", desc: "1-on-1 training with certified expert coaches." },
    { icon: <FaFire />, name: "CrossFit", desc: "High-intensity functional training for serious athletes." },
    { icon: <FaBolt />, name: "HIIT Sessions", desc: "Quick, intense workouts for maximum results." },
  ],
  pricing: [
    { name: "Basic", price: "₹999", period: "/mo", features: ["Gym Access", "Cardio Zone", "Locker Room", "Free Water"] },
    { name: "Premium", price: "₹1,999", period: "/mo", features: ["All Basic Features", "Group Classes", "Sauna Access", "Steam Room", "Towel Service"], popular: true },
    { name: "VIP", price: "₹3,999", period: "/mo", features: ["All Premium Features", "Personal Trainer", "Custom Diet Plan", "Priority Access", "Guest Passes", "Recovery Zone"] },
  ],
  schedule: [
    { day: "Monday", classes: "6:00 AM - Yoga\n8:00 AM - HIIT\n6:00 PM - CrossFit" },
    { day: "Tuesday", classes: "6:00 AM - Cardio\n8:00 AM - Zumba\n6:00 PM - Strength" },
    { day: "Wednesday", classes: "6:00 AM - Yoga\n8:00 AM - HIIT\n6:00 PM - CrossFit" },
    { day: "Thursday", classes: "6:00 AM - Cardio\n8:00 AM - Zumba\n6:00 PM - Strength" },
    { day: "Friday", classes: "6:00 AM - Yoga\n8:00 AM - HIIT\n6:00 PM - CrossFit" },
    { day: "Saturday", classes: "7:00 AM - Power Yoga\n9:00 AM - Boot Camp" },
  ],
  trainers: [
    { name: "Rahul Verma", specialty: "Strength & Conditioning", experience: "8 years" },
    { name: "Priya Singh", specialty: "Yoga & Wellness", experience: "6 years" },
    { name: "Amit Sharma", specialty: "CrossFit & HIIT", experience: "5 years" },
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

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const scheduleRef = useRef(null);
  const trainersRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

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
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type={modalType} itemName={modalItem} />

      {/* Navbar */}
      <nav className="gym-nav">
        <div className="gym-nav-container">
          <div className="gym-nav-logo" onClick={() => scrollTo(homeRef)}>
            <FaDumbbell /> {gymData.name}
          </div>
          <button className="gym-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`gym-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(aboutRef)}>About</span>
            <span onClick={() => scrollTo(servicesRef)}>Services</span>
            <span onClick={() => scrollTo(pricingRef)}>Plans</span>
            <span onClick={() => scrollTo(scheduleRef)}>Schedule</span>
            <span onClick={() => scrollTo(trainersRef)}>Trainers</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="gym-nav-cta" onClick={() => { handleJoinNow(); setMobileMenuOpen(false); }}>
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gym-hero" ref={homeRef}>
        <div className="gym-hero-bg"></div>
        <div className="gym-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="gym-hero-content">
            <span className="gym-hero-badge">Welcome to {gymData.name}</span>
            <h1>{gymData.tagline}</h1>
            <p>{gymData.description}</p>
            <div className="gym-hero-buttons">
              <button className="btn-gym btn-gym-primary" onClick={handleJoinNow}>
                Join Now <FiArrowRight />
              </button>
              <button className="btn-gym btn-gym-secondary" onClick={() => scrollTo(pricingRef)}>
                View Plans
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="gym-stats">
        <div className="gym-container">
          <div className="gym-stats-grid">
            <div className="gym-stat-item"><FiUsers /><span>{gymData.stats.members}+</span><p>Active Members</p></div>
            <div className="gym-stat-item"><FaDumbbell /><span>{gymData.stats.trainers}</span><p>Expert Trainers</p></div>
            <div className="gym-stat-item"><FiAward /><span>{gymData.stats.experience}+</span><p>Years Experience</p></div>
            <div className="gym-stat-item"><FaHeartbeat /><span>{gymData.stats.classes}</span><p>Weekly Classes</p></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="gym-about" ref={aboutRef}>
        <div className="gym-container">
          <h2>About Us</h2>
          <p className="gym-section-sub">Your fitness journey starts here</p>
          <div className="gym-about-content">
            <p>{gymData.about}</p>
            <div className="gym-about-features">
              <div className="gym-about-feature"><FaDumbbell className="blue" /> <span>Modern Equipment</span></div>
              <div className="gym-about-feature"><FiHeart className="red" /> <span>Personalized Plans</span></div>
              <div className="gym-about-feature"><FiAward className="gold" /> <span>Certified Trainers</span></div>
              <div className="gym-about-feature"><FaUsers className="green" /> <span>Community Support</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="gym-services" ref={servicesRef}>
        <div className="gym-container">
          <h2>Our Services</h2>
          <p className="gym-section-sub">Everything you need to reach your fitness goals</p>
          <div className="gym-services-grid">
            {gymData.services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="gym-service-card">
                <div className="gym-service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="gym-pricing" ref={pricingRef}>
        <div className="gym-container">
          <h2>Membership Plans</h2>
          <p className="gym-section-sub">Choose the plan that fits your fitness journey</p>
          <div className="gym-pricing-grid">
            {gymData.pricing.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`gym-price-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="gym-price">{plan.price}<span className="gym-price-period">{plan.period}</span></div>
                <ul>
                  {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
                <button className={`btn-gym btn-full ${plan.popular ? 'btn-gym-primary' : 'btn-gym-outline'}`}
                  onClick={() => handleBuyMembership(plan.name)}>
                  Buy Membership
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="gym-schedule" ref={scheduleRef}>
        <div className="gym-container">
          <h2>Weekly Schedule</h2>
          <p className="gym-section-sub">Plan your workouts for the week</p>
          <div className="gym-schedule-grid">
            {gymData.schedule.map((day, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="gym-schedule-card">
                <h3>{day.day}</h3>
                <div className="gym-schedule-classes">
                  {day.classes.split('\n').map((cls, i) => (
                    <div key={i} className="gym-schedule-class">{cls}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="gym-trainers" ref={trainersRef}>
        <div className="gym-container">
          <h2>Our Trainers</h2>
          <p className="gym-section-sub">Expert guidance for your fitness journey</p>
          <div className="gym-trainers-grid">
            {gymData.trainers.map((trainer, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="gym-trainer-card">
                <div className="gym-trainer-avatar">{trainer.name.charAt(0)}</div>
                <h3>{trainer.name}</h3>
                <p className="gym-trainer-specialty">{trainer.specialty}</p>
                <p className="gym-trainer-exp">{trainer.experience} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gym-testimonials">
        <div className="gym-container">
          <h2>What Our Members Say</h2>
          <p className="gym-section-sub">Real stories from real members</p>
          <div className="gym-testimonials-grid">
            {gymData.testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="gym-testimonial-card">
                <div className="gym-testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => <FiStar key={i} className="star-filled" />)}
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
      <section className="gym-contact" ref={contactRef}>
        <div className="gym-container">
          <h2>Contact Us</h2>
          <p className="gym-section-sub">Visit us or get in touch</p>
          <div className="gym-contact-grid">
            <div className="gym-contact-info">
              <div className="gym-info-item"><FiMapPin /><div><strong>Address</strong><br />{gymData.address}</div></div>
              <div className="gym-info-item"><FiPhone /><div><strong>Phone</strong><br />{gymData.phone}</div></div>
              <div className="gym-info-item"><FiMail /><div><strong>Email</strong><br />{gymData.email}</div></div>
              <div className="gym-info-item"><FiClock /><div><strong>Timing</strong><br />{gymData.timing}</div></div>
            </div>
            <div className="gym-contact-cta">
              <FiMessageCircle />
              <h3>Ready to Start?</h3>
              <p>Drop us a message on WhatsApp and we'll get back to you instantly.</p>
              <a href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I want to join ' + gymData.name)}`}
                className="btn-gym btn-gym-primary" target="_blank" rel="noopener noreferrer">
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

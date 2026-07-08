import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiMenu, FiX, FiStar, FiMessageCircle, FiUsers, FiAward, FiHeart } from 'react-icons/fi';
import { FaCut, FaSpa, FaHandSparkles, FaPaintBrush, FaUserTie, FaHeart } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './SalonTemplate.css';

const salonData = {
  name: "Glam Studio",
  tagline: "Where Beauty Meets Art",
  description: "Premium beauty salon offering hair styling, spa treatments, bridal packages and more. Look your best with our expert stylists.",
  phone: "+91 98765 43210",
  email: "info@glamstudio.com",
  address: "78 Beauty Lane, Pune, Maharashtra 411001",
  timing: "Mon-Sun: 10:00 AM - 9:00 PM",
  about: "Glam Studio has been making people look and feel their best since 2018. Our team of expert stylists and beauticians use the latest techniques and premium products.",
  stats: { clients: 10000, stylists: 8, experience: 6, services: 40 },
  services: [
    { icon: <FaCut />, name: "Hair Styling", desc: "Cut, color, blow-dry, treatments and more." },
    { icon: <FaSpa />, name: "Spa & Wellness", desc: "Relaxing body massage, facials, and aromatherapy." },
    { icon: <FaHandSparkles />, name: "Nail Art", desc: "Gel nails, acrylics, nail art and pedicure." },
    { icon: <FaPaintBrush />, name: "Makeup", desc: "Party makeup, bridal looks, and everyday glam." },
    { icon: <FaUserTie />, name: "Grooming", desc: "Beard trim, facials, and men's grooming." },
    { icon: <FaHeart />, name: "Bridal Package", desc: "Complete bridal beauty solution for your special day." },
  ],
  pricing: [
    { name: "Basic", price: "₹499", features: ["Hair Cut", "Basic Facial", "Head Massage"] },
    { name: "Classic", price: "₹1,499", features: ["Hair Cut & Style", "Deep Facial", "Manicure", "Pedicure"], popular: true },
    { name: "Premium", price: "₹3,999", features: ["Hair Spa", "Luxury Facial", "Full Body Massage", "Nail Art", "Makeup"] },
  ],
  testimonials: [
    { name: "Neha Gupta", rating: 5, text: "Best salon experience ever! The hairstylist understood exactly what I wanted. Love my new look!" },
    { name: "Priyanka Desai", rating: 5, text: "The bridal package was worth every penny. I looked stunning on my wedding day. Thank you Glam Studio!" },
    { name: "Riya Singh", rating: 4, text: "Amazing spa treatment. Very relaxing and professional. Will definitely come back." },
  ]
};

export default function SalonTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('booking');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => { ref.current?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); };
  const handleBookNow = (item) => { setModalType('booking'); setModalItem(item); setShowModal(true); };

  if (showSettings) return <Settings onBack={() => setShowSettings(false)} />;

  return (
    <div className="salon-template">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type={modalType} itemName={modalItem} />
      <nav className="salon-nav">
        <div className="salon-nav-container">
          <div className="salon-nav-logo" onClick={() => scrollTo(homeRef)}><FaCut /> {salonData.name}</div>
          <button className="salon-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <FiX /> : <FiMenu />}</button>
          <div className={`salon-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(aboutRef)}>About</span>
            <span onClick={() => scrollTo(servicesRef)}>Services</span>
            <span onClick={() => scrollTo(pricingRef)}>Pricing</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="salon-nav-cta" onClick={() => { handleBookNow('appointment'); setMobileMenuOpen(false); }}>Book Now</button>
          </div>
        </div>
      </nav>

      <section className="salon-hero" ref={homeRef}>
        <div className="salon-hero-bg"></div>
        <div className="salon-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="salon-hero-content">
            <span className="salon-hero-badge">Welcome to {salonData.name}</span>
            <h1>{salonData.tagline}</h1>
            <p>{salonData.description}</p>
            <div className="salon-hero-buttons">
              <button className="btn-salon btn-salon-primary" onClick={() => handleBookNow('appointment')}>Book Appointment <FiArrowRight /></button>
              <button className="btn-salon btn-salon-secondary" onClick={() => scrollTo(servicesRef)}>Our Services</button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="salon-stats">
        <div className="salon-container">
          <div className="salon-stats-grid">
            <div className="salon-stat-item"><FiUsers /><span>{salonData.stats.clients}+</span><p>Happy Clients</p></div>
            <div className="salon-stat-item"><FaCut /><span>{salonData.stats.stylists}</span><p>Expert Stylists</p></div>
            <div className="salon-stat-item"><FiAward /><span>{salonData.stats.experience}+</span><p>Years Experience</p></div>
            <div className="salon-stat-item"><FaSpa /><span>{salonData.stats.services}</span><p>Services</p></div>
          </div>
        </div>
      </section>

      <section className="salon-about" ref={aboutRef}>
        <div className="salon-container">
          <h2>About Us</h2>
          <p className="salon-section-sub">Your beauty is our passion</p>
          <div className="salon-about-content">
            <p>{salonData.about}</p>
            <div className="salon-about-features">
              <div className="salon-about-feature"><FaCut className="purple" /> <span>Premium Products</span></div>
              <div className="salon-about-feature"><FiHeart className="pink" /> <span>Personalized Care</span></div>
              <div className="salon-about-feature"><FiAward className="gold" /> <span>Award Winning</span></div>
              <div className="salon-about-feature"><FaSpa className="teal" /> <span>Luxury Experience</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="salon-services" ref={servicesRef}>
        <div className="salon-container">
          <h2>Our Services</h2>
          <p className="salon-section-sub">Look your best with our expert care</p>
          <div className="salon-services-grid">
            {salonData.services.map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="salon-service-card">
                <div className="salon-service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                <button className="btn-salon btn-salon-sm" onClick={() => handleBookNow(service.name)}>Book Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="salon-pricing" ref={pricingRef}>
        <div className="salon-container">
          <h2>Pricing Plans</h2>
          <p className="salon-section-sub">Affordable luxury for everyone</p>
          <div className="salon-pricing-grid">
            {salonData.pricing.map((plan, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`salon-price-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="popular-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="salon-price">{plan.price}</div>
                <ul>{plan.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
                <button className={`btn-salon btn-full ${plan.popular ? 'btn-salon-primary' : 'btn-salon-outline'}`} onClick={() => handleBookNow(plan.name)}>Book Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="salon-testimonials">
        <div className="salon-container">
          <h2>What Our Clients Say</h2>
          <p className="salon-section-sub">Real reviews from real clients</p>
          <div className="salon-testimonials-grid">
            {salonData.testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="salon-testimonial-card">
                <div className="salon-testimonial-stars">{Array.from({ length: t.rating }).map((_, j) => <FiStar key={j} className="star-filled" />)}</div>
                <p>"{t.text}"</p>
                <div className="salon-testimonial-author"><div className="salon-testimonial-avatar">{t.name.charAt(0)}</div><span>{t.name}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="salon-contact" ref={contactRef}>
        <div className="salon-container">
          <h2>Contact Us</h2>
          <p className="salon-section-sub">Visit us for a transformation</p>
          <div className="salon-contact-grid">
            <div className="salon-contact-info">
              <div className="salon-info-item"><FiMapPin /><div><strong>Address</strong><br />{salonData.address}</div></div>
              <div className="salon-info-item"><FiPhone /><div><strong>Phone</strong><br />{salonData.phone}</div></div>
              <div className="salon-info-item"><FiMail /><div><strong>Email</strong><br />{salonData.email}</div></div>
              <div className="salon-info-item"><FiClock /><div><strong>Timing</strong><br />{salonData.timing}</div></div>
            </div>
            <div className="salon-contact-cta">
              <FiMessageCircle />
              <h3>Ready for a New Look?</h3>
              <p>Chat with us on WhatsApp to book your appointment.</p>
              <a href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I want to book at ' + salonData.name)}`} className="btn-salon btn-salon-primary" target="_blank" rel="noopener noreferrer">Chat on WhatsApp <FiArrowRight /></a>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name={salonData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

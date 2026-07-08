import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiHome, FiDollarSign, FiShield, FiUsers, FiStar, FiMaximize } from 'react-icons/fi';
import DemoModal from '../shared/DemoModal';
import TemplateFooter from '../shared/TemplateFooter';
import Settings from '../shared/Settings';
import './RealEstateTemplate.css';

const properties = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    location: "123 Main Street, Mumbai",
    price: "₹85,00,000",
    tag: "For Sale",
    beds: 3,
    baths: 2,
    sqft: "1,450",
    type: "buy"
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    location: "45 Park Avenue, Bangalore",
    price: "₹2,50,00,000",
    tag: "For Sale",
    beds: 5,
    baths: 4,
    sqft: "3,200",
    type: "buy"
  },
  {
    id: 3,
    title: "Cozy Studio near Metro",
    location: "78 Hill Road, Delhi",
    price: "₹25,000/mo",
    tag: "For Rent",
    tagType: "rent",
    beds: 1,
    baths: 1,
    sqft: "650",
    type: "rent"
  },
  {
    id: 4,
    title: "Spacious Family Home",
    location: "22 Lake View, Pune",
    price: "₹1,20,00,000",
    tag: "For Sale",
    beds: 4,
    baths: 3,
    sqft: "2,100",
    type: "buy"
  },
  {
    id: 5,
    title: "Penthouse with City View",
    location: "1 Sky Tower, Hyderabad",
    price: "₹45,000/mo",
    tag: "For Rent",
    tagType: "rent",
    beds: 3,
    baths: 2,
    sqft: "1,800",
    type: "rent"
  },
  {
    id: 6,
    title: "Premium Office Space",
    location: "50 Business Park, Chennai",
    price: "₹60,000/mo",
    tag: "For Rent",
    tagType: "rent",
    beds: 0,
    baths: 2,
    sqft: "2,500",
    type: "rent"
  }
];

const whyChooseUs = [
  { icon: <FiShield />, title: "Verified Properties", desc: "Every property is verified by our expert team for authenticity and quality." },
  { icon: <FiDollarSign />, title: "Best Price Guarantee", desc: "We negotiate the best prices and ensure you get maximum value for your investment." },
  { icon: <FiUsers />, title: "Expert Agents", desc: "Our experienced agents guide you through every step of the property buying process." },
  { icon: <FiHome />, title: "Wide Selection", desc: "Choose from hundreds of premium properties across prime locations." }
];

const testimonials = [
  { name: "Rahul Sharma", role: "Home Buyer", text: "Found my dream home through Your Real Estate. The team was incredibly helpful and professional throughout the entire process.", initials: "RS" },
  { name: "Priya Patel", role: "Property Investor", text: "Excellent investment opportunities and transparent dealings. I've purchased 3 properties and all have been great investments.", initials: "PP" },
  { name: "Amit Kumar", role: "First-time Buyer", text: "As a first-time buyer, I was nervous. The agents made everything simple and stress-free. Highly recommended!", initials: "AK" }
];

export default function RealEstateTemplate() {
  const [demoModal, setDemoModal] = useState({ isOpen: false, type: '', itemName: '' });
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  const openDemoModal = (type, itemName) => {
    setDemoModal({ isOpen: true, type, itemName });
  };

  return (
    <div className="realestate-template">
      {/* Navbar */}
      <nav className="re-navbar">
        <div className="re-logo">Your Real Estate</div>
        <ul className="re-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="re-nav-cta">Schedule Visit</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="re-hero" id="home">
        <div className="re-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="re-hero-badge">Premium Properties</span>
            <h1>Find Your <span>Dream Home</span> Today</h1>
            <p>Discover the perfect property from our curated collection of premium homes, apartments, and commercial spaces across India.</p>
            <div className="re-hero-buttons">
              <button onClick={() => openDemoModal('buy', 'Property')} className="re-btn re-btn-primary">
                Browse Properties <FiArrowRight />
              </button>
              <a href="tel:+919876543210" className="re-btn re-btn-secondary">
                <FiPhone /> Call Us
              </a>
            </div>
            <div className="re-stats">
              <div className="re-stat-item">
                <h3>500+</h3>
                <p>Properties Sold</p>
              </div>
              <div className="re-stat-item">
                <h3>1200+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="re-stat-item">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties */}
      <section className="re-properties" id="properties">
        <div className="re-section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Properties
          </motion.h2>
          <p>Explore our handpicked selection of premium properties</p>
        </div>
        <div className="re-properties-grid">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="re-property-card"
            >
              <div className="re-property-image">
                <FiHome />
                <span className={`re-property-tag ${property.tagType || ''}`}>{property.tag}</span>
              </div>
              <div className="re-property-content">
                <h3>{property.title}</h3>
                <div className="re-property-location">
                  <FiMapPin /> {property.location}
                </div>
                <div className="re-property-features">
                  <span className="re-property-feature">
                    <FiHome /> {property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}
                  </span>
                  <span className="re-property-feature">
                    <FiMaximize /> {property.sqft} sqft
                  </span>
                </div>
                <div className="re-property-price">{property.price}</div>
                <div className="re-property-actions">
                  <button onClick={() => openDemoModal(property.type, property.title)} className="re-btn re-btn-primary">
                    {property.type === 'buy' ? 'Buy Property' : 'Inquire Now'}
                  </button>
                  <button onClick={() => openDemoModal('booking', 'Visit')} className="re-btn re-btn-secondary">
                    Schedule Visit
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="re-why-us" id="why-us">
        <div className="re-section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <p>Trusted by thousands of happy homeowners across India</p>
        </div>
        <div className="re-why-grid">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="re-why-card"
            >
              <div className="re-why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="re-testimonials" id="testimonials">
        <div className="re-section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <p>Real reviews from satisfied customers</p>
        </div>
        <div className="re-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="re-testimonial-card"
            >
              <div className="re-testimonial-stars">
                <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
              </div>
              <p className="re-testimonial-text">"{testimonial.text}"</p>
              <div className="re-testimonial-author">
                <div className="re-testimonial-avatar">{testimonial.initials}</div>
                <div className="re-testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="re-contact" id="contact">
        <div className="re-contact-grid">
          <motion.div
            className="re-contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>Ready to find your perfect property? Contact us today.</p>
            <div className="re-contact-item">
              <FiMapPin /> <span>123 Business Hub, Mumbai, Maharashtra</span>
            </div>
            <div className="re-contact-item">
              <FiPhone /> <span>+91 98765 43210</span>
            </div>
            <div className="re-contact-item">
              <FiMail /> <span>info@yourrealestate.com</span>
            </div>
            <div className="re-contact-item">
              <FiClock /> <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </motion.div>
          <motion.form
            className="re-contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); openDemoModal('inquiry', 'Property'); }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="re-btn re-btn-primary">
              Send Message <FiArrowRight />
            </button>
          </motion.form>
        </div>
      </section>

      <TemplateFooter name="Your Real Estate" onSettingsClick={() => setShowSettings(true)} />

      <DemoModal
        isOpen={demoModal.isOpen}
        onClose={() => setDemoModal({ isOpen: false, type: '', itemName: '' })}
        type={demoModal.type}
        itemName={demoModal.itemName}
      />
    </div>
  );
}

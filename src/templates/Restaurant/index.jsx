import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiArrowLeft,
  FiMenu, FiX, FiStar, FiPercent, FiCalendar, FiMessageCircle
} from 'react-icons/fi';
import { FaUtensils, FaWineGlassAlt, FaHamburger, FaIceCream } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './RestaurantTemplate.css';

const restaurantData = {
  name: "Your Restaurant",
  tagline: "Savor Every Bite, Cherish Every Moment",
  description: "Experience culinary excellence with our handcrafted dishes made from the freshest ingredients. Every meal is a journey of flavors.",
  phone: "+91 98765 43210",
  email: "info@yourrestaurant.com",
  address: "456 Gourmet Avenue, New Delhi 110001",
  timing: "Mon-Sun: 11:00 AM - 11:00 PM",
  menu: {
    starters: [
      { name: "Crispy Bruschetta", price: "₹299", desc: "Toasted bread with fresh tomatoes, basil, and olive oil" },
      { name: "Paneer Tikka", price: "₹349", desc: "Marinated cottage cheese grilled to perfection" },
      { name: "Spring Rolls", price: "₹279", desc: "Crispy vegetable rolls with sweet chili sauce" },
      { name: "Soup of the Day", price: "₹199", desc: "Chef's special seasonal soup" },
    ],
    mainCourse: [
      { name: "Butter Chicken", price: "₹449", desc: "Creamy tomato-based curry with tender chicken" },
      { name: "Dal Makhani", price: "₹349", desc: "Slow-cooked black lentils in rich butter gravy" },
      { name: "Grilled Salmon", price: "₹599", desc: "Atlantic salmon with herb crust and vegetables" },
      { name: "Veg Biryani", price: "₹379", desc: "Fragrant basmati rice with mixed vegetables" },
    ],
    desserts: [
      { name: "Gulab Jamun", price: "₹149", desc: "Warm milk dumplings in rose syrup" },
      { name: "Chocolate Lava Cake", price: "₹249", desc: "Molten chocolate center with vanilla ice cream" },
      { name: "Mango Cheesecake", price: "₹229", desc: "Creamy cheesecake with fresh mango topping" },
    ],
    drinks: [
      { name: "Fresh Lime Soda", price: "₹99", desc: "Refreshing lime with soda and mint" },
      { name: "Mango Lassi", price: "₹149", desc: "Creamy yogurt blended with fresh mango" },
      { name: "Masala Chai", price: "₹79", desc: "Traditional spiced Indian tea" },
      { name: "Cold Coffee", price: "₹179", desc: "Iced coffee with cream and chocolate" },
    ]
  },
  offers: [
    { title: "Lunch Buffet", discount: "30% OFF", desc: "Weekday lunch buffet, Mon-Fri 12-3 PM", code: "LUNCH30" },
    { title: "Family Dinner", discount: "20% OFF", desc: "For families of 4 or more, dinner only", code: "FAMILY20" },
    { title: "First Order", discount: "15% OFF", desc: "On your first online order above ₹500", code: "WELCOME15" },
  ]
};

const menuCategories = [
  { key: 'starters', label: 'Starters', icon: <FaUtensils /> },
  { key: 'mainCourse', label: 'Main Course', icon: <FaHamburger /> },
  { key: 'desserts', label: 'Desserts', icon: <FaIceCream /> },
  { key: 'drinks', label: 'Drinks', icon: <FaWineGlassAlt /> },
];

export default function RestaurantTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('order');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('starters');

  const handleOrderNow = (itemName) => {
    setModalType('order');
    setModalItem(itemName);
    setShowModal(true);
  };

  const handleReserveTable = () => {
    setModalType('booking');
    setModalItem('table reservation');
    setShowModal(true);
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="rest-template">
      <DemoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        itemName={modalItem}
      />

      {/* Navbar */}
      <nav className="rest-nav">
        <div className="rest-nav-container">
          <a href="#" className="rest-nav-logo">
            <FaUtensils /> {restaurantData.name}
          </a>
          <button className="rest-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`rest-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
            <a href="#offers" onClick={() => setMobileMenuOpen(false)}>Offers</a>
            <a href="#reservation" onClick={() => setMobileMenuOpen(false)}>Reserve</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="rest-nav-cta" onClick={() => { handleReserveTable(); setMobileMenuOpen(false); }}>
              Reserve Table
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="rest-hero">
        <div className="rest-hero-bg"></div>
        <div className="rest-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rest-hero-content"
          >
            <span className="rest-hero-badge">Welcome to {restaurantData.name}</span>
            <h1>{restaurantData.tagline}</h1>
            <p>{restaurantData.description}</p>
            <div className="rest-hero-buttons">
              <a href="#menu" className="btn-rest btn-rest-primary">
                Explore Menu <FiArrowRight />
              </a>
              <button className="btn-rest btn-rest-secondary" onClick={handleReserveTable}>
                <FiCalendar /> Reserve Table
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section className="rest-menu" id="menu">
        <div className="rest-container">
          <h2>Our Menu</h2>
          <p className="rest-section-sub">Crafted with passion, served with love</p>

          <div className="rest-menu-tabs">
            {menuCategories.map((cat) => (
              <button
                key={cat.key}
                className={`rest-menu-tab ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rest-menu-grid"
          >
            {restaurantData.menu[activeCategory].map((item, index) => (
              <div key={index} className="rest-menu-card">
                <div className="rest-menu-card-header">
                  <h3>{item.name}</h3>
                  <span className="rest-menu-price">{item.price}</span>
                </div>
                <p className="rest-menu-desc">{item.desc}</p>
                <button className="btn-rest btn-rest-order" onClick={() => handleOrderNow(item.name)}>
                  Order Now
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="rest-offers" id="offers">
        <div className="rest-container">
          <h2>Special Offers</h2>
          <p className="rest-section-sub">Don't miss out on these amazing deals</p>
          <div className="rest-offers-grid">
            {restaurantData.offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rest-offer-card"
              >
                <div className="rest-offer-discount">
                  <FiPercent /> {offer.discount}
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
                <div className="rest-offer-code">
                  Use Code: <strong>{offer.code}</strong>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="rest-reservation" id="reservation">
        <div className="rest-container">
          <h2>Make a Reservation</h2>
          <p className="rest-section-sub">Book your table for a perfect dining experience</p>
          <div className="rest-reservation-content">
            <div className="rest-reservation-info">
              <div className="rest-res-info-item">
                <FiMapPin />
                <div>
                  <strong>Location</strong>
                  <p>{restaurantData.address}</p>
                </div>
              </div>
              <div className="rest-res-info-item">
                <FiClock />
                <div>
                  <strong>Hours</strong>
                  <p>{restaurantData.timing}</p>
                </div>
              </div>
              <div className="rest-res-info-item">
                <FiPhone />
                <div>
                  <strong>Phone</strong>
                  <p>{restaurantData.phone}</p>
                </div>
              </div>
            </div>
            <div className="rest-reservation-cta">
              <FiCalendar />
              <h3>Ready to Dine?</h3>
              <p>Reserve your table now and enjoy a memorable dining experience with us.</p>
              <button className="btn-rest btn-rest-primary" onClick={handleReserveTable}>
                Reserve Table <FiArrowRight />
              </button>
              <p className="rest-res-note">Or call us directly at {restaurantData.phone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="rest-contact" id="contact">
        <div className="rest-container">
          <h2>Find Us</h2>
          <p className="rest-section-sub">We'd love to hear from you</p>
          <div className="rest-contact-grid">
            <div className="rest-contact-card">
              <FiMapPin />
              <h3>Address</h3>
              <p>{restaurantData.address}</p>
            </div>
            <div className="rest-contact-card">
              <FiPhone />
              <h3>Phone</h3>
              <p>{restaurantData.phone}</p>
            </div>
            <div className="rest-contact-card">
              <FiMail />
              <h3>Email</h3>
              <p>{restaurantData.email}</p>
            </div>
            <div className="rest-contact-card">
              <FiClock />
              <h3>Hours</h3>
              <p>{restaurantData.timing}</p>
            </div>
          </div>
          <div className="rest-contact-cta">
            <FiMessageCircle />
            <p>Have questions? Chat with us on WhatsApp!</p>
            <a
              href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I have a query about ' + restaurantData.name)}`}
              className="btn-rest btn-rest-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      <TemplateFooter name={restaurantData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

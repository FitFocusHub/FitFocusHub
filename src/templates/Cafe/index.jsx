import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiCoffee, FiStar, FiSend, FiMenu, FiX } from 'react-icons/fi';
import { FaCoffee, FaCookie, FaIceCream, FaFire } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './CafeTemplate.css';

const cafeData = {
  name: "Your Cafe",
  tagline: "Sip. Savor. Smile.",
  description: "Handcrafted beverages and artisan treats made with love, served in a cozy atmosphere that feels like home.",
  phone: "+91 98765 43210",
  email: "hello@yourcafe.com",
  address: "123 Coffee Lane, Bangalore, Karnataka",
  timing: "Mon-Sun: 7:00 AM - 11:00 PM",
  menu: {
    Coffee: [
      { name: "Espresso", desc: "Rich, bold single shot", price: "₹120", icon: "☕" },
      { name: "Cappuccino", desc: "Creamy, classic Italian", price: "₹180", icon: "☕" },
      { name: "Caramel Latte", desc: "Smooth with caramel drizzle", price: "₹220", icon: "🥛" },
      { name: "Cold Brew", desc: "24-hour steeped perfection", price: "₹200", icon: "🧊" },
      { name: "Mocha", desc: "Chocolate meets coffee", price: "₹240", icon: "🍫" },
      { name: "Flat White", desc: "Velvety micro-foam", price: "₹200", icon: "☕" },
    ],
    Snacks: [
      { name: "Avocado Toast", desc: "Fresh, wholesome bite", price: "₹250", icon: "🥑" },
      { name: "Grilled Sandwich", desc: "Crispy with cheese pull", price: "₹180", icon: "🥪" },
      { name: "Veg Wrap", desc: "Packed with goodness", price: "₹160", icon: "🌯" },
      { name: "Nachos", desc: "Crunchy with salsa dip", price: "₹200", icon: "🧀" },
      { name: "Bruschetta", desc: "Tomato basil delight", price: "₹220", icon: "🍅" },
      { name: "Hummus Plate", desc: "Creamy with pita bread", price: "₹240", icon: "🫓" },
    ],
    Desserts: [
      { name: "Tiramisu", desc: "Classic Italian layers", price: "₹280", icon: "🍰" },
      { name: "Cheesecake", desc: "New York style slice", price: "₹260", icon: "🧁" },
      { name: "Chocolate Brownie", desc: "Warm, gooey, divine", price: "₹200", icon: "🍫" },
      { name: "Waffle Sundae", desc: "With ice cream & syrup", price: "₹240", icon: "🧇" },
      { name: "Crème Brûlée", desc: "Caramelized perfection", price: "₹300", icon: "🍮" },
      { name: "Gelato", desc: "3 scoops of joy", price: "₹220", icon: "🍨" },
    ],
    Specials: [
      { name: "Matcha Latte", desc: "Japanese green tea blend", price: "₹260", icon: "🍵" },
      { name: "Honey Oat Bowl", desc: "Warm, healthy start", price: "₹200", icon: "🍯" },
      { name: "Berry Smoothie", desc: "Mixed berries blast", price: "₹240", icon: "🫐" },
      { name: "Pumpkin Spice Latte", desc: "Seasonal autumn flavor", price: "₹280", icon: "🎃" },
      { name: "Affogato", desc: "Espresso over gelato", price: "₹260", icon: "☕" },
      { name: "Turmeric Latte", desc: "Golden milk magic", price: "₹220", icon: "✨" },
    ],
  },
  gallery: [
    { label: "Cozy Interior", icon: "🪑" },
    { label: "Coffee Bar", icon: "☕" },
    { label: "Outdoor Seating", icon: "🌿" },
    { label: "Bakery Display", icon: "🥐" },
    { label: "Evening Ambiance", icon: "🕯️" },
    { label: "Latte Art", icon: "🎨" },
  ],
};

export default function CafeTemplate() {
  const [demoModal, setDemoModal] = useState({ open: false, type: 'order', item: '' });
  const [showSettings, setShowSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Coffee');

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  const openDemo = (item) => {
    setDemoModal({ open: true, type: 'order', item: item || 'Menu Item' });
  };

  const menuCategories = Object.keys(cafeData.menu);
  const currentItems = cafeData.menu[activeMenu] || [];

  return (
    <div className="cafe-template">
      {/* Navbar */}
      <nav className="cafe-nav">
        <div className="cafe-nav-inner">
          <div className="cafe-logo">
            <div className="cafe-logo-icon"><FiCoffee /></div>
            {cafeData.name}
          </div>
          <ul className="cafe-nav-links">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#ambiance">Ambiance</a></li>
            <li><a href="#order">Order</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cafe-mobile-toggle" aria-label="Menu">
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="cafe-hero">
        <div className="cafe-hero-bg" />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="cafe-hero-content"
          >
            <div className="cafe-hero-badge">
              <FiStar size={14} /> Freshly Brewed Every Day
            </div>
            <h1>
              {cafeData.tagline.split(' ').slice(0, 1)}{' '}
              <span>{cafeData.tagline.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p>{cafeData.description}</p>
            <div className="cafe-hero-buttons">
              <button className="cafe-btn cafe-btn-primary" onClick={() => openDemo('Your Order')}>
                Order Now <FiArrowRight />
              </button>
              <a href="#menu" className="cafe-btn cafe-btn-secondary">
                <FiCoffee /> View Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="cafe-section">
        <h2 className="cafe-section-title">Our Menu</h2>
        <p className="cafe-section-subtitle">Crafted with care, served with love</p>
        <div className="cafe-menu-tabs">
          {menuCategories.map(cat => (
            <button
              key={cat}
              className={`cafe-menu-tab ${activeMenu === cat ? 'active' : ''}`}
              onClick={() => setActiveMenu(cat)}
            >
              {cat === 'Coffee' && <FaCoffee style={{ marginRight: 6 }} />}
              {cat === 'Snacks' && <FaCookie style={{ marginRight: 6 }} />}
              {cat === 'Desserts' && <FaIceCream style={{ marginRight: 6 }} />}
              {cat === 'Specials' && <FaFire style={{ marginRight: 6 }} />}
              {cat}
            </button>
          ))}
        </div>
        <div className="cafe-menu-grid">
          {currentItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="cafe-menu-card"
            >
              <div className="cafe-menu-img">{item.icon}</div>
              <div className="cafe-menu-info">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <span className="cafe-menu-price">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section id="ambiance" className="cafe-section" style={{ background: '#1c1917' }}>
        <h2 className="cafe-section-title">Our Ambiance</h2>
        <p className="cafe-section-subtitle">A space designed for comfort and connection</p>
        <div className="cafe-gallery-grid">
          {cafeData.gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="cafe-gallery-item"
            >
              <span className="cafe-gallery-icon">{item.icon}</span>
              <span className="cafe-gallery-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Order */}
      <section id="order" className="cafe-section cafe-order-section">
        <h2 className="cafe-section-title">How to Order</h2>
        <p className="cafe-section-subtitle">Three easy ways to enjoy your favorites</p>
        <div className="cafe-order-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="cafe-order-card"
          >
            <div className="cafe-order-icon"><FiPhone /></div>
            <h3>Call Us</h3>
            <p>Give us a ring and place your order over the phone. Quick and easy!</p>
            <a href={`tel:${cafeData.phone}`} className="cafe-btn cafe-btn-secondary cafe-btn-full">
              <FiPhone /> Call Now
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="cafe-order-card"
          >
            <div className="cafe-order-icon"><FiMapPin /></div>
            <h3>Walk In</h3>
            <p>Visit us and enjoy the ambiance while we brew your perfect cup.</p>
            <a href={`https://maps.google.com/?q=${cafeData.address}`} target="_blank" rel="noopener noreferrer" className="cafe-btn cafe-btn-secondary cafe-btn-full">
              <FiMapPin /> Get Directions
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="cafe-order-card"
          >
            <div className="cafe-order-icon"><FiSend /></div>
            <h3>WhatsApp</h3>
            <p>Send us your order on WhatsApp and we'll have it ready for you!</p>
            <button className="cafe-btn cafe-btn-primary cafe-btn-full" onClick={() => openDemo('WhatsApp Order')}>
              Order Now <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="cafe-section cafe-contact">
        <h2 className="cafe-section-title">Visit Us</h2>
        <p className="cafe-section-subtitle">We'd love to see you there</p>
        <div className="cafe-contact-grid">
          <div className="cafe-contact-info">
            <div className="cafe-info-item">
              <FiMapPin /> <span>{cafeData.address}</span>
            </div>
            <div className="cafe-info-item">
              <FiPhone /> <span>{cafeData.phone}</span>
            </div>
            <div className="cafe-info-item">
              <FiMail /> <span>{cafeData.email}</span>
            </div>
            <div className="cafe-info-item">
              <FiClock /> <span>{cafeData.timing}</span>
            </div>
          </div>
          <form className="cafe-contact-form" onSubmit={e => { e.preventDefault(); openDemo('Contact Form'); }}>
            <input className="cafe-form-input" type="text" placeholder="Your Name" required />
            <input className="cafe-form-input" type="email" placeholder="Your Email" required />
            <textarea className="cafe-form-input cafe-form-textarea" placeholder="Your Message" rows={4} required />
            <button type="submit" className="cafe-btn cafe-btn-primary cafe-btn-full">
              Send Message <FiArrowRight />
            </button>
          </form>
        </div>
      </section>

      <TemplateFooter name={cafeData.name} onSettingsClick={() => setShowSettings(true)} />
      <DemoModal
        isOpen={demoModal.open}
        onClose={() => setDemoModal({ open: false, type: '', item: '' })}
        type={demoModal.type}
        itemName={demoModal.item}
      />
    </div>
  );
}

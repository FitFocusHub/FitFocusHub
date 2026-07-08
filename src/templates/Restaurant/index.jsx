import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight,
  FiMenu, FiX, FiStar, FiPercent, FiCalendar, FiMessageCircle,
  FiChevronRight, FiHeart, FiAward, FiUsers
} from 'react-icons/fi';
import { FaUtensils, FaWineGlassAlt, FaHamburger, FaIceCream, FaLeaf, FaFire } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './RestaurantTemplate.css';

const restaurantData = {
  name: "Spice Garden",
  tagline: "Savor Every Bite, Cherish Every Moment",
  description: "Experience culinary excellence with our handcrafted dishes made from the freshest ingredients. Every meal is a journey of flavors.",
  phone: "+91 98765 43210",
  email: "info@spicegarden.com",
  address: "456 Gourmet Avenue, New Delhi 110001",
  timing: "Mon-Sun: 11:00 AM - 11:00 PM",
  about: "Founded in 2020, Spice Garden has been serving authentic Indian cuisine with a modern twist. Our chefs use traditional recipes passed down through generations, combined with contemporary plating techniques.",
  stats: { years: 5, dishes: 200, customers: 50000, awards: 12 },
  menu: {
    starters: [
      { name: "Crispy Bruschetta", price: "₹299", desc: "Toasted bread with fresh tomatoes, basil, and olive oil", veg: true },
      { name: "Paneer Tikka", price: "₹349", desc: "Marinated cottage cheese grilled to perfection", veg: true },
      { name: "Chicken Seekh Kebab", price: "₹399", desc: "Minced chicken skewers with Indian spices", veg: false },
      { name: "Spring Rolls", price: "₹279", desc: "Crispy vegetable rolls with sweet chili sauce", veg: true },
      { name: "Soup of the Day", price: "₹199", desc: "Chef's special seasonal soup", veg: true },
      { name: "Fish Amritsari", price: "₹449", desc: "Crispy fried fish with tangy chutney", veg: false },
    ],
    mainCourse: [
      { name: "Butter Chicken", price: "₹449", desc: "Creamy tomato-based curry with tender chicken", veg: false },
      { name: "Dal Makhani", price: "₹349", desc: "Slow-cooked black lentils in rich butter gravy", veg: true },
      { name: "Grilled Salmon", price: "₹599", desc: "Atlantic salmon with herb crust and vegetables", veg: false },
      { name: "Veg Biryani", price: "₹379", desc: "Fragrant basmati rice with mixed vegetables", veg: true },
      { name: "Rogan Josh", price: "₹499", desc: "Kashmiri style lamb curry with aromatic spices", veg: false },
      { name: "Paneer Butter Masala", price: "₹399", desc: "Creamy tomato curry with soft paneer cubes", veg: true },
    ],
    desserts: [
      { name: "Gulab Jamun", price: "₹149", desc: "Warm milk dumplings in rose syrup", veg: true },
      { name: "Chocolate Lava Cake", price: "₹249", desc: "Molten chocolate center with vanilla ice cream", veg: true },
      { name: "Mango Cheesecake", price: "₹229", desc: "Creamy cheesecake with fresh mango topping", veg: true },
      { name: "Ras Malai", price: "₹179", desc: "Soft paneer balls in saffron-flavored milk", veg: true },
    ],
    drinks: [
      { name: "Fresh Lime Soda", price: "₹99", desc: "Refreshing lime with soda and mint", veg: true },
      { name: "Mango Lassi", price: "₹149", desc: "Creamy yogurt blended with fresh mango", veg: true },
      { name: "Masala Chai", price: "₹79", desc: "Traditional spiced Indian tea", veg: true },
      { name: "Cold Coffee", price: "₹179", desc: "Iced coffee with cream and chocolate", veg: true },
      { name: "Fresh Fruit Juice", price: "₹129", desc: "Seasonal fresh fruits blended to perfection", veg: true },
    ]
  },
  offers: [
    { title: "Lunch Buffet", discount: "30% OFF", desc: "Weekday lunch buffet, Mon-Fri 12-3 PM", code: "LUNCH30" },
    { title: "Family Dinner", discount: "20% OFF", desc: "For families of 4 or more, dinner only", code: "FAMILY20" },
    { title: "First Order", discount: "15% OFF", desc: "On your first online order above ₹500", code: "WELCOME15" },
  ],
  gallery: [
    { title: "Our Ambiance", desc: "Fine dining experience" },
    { title: "Fresh Ingredients", desc: "Locally sourced produce" },
    { title: "Chef's Special", desc: "Signature dishes" },
    { title: "Private Events", desc: "Celebrate with us" },
  ],
  testimonials: [
    { name: "Anita Sharma", rating: 5, text: "Best butter chicken in Delhi! The ambiance is beautiful and service is top-notch." },
    { name: "Rajesh Kumar", rating: 5, text: "We celebrated our anniversary here. Perfect food, perfect atmosphere. Highly recommended!" },
    { name: "Sneha Patel", rating: 4, text: "Amazing vegetarian options. The paneer tikka is a must-try. Will definitely come back!" },
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
  const [activePage, setActivePage] = useState('home');

  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const offersRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

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
          <div className="rest-nav-logo" onClick={() => scrollTo(homeRef)}>
            <FaUtensils /> {restaurantData.name}
          </div>
          <button className="rest-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`rest-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(aboutRef)}>About</span>
            <span onClick={() => scrollTo(menuRef)}>Menu</span>
            <span onClick={() => scrollTo(galleryRef)}>Gallery</span>
            <span onClick={() => scrollTo(offersRef)}>Offers</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="rest-nav-cta" onClick={() => { handleReserveTable(); setMobileMenuOpen(false); }}>
              Reserve Table
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="rest-hero" ref={homeRef}>
        <div className="rest-hero-bg"></div>
        <div className="rest-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rest-hero-content">
            <span className="rest-hero-badge">Welcome to {restaurantData.name}</span>
            <h1>{restaurantData.tagline}</h1>
            <p>{restaurantData.description}</p>
            <div className="rest-hero-buttons">
              <button className="btn-rest btn-rest-primary" onClick={() => scrollTo(menuRef)}>
                Explore Menu <FiArrowRight />
              </button>
              <button className="btn-rest btn-rest-secondary" onClick={handleReserveTable}>
                <FiCalendar /> Reserve Table
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="rest-stats">
        <div className="rest-container">
          <div className="rest-stats-grid">
            <div className="rest-stat-item"><FiAward /><span>{restaurantData.stats.years}+</span><p>Years</p></div>
            <div className="rest-stat-item"><FaUtensils /><span>{restaurantData.stats.dishes}+</span><p>Dishes</p></div>
            <div className="rest-stat-item"><FiUsers /><span>{restaurantData.stats.customers}+</span><p>Happy Customers</p></div>
            <div className="rest-stat-item"><FiStar /><span>{restaurantData.stats.awards}</span><p>Awards</p></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="rest-about" ref={aboutRef}>
        <div className="rest-container">
          <h2>About Us</h2>
          <p className="rest-section-sub">Our story of passion and flavor</p>
          <div className="rest-about-content">
            <div className="rest-about-text">
              <p>{restaurantData.about}</p>
              <div className="rest-about-features">
                <div className="rest-about-feature"><FaLeaf className="green" /> <span>Fresh Ingredients</span></div>
                <div className="rest-about-feature"><FaFire className="orange" /> <span>Wood-Fired Oven</span></div>
                <div className="rest-about-feature"><FaHeart className="red" /> <span>Made with Love</span></div>
                <div className="rest-about-feature"><FiAward className="gold" /> <span>Award Winning</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section className="rest-menu" ref={menuRef} id="menu">
        <div className="rest-container">
          <h2>Our Menu</h2>
          <p className="rest-section-sub">Crafted with passion, served with love</p>
          <div className="rest-menu-tabs">
            {menuCategories.map((cat) => (
              <button key={cat.key} className={`rest-menu-tab ${activeCategory === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}>
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="rest-menu-grid">
            {restaurantData.menu[activeCategory].map((item, index) => (
              <div key={index} className="rest-menu-card">
                <div className="rest-menu-card-header">
                  <div>
                    <h3>{item.name}</h3>
                    <span className={`rest-menu-tag ${item.veg ? 'veg' : 'nonveg'}`}>{item.veg ? '🟢 Veg' : '🔴 Non-Veg'}</span>
                  </div>
                  <span className="rest-menu-price">{item.price}</span>
                </div>
                <p className="rest-menu-desc">{item.desc}</p>
                <button className="btn-rest btn-rest-order" onClick={() => handleOrderNow(item.name)}>
                  Order Now <FiChevronRight />
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="rest-gallery" ref={galleryRef}>
        <div className="rest-container">
          <h2>Gallery</h2>
          <p className="rest-section-sub">A glimpse into our world</p>
          <div className="rest-gallery-grid">
            {restaurantData.gallery.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rest-gallery-card">
                <div className="rest-gallery-placeholder"><FaUtensils /></div>
                <div className="rest-gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="rest-offers" ref={offersRef}>
        <div className="rest-container">
          <h2>Special Offers</h2>
          <p className="rest-section-sub">Don't miss out on these amazing deals</p>
          <div className="rest-offers-grid">
            {restaurantData.offers.map((offer, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rest-offer-card">
                <div className="rest-offer-discount"><FiPercent /> {offer.discount}</div>
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
                <div className="rest-offer-code">Use Code: <strong>{offer.code}</strong></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="rest-testimonials">
        <div className="rest-container">
          <h2>What Our Guests Say</h2>
          <p className="rest-section-sub">Real reviews from real food lovers</p>
          <div className="rest-testimonials-grid">
            {restaurantData.testimonials.map((t, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rest-testimonial-card">
                <div className="rest-testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => <FiStar key={i} className="star-filled" />)}
                </div>
                <p className="rest-testimonial-text">"{t.text}"</p>
                <div className="rest-testimonial-author">
                  <div className="rest-testimonial-avatar">{t.name.charAt(0)}</div>
                  <span>{t.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section className="rest-reservation">
        <div className="rest-container">
          <h2>Make a Reservation</h2>
          <p className="rest-section-sub">Book your table for a perfect dining experience</p>
          <div className="rest-reservation-content">
            <div className="rest-reservation-info">
              <div className="rest-res-info-item"><FiMapPin /><div><strong>Location</strong><p>{restaurantData.address}</p></div></div>
              <div className="rest-res-info-item"><FiClock /><div><strong>Hours</strong><p>{restaurantData.timing}</p></div></div>
              <div className="rest-res-info-item"><FiPhone /><div><strong>Phone</strong><p>{restaurantData.phone}</p></div></div>
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
      <section className="rest-contact" ref={contactRef} id="contact">
        <div className="rest-container">
          <h2>Find Us</h2>
          <p className="rest-section-sub">We'd love to hear from you</p>
          <div className="rest-contact-grid">
            <div className="rest-contact-card"><FiMapPin /><h3>Address</h3><p>{restaurantData.address}</p></div>
            <div className="rest-contact-card"><FiPhone /><h3>Phone</h3><p>{restaurantData.phone}</p></div>
            <div className="rest-contact-card"><FiMail /><h3>Email</h3><p>{restaurantData.email}</p></div>
            <div className="rest-contact-card"><FiClock /><h3>Hours</h3><p>{restaurantData.timing}</p></div>
          </div>
          <div className="rest-contact-cta">
            <FiMessageCircle />
            <p>Have questions? Chat with us on WhatsApp!</p>
            <a href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I have a query about ' + restaurantData.name)}`}
              className="btn-rest btn-rest-primary" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      <TemplateFooter name={restaurantData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

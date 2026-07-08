import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight,
  FiMenu, FiX, FiStar, FiCalendar, FiMessageCircle,
  FiChevronDown, FiChevronUp, FiCheck, FiTruck, FiShoppingBag,
  FiHome, FiGrid, FiBookmark, FiSend
} from 'react-icons/fi';
import { FaUtensils, FaFire, FaHeart, FaLeaf, FaAward, FaConciergeBell } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './RestaurantTemplate.css';

const restaurantData = {
  name: "Spice Garden Restaurant",
  tagline: "Where Every Dish Tells a Story",
  description: "Embark on a culinary journey through the rich tapestry of Indian flavors. Our master chefs craft each dish with passion, using time-honored recipes and the finest ingredients.",
  phone: "+91 XXXXX XXXXX",
  email: "example@gmail.com",
  address: "456 Gourmet Avenue, New Delhi 110001",
  timing: "Mon-Sun: 11:00 AM - 11:00 PM",
  instagram: "@mohammad_s4kib",
  heroSpecial: {
    name: "Butter Chicken",
    price: "₹449",
    desc: "Our legendary creamy tomato-based curry with tender chicken, simmered in a blend of 12 aromatic spices. A dish that has won hearts for over a decade.",
    tag: "Chef's Signature"
  },
  menu: {
    starters: [
      { name: "Paneer Tikka", price: "₹349", desc: "Marinated cottage cheese grilled to perfection in our tandoor", veg: true, featured: true },
      { name: "Chicken Seekh Kebab", price: "₹399", desc: "Minced chicken skewers infused with Indian spices", veg: false },
      { name: "Crispy Bruschetta", price: "₹299", desc: "Toasted bread with fresh tomatoes, basil, and olive oil", veg: true },
      { name: "Fish Amritsari", price: "₹449", desc: "Crispy fried fish with tangy chutney and lemon wedge", veg: false },
      { name: "Spring Rolls", price: "₹279", desc: "Crispy vegetable rolls with sweet chili sauce", veg: true },
      { name: "Soup of the Day", price: "₹199", desc: "Chef's special seasonal soup with fresh herbs", veg: true },
    ],
    mainCourse: [
      { name: "Butter Chicken", price: "₹449", desc: "Creamy tomato-based curry with tender chicken pieces", veg: false, featured: true },
      { name: "Biryani", price: "₹399", desc: "Fragrant basmati rice layered with spiced meat and saffron", veg: false, featured: true },
      { name: "Dal Makhani", price: "₹349", desc: "Slow-cooked black lentils in rich butter gravy", veg: true },
      { name: "Paneer Butter Masala", price: "₹399", desc: "Creamy tomato curry with soft paneer cubes", veg: true },
      { name: "Rogan Josh", price: "₹499", desc: "Kashmiri style lamb curry with aromatic spices", veg: false },
      { name: "Veg Biryani", price: "₹379", desc: "Fragrant rice with mixed vegetables and mint raita", veg: true },
    ],
    desserts: [
      { name: "Gulab Jamun", price: "₹149", desc: "Warm milk dumplings soaked in rose-flavored sugar syrup", veg: true, featured: true },
      { name: "Ras Malai", price: "₹179", desc: "Soft paneer balls in saffron-flavored sweetened milk", veg: true },
      { name: "Chocolate Lava Cake", price: "₹249", desc: "Molten chocolate center with vanilla ice cream scoop", veg: true },
      { name: "Mango Cheesecake", price: "₹229", desc: "Creamy cheesecake with fresh Alphonso mango topping", veg: true },
    ],
    drinks: [
      { name: "Mango Lassi", price: "₹149", desc: "Creamy yogurt blended with fresh Alphonso mango", veg: true, featured: true },
      { name: "Masala Chai", price: "₹79", desc: "Traditional spiced Indian tea with cardamom and ginger", veg: true },
      { name: "Fresh Lime Soda", price: "₹99", desc: "Refreshing lime with soda and fresh mint leaves", veg: true },
      { name: "Cold Coffee", price: "₹179", desc: "Iced coffee with cream and chocolate drizzle", veg: true },
    ]
  },
  whyChooseUs: [
    { icon: <FaFire />, title: "Tandoor-Fired", desc: "Authentic clay oven cooking for smoky, authentic flavors in every bite" },
    { icon: <FaLeaf />, title: "Fresh Ingredients", desc: "Locally sourced, organic produce delivered daily from trusted farmers" },
    { icon: <FaAward />, title: "Award-Winning", desc: "Recognized as Best Indian Restaurant 3 years running" },
    { icon: <FaConciergeBell />, title: "Premium Service", desc: "White-glove dining experience with attentive, personalized service" },
    { icon: <FaHeart />, title: "Made with Love", desc: "Every dish is a labor of love, crafted by our passionate chefs" },
    { icon: <FiTruck />, title: "Free Delivery", desc: "Complimentary delivery on orders above ₹500 within 5km" },
  ],
  gallery: [
    { title: "Signature Thali", aspect: "tall" },
    { title: "Tandoor Section", aspect: "wide" },
    { title: "Dessert Platter", aspect: "normal" },
    { title: "Spice Garden Ambiance", aspect: "tall" },
    { title: "Fresh Biryani", aspect: "wide" },
    { title: "Cocktail Bar", aspect: "normal" },
  ],
  testimonials: [
    { name: "Anita Sharma", rating: 5, text: "The Butter Chicken here is absolutely divine! Best I've had in Delhi. The service was impeccable and the ambiance made our anniversary truly special." },
    { name: "Rajesh Kumar", rating: 5, text: "We hosted a family dinner for 12 people. Every single dish was perfect. The Biryani was the star of the evening. Highly recommended for celebrations!" },
    { name: "Sneha Patel", rating: 4, text: "Amazing vegetarian options! The Paneer Tikka and Gulab Jamun are must-tries. The decor is beautiful and the staff is incredibly welcoming." },
    { name: "Arjun Mehta", rating: 5, text: "From start to finish, an exceptional dining experience. The chef personally came to our table to explain the specials. That's the kind of service you remember." },
  ]
};

const menuCategories = [
  { key: 'starters', label: 'Starters & Soups', icon: '🥗' },
  { key: 'mainCourse', label: 'Main Course', icon: '🍛' },
  { key: 'desserts', label: 'Desserts', icon: '🍮' },
  { key: 'drinks', label: 'Beverages', icon: '🥤' },
];

export default function RestaurantTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('order');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeBottomNav, setActiveBottomNav] = useState('home');

  const homeRef = useRef(null);
  const specialsRef = useRef(null);
  const menuRef = useRef(null);
  const whyRef = useRef(null);
  const galleryRef = useRef(null);
  const orderRef = useRef(null);
  const testimonialsRef = useRef(null);
  const reservationRef = useRef(null);
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

  const toggleAccordion = (key) => {
    setExpandedCategory(expandedCategory === key ? null : key);
  };

  const handleBottomNav = (nav, ref) => {
    setActiveBottomNav(nav);
    scrollTo(ref);
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="sg-template">
      <DemoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        itemName={modalItem}
      />

      {/* Desktop Top Nav */}
      <nav className="sg-topnav">
        <div className="sg-topnav-inner">
          <div className="sg-topnav-logo" onClick={() => scrollTo(homeRef)}>
            <FaUtensils /> {restaurantData.name}
          </div>
          <button className="sg-topnav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`sg-topnav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(specialsRef)}>Specials</span>
            <span onClick={() => scrollTo(menuRef)}>Menu</span>
            <span onClick={() => scrollTo(galleryRef)}>Gallery</span>
            <span onClick={() => scrollTo(testimonialsRef)}>Reviews</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="sg-topnav-cta" onClick={() => { handleReserveTable(); setMobileMenuOpen(false); }}>
              <FiCalendar /> Reserve
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="sg-bottomnav">
        <button className={`sg-bottomnav-item ${activeBottomNav === 'home' ? 'active' : ''}`} onClick={() => handleBottomNav('home', homeRef)}>
          <FiHome /> <span>Home</span>
        </button>
        <button className={`sg-bottomnav-item ${activeBottomNav === 'menu' ? 'active' : ''}`} onClick={() => handleBottomNav('menu', menuRef)}>
          <FiGrid /> <span>Menu</span>
        </button>
        <button className={`sg-bottomnav-item ${activeBottomNav === 'order' ? 'active' : ''}`} onClick={() => handleBottomNav('order', orderRef)}>
          <FiShoppingBag /> <span>Order</span>
        </button>
        <button className={`sg-bottomnav-item ${activeBottomNav === 'reserve' ? 'active' : ''}`} onClick={() => handleBottomNav('reserve', reservationRef)}>
          <FiBookmark /> <span>Reserve</span>
        </button>
        <button className={`sg-bottomnav-item ${activeBottomNav === 'contact' ? 'active' : ''}`} onClick={() => handleBottomNav('contact', contactRef)}>
          <FiSend /> <span>Contact</span>
        </button>
      </nav>

      {/* Hero - Split Screen */}
      <section className="sg-hero" ref={homeRef}>
        <div className="sg-hero-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="sg-hero-content"
          >
            <span className="sg-hero-badge">✦ Authentic Indian Cuisine</span>
            <h1 className="sg-hero-title">
              Savor Every<br />
              <span className="sg-hero-highlight">Bite</span>, Cherish<br />
              Every <span className="sg-hero-highlight">Moment</span>
            </h1>
            <p className="sg-hero-desc">{restaurantData.description}</p>
            <div className="sg-hero-btns">
              <button className="sg-btn sg-btn-primary" onClick={() => scrollTo(menuRef)}>
                Explore Menu <FiArrowRight />
              </button>
              <button className="sg-btn sg-btn-outline" onClick={handleReserveTable}>
                <FiCalendar /> Reserve Table
              </button>
            </div>
            <div className="sg-hero-stats">
              <div className="sg-hero-stat">
                <strong>5+</strong><span>Years</span>
              </div>
              <div className="sg-hero-stat-divider"></div>
              <div className="sg-hero-stat">
                <strong>200+</strong><span>Dishes</span>
              </div>
              <div className="sg-hero-stat-divider"></div>
              <div className="sg-hero-stat">
                <strong>50K+</strong><span>Happy Customers</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="sg-hero-right">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sg-hero-image-frame"
          >
            <div className="sg-hero-image-placeholder">
              <FaUtensils />
              <span>Image Placeholder</span>
            </div>
            <div className="sg-hero-float-card">
              <FiStar className="sg-float-icon" />
              <div>
                <strong>4.9 Rating</strong>
                <span>on Google Reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="sg-specials" ref={specialsRef}>
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">✦ Chef's Special</span>
            <h2>Signature Dish of the Day</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sg-special-card"
          >
            <div className="sg-special-image">
              <div className="sg-special-img-placeholder">
                <FaFire />
              </div>
            </div>
            <div className="sg-special-info">
              <span className="sg-special-tag">{restaurantData.heroSpecial.tag}</span>
              <h3>{restaurantData.heroSpecial.name}</h3>
              <p className="sg-special-desc">{restaurantData.heroSpecial.desc}</p>
              <div className="sg-special-bottom">
                <span className="sg-special-price">{restaurantData.heroSpecial.price}</span>
                <button className="sg-btn sg-btn-primary" onClick={() => handleOrderNow(restaurantData.heroSpecial.name)}>
                  Order Now <FiArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Accordion */}
      <section className="sg-menu" ref={menuRef} id="menu">
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">✦ Our Menu</span>
            <h2>Crafted with Passion, Served with Love</h2>
          </div>
          <div className="sg-accordion">
            {menuCategories.map((cat) => (
              <div key={cat.key} className={`sg-accordion-item ${expandedCategory === cat.key ? 'open' : ''}`}>
                <button className="sg-accordion-header" onClick={() => toggleAccordion(cat.key)}>
                  <div className="sg-accordion-header-left">
                    <span className="sg-accordion-icon">{cat.icon}</span>
                    <div>
                      <h3>{cat.label}</h3>
                      <span className="sg-accordion-count">{restaurantData.menu[cat.key].length} items</span>
                    </div>
                  </div>
                  <div className="sg-accordion-chevron">
                    {expandedCategory === cat.key ? <FiChevronUp /> : <FiChevronDown />}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedCategory === cat.key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="sg-accordion-content"
                    >
                      <div className="sg-menu-items">
                        {restaurantData.menu[cat.key].map((item, index) => (
                          <div key={index} className={`sg-menu-item ${item.featured ? 'featured' : ''}`}>
                            <div className="sg-menu-item-left">
                              <div className="sg-menu-item-info">
                                <div className="sg-menu-item-name-row">
                                  <h4>{item.name}</h4>
                                  {item.featured && <span className="sg-featured-badge">★ Popular</span>}
                                </div>
                                <span className={`sg-veg-tag ${item.veg ? 'veg' : 'nonveg'}`}>
                                  {item.veg ? '🟢' : '🔴'} {item.veg ? 'Veg' : 'Non-Veg'}
                                </span>
                              </div>
                              <p className="sg-menu-item-desc">{item.desc}</p>
                            </div>
                            <div className="sg-menu-item-right">
                              <span className="sg-menu-item-price">{item.price}</span>
                              <button className="sg-btn sg-btn-small" onClick={() => handleOrderNow(item.name)}>
                                Order
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sg-why" ref={whyRef}>
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">✦ Why Choose Us</span>
            <h2>The Spice Garden Difference</h2>
          </div>
          <div className="sg-why-grid">
            {restaurantData.whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="sg-why-card"
              >
                <div className="sg-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Masonry */}
      <section className="sg-gallery" ref={galleryRef}>
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">✦ Gallery</span>
            <h2>A Glimpse into Our World</h2>
          </div>
          <div className="sg-masonry">
            {restaurantData.gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`sg-masonry-item sg-masonry-${item.aspect}`}
              >
                <div className="sg-masonry-placeholder">
                  <FaUtensils />
                </div>
                <div className="sg-masonry-overlay">
                  <h4>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Ordering CTA */}
      <section className="sg-order-cta" ref={orderRef}>
        <div className="sg-container">
          <div className="sg-order-cta-inner">
            <div className="sg-order-cta-content">
              <FiShoppingBag className="sg-order-cta-icon" />
              <h2>Order Online</h2>
              <p>Get your favorite dishes delivered to your doorstep. Fresh, hot, and ready in 30 minutes!</p>
              <button className="sg-btn sg-btn-primary sg-btn-lg" onClick={() => handleOrderNow('online order')}>
                Start Ordering <FiArrowRight />
              </button>
            </div>
            <div className="sg-order-cta-features">
              <div className="sg-order-feature">
                <FiCheck /> <span>Free delivery above ₹500</span>
              </div>
              <div className="sg-order-feature">
                <FiCheck /> <span>30-minute delivery guarantee</span>
              </div>
              <div className="sg-order-feature">
                <FiCheck /> <span>Real-time order tracking</span>
              </div>
              <div className="sg-order-feature">
                <FiCheck /> <span>Secure online payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sg-testimonials" ref={testimonialsRef}>
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">✦ Testimonials</span>
            <h2>What Our Guests Say</h2>
          </div>
          <div className="sg-testimonials-grid">
            {restaurantData.testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="sg-testimonial-card"
              >
                <div className="sg-testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FiStar key={i} className="sg-star" />
                  ))}
                </div>
                <p className="sg-testimonial-text">"{t.text}"</p>
                <div className="sg-testimonial-author">
                  <div className="sg-testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>Verified Guest</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="sg-reservation" ref={reservationRef}>
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">✦ Reservations</span>
            <h2>Book Your Table</h2>
          </div>
          <div className="sg-reservation-grid">
            <div className="sg-reservation-form-wrapper">
              <form className="sg-reservation-form" onSubmit={(e) => { e.preventDefault(); handleReserveTable(); }}>
                <div className="sg-form-row">
                  <div className="sg-form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="sg-form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
                <div className="sg-form-row">
                  <div className="sg-form-group">
                    <label>Date</label>
                    <input type="date" />
                  </div>
                  <div className="sg-form-group">
                    <label>Time</label>
                    <select>
                      <option>Select time</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>1:00 PM</option>
                      <option>2:00 PM</option>
                      <option>6:00 PM</option>
                      <option>7:00 PM</option>
                      <option>8:00 PM</option>
                      <option>9:00 PM</option>
                    </select>
                  </div>
                </div>
                <div className="sg-form-row">
                  <div className="sg-form-group">
                    <label>Number of Guests</label>
                    <select>
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5-6 People</option>
                      <option>7-10 People</option>
                      <option>10+ (Private Event)</option>
                    </select>
                  </div>
                  <div className="sg-form-group">
                    <label>Occasion</label>
                    <select>
                      <option>Regular Dining</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Business Meeting</option>
                      <option>Date Night</option>
                      <option>Celebration</option>
                    </select>
                  </div>
                </div>
                <div className="sg-form-group">
                  <label>Special Requests</label>
                  <textarea placeholder="Any dietary restrictions, seating preferences, or special arrangements..." rows="3"></textarea>
                </div>
                <button type="submit" className="sg-btn sg-btn-primary sg-btn-full">
                  Reserve Table <FiArrowRight />
                </button>
              </form>
            </div>
            <div className="sg-reservation-info">
              <div className="sg-res-info-card">
                <FiMapPin className="sg-res-info-icon" />
                <div>
                  <strong>Location</strong>
                  <p>{restaurantData.address}</p>
                </div>
              </div>
              <div className="sg-res-info-card">
                <FiClock className="sg-res-info-icon" />
                <div>
                  <strong>Hours</strong>
                  <p>{restaurantData.timing}</p>
                </div>
              </div>
              <div className="sg-res-info-card">
                <FiPhone className="sg-res-info-icon" />
                <div>
                  <strong>Phone</strong>
                  <p>{restaurantData.phone}</p>
                </div>
              </div>
              <div className="sg-res-info-note">
                <p>Or call us directly at <strong>{restaurantData.phone}</strong> for immediate reservations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="sg-contact" ref={contactRef} id="contact">
        <div className="sg-container">
          <div className="sg-section-header">
            <span className="sg-section-tag">✦ Get in Touch</span>
            <h2>Contact Us</h2>
          </div>
          <div className="sg-contact-grid">
            <div className="sg-contact-card">
              <FiMapPin />
              <h3>Visit Us</h3>
              <p>{restaurantData.address}</p>
            </div>
            <div className="sg-contact-card">
              <FiPhone />
              <h3>Call Us</h3>
              <p>{restaurantData.phone}</p>
            </div>
            <div className="sg-contact-card">
              <FiMail />
              <h3>Email Us</h3>
              <p>{restaurantData.email}</p>
            </div>
            <div className="sg-contact-card">
              <FiClock />
              <h3>Hours</h3>
              <p>{restaurantData.timing}</p>
            </div>
          </div>
          <div className="sg-contact-social">
            <a
              href="https://www.instagram.com/mohammad_s4kib"
              target="_blank"
              rel="noopener noreferrer"
              className="sg-social-link"
            >
              📸 {restaurantData.instagram}
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I have a query about ' + restaurantData.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sg-social-link sg-whatsapp"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TemplateFooter name={restaurantData.name} onSettingsClick={() => setShowSettings(true)} />

      {/* Bottom Nav Spacer for Mobile */}
      <div className="sg-bottomnav-spacer"></div>
    </div>
  );
}

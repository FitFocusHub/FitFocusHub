import React, { useRef } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './CafeTemplate.css';

export default function CafeTemplate() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const specialsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState('');

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const menuCategories = [
    {
      name: 'Coffee',
      items: [
        { name: 'Espresso', price: '$3.50' },
        { name: 'Cappuccino', price: '$4.50' },
        { name: 'Latte', price: '$4.75' },
        { name: 'Mocha', price: '$5.00' },
      ],
    },
    {
      name: 'Tea',
      items: [
        { name: 'Green Tea', price: '$3.00' },
        { name: 'Earl Grey', price: '$3.25' },
        { name: 'Chai Latte', price: '$4.50' },
        { name: 'Matcha', price: '$5.00' },
      ],
    },
    {
      name: 'Pastries',
      items: [
        { name: 'Croissant', price: '$3.50' },
        { name: 'Muffin', price: '$2.75' },
        { name: 'Cinnamon Roll', price: '$3.75' },
        { name: 'Scone', price: '$3.00' },
      ],
    },
    {
      name: 'Snacks',
      items: [
        { name: 'Avocado Toast', price: '$6.50' },
        { name: 'Bagel & Cream Cheese', price: '$4.50' },
        { name: 'Granola Bowl', price: '$5.50' },
        { name: 'Fruit Cup', price: '$4.00' },
      ],
    },
  ];

  const specials = [
    {
      title: 'Morning Brew Special',
      description: 'Get any coffee drink for $3 before 9 AM!',
      tag: 'Limited Time',
    },
    {
      title: 'Pastry + Coffee Combo',
      description: 'Any pastry paired with a drip coffee for just $5.99.',
      tag: 'Best Value',
    },
    {
      title: 'Happy Hour',
      description: 'All teas and iced drinks 20% off from 2-4 PM.',
      tag: 'Daily Deal',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The best coffee I have ever had! The atmosphere is so cozy and the staff are incredibly friendly.',
      rating: 5,
    },
    {
      name: 'James K.',
      text: 'My go-to spot for remote work. Great WiFi, amazing pastries, and the espresso is perfect every time.',
      rating: 5,
    },
    {
      name: 'Emily R.',
      text: 'Brew & Bean has the most authentic chai latte. I visit at least twice a week!',
      rating: 5,
    },
  ];

  return (
    <div className="cafe-template">
      <nav className="cafe-nav">
        <div className="cafe-nav-brand">Brew & Bean Cafe</div>
        <div className="cafe-nav-links">
          <span onClick={() => scrollTo(heroRef)}>Home</span>
          <span onClick={() => scrollTo(aboutRef)}>About</span>
          <span onClick={() => scrollTo(menuRef)}>Menu</span>
          <span onClick={() => scrollTo(specialsRef)}>Specials</span>
          <span onClick={() => scrollTo(testimonialsRef)}>Reviews</span>
          <span onClick={() => scrollTo(contactRef)}>Contact</span>
        </div>
      </nav>

      <section ref={heroRef} className="cafe-hero">
        <div className="cafe-hero-overlay"></div>
        <div className="cafe-hero-content">
          <h1>Brew & Bean Cafe</h1>
          <p>Handcrafted coffee & fresh bites since 2018</p>
          <div className="cafe-hero-buttons">
            <button onClick={() => scrollTo(menuRef)} className="cafe-btn-primary">
              View Menu
            </button>
            <button onClick={() => openModal('order')} className="cafe-btn-secondary">
              Order Now
            </button>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="cafe-stats">
        <div className="cafe-stat">
          <span className="cafe-stat-number">50K+</span>
          <span className="cafe-stat-label">Cups Served</span>
        </div>
        <div className="cafe-stat">
          <span className="cafe-stat-number">4.9</span>
          <span className="cafe-stat-label">Star Rating</span>
        </div>
        <div className="cafe-stat">
          <span className="cafe-stat-number">7+</span>
          <span className="cafe-stat-label">Years Brewing</span>
        </div>
        <div className="cafe-stat">
          <span className="cafe-stat-number">100%</span>
          <span className="cafe-stat-label">Fresh Beans</span>
        </div>
      </section>

      <section ref={aboutRef} className="cafe-about">
        <div className="cafe-about-content">
          <h2>Our Story</h2>
          <p>
            Brew & Bean Cafe was born from a passion for exceptional coffee and a
            desire to create a warm, welcoming space for our community. We source
            our beans directly from sustainable farms and roast them in small
            batches to bring out the perfect flavor profile.
          </p>
          <p>
            Every cup we serve is a labor of love — from the careful selection of
            our ingredients to the skilled hands of our baristas. We believe coffee
            is more than a drink; it is an experience.
          </p>
        </div>
      </section>

      <section ref={menuRef} className="cafe-menu">
        <h2>Our Menu</h2>
        <div className="cafe-menu-grid">
          {menuCategories.map((category) => (
            <div key={category.name} className="cafe-menu-category">
              <h3>{category.name}</h3>
              {category.items.map((item) => (
                <div key={item.name} className="cafe-menu-item">
                  <span className="cafe-menu-item-name">{item.name}</span>
                  <span className="cafe-menu-item-price">{item.price}</span>
                </div>
              ))}
              <button
                onClick={() => openModal('order')}
                className="cafe-btn-order"
              >
                Order {category.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section ref={specialsRef} className="cafe-specials">
        <h2>Today's Specials</h2>
        <div className="cafe-specials-grid">
          {specials.map((special) => (
            <div key={special.title} className="cafe-special-card">
              <span className="cafe-special-tag">{special.tag}</span>
              <h3>{special.title}</h3>
              <p>{special.description}</p>
              <button
                onClick={() => openModal('order')}
                className="cafe-btn-order"
              >
                Grab This Deal
              </button>
            </div>
          ))}
        </div>
      </section>

      <section ref={testimonialsRef} className="cafe-testimonials">
        <h2>What Our Customers Say</h2>
        <div className="cafe-testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="cafe-testimonial-card">
              <div className="cafe-testimonial-stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="cafe-testimonial-text">"{testimonial.text}"</p>
              <span className="cafe-testimonial-name">— {testimonial.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section ref={contactRef} className="cafe-contact">
        <h2>Visit Us</h2>
        <div className="cafe-contact-grid">
          <div className="cafe-contact-info">
            <div className="cafe-contact-item">
              <strong>Address</strong>
              <p>123 Coffee Lane, Bean City, BC 45678</p>
            </div>
            <div className="cafe-contact-item">
              <strong>Hours</strong>
              <p>Mon-Fri: 6AM - 8PM</p>
              <p>Sat-Sun: 7AM - 9PM</p>
            </div>
            <div className="cafe-contact-item">
              <strong>Phone</strong>
              <p>(555) 123-BREW</p>
            </div>
            <div className="cafe-contact-item">
              <strong>Email</strong>
              <p>hello@brewandbean.com</p>
            </div>
          </div>
          <div className="cafe-contact-form">
            <input type="text" placeholder="Your Name" className="cafe-input" />
            <input type="email" placeholder="Your Email" className="cafe-input" />
            <textarea
              placeholder="Your Message"
              className="cafe-textarea"
              rows="4"
            ></textarea>
            <button onClick={() => openModal('contact')} className="cafe-btn-primary">
              Send Message
            </button>
          </div>
        </div>
      </section>

      <TemplateFooter />
      <Settings />
      <DemoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        templateName="Brew & Bean Cafe"
      />
    </div>
  );
}

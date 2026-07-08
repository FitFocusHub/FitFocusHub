import React, { useRef } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './EcommerceTemplate.css';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 149.99, image: 'https://picsum.photos/seed/prod1/400/400', badge: 'New' },
  { id: 2, name: 'Smart Watch Pro', price: 299.99, image: 'https://picsum.photos/seed/prod2/400/400', badge: 'Hot' },
  { id: 3, name: 'Laptop Stand', price: 79.99, image: 'https://picsum.photos/seed/prod3/400/400' },
  { id: 4, name: 'Mechanical Keyboard', price: 189.99, image: 'https://picsum.photos/seed/prod4/400/400', badge: 'Sale' },
  { id: 5, name: '4K Webcam', price: 129.99, image: 'https://picsum.photos/seed/prod5/400/400' },
  { id: 6, name: 'USB-C Hub', price: 59.99, image: 'https://picsum.photos/seed/prod6/400/400', badge: 'Popular' },
];

const categories = [
  { name: 'Electronics', icon: '🔌', count: 234 },
  { name: 'Wearables', icon: '⌚', count: 128 },
  { name: 'Accessories', icon: '🎒', count: 312 },
  { name: 'Audio', icon: '🎧', count: 96 },
  { name: 'Home Office', icon: '🖥️', count: 175 },
  { name: 'Gaming', icon: '🎮', count: 89 },
];

const deals = [
  { name: 'Summer Blowout', discount: '40% OFF', desc: 'On all audio gear this week', image: 'https://picsum.photos/seed/deal1/600/400' },
  { name: 'Bundle & Save', discount: '$50 OFF', desc: 'When you buy 2 or more items', image: 'https://picsum.photos/seed/deal2/600/400' },
];

const testimonials = [
  { name: 'Sarah Mitchell', role: 'Tech Blogger', text: 'ShopVerse has the best tech deals I\'ve found online. Fast shipping and great customer service!', avatar: 'https://i.pravatar.cc/80?img=1' },
  { name: 'James Park', role: 'Software Engineer', text: 'I\'ve bought 5+ items here and every single one exceeded my expectations. Highly recommended.', avatar: 'https://i.pravatar.cc/80?img=3' },
  { name: 'Olivia Chen', role: 'Product Designer', text: 'The quality is unmatched at these prices. My go-to store for all my tech needs.', avatar: 'https://i.pravatar.cc/80?img=5' },
];

export default function EcommerceTemplate() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState('buy');
  const [modalItem, setModalItem] = React.useState('');

  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const categoriesRef = useRef(null);
  const dealsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openModal = (type, item) => {
    setModalType(type);
    setModalItem(item);
    setModalOpen(true);
  };

  return (
    <div className="shop-template">
      <nav className="shop-nav">
        <div className="shop-nav-inner">
          <div className="shop-logo">Shop<span>Verse</span></div>
          <div className="shop-nav-links">
            <span onClick={() => scrollTo(heroRef)}>Home</span>
            <span onClick={() => scrollTo(productsRef)}>Products</span>
            <span onClick={() => scrollTo(categoriesRef)}>Categories</span>
            <span onClick={() => scrollTo(dealsRef)}>Deals</span>
            <span onClick={() => scrollTo(testimonialsRef)}>Reviews</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
          </div>
          <div className="shop-nav-actions">
            <button className="shop-cart-btn" onClick={() => openModal('buy', 'Cart')}>
              🛒 Cart <span className="shop-cart-count">0</span>
            </button>
          </div>
        </div>
      </nav>

      <section ref={heroRef} className="shop-hero">
        <div className="shop-hero-content">
          <span className="shop-hero-badge">New Arrivals</span>
          <h1>Discover Premium <span>Tech Products</span></h1>
          <p>Shop the latest in technology with unbeatable prices and free shipping on orders over $50.</p>
          <div className="shop-hero-btns">
            <button className="shop-btn-primary" onClick={() => scrollTo(productsRef)}>Shop Now</button>
            <button className="shop-btn-secondary" onClick={() => openModal('buy', 'Quick Order')}>Quick Order</button>
          </div>
          <div className="shop-hero-stats">
            <div className="shop-stat"><strong>10K+</strong><span>Products</span></div>
            <div className="shop-stat"><strong>50K+</strong><span>Customers</span></div>
            <div className="shop-stat"><strong>99%</strong><span>Satisfaction</span></div>
          </div>
        </div>
        <div className="shop-hero-visual">
          <div className="shop-hero-card">
            <img src="https://picsum.photos/seed/hero-prod/500/500" alt="Featured product" />
            <div className="shop-hero-card-tag">Best Seller</div>
          </div>
        </div>
      </section>

      <section ref={productsRef} className="shop-section shop-products">
        <div className="shop-section-header">
          <span className="shop-section-tag">Our Collection</span>
          <h2>Featured Products</h2>
          <p>Handpicked favorites loved by our community</p>
        </div>
        <div className="shop-products-grid">
          {products.map((product) => (
            <div key={product.id} className="shop-product-card">
              <div className="shop-product-img">
                <img src={product.image} alt={product.name} />
                {product.badge && <span className={`shop-badge shop-badge-${product.badge.toLowerCase()}`}>{product.badge}</span>}
                <div className="shop-product-overlay">
                  <button onClick={() => openModal('buy', product.name)}>Add to Cart</button>
                </div>
              </div>
              <div className="shop-product-info">
                <h3>{product.name}</h3>
                <div className="shop-product-price">
                  <span className="shop-price">${product.price}</span>
                </div>
                <button className="shop-buy-btn" onClick={() => openModal('buy', product.name)}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={categoriesRef} className="shop-section shop-categories">
        <div className="shop-section-header">
          <span className="shop-section-tag">Browse by Type</span>
          <h2>Categories</h2>
        </div>
        <div className="shop-categories-grid">
          {categories.map((cat, i) => (
            <div key={i} className="shop-category-card" onClick={() => openModal('buy', cat.name)}>
              <div className="shop-category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <span>{cat.count} items</span>
            </div>
          ))}
        </div>
      </section>

      <section ref={dealsRef} className="shop-section shop-deals">
        <div className="shop-section-header">
          <span className="shop-section-tag">Limited Time</span>
          <h2>Hot Deals</h2>
        </div>
        <div className="shop-deals-grid">
          {deals.map((deal, i) => (
            <div key={i} className="shop-deal-card">
              <img src={deal.image} alt={deal.name} />
              <div className="shop-deal-info">
                <span className="shop-deal-discount">{deal.discount}</span>
                <h3>{deal.name}</h3>
                <p>{deal.desc}</p>
                <button className="shop-btn-primary" onClick={() => openModal('buy', deal.name)}>Grab Deal</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={testimonialsRef} className="shop-section shop-testimonials">
        <div className="shop-section-header">
          <span className="shop-section-tag">What People Say</span>
          <h2>Customer Reviews</h2>
        </div>
        <div className="shop-testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="shop-testimonial-card">
              <div className="shop-stars">★★★★★</div>
              <p className="shop-testimonial-text">{t.text}</p>
              <div className="shop-testimonial-author">
                <img src={t.avatar} alt={t.name} />
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={contactRef} className="shop-section shop-contact">
        <div className="shop-contact-grid">
          <div className="shop-contact-info">
            <span className="shop-section-tag">Get In Touch</span>
            <h2>Need Help?</h2>
            <p>Our support team is here for you 24/7. Reach out anytime.</p>
            <div className="shop-contact-details">
              <div className="shop-contact-item"><span>📧</span> support@shopverse.com</div>
              <div className="shop-contact-item"><span>📞</span> 1-800-SHOP-NOW</div>
              <div className="shop-contact-item"><span>📍</span> 123 Tech Street, Silicon Valley, CA</div>
            </div>
          </div>
          <form className="shop-contact-form" onSubmit={(e) => { e.preventDefault(); openModal('buy', 'Contact Inquiry'); }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required></textarea>
            <button type="submit" className="shop-btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      <TemplateFooter />

      <Settings />

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} itemName={modalItem} />
    </div>
  );
}

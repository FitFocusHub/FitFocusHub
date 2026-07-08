import React, { useRef, useState } from 'react';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './EcommerceTemplate.css';

const products = [
  { id: 1, name: 'Wireless Headphones', price: 79.99, oldPrice: 129.99, rating: 4.8, reviews: 342, badge: 'Best Seller', img: 'https://picsum.photos/seed/headph/400/400' },
  { id: 2, name: 'Smart Watch', price: 199.99, oldPrice: 279.99, rating: 4.6, reviews: 215, badge: 'New', img: 'https://picsum.photos/seed/watch22/400/400' },
  { id: 3, name: 'Sneakers', price: 64.99, oldPrice: 99.99, rating: 4.7, reviews: 508, badge: 'Trending', img: 'https://picsum.photos/seed/snk33/400/400' },
  { id: 4, name: 'Backpack', price: 49.99, oldPrice: 74.99, rating: 4.5, reviews: 187, badge: '', img: 'https://picsum.photos/seed/bag44/400/400' },
  { id: 5, name: 'Sunglasses', price: 34.99, oldPrice: 59.99, rating: 4.4, reviews: 291, badge: 'Sale', img: 'https://picsum.photos/seed/sun55/400/400' },
  { id: 6, name: 'Phone Case', price: 19.99, oldPrice: 34.99, rating: 4.3, reviews: 432, badge: '', img: 'https://picsum.photos/seed/phone66/400/400' },
];

const categories = [
  { name: 'Electronics', icon: '⚡', color: '#d946ef' },
  { name: 'Fashion', icon: '👟', color: '#a855f7' },
  { name: 'Accessories', icon: '🎒', color: '#ec4899' },
  { name: 'Audio', icon: '🎧', color: '#d946ef' },
  { name: 'Wearables', icon: '⌚', color: '#a855f7' },
  { name: 'Lifestyle', icon: '🕶️', color: '#ec4899' },
  { name: 'Sports', icon: '🏃', color: '#d946ef' },
  { name: 'Gadgets', icon: '📱', color: '#a855f7' },
];

const flashDeals = [
  { name: 'Wireless Earbuds Pro', price: 29.99, oldPrice: 79.99, discount: '62%', img: 'https://picsum.photos/seed/deal11/300/300', timeLeft: '02:45:33' },
  { name: 'Smart Fitness Band', price: 19.99, oldPrice: 49.99, discount: '60%', img: 'https://picsum.photos/seed/deal22/300/300', timeLeft: '05:12:18' },
  { name: 'Mini Bluetooth Speaker', price: 14.99, oldPrice: 39.99, discount: '62%', img: 'https://picsum.photos/seed/deal33/300/300', timeLeft: '01:30:45' },
  { name: 'USB-C Fast Charger', price: 12.99, oldPrice: 29.99, discount: '57%', img: 'https://picsum.photos/seed/deal44/300/300', timeLeft: '08:55:10' },
];

const features = [
  { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50' },
  { icon: '🔒', title: 'Secure Payment', desc: '100% encrypted checkout' },
  { icon: '↩️', title: 'Easy Returns', desc: '30-day return policy' },
  { icon: '💬', title: '24/7 Support', desc: 'Always here to help' },
];

const reviews = [
  { name: 'Aisha Khan', text: 'Absolutely love the quality! My headphones arrived in 2 days and sound amazing. ShopVerse is my new favorite store.', avatar: 'https://i.pravatar.cc/80?img=1', rating: 5 },
  { name: 'Rahul Sharma', text: 'Great prices and fast delivery. The smart watch exceeded my expectations. Will definitely order again!', avatar: 'https://i.pravatar.cc/80?img=3', rating: 5 },
  { name: 'Priya Patel', text: 'The sneakers are super comfortable. Love the variety and the deals here. Highly recommend ShopVerse to everyone.', avatar: 'https://i.pravatar.cc/80?img=5', rating: 4 },
];

export default function EcommerceTemplate() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('buy');
  const [modalItem, setModalItem] = useState('');
  const [mobileTab, setMobileTab] = useState('home');

  const heroRef = useRef(null);
  const categoriesRef = useRef(null);
  const dealsRef = useRef(null);
  const productsRef = useRef(null);
  const featuresRef = useRef(null);
  const reviewsRef = useRef(null);
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
    <div className="sv-template">
      <nav className="sv-nav">
        <div className="sv-nav-inner">
          <div className="sv-logo" onClick={() => scrollTo(heroRef)}>
            <span className="sv-logo-icon">🛍️</span>
            Shop<span>Verse</span>
          </div>

          <div className="sv-search-bar">
            <svg className="sv-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input type="text" placeholder="Search products, brands..." className="sv-search-input" />
          </div>

          <div className="sv-nav-icons">
            <button className="sv-nav-icon-btn sv-cart-btn" onClick={() => openModal('buy', 'Cart')}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span className="sv-cart-badge">3</span>
            </button>
            <button className="sv-nav-icon-btn sv-user-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
          </div>
        </div>
      </nav>

      <section ref={heroRef} className="sv-hero">
        <div className="sv-sale-banner">
          <div className="sv-sale-ticker">
            <span>🔥 MEGA SALE — UP TO 70% OFF — FREE SHIPPING ON ORDERS $50+ — MEGA SALE — UP TO 70% OFF — FREE SHIPPING ON ORDERS $50+ —&nbsp;</span>
            <span>🔥 MEGA SALE — UP TO 70% OFF — FREE SHIPPING ON ORDERS $50+ — MEGA SALE — UP TO 70% OFF — FREE SHIPPING ON ORDERS $50+ —&nbsp;</span>
          </div>
        </div>

        <div className="sv-hero-content">
          <div className="sv-hero-left">
            <span className="sv-hero-tag">Limited Time Offer</span>
            <h1 className="sv-hero-title">
              Summer<br />
              <span className="sv-hero-highlight">Big Sale</span><br />
              Up to 70% Off
            </h1>
            <p className="sv-hero-desc">
              Discover incredible deals on thousands of products. Shop now before the sale ends!
            </p>
            <div className="sv-hero-countdown">
              <div className="sv-cd-block"><span className="sv-cd-num">02</span><span className="sv-cd-label">Days</span></div>
              <div className="sv-cd-sep">:</div>
              <div className="sv-cd-block"><span className="sv-cd-num">14</span><span className="sv-cd-label">Hrs</span></div>
              <div className="sv-cd-sep">:</div>
              <div className="sv-cd-block"><span className="sv-cd-num">38</span><span className="sv-cd-label">Min</span></div>
              <div className="sv-cd-sep">:</div>
              <div className="sv-cd-block"><span className="sv-cd-num">52</span><span className="sv-cd-label">Sec</span></div>
            </div>
            <div className="sv-hero-btns">
              <button className="sv-btn-fill" onClick={() => scrollTo(productsRef)}>Shop the Sale</button>
              <button className="sv-btn-outline" onClick={() => scrollTo(dealsRef)}>View Deals</button>
            </div>
          </div>
          <div className="sv-hero-right">
            <div className="sv-hero-product-card">
              <div className="sv-hero-product-img">
                <img src="https://picsum.photos/seed/heroprod/500/500" alt="Featured product" />
                <div className="sv-hero-sale-tag">-70%</div>
              </div>
              <div className="sv-hero-product-info">
                <span className="sv-hero-product-cat">Electronics</span>
                <h3>Premium Wireless Headphones</h3>
                <div className="sv-hero-product-prices">
                  <span className="sv-hero-new-price">$39.99</span>
                  <span className="sv-hero-old-price">$129.99</span>
                </div>
                <button className="sv-btn-fill sv-hero-buy" onClick={() => openModal('buy', 'Premium Wireless Headphones')}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={categoriesRef} className="sv-section">
        <div className="sv-section-header">
          <span className="sv-section-label">Browse</span>
          <h2>Shop by Category</h2>
        </div>
        <div className="sv-categories-scroll">
          {categories.map((cat, i) => (
            <div key={i} className="sv-category-pill" onClick={() => openModal('buy', cat.name)}>
              <div className="sv-cat-icon" style={{ background: `${cat.color}18`, color: cat.color }}>{cat.icon}</div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section ref={dealsRef} className="sv-section sv-deals-section">
        <div className="sv-section-header">
          <span className="sv-section-label">Hurry Up!</span>
          <h2>Flash Deals</h2>
        </div>
        <div className="sv-deals-grid">
          {flashDeals.map((deal, i) => (
            <div key={i} className="sv-deal-card">
              <div className="sv-deal-img-wrap">
                <img src={deal.img} alt={deal.name} />
                <div className="sv-deal-discount">-{deal.discount}</div>
              </div>
              <div className="sv-deal-body">
                <h4>{deal.name}</h4>
                <div className="sv-deal-prices">
                  <span className="sv-deal-price">${deal.price}</span>
                  <span className="sv-deal-old">${deal.oldPrice}</span>
                </div>
                <div className="sv-deal-timer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span>{deal.timeLeft}</span>
                </div>
                <button className="sv-deal-btn" onClick={() => openModal('buy', deal.name)}>Grab Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={productsRef} className="sv-section sv-products-section">
        <div className="sv-section-header">
          <span className="sv-section-label">Our Store</span>
          <h2>Featured Products</h2>
        </div>
        <div className="sv-products-grid">
          {products.map((p) => (
            <div key={p.id} className="sv-product-card">
              <div className="sv-product-img">
                <img src={p.img} alt={p.name} />
                {p.badge && <span className={`sv-badge sv-badge-${p.badge.toLowerCase().replace(' ', '-')}`}>{p.badge}</span>}
                <div className="sv-product-hover">
                  <button onClick={() => openModal('buy', p.name)}>Add to Cart</button>
                </div>
              </div>
              <div className="sv-product-body">
                <h4>{p.name}</h4>
                <div className="sv-product-rating">
                  <span className="sv-stars">{'★'.repeat(Math.floor(p.rating))}{'☆'.repeat(5 - Math.floor(p.rating))}</span>
                  <span className="sv-rating-num">{p.rating}</span>
                  <span className="sv-review-count">({p.reviews})</span>
                </div>
                <div className="sv-product-prices">
                  <span className="sv-product-price">${p.price}</span>
                  <span className="sv-product-old">${p.oldPrice}</span>
                </div>
                <button className="sv-product-buy" onClick={() => openModal('buy', p.name)}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section ref={featuresRef} className="sv-section sv-features-section">
        <div className="sv-section-header">
          <span className="sv-section-label">Why Us</span>
          <h2>Why Shop With Us</h2>
        </div>
        <div className="sv-features-grid">
          {features.map((f, i) => (
            <div key={i} className="sv-feature-card">
              <div className="sv-feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={reviewsRef} className="sv-section sv-reviews-section">
        <div className="sv-section-header">
          <span className="sv-section-label">Testimonials</span>
          <h2>Customer Reviews</h2>
        </div>
        <div className="sv-reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="sv-review-card">
              <div className="sv-review-stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
              <p className="sv-review-text">"{r.text}"</p>
              <div className="sv-review-author">
                <img src={r.avatar} alt={r.name} />
                <div>
                  <h5>{r.name}</h5>
                  <span>Verified Buyer</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sv-section sv-newsletter-section">
        <div className="sv-newsletter-inner">
          <div className="sv-newsletter-content">
            <h2>Subscribe & Save 10%</h2>
            <p>Get exclusive deals and updates straight to your inbox.</p>
          </div>
          <form className="sv-newsletter-form" onSubmit={(e) => { e.preventDefault(); openModal('buy', 'Newsletter Signup'); }}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit" className="sv-btn-fill">Subscribe</button>
          </form>
        </div>
      </section>

      <section ref={contactRef} className="sv-section sv-contact-section">
        <div className="sv-contact-grid">
          <div className="sv-contact-left">
            <span className="sv-section-label">Contact</span>
            <h2>Get In Touch</h2>
            <p>Have questions? We'd love to hear from you.</p>
            <div className="sv-contact-items">
              <div className="sv-contact-item">
                <div className="sv-contact-icon-box">📞</div>
                <div>
                  <span className="sv-contact-label">Phone</span>
                  <span className="sv-contact-value">+91 XXXXX XXXXX</span>
                </div>
              </div>
              <div className="sv-contact-item">
                <div className="sv-contact-icon-box">✉️</div>
                <div>
                  <span className="sv-contact-label">Email</span>
                  <span className="sv-contact-value">example@gmail.com</span>
                </div>
              </div>
              <div className="sv-contact-item">
                <div className="sv-contact-icon-box">📸</div>
                <div>
                  <span className="sv-contact-label">Instagram</span>
                  <span className="sv-contact-value">@mohammad_s4kib</span>
                </div>
              </div>
            </div>
          </div>
          <form className="sv-contact-form" onSubmit={(e) => { e.preventDefault(); openModal('buy', 'Contact Inquiry'); }}>
            <div className="sv-form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows={4} required></textarea>
            <button type="submit" className="sv-btn-fill sv-form-submit">Send Message</button>
          </form>
        </div>
      </section>

      <TemplateFooter name="ShopVerse" onSettingsClick={() => openModal('buy', 'Settings')} />

      <Settings />

      <DemoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} itemName={modalItem} />

      <div className="sv-mobile-tabs">
        <button className={`sv-tab ${mobileTab === 'home' ? 'active' : ''}`} onClick={() => { setMobileTab('home'); scrollTo(heroRef); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </button>
        <button className={`sv-tab ${mobileTab === 'categories' ? 'active' : ''}`} onClick={() => { setMobileTab('categories'); scrollTo(categoriesRef); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <span>Categories</span>
        </button>
        <button className={`sv-tab ${mobileTab === 'deals' ? 'active' : ''}`} onClick={() => { setMobileTab('deals'); scrollTo(dealsRef); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
          <span>Deals</span>
        </button>
        <button className={`sv-tab ${mobileTab === 'cart' ? 'active' : ''}`} onClick={() => { setMobileTab('cart'); openModal('buy', 'Cart'); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <span>Cart</span>
        </button>
        <button className={`sv-tab ${mobileTab === 'contact' ? 'active' : ''}`} onClick={() => { setMobileTab('contact'); scrollTo(contactRef); }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
}

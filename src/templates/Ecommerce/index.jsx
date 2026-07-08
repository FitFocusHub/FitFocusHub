import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiShoppingCart, FiHeart, FiSearch, FiMenu, FiX,
  FiSmartphone, FiWatch, FiHeadphones, FiCamera,
  FiMonitor, FiWifi, FiStar, FiMapPin, FiPhone,
  FiMail, FiClock, FiArrowRight, FiTrash2, FiCheck,
  FiSend, FiPackage, FiTruck, FiShield
} from 'react-icons/fi';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './EcommerceTemplate.css';

const products = [
  { id: 1, name: 'Wireless Earbuds Pro', category: 'Electronics', price: 2499, oldPrice: 4999, icon: <FiHeadphones />, tag: 'sale', rating: 4.8, reviews: 234 },
  { id: 2, name: 'Smart Watch Ultra', category: 'Electronics', price: 5999, oldPrice: 9999, icon: <FiWatch />, tag: 'new', rating: 4.7, reviews: 189 },
  { id: 3, name: 'Slim Fit Denim Jacket', category: 'Fashion', price: 1899, oldPrice: 3299, icon: <FiPackage />, tag: 'hot', rating: 4.5, reviews: 156 },
  { id: 4, name: '4K Action Camera', category: 'Electronics', price: 7499, oldPrice: 12999, icon: <FiCamera />, tag: 'sale', rating: 4.9, reviews: 312 },
  { id: 5, name: 'Premium Backpack', category: 'Accessories', price: 1299, oldPrice: 2199, icon: <FiPackage />, tag: 'new', rating: 4.6, reviews: 89 },
  { id: 6, name: 'Gaming Smartphone', category: 'Electronics', price: 19999, oldPrice: 29999, icon: <FiSmartphone />, tag: 'hot', rating: 4.8, reviews: 445 },
  { id: 7, name: 'Ultra-Wide Monitor', category: 'Electronics', price: 24999, oldPrice: 39999, icon: <FiMonitor />, tag: 'sale', rating: 4.7, reviews: 178 },
  { id: 8, name: 'Minimalist Sunglasses', category: 'Accessories', price: 899, oldPrice: 1599, icon: <FiWatch />, tag: 'new', rating: 4.4, reviews: 67 },
];

const categories = [
  { name: 'Electronics', icon: <FiWifi />, count: 124 },
  { name: 'Fashion', icon: <FiPackage />, count: 89 },
  { name: 'Accessories', icon: <FiWatch />, count: 67 },
  { name: 'Audio', icon: <FiHeadphones />, count: 43 },
];

const formatPrice = (p) => `₹${p.toLocaleString('en-IN')}`;

export default function EcommerceTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('buy');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');

  const openDemo = (type, name) => {
    setModalType(type);
    setModalItem(name);
    setShowModal(true);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setToast(`${product.name} added to cart`);
    setTimeout(() => setToast(''), 2500);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="ecommerce-template">
      {/* Navbar */}
      <nav className="ecommerce-navbar">
        <div className="ecommerce-navbar-inner">
          <div className="ecommerce-logo">Your Store</div>
          <ul className="ecommerce-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="ecommerce-nav-right">
            <button className="ecommerce-cart-btn" onClick={() => setShowCart(true)}>
              <FiShoppingCart />
              {cartCount > 0 && <span className="ecommerce-cart-count">{cartCount}</span>}
            </button>
            <button className="ecommerce-mobile-toggle"><FiMenu /></button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="ecommerce-hero" id="home">
        <div className="ecommerce-hero-bg" />
        <div className="ecommerce-hero-grid" />
        <div className="ecommerce-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="ecommerce-hero-content"
          >
            <div className="ecommerce-hero-badge">
              <FiStar size={14} /> New Season Arrivals
            </div>
            <h1>Discover <span>Premium Tech</span> & Lifestyle Products</h1>
            <p>Shop the latest electronics, fashion, and accessories with unbeatable prices. Free shipping on orders over ₹999.</p>
            <div className="ecommerce-hero-buttons">
              <a href="#products" className="ecommerce-btn ecommerce-btn-primary">
                Shop Now <FiArrowRight />
              </a>
              <a href="#categories" className="ecommerce-btn ecommerce-btn-secondary">
                Browse Categories
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="ecommerce-products" id="products">
        <div className="ecommerce-container">
          <div className="ecommerce-section-header">
            <h2>Featured <span>Products</span></h2>
            <p>Handpicked deals on premium electronics, fashion, and accessories</p>
          </div>
          <div className="ecommerce-products-grid">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="ecommerce-product-card"
              >
                <div className="ecommerce-product-image">
                  {product.icon}
                  <span className={`ecommerce-product-tag ecommerce-tag-${product.tag}`}>
                    {product.tag}
                  </span>
                </div>
                <div className="ecommerce-product-info">
                  <div className="ecommerce-product-category">{product.category}</div>
                  <h3>{product.name}</h3>
                  <div className="ecommerce-product-rating">
                    {'★'.repeat(Math.floor(product.rating))} {product.rating}
                    <span>({product.reviews})</span>
                  </div>
                  <div className="ecommerce-product-bottom">
                    <div>
                      <span className="ecommerce-product-price">{formatPrice(product.price)}</span>
                      <span className="ecommerce-product-old-price">{formatPrice(product.oldPrice)}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <button
                      className="ecommerce-btn ecommerce-btn-primary ecommerce-btn-sm"
                      style={{ flex: 1 }}
                      onClick={() => addToCart(product)}
                    >
                      <FiShoppingCart size={14} /> Add to Cart
                    </button>
                    <button
                      className="ecommerce-btn ecommerce-btn-secondary ecommerce-btn-sm"
                      onClick={() => openDemo('buy', product.name)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="ecommerce-categories" id="categories">
        <div className="ecommerce-container">
          <div className="ecommerce-section-header">
            <h2>Shop by <span>Category</span></h2>
            <p>Find exactly what you're looking for</p>
          </div>
          <div className="ecommerce-categories-grid">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="ecommerce-category-card"
              >
                <span className="ecommerce-category-icon">{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.count} Products</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="ecommerce-contact" id="contact">
        <div className="ecommerce-container">
          <div className="ecommerce-contact-grid">
            <div className="ecommerce-contact-info">
              <h2>Get in <span>Touch</span></h2>
              <p>Have questions about an order? Need help finding the perfect product? We're here for you.</p>
              <div className="ecommerce-info-item">
                <FiPhone /> <span>+91 98765 43210</span>
              </div>
              <div className="ecommerce-info-item">
                <FiMail /> <span>fitfocushub2@gmail.com</span>
              </div>
              <div className="ecommerce-info-item">
                <FiMapPin /> <span>example.com, Your City, India</span>
              </div>
              <div className="ecommerce-info-item">
                <FiClock /> <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="ecommerce-contact-form">
              <div className="ecommerce-form-row">
                <div className="ecommerce-form-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="ecommerce-form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div className="ecommerce-form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" />
              </div>
              <div className="ecommerce-form-group">
                <label>Message</label>
                <textarea placeholder="Write your message here..." />
              </div>
              <button
                className="ecommerce-btn ecommerce-btn-primary ecommerce-btn-full"
                onClick={() => openDemo('order', 'Contact Form')}
              >
                <FiSend /> Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name="Your Store" onSettingsClick={() => setShowSettings(true)} />

      {/* Cart Sidebar */}
      {showCart && (
        <>
          <div className="ecommerce-cart-overlay" onClick={() => setShowCart(false)} />
          <div className="ecommerce-cart-sidebar">
            <div className="ecommerce-cart-header">
              <h3>Your Cart ({cartCount})</h3>
              <button className="ecommerce-cart-close" onClick={() => setShowCart(false)}><FiX size={22} /></button>
            </div>
            <div className="ecommerce-cart-items">
              {cart.length === 0 ? (
                <div className="ecommerce-cart-empty">
                  <div className="ecommerce-cart-empty-icon"><FiShoppingCart size={48} /></div>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="ecommerce-cart-item">
                    <div className="ecommerce-cart-item-image">{item.icon}</div>
                    <div className="ecommerce-cart-item-details">
                      <h4>{item.name}</h4>
                      <p>{formatPrice(item.price)} × {item.qty}</p>
                    </div>
                    <button className="ecommerce-cart-item-remove" onClick={() => removeFromCart(item.id)}>
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="ecommerce-cart-footer">
                <div className="ecommerce-cart-total">
                  <span>Total</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <button
                  className="ecommerce-btn ecommerce-btn-primary ecommerce-btn-full"
                  onClick={() => openDemo('buy', 'Cart Items')}
                >
                  <FiShoppingCart /> Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* Toast */}
      {toast && (
        <div className="ecommerce-toast">
          <FiCheck size={18} /> {toast}
        </div>
      )}

      {/* Demo Modal */}
      <DemoModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalType}
        itemName={modalItem}
      />
    </div>
  );
}

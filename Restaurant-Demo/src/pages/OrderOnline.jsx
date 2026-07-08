import React, { useState } from 'react';
import { FiAlertTriangle, FiX, FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './OrderOnline.css';

export default function OrderOnline() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Bruschetta', price: 12, category: 'Starters' },
    { id: 2, name: 'Calamari', price: 15, category: 'Starters' },
    { id: 3, name: 'Grilled Salmon', price: 28, category: 'Mains' },
    { id: 4, name: 'Filet Mignon', price: 45, category: 'Mains' },
    { id: 5, name: 'Truffle Pasta', price: 22, category: 'Mains' },
    { id: 6, name: 'Tiramisu', price: 12, category: 'Desserts' },
    { id: 7, name: 'Chocolate Lava Cake', price: 14, category: 'Desserts' },
    { id: 8, name: 'House Wine', price: 10, category: 'Drinks' },
    { id: 9, name: 'Signature Cocktail', price: 14, category: 'Drinks' },
  ];

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, delta) => {
    setCart(cart.map(item => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setShowDemoModal(true);
  };

  return (
    <div className="order page-transition">
      <SEO
        title="Order Online"
        description="Order your favorite dishes online for delivery or pickup."
        keywords="order food online, food delivery, restaurant takeaway"
        url="https://example.com/order"
      />

      {/* Demo Warning Modal */}
      {showDemoModal && (
        <div className="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
          <div className="demo-modal glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDemoModal(false)}>
              <FiX />
            </button>
            <div className="demo-modal-icon">
              <FiAlertTriangle />
            </div>
            <h3 className="demo-modal-title">This is a Demo Website</h3>
            <p className="demo-modal-message">
              You cannot place orders or make payments on this demo website. 
              This is just a portfolio demonstration to showcase our web development skills.
            </p>
            <div className="demo-modal-actions">
              <button className="btn btn-primary" onClick={() => setShowDemoModal(false)}>
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="order-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Order <span className="gradient-text">Online</span>
            </h1>
            <p className="page-subtitle">
              Your favorite dishes delivered to your doorstep
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Order Section */}
      <section className="section order-section">
        <div className="container">
          <div className="order-grid">
            <AnimatedSection direction="left">
              <div className="menu-items">
                <h2 className="section-title">Our Menu</h2>
                <div className="items-grid">
                  {menuItems.map((item) => (
                    <div key={item.id} className="item-card glass-card">
                      <div className="item-info">
                        <span className="item-category">{item.category}</span>
                        <h3 className="item-name">{item.name}</h3>
                        <div className="item-price">${item.price}</div>
                      </div>
                      <button className="add-btn" onClick={() => addToCart(item)}>
                        <FiPlus /> Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="cart-section">
                <div className="cart-card glass-card">
                  <h3 className="cart-title">
                    <FiShoppingCart /> Your Order
                  </h3>
                  {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="cart-items">
                        {cart.map((item) => (
                          <div key={item.id} className="cart-item">
                            <div className="cart-item-info">
                              <h4>{item.name}</h4>
                              <p>${item.price} each</p>
                            </div>
                            <div className="cart-item-actions">
                              <button onClick={() => updateQuantity(item.id, -1)}>
                                <FiMinus />
                              </button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)}>
                                <FiPlus />
                              </button>
                              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                <FiX />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="cart-total">
                        <span>Total:</span>
                        <span className="total-amount">${getTotal()}</span>
                      </div>
                      <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleCheckout}>
                        Proceed to Checkout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaUtensils, FaWineGlassAlt, FaIceCream, FaLeaf } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Menu.css';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Starters', icon: <FaUtensils /> },
    { id: 'mains', name: 'Main Course', icon: <FaUtensils /> },
    { id: 'desserts', name: 'Desserts', icon: <FaIceCream /> },
    { id: 'drinks', name: 'Drinks', icon: <FaWineGlassAlt /> },
    { id: 'vegetarian', name: 'Vegetarian', icon: <FaLeaf /> },
  ];

  const menuItems = {
    starters: [
      { name: 'Bruschetta', price: '$12', description: 'Toasted bread with tomatoes, garlic, and basil' },
      { name: 'Calamari', price: '$15', description: 'Crispy fried squid with marinara sauce' },
      { name: 'Soup of the Day', price: '$10', description: 'Chef\'s daily selection' },
      { name: 'Garden Salad', price: '$11', description: 'Fresh greens with vinaigrette' },
    ],
    mains: [
      { name: 'Grilled Salmon', price: '$28', description: 'Fresh Atlantic salmon with herbs' },
      { name: 'Filet Mignon', price: '$45', description: 'Prime beef tenderloin' },
      { name: 'Truffle Pasta', price: '$22', description: 'Handmade pasta with black truffle' },
      { name: 'Roast Chicken', price: '$24', description: 'Herb-roasted half chicken' },
    ],
    desserts: [
      { name: 'Tiramisu', price: '$12', description: 'Classic Italian coffee dessert' },
      { name: 'Chocolate Lava Cake', price: '$14', description: 'Warm chocolate cake with molten center' },
      { name: 'Crème Brûlée', price: '$11', description: 'Vanilla custard with caramelized sugar' },
      { name: 'Gelato', price: '$8', description: 'Selection of Italian ice cream' },
    ],
    drinks: [
      { name: 'House Wine', price: '$10', description: 'Red or white by the glass' },
      { name: 'Signature Cocktail', price: '$14', description: 'Chef\'s special blend' },
      { name: 'Craft Beer', price: '$8', description: 'Local artisan selection' },
      { name: 'Fresh Juice', price: '$6', description: 'Squeezed to order' },
    ],
    vegetarian: [
      { name: 'Mushroom Risotto', price: '$18', description: 'Creamy arborio rice with wild mushrooms' },
      { name: 'Eggplant Parmesan', price: '$16', description: 'Baked with mozzarella and tomato sauce' },
      { name: 'Vegetable Curry', price: '$17', description: 'Seasonal vegetables in aromatic sauce' },
      { name: 'Caprese Salad', price: '$13', description: 'Fresh mozzarella, tomatoes, and basil' },
    ],
  };

  return (
    <div className="menu page-transition">
      <SEO
        title="Menu"
        description="Explore our exquisite menu featuring carefully crafted dishes for every palate."
        keywords="restaurant menu, food menu, dining menu, cuisine"
        url="https://example.com/menu"
      />

      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Our <span className="gradient-text">Menu</span>
            </h1>
            <p className="page-subtitle">
              A culinary journey through our carefully crafted dishes
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section menu-section">
        <div className="container">
          {/* Category Tabs */}
          <AnimatedSection>
            <div className="menu-categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Menu Items */}
          <div className="menu-grid">
            {menuItems[activeCategory].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="menu-card glass-card">
                  <div className="menu-item-header">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <div className="menu-item-price">{item.price}</div>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/order" className="btn btn-primary">
                Order Online <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
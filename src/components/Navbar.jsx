import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import config from '../data/config.json';
import './Navbar.css';

export default function Navbar({ isDark, toggleDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const message = encodeURIComponent('Hello! I am interested in your services. Can we discuss my project?');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/graphic-design', label: 'Design' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">FFH</div>
          <span className="logo-text">{config.agencyName}</span>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button onClick={toggleDark} className="dark-toggle" aria-label="Toggle dark mode">
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <a
            href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary navbar-cta"
          >
            Get Quote
          </a>
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a
              href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mobile-cta"
            >
              Get Quote on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

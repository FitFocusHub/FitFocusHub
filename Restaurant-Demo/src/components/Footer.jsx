import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import config from '../data/config.json';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <FaUtensils className="footer-logo-icon" />
              <span className="footer-logo-text">{config.agencyName}</span>
            </Link>
            <p className="footer-description">
              {config.description}
            </p>
            <div className="footer-social">
              <a href={config.social.instagram1} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href={config.social.instagram2} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href={config.social.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
              <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
              <li><Link to="/order">Order Online</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Services</h4>
            <ul>
              <li><Link to="/order">Dine-In</Link></li>
              <li><Link to="/order">Takeaway</Link></li>
              <li><Link to="/order">Delivery</Link></li>
              <li><Link to="/reservations">Private Events</Link></li>
              <li><Link to="/contact">Catering</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <span>{config.address}</span>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href={`tel:${config.phone}`}>{config.phone}</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⏰</span>
              <span>{config.businessHours}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {config.copyrightYear} {config.agencyName}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
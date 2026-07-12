import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import config from '../data/config.json';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Website Development', path: '/services' },
      { label: 'Landing Pages', path: '/services' },
      { label: 'Ecommerce', path: '/services' },
      { label: 'Logo Design', path: '/services' },
      { label: 'Video Editing', path: '/video-editing' },
      { label: 'AI Integration', path: '/services' },
    ],
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Portfolio', path: '/portfolio' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Process', path: '/process' },
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
    ],
  };

  const socialLinks = [
    { icon: FaInstagram, url: config.social.instagram, label: 'Instagram' },
    { icon: FaInstagram, url: config.social.instagram2, label: 'Instagram 2' },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">FFH</div>
              <span>{config.agencyName}</span>
            </Link>
            <p className="footer-description">{config.description}</p>
            <div className="footer-contact">
              <a href={`mailto:${config.email}`} className="contact-item">
                <FiMail size={16} />
                <span>{config.email}</span>
              </a>
              <a href={`tel:${config.phone}`} className="contact-item">
                <FiPhone size={16} />
                <span>{config.phone}</span>
              </a>
              <div className="contact-item">
                <FiMapPin size={16} />
                <span>{config.address}</span>
              </div>
            </div>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <FiArrowRight size={14} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <FiArrowRight size={14} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4 className="footer-title">Stay Connected</h4>
            <p className="newsletter-text">
              Follow us on social media for the latest updates and digital tips.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${config.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary footer-cta"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} {config.agencyName}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

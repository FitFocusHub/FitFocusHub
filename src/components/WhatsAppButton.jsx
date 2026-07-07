import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import config from '../data/config.json';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const message = encodeURIComponent('Hello! I am interested in your services. Can we discuss my project?');

  const contacts = [
    {
      name: 'Contact 1',
      number: '+91 - 99302 71670',
      url: `https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${message}`
    },
    {
      name: 'Contact 2',
      number: '+91 - 92365 33856',
      url: `https://api.whatsapp.com/send?phone=${config.whatsapp2}&text=${message}`
    }
  ];

  return (
    <div className="whatsapp-container">
      {/* Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="whatsapp-popup"
          >
            <div className="popup-header">
              <h4>Chat with us</h4>
              <button onClick={() => setIsOpen(false)} className="popup-close">
                <FiX size={18} />
              </button>
            </div>
            <div className="popup-contacts">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-contact"
                >
                  <div className="contact-avatar">
                    <FaWhatsapp size={20} />
                  </div>
                  <div className="contact-info">
                    <span className="contact-name">{contact.name}</span>
                    <span className="contact-number">{contact.number}</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        className="whatsapp-button"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.button>
    </div>
  );
}

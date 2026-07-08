import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import config from '../data/config.json';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const message = encodeURIComponent('Hello! I would like to make a reservation or order.');

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${message}`}
      className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
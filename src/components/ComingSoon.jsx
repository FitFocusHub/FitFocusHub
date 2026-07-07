import React from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import './ComingSoon.css';

export default function ComingSoon({ title = 'Coming Soon', description = 'This content is being prepared and will be available soon.' }) {
  return (
    <div className="coming-soon">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="coming-soon-content"
      >
        <div className="coming-soon-icon">
          <FiClock size={48} />
        </div>
        <h2 className="coming-soon-title">{title}</h2>
        <p className="coming-soon-description">{description}</p>
        <div className="coming-soon-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
      </motion.div>
    </div>
  );
}

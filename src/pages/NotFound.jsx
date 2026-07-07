import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiHome } from 'react-icons/fi';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found page-transition">
      <div className="not-found-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="not-found-number"
        >
          404
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="not-found-title"
        >
          Page Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="not-found-desc"
        >
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="not-found-buttons"
        >
          <Link to="/" className="btn btn-primary">
            <FiHome /> Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-secondary">
            <FiArrowLeft /> Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}

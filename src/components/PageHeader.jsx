import React from 'react';
import { motion } from 'framer-motion';
import './PageHeader.css';

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-header">
      <div className="page-header-bg">
        <div className="header-glow"></div>
        <div className="header-grid-pattern"></div>
      </div>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="page-header-content"
        >
          {breadcrumbs.length > 0 && (
            <div className="breadcrumbs">
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  {index > 0 && <span className="breadcrumb-separator">/</span>}
                  {crumb.link ? (
                    <a href={crumb.link} className="breadcrumb-link">{crumb.label}</a>
                  ) : (
                    <span className="breadcrumb-current">{crumb.label}</span>
                  )}
                </span>
              ))}
            </div>
          )}
          <h1 className="page-title">{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}

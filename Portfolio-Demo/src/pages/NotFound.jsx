import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiHome } from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found page-transition">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        keywords="404, page not found"
        url="https://example.com/404"
      />

      <section className="not-found-section">
        <div className="container">
          <AnimatedSection>
            <div className="not-found-content">
              <FaPalette className="not-found-icon" />
              <h1 className="not-found-title">404</h1>
              <h2 className="not-found-subtitle">Page Not Found</h2>
              <p className="not-found-description">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="not-found-actions">
                <Link to="/" className="btn btn-primary">
                  <FiHome /> Go Home
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Support
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
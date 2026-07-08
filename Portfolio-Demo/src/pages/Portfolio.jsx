import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaPalette, FaPaintBrush, FaVideo, FaImage } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Portfolio.css';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'graphic-design', name: 'Graphic Design' },
    { id: 'video-editing', name: 'Video Editing' },
    { id: 'thumbnails', name: 'Thumbnails' },
    { id: 'web-development', name: 'Web Development' },
  ];

  const projects = [
    { id: 1, name: 'Brand Identity for TechStart', category: 'graphic-design', icon: <FaPaintBrush /> },
    { id: 2, name: 'Product Launch Video', category: 'video-editing', icon: <FaVideo /> },
    { id: 3, name: 'YouTube Thumbnail Series', category: 'thumbnails', icon: <FaImage /> },
    { id: 4, name: 'E-commerce Website', category: 'web-development', icon: <FaPalette /> },
    { id: 5, name: 'Restaurant Menu Design', category: 'graphic-design', icon: <FaPaintBrush /> },
    { id: 6, name: 'Corporate Training Video', category: 'video-editing', icon: <FaVideo /> },
    { id: 7, name: 'Gaming Thumbnails', category: 'thumbnails', icon: <FaImage /> },
    { id: 8, name: 'Portfolio Website', category: 'web-development', icon: <FaPalette /> },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="portfolio page-transition">
      <SEO
        title="Portfolio"
        description="Explore our portfolio of creative projects showcasing our design and development expertise."
        keywords="design portfolio, graphic design work, video editing projects"
        url="https://example.com/portfolio"
      />

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="page-subtitle">
              Explore our latest projects and creative work
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section portfolio-section">
        <div className="container">
          {/* Category Filter */}
          <AnimatedSection>
            <div className="portfolio-categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <div className="project-card glass-card">
                  <div className="project-image">
                    <div className="image-placeholder">
                      {project.icon}
                    </div>
                    <div className="project-overlay">
                      <span className="view-project">View Project</span>
                    </div>
                  </div>
                  <div className="project-info">
                    <span className="project-category">{project.category.replace('-', ' ')}</span>
                    <h3 className="project-name">{project.name}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <AnimatedSection>
            <div className="cta-card">
              <h2 className="cta-title">Like What You See?</h2>
              <p className="cta-description">
                Let's discuss your project and create something amazing together.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start a Project <FiArrowRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
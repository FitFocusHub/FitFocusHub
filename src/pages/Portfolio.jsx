import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiFilter, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';
import projects from '../data/projects.json';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import ComingSoon from '../components/ComingSoon';
import { SEO } from '../components/SEO';
import ScreenProtection from '../components/ScreenProtection';
import './Portfolio.css';

const categories = ['All', ...new Set(projects.map(p => p.category))];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'name', label: 'Name' },
];

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.technologies.some(t => t.toLowerCase().includes(term))
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case 'newest':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'oldest':
        result.sort((a, b) => a.year - b.year);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="portfolio-page page-transition">
      <ScreenProtection />
      <SEO
        title="Portfolio"
        description="View our portfolio of website development, graphic design, video editing, and digital marketing projects. See how we help businesses grow online."
        keywords="web design portfolio, website development projects, graphic design portfolio, video editing samples, ecommerce websites, landing pages, digital agency work"
        url="https://fitfocushub.github.io/FitFocusHub/portfolio"
      />
      <PageHeader
        title="Our Portfolio"
        subtitle="Explore our collection of projects that showcase our expertise and creativity"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Portfolio' },
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="portfolio-filters">
            <div className="search-box">
              <FiSearch size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-group">
              <FiFilter size={16} />
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link to={`/portfolio/${project.slug}`} className="project-card">
                      <div className="project-thumb">
                        {project.thumbnail ? (
                          <img src={project.thumbnail} alt={project.name} />
                        ) : (
                          <div className="project-placeholder">
                            <FaGlobe size={48} />
                          </div>
                        )}
                        <div className="project-overlay">
                          <span className="view-project-btn">View Details</span>
                        </div>
                        {project.featured && (
                          <span className="featured-badge">Featured</span>
                        )}
                      </div>
                      <div className="project-info">
                        <div className="project-header">
                          <span className="project-category">{project.category}</span>
                          {project.price && <span className="project-price">{project.price}</span>}
                        </div>
                        <h3 className="project-name">{project.name}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="project-tech">
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                        <div className="project-links">
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink size={14} /> Live Demo
                          </a>
                          <span className="project-link request-link">
                            Request Similar <FiArrowRight size={14} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <ComingSoon
              title="No Projects Found"
              description="Try adjusting your search or filter criteria."
            />
          )}
        </div>
      </section>
    </div>
  );
}

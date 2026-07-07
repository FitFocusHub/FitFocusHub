import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiCheck, FiMessageCircle } from 'react-icons/fi';
import { FaGlobe } from 'react-icons/fa';
import projects from '../data/projects.json';
import config from '../data/config.json';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import ComingSoon from '../components/ComingSoon';
import './ProjectDetails.css';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="page-transition">
        <PageHeader
          title="Project Not Found"
          subtitle="The project you are looking for does not exist."
          breadcrumbs={[
            { label: 'Home', link: '/' },
            { label: 'Portfolio', link: '/portfolio' },
            { label: 'Not Found' },
          ]}
        />
        <section className="section">
          <div className="container">
            <ComingSoon
              title="Project Not Found"
              description="The project you are looking for may have been removed or is temporarily unavailable."
            />
            <div className="text-center" style={{ marginTop: '40px' }}>
              <Link to="/portfolio" className="btn btn-primary">
                <FiArrowLeft /> Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="project-details-page page-transition">
      <PageHeader
        title={project.name}
        subtitle={project.description}
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Portfolio', link: '/portfolio' },
          { label: project.name },
        ]}
      />

      <section className="section">
        <div className="container">
          <AnimatedSection>
            <Link to="/portfolio" className="back-link">
              <FiArrowLeft /> Back to Portfolio
            </Link>
          </AnimatedSection>

          {/* Project Gallery */}
          <AnimatedSection>
            <div className="project-gallery">
              {project.gallery && project.gallery.length > 0 ? (
                project.gallery.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${project.name} screenshot ${index + 1}`} />
                  </div>
                ))
              ) : (
                <div className="gallery-placeholder">
                  <FaGlobe size={64} />
                  <p>Project Preview Coming Soon</p>
                </div>
              )}
            </div>
          </AnimatedSection>

          <div className="project-details-grid">
            {/* Project Info */}
            <AnimatedSection>
              <div className="project-info-card glass-card">
                <h3 className="info-title">Project Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Client</span>
                    <span className="info-value">{project.client}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Category</span>
                    <span className="info-value">{project.category}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Year</span>
                    <span className="info-value">{project.year}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Duration</span>
                    <span className="info-value">{project.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Status</span>
                    <span className="info-value status-completed">{project.status}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection>
              <div className="project-info-card glass-card">
                <h3 className="info-title">Features</h3>
                <div className="features-list">
                  {project.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FiCheck size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Technologies */}
            <AnimatedSection>
              <div className="project-info-card glass-card">
                <h3 className="info-title">Technologies Used</h3>
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Pages */}
            <AnimatedSection>
              <div className="project-info-card glass-card">
                <h3 className="info-title">Pages Included</h3>
                <div className="pages-list">
                  {project.pages.map((page, index) => (
                    <span key={index} className="page-item">
                      {page}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Action Buttons */}
          <AnimatedSection>
            <div className="project-actions">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                <FiExternalLink /> Live Demo
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${config.whatsapp}&text=${encodeURIComponent(`Hello! I would like a similar website to ${project.name}. Can we discuss?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                <FiMessageCircle /> Request Similar Website
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

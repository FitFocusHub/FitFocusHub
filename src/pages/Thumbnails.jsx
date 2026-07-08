import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import ComingSoon from '../components/ComingSoon';
import Modal from '../components/Modal';
import { SEO } from '../components/SEO';
import ScreenProtection from '../components/ScreenProtection';
import thumbnails from '../data/thumbnails.json';
import './Thumbnails.css';

const categories = ['All', 'Gaming', 'AI', 'Business', 'Finance', 'Technology', 'Educational', 'YouTube'];

export default function Thumbnails() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredThumbnails = activeCategory === 'All'
    ? thumbnails
    : thumbnails.filter(t => t.category === activeCategory);

  return (
    <div className="thumbnails-page page-transition">
      <ScreenProtection />
      <SEO
        title="Thumbnails"
        description="Professional thumbnail design for YouTube, gaming, AI, business, and educational content. Eye-catching designs that boost click-through rates."
        keywords="thumbnail design, YouTube thumbnail, gaming thumbnail, custom thumbnail, click-through rate, video thumbnail designer"
        url="https://fitfocushub.github.io/FitFocusHub/thumbnails"
      />
      <PageHeader
        title="Thumbnails"
        subtitle="Eye-catching thumbnails that boost click-through rates and make your content stand out"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Thumbnails' },
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="thumb-tabs">
            {categories.map(category => (
              <button
                key={category}
                className={`thumb-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Thumbnails Grid */}
          <AnimatePresence mode="wait">
            {filteredThumbnails.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="thumb-grid"
              >
                {filteredThumbnails.map((thumb, index) => (
                  <motion.div
                    key={thumb.id || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="thumb-card"
                    onClick={() => setSelectedItem(thumb)}
                  >
                    <div className="thumb-image">
                      {thumb.image ? (
                        <img src={thumb.image} alt={thumb.title || 'Thumbnail'} />
                      ) : (
                        <div className="thumb-placeholder">
                          <span>{thumb.title || 'Thumbnail'}</span>
                        </div>
                      )}
                      <div className="thumb-overlay">
                        <span>Preview</span>
                      </div>
                    </div>
                    {thumb.title && (
                      <div className="thumb-info">
                        <h4 className="thumb-title">{thumb.title}</h4>
                        <span className="thumb-category">{thumb.category}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <ComingSoon
                title="Thumbnails Coming Soon"
                description="New thumbnail designs are being created. Check back soon!"
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Preview Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || 'Thumbnail Preview'}
      >
        {selectedItem?.image ? (
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        ) : (
          <div className="modal-placeholder">
            <p>Full preview coming soon</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

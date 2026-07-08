import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import ComingSoon from '../components/ComingSoon';
import Modal from '../components/Modal';
import { SEO } from '../components/SEO';
import ScreenProtection from '../components/ScreenProtection';
import posters from '../data/posters.json';
import logos from '../data/logos.json';
import businessCards from '../data/businessCards.json';
import './GraphicDesign.css';

const categories = [
  { id: 'posters', label: 'Posters', data: posters },
  { id: 'logos', label: 'Logos', data: logos },
  { id: 'business-cards', label: 'Business Cards', data: businessCards },
  { id: 'instagram', label: 'Instagram Posts', data: [] },
  { id: 'flyers', label: 'Flyers', data: [] },
  { id: 'digital-cards', label: 'Digital Business Cards', data: [] },
];

export default function GraphicDesign() {
  const [activeCategory, setActiveCategory] = useState('posters');
  const [selectedItem, setSelectedItem] = useState(null);

  const activeData = categories.find(c => c.id === activeCategory)?.data || [];

  return (
    <div className="graphic-design-page page-transition">
      <ScreenProtection />
      <SEO
        title="Graphic Design"
        description="Professional graphic design services: poster design, logo design, business card design, Instagram posts, flyers, and digital business cards."
        keywords="poster design, logo design, business card design, graphic designer, Instagram post design, flyer design, digital business card, brand identity"
        url="https://fitfocushub.github.io/FitFocusHub/graphic-design"
      />
      <PageHeader
        title="Graphic Design"
        subtitle="Stunning visual designs that capture attention and communicate your brand message"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Graphic Design' },
        ]}
      />

      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="design-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`design-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <AnimatePresence mode="wait">
            {activeData.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="design-gallery"
              >
                {activeData.map((item, index) => (
                  <motion.div
                    key={item.id || index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="design-item"
                    onClick={() => setSelectedItem(item)}
                  >
                    {item.image ? (
                      <img src={item.image} alt={item.title || 'Design'} />
                    ) : (
                      <div className="design-placeholder">
                        <span>{item.title || 'Design'}</span>
                      </div>
                    )}
                    <div className="design-overlay">
                      <span>View Design</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <ComingSoon
                title={`${categories.find(c => c.id === activeCategory)?.label} Coming Soon`}
                description="New designs are being created. Check back soon for updates!"
              />
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Preview Modal */}
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || 'Design Preview'}
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

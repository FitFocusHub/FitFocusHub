import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiClock, FiTag } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import PageHeader from '../components/PageHeader';
import ComingSoon from '../components/ComingSoon';
import Modal from '../components/Modal';
import { SEO } from '../components/SEO';
import videos from '../data/videos.json';
import './VideoEditing.css';

export default function VideoEditing() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="video-editing-page page-transition">
      <SEO
        title="Video Editing"
        description="Professional video editing services: color grading, motion graphics, sound design, masking, 4K export, and social media formats."
        keywords="video editing, professional video editor, color grading, motion graphics, YouTube video editing, reels editing, masking, video post production"
        url="https://fitfocushub.github.io/FitFocusHub/video-editing"
      />
      <PageHeader
        title="Video Editing"
        subtitle="Professional video editing services that bring your stories to life with cinematic quality"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Video Editing' },
        ]}
      />

      <section className="section">
        <div className="container">
          {videos.length > 0 ? (
            <div className="video-grid">
              {videos.map((video, index) => (
                <AnimatedSection key={video.id || index} delay={index * 0.1}>
                  <div className="video-card glass-card">
                    <div className="video-thumb">
                      {video.thumbnail ? (
                        <img src={video.thumbnail} alt={video.title} />
                      ) : (
                        <div className="video-placeholder">
                          <FiPlay size={48} />
                        </div>
                      )}
                      <button
                        className="play-btn"
                        onClick={() => setSelectedVideo(video)}
                        aria-label="Play video"
                      >
                        <FiPlay size={24} />
                      </button>
                      {video.duration && (
                        <span className="video-duration">
                          <FiClock size={12} />
                          {video.duration}
                        </span>
                      )}
                    </div>
                    <div className="video-info">
                      <h3 className="video-title">{video.title}</h3>
                      {video.category && (
                        <span className="video-category">
                          <FiTag size={12} />
                          {video.category}
                        </span>
                      )}
                      <p className="video-desc">{video.description}</p>
                      <button
                        className="btn btn-outline btn-sm"
                        onClick={() => setSelectedVideo(video)}
                      >
                        <FiPlay /> Watch Demo
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <ComingSoon
              title="Videos Coming Soon"
              description="Our video editing showcase is being prepared. Check back soon for amazing content!"
            />
          )}
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title || 'Video Preview'}
      >
        {selectedVideo?.videoUrl ? (
          <div className="video-player">
            <video
              controls
              autoPlay
              src={selectedVideo.videoUrl}
              style={{ width: '100%', borderRadius: '8px' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="video-modal-placeholder">
            <FiPlay size={64} />
            <p>Demo video coming soon</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

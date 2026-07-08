import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiAlertTriangle } from 'react-icons/fi';

export default function DemoModal({ isOpen, onClose, type, itemName }) {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 9999, padding: '20px'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: '#1a1a2e', borderRadius: '20px', padding: '40px',
            maxWidth: '450px', width: '100%', textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.1)', position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'none', border: 'none', color: '#9ca3af',
              cursor: 'pointer', fontSize: '20px'
            }}
          >
            <FiX size={24} />
          </button>
          <div style={{
            width: '70px', height: '70px', borderRadius: '50%',
            background: 'rgba(251, 191, 36, 0.1)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px', color: '#fbbf24', fontSize: '32px'
          }}>
            <FiAlertTriangle size={32} />
          </div>
          <h2 style={{ color: '#fff', fontSize: '24px', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
            Demo Website
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', lineHeight: '1.6', marginBottom: '8px' }}>
            This is a <strong style={{ color: '#fbbf24' }}>demo template</strong> created by FitFocusHub.
          </p>
          <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
            {type === 'buy' && `You cannot purchase "${itemName}" on this demo website. Contact us to get a real website for your business.`}
            {type === 'order' && `You cannot place orders on this demo website. Contact us to get a real website for your business.`}
            {type === 'membership' && `You cannot buy membership on this demo website. Contact us to get a real website for your business.`}
            {type === 'booking' && `You cannot make bookings on this demo website. Contact us to get a real website for your business.`}
            {!type && `You cannot perform this action on this demo website. Contact us to get a real website for your business.`}
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=919930271670&text=${encodeURIComponent(`Hi! I want a real website like this demo. Can we discuss?`)}`}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', borderRadius: '10px', background: '#25D366',
              color: '#fff', fontWeight: '700', fontSize: '15px',
              textDecoration: 'none', transition: 'all 0.3s ease'
            }}
          >
            Contact on WhatsApp
          </a>
          <p style={{ color: '#4b5563', fontSize: '12px', marginTop: '16px' }}>
            Email: fitfocushub2@gmail.com
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

import React from 'react';
import { FiSettings, FiInstagram, FiMail } from 'react-icons/fi';

export default function TemplateFooter({ name, onSettingsClick }) {
  return (
    <footer style={{
      background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '32px 20px', textAlign: 'center'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '16px', flexWrap: 'wrap' }}>
          <a href="https://www.instagram.com/mohammad_s4kib" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FiInstagram /> @mohammad_s4kib
          </a>
          <a href="https://www.instagram.com/abhaytiwari6434" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FiInstagram /> @abhaytiwari6434
          </a>
          <a href="mailto:fitfocushub2@gmail.com"
            style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FiMail /> fitfocushub2@gmail.com
          </a>
        </div>
        <p style={{ color: '#4b5563', fontSize: '12px', marginBottom: '12px' }}>
          Demo template by FitFocusHub - Example.com | Your Website Name
        </p>
        <button onClick={onSettingsClick} style={{
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          color: '#9ca3af', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px'
        }}>
          <FiSettings /> API Settings
        </button>
      </div>
    </footer>
  );
}

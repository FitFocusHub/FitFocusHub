import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiKey, FiSave, FiCheck, FiArrowLeft } from 'react-icons/fi';

const defaultSettings = {
  razorpay_key: '',
  stripe_key: '',
  google_maps_key: '',
  firebase_key: '',
  smtp_host: '',
  smtp_port: '',
  smtp_user: '',
  smtp_pass: '',
  analytics_id: '',
  instagram_token: '',
};

export default function Settings({ onBack }) {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('demo_settings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem('demo_settings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const fields = [
    { key: 'razorpay_key', label: 'Razorpay API Key', placeholder: 'rzp_test_xxxxx' },
    { key: 'stripe_key', label: 'Stripe API Key', placeholder: 'sk_test_xxxxx' },
    { key: 'google_maps_key', label: 'Google Maps API Key', placeholder: 'AIzaSyxxxxx' },
    { key: 'firebase_key', label: 'Firebase Config (JSON)', placeholder: '{"apiKey":"...","authDomain":"..."}' },
    { key: 'smtp_host', label: 'SMTP Host', placeholder: 'smtp.gmail.com' },
    { key: 'smtp_port', label: 'SMTP Port', placeholder: '587' },
    { key: 'smtp_user', label: 'SMTP Username', placeholder: 'your@email.com' },
    { key: 'smtp_pass', label: 'SMTP Password', placeholder: '••••••••' },
    { key: 'analytics_id', label: 'Google Analytics ID', placeholder: 'G-XXXXXXXXXX' },
    { key: 'instagram_token', label: 'Instagram Access Token', placeholder: 'IGQVxxxxx' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f23', padding: '40px 20px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <button onClick={onBack} style={{
          background: 'none', border: 'none', color: '#9ca3af',
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          gap: '8px', marginBottom: '32px', fontSize: '14px'
        }}>
          <FiArrowLeft /> Back to Website
        </button>

        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <FiKey size={24} style={{ color: '#fbbf24' }} />
            <h1 style={{ color: '#fff', fontSize: '24px', fontFamily: 'Space Grotesk, sans-serif' }}>
              API Settings
            </h1>
          </div>
          <p style={{ color: '#6b7280', marginBottom: '32px', fontSize: '14px' }}>
            Add your API keys here. They will be stored locally in your browser.
          </p>

          {fields.map(field => (
            <div key={field.key} style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block', color: '#d1d5db', fontSize: '14px',
                fontWeight: '600', marginBottom: '6px'
              }}>
                {field.label}
              </label>
              <input
                type={field.key.includes('pass') ? 'password' : 'text'}
                value={settings[field.key]}
                onChange={e => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                  color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
                }}
              />
            </div>
          ))}

          <button onClick={handleSave} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '14px 32px', borderRadius: '10px',
            background: saved ? '#22c55e' : '#3b82f6',
            color: '#fff', fontWeight: '700', fontSize: '15px',
            border: 'none', cursor: 'pointer', marginTop: '16px',
            transition: 'all 0.3s ease', width: '100%', justifyContent: 'center'
          }}>
            {saved ? <><FiCheck /> Saved!</> : <><FiSave /> Save Settings</>}
          </button>
        </div>
      </div>
    </div>
  );
}

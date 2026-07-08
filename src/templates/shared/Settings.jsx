import React, { useState } from 'react';
import { FiKey, FiSave, FiCheck, FiArrowLeft, FiDatabase, FiCreditCard } from 'react-icons/fi';

const defaultSettings = {
  firebase_api_key: '',
  firebase_auth_domain: '',
  firebase_project_id: '',
  firebase_storage_bucket: '',
  firebase_messagingSenderId: '',
  firebase_app_id: '',
  razorpay_key_id: '',
  razorpay_key_secret: '',
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

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
    color: '#fff', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block', color: '#d1d5db', fontSize: '14px', fontWeight: '600', marginBottom: '6px'
  };

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
          borderRadius: '16px', padding: '32px', marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <FiDatabase size={24} style={{ color: '#fbbf24' }} />
            <h2 style={{ color: '#fff', fontSize: '20px', fontFamily: 'Space Grotesk, sans-serif', margin: 0 }}>
              Firebase Configuration
            </h2>
          </div>
          <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '13px' }}>
            Authentication + Realtime Database
          </p>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>API Key</label>
            <input type="text" value={settings.firebase_api_key}
              onChange={e => handleChange('firebase_api_key', e.target.value)}
              placeholder="AIzaSyxxxxx" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Auth Domain</label>
            <input type="text" value={settings.firebase_auth_domain}
              onChange={e => handleChange('firebase_auth_domain', e.target.value)}
              placeholder="your-app.firebaseapp.com" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Project ID</label>
            <input type="text" value={settings.firebase_project_id}
              onChange={e => handleChange('firebase_project_id', e.target.value)}
              placeholder="your-project-id" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Storage Bucket</label>
            <input type="text" value={settings.firebase_storage_bucket}
              onChange={e => handleChange('firebase_storage_bucket', e.target.value)}
              placeholder="your-app.appspot.com" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Messaging Sender ID</label>
            <input type="text" value={settings.firebase_messagingSenderId}
              onChange={e => handleChange('firebase_messagingSenderId', e.target.value)}
              placeholder="123456789" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>App ID</label>
            <input type="text" value={settings.firebase_app_id}
              onChange={e => handleChange('firebase_app_id', e.target.value)}
              placeholder="1:123456789:web:xxxxx" style={inputStyle} />
          </div>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px', padding: '32px', marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <FiCreditCard size={24} style={{ color: '#fbbf24' }} />
            <h2 style={{ color: '#fff', fontSize: '20px', fontFamily: 'Space Grotesk, sans-serif', margin: 0 }}>
              Razorpay Configuration
            </h2>
          </div>
          <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '13px' }}>
            Payment gateway for online transactions
          </p>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Key ID</label>
            <input type="text" value={settings.razorpay_key_id}
              onChange={e => handleChange('razorpay_key_id', e.target.value)}
              placeholder="rzp_test_xxxxx" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle}>Key Secret</label>
            <input type="password" value={settings.razorpay_key_secret}
              onChange={e => handleChange('razorpay_key_secret', e.target.value)}
              placeholder="xxxxxxxxxxxxxx" style={inputStyle} />
          </div>
        </div>

        <button onClick={handleSave} style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '14px 32px', borderRadius: '10px',
          background: saved ? '#22c55e' : '#3b82f6',
          color: '#fff', fontWeight: '700', fontSize: '15px',
          border: 'none', cursor: 'pointer', width: '100%', justifyContent: 'center'
        }}>
          {saved ? <><FiCheck /> Saved!</> : <><FiSave /> Save Settings</>}
        </button>
      </div>
    </div>
  );
}

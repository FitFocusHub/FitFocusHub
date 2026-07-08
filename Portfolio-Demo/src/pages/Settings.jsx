import React, { useState, useEffect } from 'react';
import { FiSave, FiAlertTriangle, FiCheck } from 'react-icons/fi';
import AnimatedSection from '../components/AnimatedSection';
import { SEO } from '../components/SEO';
import './Settings.css';

export default function Settings() {
  const [apiSettings, setApiSettings] = useState({
    paymentGateway: '',
    emailService: '',
    analytics: '',
    smsService: '',
    cloudStorage: '',
    mapsApi: ''
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedSettings = localStorage.getItem('apiSettings');
    if (savedSettings) {
      setApiSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApiSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('apiSettings', JSON.stringify(apiSettings));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const apiFields = [
    {
      name: 'paymentGateway',
      label: 'Payment Gateway API',
      placeholder: 'Enter your payment gateway API key',
      description: 'API key for payment processing (Stripe, Razorpay, etc.)'
    },
    {
      name: 'emailService',
      label: 'Email Service API',
      placeholder: 'Enter your email service API key',
      description: 'API key for email notifications (SendGrid, Mailgun, etc.)'
    },
    {
      name: 'analytics',
      label: 'Analytics API',
      placeholder: 'Enter your analytics API key',
      description: 'API key for website analytics (Google Analytics, etc.)'
    },
    {
      name: 'smsService',
      label: 'SMS Service API',
      placeholder: 'Enter your SMS service API key',
      description: 'API key for SMS notifications (Twilio, etc.)'
    },
    {
      name: 'cloudStorage',
      label: 'Cloud Storage API',
      placeholder: 'Enter your cloud storage API key',
      description: 'API key for cloud storage (AWS S3, Cloudinary, etc.)'
    },
    {
      name: 'mapsApi',
      label: 'Maps API',
      placeholder: 'Enter your maps API key',
      description: 'API key for maps integration (Google Maps, etc.)'
    }
  ];

  return (
    <div className="settings page-transition">
      <SEO
        title="Settings"
        description="Configure API keys and settings for your website."
        keywords="settings, API configuration, website settings"
        url="https://example.com/settings"
      />

      {/* Hero Section */}
      <section className="settings-hero">
        <div className="container">
          <AnimatedSection>
            <h1 className="page-title">
              <span className="gradient-text">Settings</span>
            </h1>
            <p className="page-subtitle">
              Configure your API keys and website settings
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Settings Section */}
      <section className="section settings-section">
        <div className="container">
          <div className="settings-grid">
            <AnimatedSection direction="left">
              <div className="settings-sidebar">
                <h2 className="section-title">API Configuration</h2>
                <p className="settings-desc">
                  Enter your API keys in the fields below. These keys are stored locally 
                  in your browser and are never sent to our servers.
                </p>
                <div className="demo-notice glass-card">
                  <FiAlertTriangle className="notice-icon" />
                  <div className="notice-content">
                    <h4>Demo Website Notice</h4>
                    <p>
                      This is a demo website. API keys entered here are for demonstration 
                      purposes only and will not be used for actual integrations.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="settings-form glass-card">
                <div className="form-header">
                  <h3>API Keys</h3>
                  {saved && (
                    <div className="save-success">
                      <FiCheck /> Settings saved successfully!
                    </div>
                  )}
                </div>
                
                <div className="api-fields">
                  {apiFields.map((field) => (
                    <div key={field.name} className="api-field">
                      <label htmlFor={field.name}>{field.label}</label>
                      <p className="field-description">{field.description}</p>
                      <input
                        type="password"
                        id={field.name}
                        name={field.name}
                        value={apiSettings[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary" onClick={handleSave}>
                    <FiSave /> Save Settings
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
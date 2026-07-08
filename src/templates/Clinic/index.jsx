import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiHeart, FiShield, FiAward, FiCheckCircle, FiActivity, FiSmile, FiEye } from 'react-icons/fi';
import { FaStethoscope } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import TemplateFooter from '../shared/TemplateFooter';
import Settings from '../shared/Settings';
import './ClinicTemplate.css';

const departments = [
  { icon: <FiHeart />, title: "Cardiology", desc: "Expert heart care with advanced diagnostics and treatment for all cardiac conditions." },
  { icon: <FiSmile />, title: "Dental Care", desc: "Complete dental solutions from routine checkups to advanced cosmetic procedures." },
  { icon: <FiEye />, title: "Eye Care", desc: "Comprehensive vision care including LASIK, cataract surgery, and retinal treatments." },
  { icon: <FiActivity />, title: "General Medicine", desc: "Primary healthcare services for adults including preventive care and chronic disease management." }
];

const doctors = [
  { name: "Dr. Anita Desai", specialty: "Cardiologist", experience: "15+ years experience", initials: "AD" },
  { name: "Dr. Rajesh Kumar", specialty: "Dental Surgeon", experience: "12+ years experience", initials: "RK" },
  { name: "Dr. Sneha Patel", specialty: "Ophthalmologist", experience: "10+ years experience", initials: "SP" },
  { name: "Dr. Vikram Singh", specialty: "General Physician", experience: "18+ years experience", initials: "VS" }
];

const features = [
  { icon: <FiShield />, text: "100% Safe Procedures" },
  { icon: <FiAward />, text: "Award-Winning Doctors" },
  { icon: <FiCheckCircle />, text: "Insurance Accepted" }
];

export default function ClinicTemplate() {
  const [demoModal, setDemoModal] = useState({ isOpen: false, type: '', itemName: '' });
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  const openDemoModal = (type, itemName) => {
    setDemoModal({ isOpen: true, type, itemName });
  };

  return (
    <div className="clinic-template">
      {/* Navbar */}
      <nav className="cl-navbar">
        <div className="cl-logo">
          <FaStethoscope /> Your Clinic
        </div>
        <ul className="cl-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#departments">Departments</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#appointment">Appointment</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#appointment" className="cl-nav-cta">Book Now</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="cl-hero" id="home">
        <div className="cl-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="cl-hero-badge">
              <FiShield /> Trusted Healthcare
            </span>
            <h1>Your Health Is Our <span>Top Priority</span></h1>
            <p>Experience world-class healthcare with our team of expert doctors and state-of-the-art medical facilities. Your well-being is in safe hands.</p>
            <div className="cl-hero-buttons">
              <button onClick={() => openDemoModal('booking', 'Appointment')} className="cl-btn cl-btn-primary">
                Book Appointment <FiArrowRight />
              </button>
              <a href="tel:+919876543210" className="cl-btn cl-btn-secondary">
                <FiPhone /> Emergency Call
              </a>
            </div>
            <div className="cl-hero-features">
              {features.map((feature, index) => (
                <div key={index} className="cl-hero-feature">
                  {feature.icon} <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="cl-departments" id="departments">
        <div className="cl-section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Departments
          </motion.h2>
          <p>Comprehensive medical care across multiple specialties</p>
        </div>
        <div className="cl-departments-grid">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cl-dept-card"
              onClick={() => openDemoModal('booking', dept.title)}
            >
              <div className="cl-dept-icon">{dept.icon}</div>
              <h3>{dept.title}</h3>
              <p>{dept.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="cl-doctors" id="doctors">
        <div className="cl-section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet Our Doctors
          </motion.h2>
          <p>Expert medical professionals dedicated to your health</p>
        </div>
        <div className="cl-doctors-grid">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cl-doctor-card"
            >
              <div className="cl-doctor-avatar">{doctor.initials}</div>
              <h3>{doctor.name}</h3>
              <p className="cl-doctor-specialty">{doctor.specialty}</p>
              <p className="cl-doctor-exp">{doctor.experience}</p>
              <button onClick={() => openDemoModal('booking', `Appointment with ${doctor.name}`)} className="cl-btn cl-btn-primary">
                Book Appointment
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Appointment */}
      <section className="cl-appointment" id="appointment">
        <div className="cl-appointment-grid">
          <motion.div
            className="cl-appointment-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2>Book an Appointment</h2>
            <p>Schedule a visit with our expert doctors. We're here to provide you with the best medical care.</p>
            <div className="cl-appointment-item">
              <FiMapPin /> <span>456 Health Avenue, Delhi, India</span>
            </div>
            <div className="cl-appointment-item">
              <FiPhone /> <span>+91 98765 43210</span>
            </div>
            <div className="cl-appointment-item">
              <FiMail /> <span>appointments@yourclinic.com</span>
            </div>
            <div className="cl-appointment-item">
              <FiClock /> <span>24/7 Emergency Available</span>
            </div>
          </motion.div>
          <motion.form
            className="cl-appointment-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); openDemoModal('booking', 'Appointment'); }}
          >
            <div className="cl-form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <input type="email" placeholder="Email Address" required />
            <div className="cl-form-row">
              <input type="date" required />
              <select required defaultValue="">
                <option value="" disabled>Select Department</option>
                <option>Cardiology</option>
                <option>Dental Care</option>
                <option>Eye Care</option>
                <option>General Medicine</option>
              </select>
            </div>
            <textarea placeholder="Describe your symptoms (optional)"></textarea>
            <button type="submit" className="cl-btn cl-btn-primary">
              Confirm Appointment <FiArrowRight />
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact */}
      <section className="cl-contact" id="contact">
        <div className="cl-section-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.h2>
          <p>We're available 24/7 for your health needs</p>
        </div>
        <div className="cl-contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            viewport={{ once: true }}
            className="cl-contact-card"
          >
            <div className="cl-contact-icon"><FiPhone /></div>
            <h3>Call Us</h3>
            <p><a href="tel:+919876543210">+91 98765 43210</a></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="cl-contact-card"
          >
            <div className="cl-contact-icon"><FiMail /></div>
            <h3>Email Us</h3>
            <p><a href="mailto:info@yourclinic.com">info@yourclinic.com</a></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="cl-contact-card"
          >
            <div className="cl-contact-icon"><FiMapPin /></div>
            <h3>Visit Us</h3>
            <p>456 Health Avenue, Delhi</p>
          </motion.div>
        </div>
      </section>

      <TemplateFooter name="Your Clinic" onSettingsClick={() => setShowSettings(true)} />

      <DemoModal
        isOpen={demoModal.isOpen}
        onClose={() => setDemoModal({ isOpen: false, type: '', itemName: '' })}
        type={demoModal.type}
        itemName={demoModal.itemName}
      />
    </div>
  );
}

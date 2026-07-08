import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight,
  FiMenu, FiX, FiStar, FiShield, FiAward, FiHeart,
  FiActivity, FiSmile, FiEye, FiCheckCircle,
  FiThermometer, FiZap, FiUsers, FiMessageCircle
} from 'react-icons/fi';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './ClinicTemplate.css';

const clinicData = {
  name: "MedCare Clinic",
  tagline: "Your Health Is Our Top Priority",
  description: "Experience world-class healthcare with our team of expert doctors and state-of-the-art medical facilities. Your well-being is in safe hands.",
  phone: "+91 98765 43210",
  email: "info@medcareclinic.com",
  address: "456 Health Avenue, New Delhi, India 110001",
  timing: "Mon-Sat: 8:00 AM - 9:00 PM | Emergency: 24/7",
  about: "Founded in 2010, MedCare Clinic has been a trusted name in healthcare for over a decade. With a team of highly qualified doctors and cutting-edge medical technology, we provide comprehensive healthcare services to help you live a healthier, happier life.",
  stats: { patients: 50000, doctors: 20, experience: 14, departments: 12 },
  departments: [
    { icon: <FiHeart />, name: "Cardiology", desc: "Expert heart care with advanced diagnostics and treatment for all cardiac conditions." },
    { icon: <FiSmile />, name: "Dental Care", desc: "Complete dental solutions from routine checkups to advanced cosmetic procedures." },
    { icon: <FiEye />, name: "Eye Care", desc: "Comprehensive vision care including LASIK, cataract surgery, and retinal treatments." },
    { icon: <FiActivity />, name: "General Medicine", desc: "Primary healthcare services for adults including preventive care and chronic disease management." },
    { icon: <FiThermometer />, name: "Pediatrics", desc: "Specialized medical care for infants, children, and adolescents." },
    { icon: <FiZap />, name: "Neurology", desc: "Expert diagnosis and treatment for disorders of the brain and nervous system." },
  ],
  doctors: [
    { name: "Dr. Anita Desai", specialty: "Cardiologist", experience: "15+ years", initials: "AD", rating: 4.9 },
    { name: "Dr. Rajesh Kumar", specialty: "Dental Surgeon", experience: "12+ years", initials: "RK", rating: 4.8 },
    { name: "Dr. Sneha Patel", specialty: "Ophthalmologist", experience: "10+ years", initials: "SP", rating: 4.7 },
  ],
  testimonials: [
    { name: "Priya Sharma", rating: 5, text: "MedCare Clinic provided exceptional care during my surgery. The doctors are highly skilled and the staff is very supportive. Highly recommended!" },
    { name: "Amit Verma", rating: 5, text: "I've been visiting MedCare for years. The cardiology department is outstanding, and Dr. Desai is the best cardiologist I've ever met." },
    { name: "Sunita Gupta", rating: 5, text: "The dental care at MedCare is top-notch. Painless procedures and friendly staff. My whole family comes here for dental checkups." },
  ],
  features: [
    { icon: <FiShield />, text: "100% Safe Procedures" },
    { icon: <FiAward />, text: "Award-Winning Doctors" },
    { icon: <FiCheckCircle />, text: "Insurance Accepted" },
  ],
};

export default function ClinicTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const departmentsRef = useRef(null);
  const doctorsRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleBookAppointment = () => {
    setShowModal(true);
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="clinic-template">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type="booking" itemName="Appointment" />

      {/* Navbar */}
      <nav className="clinic-nav">
        <div className="clinic-nav-container">
          <div className="clinic-nav-logo" onClick={() => scrollTo(homeRef)}>
            <FiActivity /> {clinicData.name}
          </div>
          <button className="clinic-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`clinic-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(aboutRef)}>About</span>
            <span onClick={() => scrollTo(departmentsRef)}>Departments</span>
            <span onClick={() => scrollTo(doctorsRef)}>Doctors</span>
            <span onClick={() => scrollTo(servicesRef)}>Services</span>
            <span onClick={() => scrollTo(testimonialsRef)}>Testimonials</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="clinic-nav-cta" onClick={() => { handleBookAppointment(); setMobileMenuOpen(false); }}>
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="clinic-hero" ref={homeRef}>
        <div className="clinic-hero-bg"></div>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="clinic-hero-content">
            <span className="clinic-hero-badge">
              <FiShield /> Trusted Healthcare
            </span>
            <h1>Your Health Is Our <span>Top Priority</span></h1>
            <p>{clinicData.description}</p>
            <div className="clinic-hero-buttons">
              <button className="btn-clinic btn-clinic-primary" onClick={handleBookAppointment}>
                Book Appointment <FiArrowRight />
              </button>
              <button className="btn-clinic btn-clinic-secondary" onClick={() => scrollTo(departmentsRef)}>
                Our Departments
              </button>
            </div>
            <div className="clinic-hero-features">
              {clinicData.features.map((feature, index) => (
                <div key={index} className="clinic-hero-feature">
                  {feature.icon} <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="clinic-stats" ref={statsRef}>
        <div className="clinic-container">
          <div className="clinic-stats-grid">
            <div className="clinic-stat-item">
              <FiUsers />
              <span>{clinicData.stats.patients.toLocaleString()}+</span>
              <p>Patients Treated</p>
            </div>
            <div className="clinic-stat-item">
              <FiActivity />
              <span>{clinicData.stats.doctors}</span>
              <p>Expert Doctors</p>
            </div>
            <div className="clinic-stat-item">
              <FiAward />
              <span>{clinicData.stats.experience}+</span>
              <p>Years Experience</p>
            </div>
            <div className="clinic-stat-item">
              <FiActivity />
              <span>{clinicData.stats.departments}</span>
              <p>Departments</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="clinic-about" ref={aboutRef}>
        <div className="clinic-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            About MedCare Clinic
          </motion.h2>
          <p className="clinic-section-sub">Trusted healthcare for over a decade</p>
          <div className="clinic-about-content">
            <p>{clinicData.about}</p>
            <div className="clinic-about-features">
              <div className="clinic-about-feature"><FiShield className="blue" /> <span>100% Safe Procedures</span></div>
              <div className="clinic-about-feature"><FiAward className="gold" /> <span>Award-Winning Doctors</span></div>
              <div className="clinic-about-feature"><FiHeart className="red" /> <span>Patient-First Approach</span></div>
              <div className="clinic-about-feature"><FiCheckCircle className="green" /> <span>Insurance Accepted</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="clinic-departments" ref={departmentsRef}>
        <div className="clinic-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Our Departments
          </motion.h2>
          <p className="clinic-section-sub">Comprehensive medical care across multiple specialties</p>
          <div className="clinic-departments-grid">
            {clinicData.departments.map((dept, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="clinic-dept-card">
                <div className="clinic-dept-icon">{dept.icon}</div>
                <h3>{dept.name}</h3>
                <p>{dept.desc}</p>
                <button className="clinic-dept-btn" onClick={handleBookAppointment}>Book Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="clinic-doctors" ref={doctorsRef}>
        <div className="clinic-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Meet Our Doctors
          </motion.h2>
          <p className="clinic-section-sub">Expert medical professionals dedicated to your health</p>
          <div className="clinic-doctors-grid">
            {clinicData.doctors.map((doctor, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="clinic-doctor-card">
                <div className="clinic-doctor-avatar">{doctor.initials}</div>
                <h3>{doctor.name}</h3>
                <p className="clinic-doctor-specialty">{doctor.specialty}</p>
                <p className="clinic-doctor-exp">{doctor.experience} experience</p>
                <div className="clinic-doctor-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className={i < Math.floor(doctor.rating) ? 'star-filled' : ''} />
                  ))}
                  <span>{doctor.rating}</span>
                </div>
                <button className="btn-clinic btn-clinic-primary btn-full" onClick={handleBookAppointment}>
                  Book Appointment
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="clinic-services" ref={servicesRef}>
        <div className="clinic-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Our Medical Services
          </motion.h2>
          <p className="clinic-section-sub">Advanced medical care with modern technology</p>
          <div className="clinic-services-grid">
            {clinicData.departments.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="clinic-service-card">
                <div className="clinic-service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointments CTA */}
      <section className="clinic-cta" ref={servicesRef}>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="clinic-cta-content">
            <h2>Ready to Prioritize Your Health?</h2>
            <p>Schedule an appointment today and take the first step towards better health.</p>
            <div className="clinic-cta-buttons">
              <button className="btn-clinic btn-clinic-primary btn-lg" onClick={handleBookAppointment}>
                Book Appointment Now <FiArrowRight />
              </button>
              <button className="btn-clinic btn-clinic-secondary btn-lg" onClick={() => scrollTo(contactRef)}>
                <FiPhone /> Call Us
              </button>
            </div>
            <div className="clinic-cta-info">
              <div className="clinic-cta-info-item">
                <FiClock />
                <span>Open Mon-Sat: 8AM - 9PM</span>
              </div>
              <div className="clinic-cta-info-item">
                <FiPhone />
                <span>Emergency: 24/7 Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="clinic-testimonials" ref={testimonialsRef}>
        <div className="clinic-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            What Our Patients Say
          </motion.h2>
          <p className="clinic-section-sub">Real stories from real patients</p>
          <div className="clinic-testimonials-grid">
            {clinicData.testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="clinic-testimonial-card">
                <div className="clinic-testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => <FiStar key={i} className="star-filled" />)}
                </div>
                <p className="clinic-testimonial-text">"{testimonial.text}"</p>
                <div className="clinic-testimonial-author">
                  <div className="clinic-testimonial-avatar">{testimonial.name.charAt(0)}</div>
                  <span>{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="clinic-contact" ref={contactRef}>
        <div className="clinic-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Contact Us
          </motion.h2>
          <p className="clinic-section-sub">We're available 24/7 for your health needs</p>
          <div className="clinic-contact-grid">
            <div className="clinic-contact-info">
              <div className="clinic-info-item"><FiMapPin /><div><strong>Address</strong><br />{clinicData.address}</div></div>
              <div className="clinic-info-item"><FiPhone /><div><strong>Phone</strong><br />{clinicData.phone}</div></div>
              <div className="clinic-info-item"><FiMail /><div><strong>Email</strong><br />{clinicData.email}</div></div>
              <div className="clinic-info-item"><FiClock /><div><strong>Timing</strong><br />{clinicData.timing}</div></div>
            </div>
            <div className="clinic-contact-cta">
              <FiMessageCircle />
              <h3>Need Help?</h3>
              <p>Drop us a message on WhatsApp and we'll get back to you instantly.</p>
              <a href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I need medical assistance from ' + clinicData.name)}`}
                className="btn-clinic btn-clinic-whatsapp" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name={clinicData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

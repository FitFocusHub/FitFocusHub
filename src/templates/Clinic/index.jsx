import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight,
  FiMenu, FiX, FiStar, FiShield, FiHeart,
  FiActivity, FiSmile, FiEye, FiCheckCircle,
  FiThermometer, FiZap, FiUsers, FiMessageCircle,
  FiAlertCircle, FiCalendar, FiUser, FiSend
} from 'react-icons/fi';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './ClinicTemplate.css';

const clinicData = {
  name: "MedCare Clinic",
  tagline: "Caring for You, Like Family",
  description: "Experience compassionate healthcare with our team of expert doctors and state-of-the-art facilities. Your health journey begins with trust.",
  phone: "+91 XXXXX XXXXX",
  email: "example@gmail.com",
  address: "789 Wellness Road, New Delhi, India 110001",
  timing: "Mon-Sat: 8:00 AM - 9:00 PM | Emergency: 24/7",
  stats: { patients: 50000, doctors: 25, experience: 15, departments: 12 },
  departments: [
    {
      icon: <FiHeart />, name: "Cardiology", tagline: "Heart Care Experts",
      desc: "Advanced cardiac diagnostics, interventional cardiology, and preventive heart care programs. Our cardiologists use cutting-edge technology for accurate diagnosis and treatment.",
      services: ["ECG & Echocardiography", "Angioplasty & Stenting", "Heart Failure Management", "Cardiac Rehabilitation"],
      color: "#ef4444"
    },
    {
      icon: <FiZap />, name: "Orthopedics", tagline: "Move Pain-Free",
      desc: "Specialized treatment for bone, joint, and muscle conditions. From sports injuries to joint replacements, our orthopedic team helps you regain mobility.",
      services: ["Joint Replacement Surgery", "Sports Injury Treatment", "Spine Surgery", "Fracture Care"],
      color: "#f59e0b"
    },
    {
      icon: <FiSmile />, name: "Pediatrics", tagline: "Caring for Little Ones",
      desc: "Comprehensive healthcare for infants, children, and adolescents. Our pediatricians create a warm, friendly environment for your child's well-being.",
      services: ["Newborn Care", "Vaccination Programs", "Growth Monitoring", "Child Nutrition"],
      color: "#22c55e"
    },
    {
      icon: <FiEye />, name: "Ophthalmology", tagline: "Clear Vision Ahead",
      desc: "Complete eye care from routine checkups to advanced surgical procedures. Our ophthalmologists ensure optimal vision health for all ages.",
      services: ["LASIK Surgery", "Cataract Surgery", "Retinal Treatment", "Glaucoma Management"],
      color: "#3b82f6"
    },
    {
      icon: <FiActivity />, name: "General Medicine", tagline: "Your Health Foundation",
      desc: "Primary healthcare services focused on prevention, diagnosis, and treatment of adult diseases. Your first step towards better health.",
      services: ["Health Checkups", "Chronic Disease Management", "Infectious Disease Treatment", "Preventive Care"],
      color: "#8b5cf6"
    },
    {
      icon: <FiThermometer />, name: "Neurology", tagline: "Brain & Nerve Care",
      desc: "Expert diagnosis and treatment for disorders of the brain, spinal cord, and nervous system. Compassionate care for complex neurological conditions.",
      services: ["Stroke Treatment", "Epilepsy Management", "Headache & Migraine", "Neurodegenerative Disorders"],
      color: "#06b6d4"
    }
  ],
  doctors: [
    { name: "Dr. Anita Desai", specialty: "Cardiologist", experience: "18+ years", education: "MD - Cardiology, AIIMS", initials: "AD", rating: 4.9, patients: 5000, available: "Mon, Wed, Fri" },
    { name: "Dr. Rajesh Kumar", specialty: "Orthopedic Surgeon", experience: "15+ years", education: "MS - Orthopedics, PGI", initials: "RK", rating: 4.8, patients: 4200, available: "Tue, Thu, Sat" },
    { name: "Dr. Sneha Patel", specialty: "Pediatrician", experience: "12+ years", education: "MD - Pediatrics, CMC", initials: "SP", rating: 4.7, patients: 3800, available: "Mon-Fri" },
    { name: "Dr. Vikram Singh", specialty: "Ophthalmologist", experience: "14+ years", education: "MS - Ophthalmology, JIPMER", initials: "VS", rating: 4.9, patients: 4500, available: "Mon, Wed, Fri" },
    { name: "Dr. Meera Reddy", specialty: "Neurologist", experience: "16+ years", education: "DM - Neurology, NIMHANS", initials: "MR", rating: 4.8, patients: 3600, available: "Tue, Thu, Sat" },
    { name: "Dr. Arjun Mehta", specialty: "General Physician", experience: "10+ years", education: "MD - General Medicine", initials: "AM", rating: 4.6, patients: 6000, available: "Mon-Sat" }
  ],
  packages: [
    {
      name: "Essential", price: "₹999", period: "/visit", popular: false,
      features: ["General Consultation", "Basic Blood Tests", "BP & Sugar Check", "Doctor Prescription", "Follow-up (1 week)"],
      desc: "For routine health concerns"
    },
    {
      name: "Comprehensive", price: "₹2,499", period: "/visit", popular: true,
      features: ["Full Health Checkup", "Complete Blood Panel", "ECG & X-Ray", "Specialist Consultation", "Urine Analysis", "Follow-up (2 weeks)", "Digital Reports"],
      desc: "Complete health assessment"
    },
    {
      name: "Premium", price: "₹4,999", period: "/visit", popular: false,
      features: ["Executive Health Checkup", "Advanced Blood Panel", "ECG, X-Ray & Ultrasound", "3 Specialist Consultations", "MRI Screening", "Nutrition Counseling", "Priority Booking", "1-Month Follow-up"],
      desc: "Premium comprehensive care"
    }
  ],
  testimonials: [
    { name: "Priya Sharma", rating: 5, text: "MedCare Clinic provided exceptional care during my treatment. The doctors are highly skilled and the staff made me feel at ease throughout. Truly a trusted healthcare partner.", dept: "Cardiology" },
    { name: "Amit Verma", rating: 5, text: "I've been visiting MedCare for years. The orthopedic department is outstanding, and Dr. Kumar is the best surgeon I've ever met. My knee replacement went flawlessly.", dept: "Orthopedics" },
    { name: "Sunita Gupta", rating: 4, text: "The pediatric care at MedCare is wonderful. Dr. Patel is so gentle and patient with my children. They actually look forward to their checkups now!", dept: "Pediatrics" },
    { name: "Rajesh Menon", rating: 5, text: "After my eye surgery at MedCare, my vision is better than ever. Dr. Singh's expertise and the modern facilities truly impressed me. Highly recommended!", dept: "Ophthalmology" },
    { name: "Kavita Joshi", rating: 5, text: "The comprehensive health package was worth every penny. Thorough checkup, detailed reports, and personalized health advice. MedCare truly cares about preventive health.", dept: "General Medicine" },
    { name: "Mohit Bansal", rating: 4, text: "Dr. Reddy's treatment for my chronic migraine has been life-changing. The neurology department at MedCare uses advanced diagnostics that other clinics don't offer.", dept: "Neurology" }
  ]
};

export default function ClinicTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDept, setActiveDept] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', department: '', date: '', message: '' });

  const homeRef = useRef(null);
  const departmentsRef = useRef(null);
  const doctorsRef = useRef(null);
  const packagesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const bookRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleBookAppointment = () => {
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="clinic-template">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type="booking" itemName="Appointment" />

      {/* WHITE/LIGHT Navigation */}
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
            <span onClick={() => scrollTo(departmentsRef)}>Departments</span>
            <span onClick={() => scrollTo(doctorsRef)}>Doctors</span>
            <span onClick={() => scrollTo(packagesRef)}>Packages</span>
            <span onClick={() => scrollTo(testimonialsRef)}>Reviews</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="clinic-nav-cta" onClick={() => { handleBookAppointment(); setMobileMenuOpen(false); }}>
              Book Appointment
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean Minimal */}
      <section className="clinic-hero" ref={homeRef}>
        <div className="clinic-hero-bg-pattern"></div>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="clinic-hero-content">
            <div className="clinic-hero-left">
              <span className="clinic-hero-badge">
                <FiShield /> Trusted by 50,000+ Patients
              </span>
              <h1>Caring for You,<br /><span>Like Family</span></h1>
              <p>{clinicData.description}</p>
              <div className="clinic-hero-buttons">
                <button className="btn-clinic btn-clinic-primary" onClick={handleBookAppointment}>
                  <FiCalendar /> Book Appointment
                </button>
                <button className="btn-clinic btn-clinic-outline" onClick={() => scrollTo(departmentsRef)}>
                  Our Departments <FiArrowRight />
                </button>
              </div>
              <div className="clinic-hero-trust">
                <div className="clinic-trust-item">
                  <FiShield className="trust-icon" />
                  <span>100% Safe</span>
                </div>
                <div className="clinic-trust-item">
                  <FiCheckCircle className="trust-icon" />
                  <span>Insurance Accepted</span>
                </div>
                <div className="clinic-trust-item">
                  <FiClock className="trust-icon" />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </div>
            <div className="clinic-hero-right">
              <div className="clinic-hero-stat-card">
                <div className="clinic-stat-circle">
                  <FiUsers />
                  <span>50K+</span>
                </div>
                <p>Patients Treated</p>
              </div>
              <div className="clinic-hero-stat-card">
                <div className="clinic-stat-circle">
                  <FiHeart />
                  <span>25</span>
                </div>
                <p>Expert Doctors</p>
              </div>
              <div className="clinic-hero-stat-card">
                <div className="clinic-stat-circle">
                  <FiAward />
                  <span>15+</span>
                </div>
                <p>Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="clinic-emergency-banner">
        <div className="clinic-container">
          <div className="clinic-emergency-content">
            <div className="clinic-emergency-left">
              <FiAlertCircle />
              <div>
                <h3>Medical Emergency?</h3>
                <p>Our emergency team is available 24/7 to assist you</p>
              </div>
            </div>
            <a href={`tel:${clinicData.phone.replace(/\s/g, '')}`} className="btn-clinic btn-clinic-emergency">
              <FiPhone /> Call Now: {clinicData.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Departments - TABS Layout */}
      <section className="clinic-departments" ref={departmentsRef}>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="clinic-section-badge">Specialties</span>
            <h2>Our Departments</h2>
            <p className="clinic-section-sub">Comprehensive care across multiple medical specialties</p>
          </motion.div>

          <div className="clinic-dept-tabs">
            {clinicData.departments.map((dept, index) => (
              <button
                key={index}
                className={`clinic-dept-tab ${activeDept === index ? 'active' : ''}`}
                onClick={() => setActiveDept(index)}
                style={activeDept === index ? { borderColor: dept.color } : {}}
              >
                {dept.icon}
                <span>{dept.name}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={activeDept}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="clinic-dept-detail"
          >
            <div className="clinic-dept-detail-header">
              <div className="clinic-dept-detail-icon" style={{ background: `${clinicData.departments[activeDept].color}15`, color: clinicData.departments[activeDept].color }}>
                {clinicData.departments[activeDept].icon}
              </div>
              <div>
                <h3>{clinicData.departments[activeDept].name}</h3>
                <p className="clinic-dept-tagline">{clinicData.departments[activeDept].tagline}</p>
              </div>
            </div>
            <p className="clinic-dept-desc">{clinicData.departments[activeDept].desc}</p>
            <div className="clinic-dept-services">
              <h4>Services Offered:</h4>
              <div className="clinic-dept-services-list">
                {clinicData.departments[activeDept].services.map((service, i) => (
                  <div key={i} className="clinic-dept-service-item">
                    <FiCheckCircle style={{ color: clinicData.departments[activeDept].color }} />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-clinic btn-clinic-primary" onClick={handleBookAppointment}>
              Book Consultation <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Doctors - Profile Cards */}
      <section className="clinic-doctors" ref={doctorsRef}>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="clinic-section-badge">Medical Team</span>
            <h2>Meet Our Doctors</h2>
            <p className="clinic-section-sub">Expert professionals dedicated to your health and well-being</p>
          </motion.div>
          <div className="clinic-doctors-grid">
            {clinicData.doctors.map((doctor, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="clinic-doctor-card">
                <div className="clinic-doctor-top">
                  <div className="clinic-doctor-avatar">{doctor.initials}</div>
                  <div className="clinic-doctor-availability">
                    <FiClock /> {doctor.available}
                  </div>
                </div>
                <div className="clinic-doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="clinic-doctor-specialty">{doctor.specialty}</p>
                  <p className="clinic-doctor-education">{doctor.education}</p>
                  <div className="clinic-doctor-meta">
                    <span><FiUser /> {doctor.patients.toLocaleString()}+ Patients</span>
                    <span><FiAward /> {doctor.experience}</span>
                  </div>
                  <div className="clinic-doctor-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} className={i < Math.floor(doctor.rating) ? 'star-filled' : ''} />
                    ))}
                    <span>{doctor.rating}</span>
                  </div>
                  <button className="btn-clinic btn-clinic-primary btn-full" onClick={handleBookAppointment}>
                    Book Appointment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Packages - Pricing Table */}
      <section className="clinic-packages" ref={packagesRef}>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="clinic-section-badge">Health Plans</span>
            <h2>Health Packages</h2>
            <p className="clinic-section-sub">Choose the package that fits your healthcare needs</p>
          </motion.div>
          <div className="clinic-packages-grid">
            {clinicData.packages.map((pkg, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`clinic-package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="clinic-package-badge">Most Popular</div>}
                <div className="clinic-package-header">
                  <h3>{pkg.name}</h3>
                  <p className="clinic-package-desc">{pkg.desc}</p>
                  <div className="clinic-package-price">
                    <span className="clinic-price-amount">{pkg.price}</span>
                    <span className="clinic-price-period">{pkg.period}</span>
                  </div>
                </div>
                <ul className="clinic-package-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <FiCheckCircle className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn-clinic btn-full ${pkg.popular ? 'btn-clinic-primary' : 'btn-clinic-outline'}`}
                  onClick={handleBookAppointment}
                >
                  Book Package
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Star Ratings */}
      <section className="clinic-testimonials" ref={testimonialsRef}>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="clinic-section-badge">Patient Stories</span>
            <h2>Patient Testimonials</h2>
            <p className="clinic-section-sub">Real experiences from patients who trust us with their health</p>
          </motion.div>
          <div className="clinic-testimonials-grid">
            {clinicData.testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="clinic-testimonial-card">
                <div className="clinic-testimonial-top">
                  <div className="clinic-testimonial-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FiStar key={i} className={i < testimonial.rating ? 'star-filled' : 'star-empty'} />
                    ))}
                  </div>
                  <span className="clinic-testimonial-dept">{testimonial.dept}</span>
                </div>
                <p className="clinic-testimonial-text">"{testimonial.text}"</p>
                <div className="clinic-testimonial-author">
                  <div className="clinic-testimonial-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <span className="clinic-testimonial-name">{testimonial.name}</span>
                    <span className="clinic-testimonial-verified">
                      <FiCheckCircle /> Verified Patient
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Appointment Form */}
      <section className="clinic-book" ref={bookRef}>
        <div className="clinic-container">
          <div className="clinic-book-layout">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="clinic-book-info">
              <span className="clinic-section-badge">Schedule Visit</span>
              <h2>Book Your Appointment</h2>
              <p>Fill in the details below and our team will confirm your appointment within 2 hours.</p>
              <div className="clinic-book-features">
                <div className="clinic-book-feature-item">
                  <FiClock />
                  <div>
                    <strong>Quick Response</strong>
                    <span>Confirmation within 2 hours</span>
                  </div>
                </div>
                <div className="clinic-book-feature-item">
                  <FiShield />
                  <div>
                    <strong>Safe & Secure</strong>
                    <span>Your data is protected</span>
                  </div>
                </div>
                <div className="clinic-book-feature-item">
                  <FiCheckCircle />
                  <div>
                    <strong>Free Cancellation</strong>
                    <span>Cancel up to 24 hours before</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="clinic-book-form" onSubmit={handleFormSubmit}>
              <div className="clinic-form-row">
                <div className="clinic-form-group">
                  <label><FiUser /> Full Name</label>
                  <input type="text" placeholder="Your full name" value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="clinic-form-group">
                  <label><FiPhone /> Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
              </div>
              <div className="clinic-form-row">
                <div className="clinic-form-group">
                  <label><FiMail /> Email Address</label>
                  <input type="email" placeholder="example@gmail.com" value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="clinic-form-group">
                  <label><FiCalendar /> Preferred Date</label>
                  <input type="date" value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })} required />
                </div>
              </div>
              <div className="clinic-form-group">
                <label><FiActivity /> Department</label>
                <select value={formData.department}
                  onChange={e => setFormData({ ...formData, department: e.target.value })} required>
                  <option value="">Select Department</option>
                  {clinicData.departments.map((dept, i) => (
                    <option key={i} value={dept.name}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="clinic-form-group">
                <label><FiMessageCircle /> Message (Optional)</label>
                <textarea placeholder="Describe your symptoms or concerns..." rows="3" value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
              </div>
              <button type="submit" className="btn-clinic btn-clinic-primary btn-full btn-lg">
                <FiSend /> Book Appointment
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="clinic-contact" ref={contactRef}>
        <div className="clinic-container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="clinic-section-badge">Get in Touch</span>
            <h2>Contact Us</h2>
            <p className="clinic-section-sub">We're here to help with any health concerns</p>
          </motion.div>
          <div className="clinic-contact-grid">
            <div className="clinic-contact-info">
              <div className="clinic-info-item">
                <FiMapPin />
                <div><strong>Address</strong><br />{clinicData.address}</div>
              </div>
              <div className="clinic-info-item">
                <FiPhone />
                <div><strong>Phone</strong><br />{clinicData.phone}</div>
              </div>
              <div className="clinic-info-item">
                <FiMail />
                <div><strong>Email</strong><br />{clinicData.email}</div>
              </div>
              <div className="clinic-info-item">
                <FiClock />
                <div><strong>Timing</strong><br />{clinicData.timing}</div>
              </div>
            </div>
            <div className="clinic-contact-cta">
              <FiMessageCircle />
              <h3>Need Medical Advice?</h3>
              <p>Chat with us on WhatsApp for quick medical guidance and appointment bookings.</p>
              <a href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I need medical assistance from ' + clinicData.name)}`}
                className="btn-clinic btn-clinic-whatsapp" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <FiArrowRight />
              </a>
              <div className="clinic-contact-social">
                <a href="https://www.instagram.com/mohammad_s4kib" target="_blank" rel="noopener noreferrer">
                  Instagram: @mohammad_s4kib
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name={clinicData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

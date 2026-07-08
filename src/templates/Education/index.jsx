import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight,
  FiMenu, FiX, FiStar, FiBookOpen, FiUsers, FiAward,
  FiCheckCircle, FiGlobe, FiTarget, FiZap, FiTrendingUp, FiMessageCircle
} from 'react-icons/fi';
import { FaCode, FaPaintBrush, FaChartLine, FaBrain } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './EducationTemplate.css';

const eduData = {
  name: "EduBright Academy",
  tagline: "Learn. Build. Grow.",
  description: "Master in-demand skills with expert-led courses. From web development to data science, we've got your future covered.",
  phone: "+91 98765 43210",
  email: "info@edubrightacademy.com",
  address: "456 Education Hub, Delhi, India",
  timing: "Mon-Sat: 9:00 AM - 8:00 PM",
  stats: { students: 10000, courses: 50, placement: 95, mentors: 30 },
  courses: [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Master HTML, CSS, JavaScript, React, Node.js and build full-stack applications from scratch.",
      price: "₹4,999",
      duration: "6 months",
      students: "2,400+",
      level: "Beginner to Advanced",
      popular: true,
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Learn user research, wireframing, prototyping in Figma, and create stunning user experiences.",
      price: "₹3,999",
      duration: "4 months",
      students: "1,800+",
      level: "Beginner Friendly",
      popular: false,
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      desc: "SEO, social media marketing, Google Ads, content strategy, and analytics mastery.",
      price: "₹2,999",
      duration: "3 months",
      students: "3,100+",
      level: "All Levels",
      popular: false,
    },
    {
      icon: <FaBrain />,
      title: "Data Science",
      desc: "Python, machine learning, data visualization, statistics, and real-world project experience.",
      price: "₹6,999",
      duration: "8 months",
      students: "1,500+",
      level: "Intermediate",
      popular: true,
    },
  ],
  features: [
    { icon: <FiTarget />, title: "Industry-Relevant Curriculum", desc: "Courses designed with input from top companies to ensure you learn exactly what employers need." },
    { icon: <FiUsers />, title: "Expert Instructors", desc: "Learn from professionals with 10+ years of industry experience at leading tech companies." },
    { icon: <FiZap />, title: "Hands-On Projects", desc: "Build real-world projects and a portfolio that stands out to employers and clients." },
    { icon: <FiAward />, title: "Certified Programs", desc: "Earn recognized certificates that validate your skills and boost your resume." },
    { icon: <FiTrendingUp />, title: "Placement Support", desc: "95% placement rate with dedicated career guidance, resume reviews, and interview prep." },
    { icon: <FiGlobe />, title: "Global Community", desc: "Join a network of 10,000+ learners and alumni for networking and collaboration." },
  ],
  testimonials: [
    { name: "Rahul Sharma", rating: 5, role: "Web Developer at TCS", text: "EduBright Academy transformed my career. The web development course was incredibly detailed and the mentors were always available to help. Landed my dream job within 2 months of completing the course!" },
    { name: "Priya Patel", rating: 5, role: "UX Designer at Flipkart", text: "The UI/UX design course gave me practical skills that I use every day. The project-based learning approach helped me build a strong portfolio. Highly recommend for anyone starting in design!" },
    { name: "Amit Kumar", rating: 5, role: "Data Analyst at Amazon", text: "The data science program was intensive but worth every penny. From Python to machine learning, everything was covered thoroughly. The placement support helped me get into a top company." },
  ],
  instructors: [
    { name: "Priya Sharma", role: "Web Dev Lead", desc: "10+ years at top tech companies. Passionate about teaching.", avatar: "👩‍💻" },
    { name: "Rahul Verma", role: "Design Expert", desc: "Award-winning designer. Worked with Fortune 500 brands.", avatar: "👨‍🎨" },
    { name: "Anita Patel", role: "Data Science Pro", desc: "PhD in ML. Published researcher and industry consultant.", avatar: "👩‍🔬" },
  ],
};

export default function EducationTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('membership');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeRef = useRef(null);
  const statsRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleEnroll = (courseName) => {
    setModalType('membership');
    setModalItem(courseName);
    setShowModal(true);
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="edu-template">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type={modalType} itemName={modalItem} />

      {/* Navbar */}
      <nav className="edu-nav">
        <div className="edu-nav-container">
          <div className="edu-nav-logo" onClick={() => scrollTo(homeRef)}>
            <div className="edu-logo-icon"><FiBookOpen /></div>
            {eduData.name}
          </div>
          <button className="edu-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`edu-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(aboutRef)}>About</span>
            <span onClick={() => scrollTo(coursesRef)}>Courses</span>
            <span onClick={() => scrollTo(featuresRef)}>Why Us</span>
            <span onClick={() => scrollTo(testimonialsRef)}>Testimonials</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="edu-nav-cta" onClick={() => { handleEnroll('Course Enrollment'); setMobileMenuOpen(false); }}>
              Enroll Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="edu-hero" ref={homeRef}>
        <div className="edu-hero-bg" />
        <div className="edu-container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="edu-hero-content">
            <div className="edu-hero-badge">
              <FiGlobe size={14} /> Trusted by 10,000+ Students
            </div>
            <h1>
              Learn. <span>Build.</span> <span className="edu-accent">Grow.</span>
            </h1>
            <p>{eduData.description}</p>
            <div className="edu-hero-buttons">
              <button className="edu-btn edu-btn-primary" onClick={() => handleEnroll('Course Enrollment')}>
                Enroll Now <FiArrowRight />
              </button>
              <button className="edu-btn edu-btn-secondary" onClick={() => scrollTo(coursesRef)}>
                <FiBookOpen /> Browse Courses
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="edu-stats" ref={statsRef}>
        <div className="edu-container">
          <div className="edu-stats-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="edu-stat-item">
              <FiUsers /><span>10K+</span><p>Students Enrolled</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="edu-stat-item">
              <FiBookOpen /><span>50+</span><p>Courses Available</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="edu-stat-item">
              <FiAward /><span>95%</span><p>Placement Rate</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="edu-stat-item">
              <FiTarget /><span>30+</span><p>Expert Mentors</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="edu-about" ref={aboutRef}>
        <div className="edu-container">
          <h2>About EduBright Academy</h2>
          <p className="edu-section-sub">Empowering students to achieve their career dreams since 2018</p>
          <div className="edu-about-content">
            <div className="edu-about-text">
              <p>EduBright Academy was founded with a simple mission: make quality education accessible and affordable. We believe everyone deserves the chance to build a successful career in tech, regardless of their background.</p>
              <p>Our courses are designed by industry experts and updated regularly to match the latest market demands. With a focus on practical, hands-on learning, we ensure our students are job-ready from day one.</p>
              <div className="edu-about-features">
                <div className="edu-about-feature"><FiCheckCircle className="blue" /> <span>Flexible Learning Schedule</span></div>
                <div className="edu-about-feature"><FiCheckCircle className="blue" /> <span>Lifetime Course Access</span></div>
                <div className="edu-about-feature"><FiCheckCircle className="blue" /> <span>Money-Back Guarantee</span></div>
                <div className="edu-about-feature"><FiCheckCircle className="blue" /> <span>24/7 Student Support</span></div>
              </div>
            </div>
            <div className="edu-about-instructors">
              <h3>Meet Our Instructors</h3>
              <div className="edu-instructor-list">
                {eduData.instructors.map((inst, i) => (
                  <div key={i} className="edu-instructor-mini">
                    <div className="edu-instructor-avatar">{inst.avatar}</div>
                    <div>
                      <strong>{inst.name}</strong>
                      <span>{inst.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="edu-courses" ref={coursesRef}>
        <div className="edu-container">
          <h2>Our Courses</h2>
          <p className="edu-section-sub">Industry-ready skills taught by experts with real-world experience</p>
          <div className="edu-courses-grid">
            {eduData.courses.map((course, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="edu-course-card">
                {course.popular && <span className="edu-course-popular">Popular</span>}
                <div className="edu-course-icon">{course.icon}</div>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <div className="edu-course-meta">
                  <span><FiClock size={12} /> {course.duration}</span>
                  <span><FiUsers size={12} /> {course.students}</span>
                  <span><FiAward size={12} /> {course.level}</span>
                </div>
                <div className="edu-course-price">{course.price}</div>
                <button className="edu-btn edu-btn-primary edu-btn-full" onClick={() => handleEnroll(course.title)}>
                  Enroll Now <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Choose Us */}
      <section className="edu-features" ref={featuresRef}>
        <div className="edu-container">
          <h2>Why Choose EduBright?</h2>
          <p className="edu-section-sub">We don't just teach — we transform careers</p>
          <div className="edu-features-grid">
            {eduData.features.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="edu-feature-card">
                <div className="edu-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="edu-testimonials" ref={testimonialsRef}>
        <div className="edu-container">
          <h2>What Our Students Say</h2>
          <p className="edu-section-sub">Real stories from students who transformed their careers</p>
          <div className="edu-testimonials-grid">
            {eduData.testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="edu-testimonial-card">
                <div className="edu-testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => <FiStar key={i} className="edu-star-filled" />)}
                </div>
                <p className="edu-testimonial-text">"{testimonial.text}"</p>
                <div className="edu-testimonial-author">
                  <div className="edu-testimonial-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="edu-contact" ref={contactRef}>
        <div className="edu-container">
          <h2>Get in Touch</h2>
          <p className="edu-section-sub">We're here to help you start your learning journey</p>
          <div className="edu-contact-grid">
            <div className="edu-contact-info">
              <div className="edu-info-item"><FiMapPin /><div><strong>Address</strong><br />{eduData.address}</div></div>
              <div className="edu-info-item"><FiPhone /><div><strong>Phone</strong><br />{eduData.phone}</div></div>
              <div className="edu-info-item"><FiMail /><div><strong>Email</strong><br />{eduData.email}</div></div>
              <div className="edu-info-item"><FiClock /><div><strong>Timing</strong><br />{eduData.timing}</div></div>
            </div>
            <div className="edu-contact-cta">
              <FiMessageCircle />
              <h3>Ready to Start Learning?</h3>
              <p>Have questions about our courses? Reach out on WhatsApp and our counselors will guide you to the perfect plan.</p>
              <a href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I want to know more about courses at ' + eduData.name)}`}
                className="edu-btn edu-btn-primary" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name={eduData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

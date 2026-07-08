import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhone, FiMail, FiArrowRight, FiArrowDown,
  FiMenu, FiX, FiStar, FiBookOpen, FiUsers, FiAward,
  FiCheckCircle, FiTarget, FiZap, FiTrendingUp,
  FiChevronDown, FiChevronUp, FiClock, FiCalendar,
  FiMapPin, FiGlobe, FiMessageCircle, FiPlay,
  FiUser, FiSend, FiBarChart2
} from 'react-icons/fi';
import { FaCode, FaPaintBrush, FaChartLine, FaBullhorn } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './EducationTemplate.css';

const courseCategories = [
  'Web Development',
  'Python Programming',
  'Digital Marketing',
  'Graphic Design',
  'Data Science',
  'Mobile Development'
];

const eduData = {
  name: "EduBright Academy",
  tagline: "Learn. Build. Grow.",
  description: "Master in-demand skills with expert-led courses. From web development to data science, we've got your future covered.",
  phone: "+91 XXXXX XXXXX",
  email: "example@gmail.com",
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
      syllabus: [
        "HTML5 & CSS3 Fundamentals",
        "JavaScript ES6+ Deep Dive",
        "React.js & Hooks",
        "Node.js & Express.js",
        "MongoDB & Database Design",
        "REST APIs & Authentication",
        "Git, GitHub & Deployment",
        "Final Capstone Project"
      ]
    },
    {
      icon: <FaPaintBrush />,
      title: "Graphic Design",
      desc: "Learn visual design, typography, color theory, and master Adobe Photoshop & Illustrator.",
      price: "₹3,999",
      duration: "4 months",
      students: "1,800+",
      level: "Beginner Friendly",
      popular: false,
      syllabus: [
        "Design Fundamentals & Theory",
        "Typography & Color Theory",
        "Adobe Photoshop Mastery",
        "Adobe Illustrator Essentials",
        "Logo & Brand Identity Design",
        "UI Design for Web & Mobile",
        "Print & Digital Layout",
        "Portfolio Development"
      ]
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
      syllabus: [
        "Digital Marketing Landscape",
        "Search Engine Optimization (SEO)",
        "Google Ads & PPC Campaigns",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Automation",
        "Google Analytics & Reporting",
        "Capstone Campaign Project"
      ]
    },
    {
      icon: <FaBullhorn />,
      title: "Python Programming",
      desc: "Python fundamentals, OOP, data structures, automation, and real-world project building.",
      price: "₹5,999",
      duration: "5 months",
      students: "1,500+",
      level: "Beginner to Advanced",
      popular: true,
      syllabus: [
        "Python Basics & Syntax",
        "Data Types & Variables",
        "Functions & Modules",
        "Object-Oriented Programming",
        "File Handling & Error Management",
        "Web Scraping with BeautifulSoup",
        "Automation & Scripting",
        "Final Project: Build an App"
      ]
    }
  ],
  features: [
    { icon: <FiTarget />, title: "Industry-Relevant Curriculum", desc: "Courses designed with input from top companies to ensure you learn exactly what employers need." },
    { icon: <FiUsers />, title: "Expert Instructors", desc: "Learn from professionals with 10+ years of industry experience at leading tech companies." },
    { icon: <FiZap />, title: "Hands-On Projects", desc: "Build real-world projects and a portfolio that stands out to employers and clients." },
    { icon: <FiAward />, title: "Certified Programs", desc: "Earn recognized certificates that validate your skills and boost your resume." },
    { icon: <FiTrendingUp />, title: "Placement Support", desc: "95% placement rate with dedicated career guidance, resume reviews, and interview prep." },
    { icon: <FiGlobe />, title: "Global Community", desc: "Join a network of 10,000+ learners and alumni for networking and collaboration." },
  ],
  studentResults: [
    { name: "Average Salary Hike", value: 65, color: "#2563eb" },
    { name: "Course Completion Rate", value: 92, color: "#10b981" },
    { name: "Job Placement Rate", value: 95, color: "#f59e0b" },
    { name: "Student Satisfaction", value: 98, color: "#8b5cf6" },
  ],
  testimonials: [
    { name: "Rahul Sharma", rating: 5, role: "Web Developer at TCS", text: "EduBright Academy transformed my career. The web development course was incredibly detailed and the mentors were always available to help. Landed my dream job within 2 months of completing the course!" },
    { name: "Priya Patel", rating: 5, role: "UX Designer at Flipkart", text: "The Graphic Design course gave me practical skills that I use every day. The project-based learning approach helped me build a strong portfolio. Highly recommend for anyone starting in design!" },
    { name: "Amit Kumar", rating: 5, role: "Data Analyst at Amazon", text: "The Python Programming program was intensive but worth every penny. From basics to automation, everything was covered thoroughly. The placement support helped me get into a top company." },
  ],
  instructors: [
    { name: "Priya Sharma", role: "Web Dev Lead", desc: "10+ years at top tech companies. Passionate about teaching.", avatar: "👩‍💻", expertise: ["React", "Node.js", "TypeScript"] },
    { name: "Rahul Verma", role: "Design Expert", desc: "Award-winning designer. Worked with Fortune 500 brands.", avatar: "👨‍🎨", expertise: ["Photoshop", "Illustrator", "UI/UX"] },
    { name: "Anita Patel", role: "Python Pro", desc: "PhD in CS. Published researcher and industry consultant.", avatar: "👩‍🔬", expertise: ["Python", "ML", "Automation"] },
    { name: "Vikram Singh", role: "Marketing Lead", desc: "Former Google Ads specialist. 8+ years in digital marketing.", avatar: "👨‍💼", expertise: ["SEO", "Google Ads", "Analytics"] },
  ],
};

export default function EducationTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('membership');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });

  const homeRef = useRef(null);
  const coursesRef = useRef(null);
  const featuresRef = useRef(null);
  const resultsRef = useRef(null);
  const instructorsRef = useRef(null);
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

  const toggleCourse = (index) => {
    setExpandedCourse(expandedCourse === index ? null : index);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="edu-template">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type={modalType} itemName={modalItem} />

      {/* Top Navigation Bar */}
      <header className="edu-topbar">
        <div className="edu-topbar-inner">
          <div className="edu-topbar-left">
            <div className="edu-topbar-logo" onClick={() => scrollTo(homeRef)}>
              <div className="edu-logo-grad"><FiAward /></div>
              <span>EduBright</span>
            </div>
          </div>

          <nav className={`edu-topbar-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="edu-nav-item" onClick={() => scrollTo(homeRef)}>Home</div>
            <div className="edu-nav-item" onClick={() => scrollTo(coursesRef)}>Courses</div>
            <div className="edu-nav-item" onClick={() => scrollTo(featuresRef)}>Why Us</div>
            <div className="edu-nav-item" onClick={() => scrollTo(resultsRef)}>Results</div>
            <div className="edu-nav-item" onClick={() => scrollTo(instructorsRef)}>Instructors</div>
            <div className="edu-nav-item" onClick={() => scrollTo(testimonialsRef)}>Reviews</div>
            <div className="edu-nav-item" onClick={() => scrollTo(contactRef)}>Contact</div>

            {/* Categories Dropdown */}
            <div className="edu-categories-dropdown">
              <button className="edu-categories-btn">
                <FiBookOpen size={14} /> Categories <FiChevronDown size={14} />
              </button>
              <div className="edu-categories-menu">
                {courseCategories.map((cat, i) => (
                  <div key={i} className="edu-category-item" onClick={() => { scrollTo(coursesRef); setMobileMenuOpen(false); }}>
                    <FiArrowRight size={12} /> {cat}
                  </div>
                ))}
              </div>
            </div>
          </nav>

          <div className="edu-topbar-right">
            <button className="edu-topbar-cta" onClick={() => handleEnroll('Course Enrollment')}>
              Enroll Now
            </button>
          </div>

          <button className="edu-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="edu-hero" ref={homeRef}>
        <div className="edu-hero-grid-pattern" />
        <div className="edu-container">
          <div className="edu-hero-layout">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="edu-hero-left"
            >
              <div className="edu-hero-badge">
                <FiGlobe size={14} /> Trusted by 10,000+ Students Across India
              </div>
              <h1>
                Master Skills.<br />
                <span className="edu-highlight">Build Your Future.</span>
              </h1>
              <p className="edu-hero-desc">{eduData.description}</p>
              <div className="edu-hero-actions">
                <button className="edu-btn edu-btn-primary" onClick={() => handleEnroll('Course Enrollment')}>
                  Enroll Now <FiArrowRight />
                </button>
                <button className="edu-btn edu-btn-outline" onClick={() => scrollTo(coursesRef)}>
                  <FiPlay size={16} /> Browse Courses
                </button>
              </div>
              <div className="edu-hero-trust">
                <div className="edu-trust-avatars">
                  <div className="edu-trust-avatar">R</div>
                  <div className="edu-trust-avatar">P</div>
                  <div className="edu-trust-avatar">A</div>
                  <div className="edu-trust-avatar edu-trust-more">+9K</div>
                </div>
                <span>Join thousands of successful graduates</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="edu-hero-right"
            >
              <div className="edu-hero-stats-card">
                <h3>Our Impact</h3>
                <div className="edu-hero-stat-row">
                  <div className="edu-hero-stat">
                    <span className="edu-stat-num">10K+</span>
                    <span className="edu-stat-label">Students</span>
                  </div>
                  <div className="edu-hero-stat">
                    <span className="edu-stat-num">50+</span>
                    <span className="edu-stat-label">Courses</span>
                  </div>
                </div>
                <div className="edu-hero-stat-row">
                  <div className="edu-hero-stat">
                    <span className="edu-stat-num">95%</span>
                    <span className="edu-stat-label">Placement</span>
                  </div>
                  <div className="edu-hero-stat">
                    <span className="edu-stat-num">30+</span>
                    <span className="edu-stat-label">Mentors</span>
                  </div>
                </div>
                <div className="edu-hero-featured">
                  <FiAward size={18} />
                  <div>
                    <strong>#1 Rated Academy</strong>
                    <span>in Delhi NCR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="edu-hero-scroll-hint" onClick={() => scrollTo(coursesRef)}>
          <FiArrowDown size={20} />
        </div>
      </section>

      {/* Why Choose Us - Feature Cards */}
      <section className="edu-features" ref={featuresRef}>
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-tag">WHY CHOOSE US</span>
            <h2>What Makes EduBright Different</h2>
            <p>We don't just teach — we transform careers through a holistic learning experience</p>
          </div>
          <div className="edu-features-grid">
            {eduData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="edu-feature-card"
              >
                <div className="edu-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses - Expandable Cards */}
      <section className="edu-courses" ref={coursesRef}>
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-tag">OUR PROGRAMS</span>
            <h2>Explore Our Courses</h2>
            <p>Click on any course to view the complete syllabus and curriculum</p>
          </div>
          <div className="edu-courses-list">
            {eduData.courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`edu-course-expandable ${expandedCourse === index ? 'expanded' : ''}`}
              >
                <div className="edu-course-header" onClick={() => toggleCourse(index)}>
                  <div className="edu-course-header-left">
                    <div className="edu-course-icon">{course.icon}</div>
                    <div className="edu-course-info">
                      <div className="edu-course-title-row">
                        <h3>{course.title}</h3>
                        {course.popular && <span className="edu-course-popular">Most Popular</span>}
                      </div>
                      <p>{course.desc}</p>
                      <div className="edu-course-meta">
                        <span><FiClock size={13} /> {course.duration}</span>
                        <span><FiUsers size={13} /> {course.students}</span>
                        <span><FiAward size={13} /> {course.level}</span>
                      </div>
                    </div>
                  </div>
                  <div className="edu-course-header-right">
                    <div className="edu-course-price">{course.price}</div>
                    <div className="edu-course-expand-icon">
                      {expandedCourse === index ? <FiChevronUp /> : <FiChevronDown />}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedCourse === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="edu-course-syllabus"
                    >
                      <div className="edu-syllabus-content">
                        <h4><FiBookOpen size={16} /> Course Syllabus</h4>
                        <div className="edu-syllabus-grid">
                          {course.syllabus.map((topic, i) => (
                            <div key={i} className="edu-syllabus-item">
                              <FiCheckCircle size={14} />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                        <div className="edu-syllabus-action">
                          <button className="edu-btn edu-btn-primary" onClick={() => handleEnroll(course.title)}>
                            Enroll in {course.title} <FiArrowRight />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Results - Progress Section */}
      <section className="edu-results" ref={resultsRef}>
        <div className="edu-container">
          <div className="edu-section-header light">
            <span className="edu-section-tag">STUDENT RESULTS</span>
            <h2>Proven Track Record</h2>
            <p>Our numbers speak for themselves — real results from real students</p>
          </div>
          <div className="edu-results-grid">
            {eduData.studentResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="edu-result-card"
              >
                <div className="edu-result-circle" style={{ '--progress': `${result.value}%`, '--color': result.color }}>
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke={result.color} strokeWidth="6" strokeDasharray={`${result.value * 2.827} 282.7`} strokeLinecap="round" transform="rotate(-90 50 50)" />
                  </svg>
                  <span className="edu-result-value">{result.value}%</span>
                </div>
                <span className="edu-result-label">{result.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors - Profile Grid */}
      <section className="edu-instructors" ref={instructorsRef}>
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-tag">OUR MENTORS</span>
            <h2>Meet Your Instructors</h2>
            <p>Industry experts who are passionate about teaching and mentoring the next generation</p>
          </div>
          <div className="edu-instructors-grid">
            {eduData.instructors.map((inst, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="edu-instructor-card"
              >
                <div className="edu-instructor-avatar">{inst.avatar}</div>
                <h4>{inst.name}</h4>
                <span className="edu-instructor-role">{inst.role}</span>
                <p>{inst.desc}</p>
                <div className="edu-instructor-tags">
                  {inst.expertise.map((tag, i) => (
                    <span key={i} className="edu-expertise-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="edu-testimonials" ref={testimonialsRef}>
        <div className="edu-container">
          <div className="edu-section-header">
            <span className="edu-section-tag">STUDENT REVIEWS</span>
            <h2>What Our Students Say</h2>
            <p>Real stories from students who transformed their careers with EduBright</p>
          </div>
          <div className="edu-testimonials-grid">
            {eduData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="edu-testimonial-card"
              >
                <div className="edu-testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <FiStar key={i} className="edu-star-filled" />
                  ))}
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

      {/* Contact / Enroll Form */}
      <section className="edu-contact" ref={contactRef}>
        <div className="edu-container">
          <div className="edu-section-header light">
            <span className="edu-section-tag">GET IN TOUCH</span>
            <h2>Start Your Learning Journey</h2>
            <p>Fill out the form below and our counselors will reach out to you</p>
          </div>
          <div className="edu-contact-layout">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="edu-contact-info"
            >
              <div className="edu-info-card">
                <FiPhone size={20} />
                <div>
                  <strong>Phone</strong>
                  <span>{eduData.phone}</span>
                </div>
              </div>
              <div className="edu-info-card">
                <FiMail size={20} />
                <div>
                  <strong>Email</strong>
                  <span>{eduData.email}</span>
                </div>
              </div>
              <div className="edu-info-card">
                <FiMapPin size={20} />
                <div>
                  <strong>Address</strong>
                  <span>{eduData.address}</span>
                </div>
              </div>
              <div className="edu-info-card">
                <FiClock size={20} />
                <div>
                  <strong>Timing</strong>
                  <span>{eduData.timing}</span>
                </div>
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=919876543210&text=${encodeURIComponent('Hi! I want to know more about courses at ' + eduData.name)}`}
                className="edu-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMessageCircle /> Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="edu-enroll-form"
            >
              <h3><FiSend size={18} /> Enroll Now</h3>
              {formSubmitted ? (
                <div className="edu-form-success">
                  <FiCheckCircle size={40} />
                  <h4>Thank You!</h4>
                  <p>We've received your inquiry. Our counselor will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="edu-form-row">
                    <div className="edu-form-group">
                      <label><FiUser size={14} /> Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleFormChange} placeholder="Enter your name" required />
                    </div>
                    <div className="edu-form-group">
                      <label><FiMail size={14} /> Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Enter your email" required />
                    </div>
                  </div>
                  <div className="edu-form-row">
                    <div className="edu-form-group">
                      <label><FiPhone size={14} /> Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} placeholder="Enter your phone" required />
                    </div>
                    <div className="edu-form-group">
                      <label><FiBookOpen size={14} /> Course</label>
                      <select name="course" value={formData.course} onChange={handleFormChange} required>
                        <option value="">Select a course</option>
                        {eduData.courses.map((c, i) => (
                          <option key={i} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="edu-form-group full">
                    <label><FiMessageCircle size={14} /> Message</label>
                    <textarea name="message" value={formData.message} onChange={handleFormChange} placeholder="Any specific questions?" rows={3}></textarea>
                  </div>
                  <button type="submit" className="edu-btn edu-btn-primary edu-btn-full">
                    <FiSend size={16} /> Submit Enrollment Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <TemplateFooter name={eduData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

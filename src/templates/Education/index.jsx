import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiGlobe, FiUsers, FiAward, FiBookOpen, FiCheckCircle, FiMenu } from 'react-icons/fi';
import { FaCode, FaPaintBrush, FaChartLine, FaBrain } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './EducationTemplate.css';

const eduData = {
  name: "Your Academy",
  tagline: "Learn. Build. Grow.",
  description: "Master in-demand skills with expert-led courses. From web development to data science, we've got your future covered.",
  phone: "+91 98765 43210",
  email: "info@youracademy.com",
  address: "456 Education Hub, Delhi, India",
  timing: "Mon-Sat: 9:00 AM - 8:00 PM",
  courses: [
    {
      icon: <FaCode />,
      title: "Web Development",
      desc: "Master HTML, CSS, JavaScript, React, Node.js and build full-stack applications from scratch.",
      duration: "6 months",
      students: "2,400+",
      level: "Beginner to Advanced",
      popular: true,
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      desc: "Learn user research, wireframing, prototyping in Figma, and create stunning user experiences.",
      duration: "4 months",
      students: "1,800+",
      level: "Beginner Friendly",
      popular: false,
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      desc: "SEO, social media marketing, Google Ads, content strategy, and analytics mastery.",
      duration: "3 months",
      students: "3,100+",
      level: "All Levels",
      popular: false,
    },
    {
      icon: <FaBrain />,
      title: "Data Science",
      desc: "Python, machine learning, data visualization, statistics, and real-world project experience.",
      duration: "8 months",
      students: "1,500+",
      level: "Intermediate",
      popular: true,
    },
  ],
  instructors: [
    { name: "Priya Sharma", role: "Web Dev Lead", desc: "10+ years at top tech companies. Passionate about teaching.", avatar: "👩‍💻" },
    { name: "Rahul Verma", role: "Design Expert", desc: "Award-winning designer. Worked with Fortune 500 brands.", avatar: "👨‍🎨" },
    { name: "Anita Patel", role: "Marketing Pro", desc: "Scaled 100+ businesses. Google certified expert.", avatar: "👩‍💼" },
  ],
  pricing: [
    { name: "Starter", price: "₹4,999", period: "one-time", features: ["1 Course Access", "Lifetime Validity", "Certificate", "Community Access", "Email Support"] },
    { name: "Pro", price: "₹9,999", period: "one-time", features: ["3 Course Access", "Lifetime Validity", "Certificate", "Community Access", "1-on-1 Mentoring", "Job Assistance", "Priority Support"], popular: true },
    { name: "Enterprise", price: "₹19,999", period: "one-time", features: ["All Courses", "Lifetime Validity", "Certificate", "Community Access", "1-on-1 Mentoring", "Job Guarantee", "Priority Support", "Team Discounts"] },
  ],
};

export default function EducationTemplate() {
  const [demoModal, setDemoModal] = useState({ open: false, type: 'buy', item: '' });
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  const openDemo = (item) => {
    setDemoModal({ open: true, type: 'buy', item: item || 'Course' });
  };

  return (
    <div className="edu-template">
      {/* Navbar */}
      <nav className="edu-nav">
        <div className="edu-nav-inner">
          <div className="edu-logo">
            <div className="edu-logo-icon"><FiBookOpen /></div>
            {eduData.name}
          </div>
          <ul className="edu-nav-links">
            <li><a href="#courses">Courses</a></li>
            <li><a href="#instructors">Instructors</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#enroll">Enroll</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="edu-mobile-toggle" aria-label="Menu">
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="edu-hero">
        <div className="edu-hero-bg" />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="edu-hero-content"
          >
            <div className="edu-hero-badge">
              <FiGlobe size={14} /> Trusted by 10,000+ Students
            </div>
            <h1>
              {eduData.tagline.split(' ').slice(0, 1)}{' '}
              <span>{eduData.tagline.split(' ').slice(1, 2)}</span>{' '}
              <span className="edu-orange">{eduData.tagline.split(' ').slice(2).join(' ')}</span>
            </h1>
            <p>{eduData.description}</p>
            <div className="edu-hero-buttons">
              <button className="edu-btn edu-btn-primary" onClick={() => openDemo('Course Enrollment')}>
                Enroll Now <FiArrowRight />
              </button>
              <a href="#courses" className="edu-btn edu-btn-secondary">
                <FiBookOpen /> Browse Courses
              </a>
            </div>
            <div className="edu-hero-stats">
              <motion.div className="edu-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h3>10K+</h3>
                <p>Students</p>
              </motion.div>
              <motion.div className="edu-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h3>50+</h3>
                <p>Courses</p>
              </motion.div>
              <motion.div className="edu-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <h3>95%</h3>
                <p>Placement</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="edu-section">
        <h2 className="edu-section-title">Our Courses</h2>
        <p className="edu-section-subtitle">Industry-ready skills taught by experts</p>
        <div className="edu-courses-grid">
          {eduData.courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="edu-course-card"
            >
              {course.popular && <span className="edu-course-popular">Popular</span>}
              <div className="edu-course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="edu-course-meta">
                <span><FiClock size={12} /> {course.duration}</span>
                <span><FiUsers size={12} /> {course.students}</span>
                <span><FiAward size={12} /> {course.level}</span>
              </div>
              <button className="edu-btn edu-btn-primary edu-btn-full" onClick={() => openDemo(course.title)}>
                Enroll Now <FiArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="edu-section" style={{ background: '#0f172a' }}>
        <h2 className="edu-section-title">Meet Our Instructors</h2>
        <p className="edu-section-subtitle">Learn from industry leaders and passionate educators</p>
        <div className="edu-instructors-grid">
          {eduData.instructors.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="edu-instructor-card"
            >
              <div className="edu-instructor-avatar">{inst.avatar}</div>
              <h3>{inst.name}</h3>
              <div className="edu-instructor-role">{inst.role}</div>
              <p>{inst.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="edu-section edu-pricing">
        <h2 className="edu-section-title">Pricing Plans</h2>
        <p className="edu-section-subtitle">Invest in your future with flexible pricing</p>
        <div className="edu-pricing-grid">
          {eduData.pricing.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`edu-price-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <span className="edu-popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <div className="edu-price">{plan.price}</div>
              <div className="edu-price-period">{plan.period}</div>
              <ul>
                {plan.features.map((feature, j) => (
                  <li key={j}><FiCheckCircle size={14} /> {feature}</li>
                ))}
              </ul>
              <button className={`edu-btn ${plan.popular ? 'edu-btn-primary' : 'edu-btn-secondary'} edu-btn-full`} onClick={() => openDemo(`${plan.name} Plan`)}>
                Buy Course <FiArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enrollment */}
      <section id="enroll" className="edu-section edu-enroll-section">
        <h2 className="edu-section-title">How to Enroll</h2>
        <p className="edu-section-subtitle">Start your learning journey in three simple steps</p>
        <div className="edu-enroll-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="edu-enroll-card"
          >
            <div className="edu-enroll-icon"><FiBookOpen /></div>
            <h3>1. Choose a Course</h3>
            <p>Browse our catalog and pick the course that matches your career goals and interests.</p>
            <a href="#courses" className="edu-btn edu-btn-secondary edu-btn-full">
              <FiBookOpen /> Browse Courses
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="edu-enroll-card"
          >
            <div className="edu-enroll-icon"><FiPhone /></div>
            <h3>2. Talk to Us</h3>
            <p>Have questions? Reach out and our counselors will guide you to the right plan.</p>
            <a href={`tel:${eduData.phone}`} className="edu-btn edu-btn-secondary edu-btn-full">
              <FiPhone /> Call Now
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="edu-enroll-card"
          >
            <div className="edu-enroll-icon"><FiArrowRight /></div>
            <h3>3. Start Learning</h3>
            <p>Get instant access to course materials, join live sessions, and start building skills.</p>
            <button className="edu-btn edu-btn-primary edu-btn-full" onClick={() => openDemo('Enrollment')}>
              Enroll Now <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="edu-section edu-contact">
        <h2 className="edu-section-title">Get in Touch</h2>
        <p className="edu-section-subtitle">We're here to help you succeed</p>
        <div className="edu-contact-grid">
          <div className="edu-contact-info">
            <div className="edu-info-item">
              <FiMapPin /> <span>{eduData.address}</span>
            </div>
            <div className="edu-info-item">
              <FiPhone /> <span>{eduData.phone}</span>
            </div>
            <div className="edu-info-item">
              <FiMail /> <span>{eduData.email}</span>
            </div>
            <div className="edu-info-item">
              <FiClock /> <span>{eduData.timing}</span>
            </div>
          </div>
          <form className="edu-contact-form" onSubmit={e => { e.preventDefault(); openDemo('Contact Form'); }}>
            <input className="edu-form-input" type="text" placeholder="Your Name" required />
            <input className="edu-form-input" type="email" placeholder="Your Email" required />
            <select className="edu-form-input" defaultValue="" required>
              <option value="" disabled>Select Course Interest</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Digital Marketing</option>
              <option>Data Science</option>
            </select>
            <textarea className="edu-form-input edu-form-textarea" placeholder="Your Message" rows={4} required />
            <button type="submit" className="edu-btn edu-btn-primary edu-btn-full">
              Send Inquiry <FiArrowRight />
            </button>
          </form>
        </div>
      </section>

      <TemplateFooter name={eduData.name} onSettingsClick={() => setShowSettings(true)} />
      <DemoModal
        isOpen={demoModal.open}
        onClose={() => setDemoModal({ open: false, type: '', item: '' })}
        type={demoModal.type}
        itemName={demoModal.item}
      />
    </div>
  );
}

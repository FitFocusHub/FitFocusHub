import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiArrowLeft,
  FiMenu, FiX, FiStar, FiMessageCircle, FiUsers, FiAward, FiHeart,
  FiChevronRight, FiChevronLeft, FiDroplet
} from 'react-icons/fi';
import { FaDumbbell, FaHeartbeat, FaFire, FaBolt, FaFistRaised } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './GymTemplate.css';

const gymData = {
  name: "Iron Forge Gym",
  tagline: "FORGE YOUR STRONGEST SELF",
  subtitle: "Where sweat meets ambition. No shortcuts. No excuses. Just results.",
  phone: "+91 XXXXX XXXXX",
  email: "example@gmail.com",
  address: "42 Steel Avenue, Andheri West, Mumbai",
  timing: "Mon-Sun: 5:00 AM – 11:00 PM",
  stats: { members: "2,500+", trainers: 18, classes: 120, years: 6 },
  classes: [
    { name: "Power Yoga", time: "6:00 AM", duration: "60 min", intensity: "Low", color: "#22c55e", icon: "🧘" },
    { name: "HIIT Burn", time: "7:30 AM", duration: "45 min", intensity: "High", color: "#ef4444", icon: "🔥" },
    { name: "CrossFit WOD", time: "9:00 AM", duration: "50 min", intensity: "High", color: "#f97316", icon: "🏋️" },
    { name: "Zumba Dance", time: "10:30 AM", duration: "55 min", intensity: "Medium", color: "#a855f7", icon: "💃" },
    { name: "Boxing Fundamentals", time: "4:00 PM", duration: "60 min", intensity: "High", color: "#ef4444", icon: "🥊" },
    { name: "Strength Lab", time: "6:00 PM", duration: "75 min", intensity: "High", color: "#3b82f6", icon: "💪" },
    { name: "Stretch & Recover", time: "8:00 PM", duration: "40 min", intensity: "Low", color: "#22c55e", icon: "🧘‍♂️" },
  ],
  trainers: [
    { name: "Vikram Rathore", title: "Head Coach & Founder", specialty: "Strength & Olympic Lifting", exp: "12 yrs", bio: "Former national-level powerlifter. Certified CSCS. Transformed 500+ lives.", img: "🏋️" },
    { name: "Ananya Deshmukh", title: "Yoga & Mobility Specialist", specialty: "Vinyasa Yoga & Recovery", exp: "8 yrs", bio: "RYT-500 certified. Blends traditional yoga with modern sports science.", img: "🧘" },
    { name: "Rohan Kapoor", title: "CrossFit Level 3 Trainer", specialty: "CrossFit & Functional Training", exp: "7 yrs", bio: "Competitive CrossFit athlete. Designs programs that push boundaries.", img: "🏋️‍♂️" },
    { name: "Nisha Mehta", title: "Dance Fitness Lead", specialty: "Zumba & Cardio Dance", exp: "6 yrs", bio: "Licensed Zumba instructor. Makes every session a party you won't forget.", img: "💃" },
  ],
  memberships: [
    { name: "STARTER", price: "1,499", period: "/month", perks: ["Gym Floor Access", "Locker & Shower", "2 Group Classes/week", "Free WiFi"], highlight: false },
    { name: "UNLIMITED", price: "2,999", period: "/month", perks: ["Full Gym Access", "All Group Classes", "Steam & Sauna", "Nutrition Consult", "1 Guest Pass/mo"], highlight: true },
    { name: "ELITE", price: "4,999", period: "/month", perks: ["Everything in Unlimited", "Personal Trainer (12 sessions)", "Custom Diet Plan", "Recovery Zone", "Priority Booking", "Unlimited Guests"], highlight: false },
    { name: "ANNUAL", price: "29,999", period: "/year", perks: ["Everything in Elite", "Save ₹5,989/year", "Free Merch Pack", "Birthday Perks", "VIP Events Access"], highlight: false },
  ],
  testimonials: [
    { name: "Arjun Malhotra", role: "Software Engineer", rating: 5, text: "Lost 22kg in 8 months. Vikram's strength program completely rewired my body and mindset." },
    { name: "Sneha Iyer", role: "Marketing Manager", rating: 5, text: "The yoga and HIIT combo here is unmatched. Ananya's classes are therapy for both body and soul." },
    { name: "Kabir Sharma", role: "Entrepreneur", rating: 5, text: "I've trained at gyms across Mumbai. Nothing comes close to Iron Forge's energy and coaching quality." },
    { name: "Pooja Nair", role: "Doctor", rating: 5, text: "As a physician, I appreciate their evidence-based approach. Safe, effective, and genuinely transformative." },
  ],
};

export default function GymTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('membership');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [bmiHeight, setBmiHeight] = useState('');
  const [bmiWeight, setBmiWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  const homeRef = useRef(null);
  const challengeRef = useRef(null);
  const scheduleRef = useRef(null);
  const bmiRef = useRef(null);
  const trainersRef = useRef(null);
  const membershipRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handlePurchase = (planName) => {
    setModalType('membership');
    setModalItem(planName);
    setShowModal(true);
  };

  const handleBookClass = (className) => {
    setModalType('booking');
    setModalItem(className);
    setShowModal(true);
  };

  const calculateBMI = () => {
    if (!bmiHeight || !bmiWeight) return;
    const h = parseFloat(bmiHeight) / 100;
    const w = parseFloat(bmiWeight);
    const bmi = (w / (h * h)).toFixed(1);
    setBmiResult(bmi);
    if (bmi < 18.5) setBmiCategory('Underweight');
    else if (bmi < 25) setBmiCategory('Normal');
    else if (bmi < 30) setBmiCategory('Overweight');
    else setBmiCategory('Obese');
  };

  const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % gymData.testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + gymData.testimonials.length) % gymData.testimonials.length);

  if (showSettings) {
    return <Settings onBack={() => setShowSettings(false)} />;
  }

  return (
    <div className="forge">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type={modalType} itemName={modalItem} />

      {/* TOP NAV */}
      <nav className="forge-nav">
        <div className="forge-nav-inner">
          <div className="forge-logo" onClick={() => scrollTo(homeRef)}>
            <FaDumbbell /> IRON FORGE
          </div>
          <div className="forge-nav-center">
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(challengeRef)}>Challenge</span>
            <span onClick={() => scrollTo(scheduleRef)}>Schedule</span>
            <span onClick={() => scrollTo(bmiRef)}>BMI</span>
            <span onClick={() => scrollTo(trainersRef)}>Trainers</span>
            <span onClick={() => scrollTo(membershipRef)}>Membership</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
          </div>
          <button className="forge-nav-cta" onClick={() => handlePurchase('membership')}>
            Join Now
          </button>
          <button className="forge-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE-IN MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="forge-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="forge-mobile-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="forge-mobile-header">
                <span className="forge-mobile-logo"><FaDumbbell /> IRON FORGE</span>
                <FiX onClick={() => setMobileMenuOpen(false)} className="forge-mobile-close" />
              </div>
              <div className="forge-mobile-links">
                <span onClick={() => scrollTo(homeRef)}>Home</span>
                <span onClick={() => scrollTo(challengeRef)}>Challenge</span>
                <span onClick={() => scrollTo(scheduleRef)}>Schedule</span>
                <span onClick={() => scrollTo(bmiRef)}>BMI Calculator</span>
                <span onClick={() => scrollTo(trainersRef)}>Trainers</span>
                <span onClick={() => scrollTo(membershipRef)}>Membership</span>
                <span onClick={() => scrollTo(contactRef)}>Contact</span>
              </div>
              <button className="forge-mobile-cta" onClick={() => { handlePurchase('membership'); setMobileMenuOpen(false); }}>
                Start Your Transformation
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* HERO WITH VIDEO BG PLACEHOLDER */}
      <section className="forge-hero" ref={homeRef}>
        <div className="forge-hero-video-placeholder">
          <div className="forge-hero-play-icon">▶</div>
          <span>Video Background</span>
        </div>
        <div className="forge-hero-overlay" />
        <div className="forge-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="forge-hero-content"
          >
            <div className="forge-hero-line" />
            <h1>{gymData.tagline}</h1>
            <p>{gymData.subtitle}</p>
            <div className="forge-hero-actions">
              <button className="forge-btn-primary" onClick={() => handlePurchase('membership')}>
                Start Your Journey <FiArrowRight />
              </button>
              <button className="forge-btn-ghost" onClick={() => scrollTo(scheduleRef)}>
                See Class Schedule
              </button>
            </div>
          </motion.div>
        </div>
        <div className="forge-hero-stats-strip">
          <div className="forge-container">
            <div className="forge-hero-stats">
              <div><strong>{gymData.stats.members}</strong><span>Members</span></div>
              <div className="forge-stat-divider" />
              <div><strong>{gymData.stats.trainers}</strong><span>Trainers</span></div>
              <div className="forge-stat-divider" />
              <div><strong>{gymData.stats.classes}+</strong><span>Monthly Classes</span></div>
              <div className="forge-stat-divider" />
              <div><strong>{gymData.stats.years}+</strong><span>Years Strong</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE CTA */}
      <section className="forge-challenge" ref={challengeRef}>
        <div className="forge-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="forge-challenge-inner"
          >
            <div className="forge-challenge-badge">🔥 30-DAY CHALLENGE</div>
            <h2>The Iron Forge <span className="forge-text-red">30-Day Shred</span></h2>
            <p>Lose up to 8kg in 30 days with our guided challenge. Includes personal coaching, meal plan, daily accountability, and a money-back guarantee.</p>
            <div className="forge-challenge-details">
              <div className="forge-challenge-detail">
                <FaFire className="forge-text-red" />
                <span>Daily Guided Workouts</span>
              </div>
              <div className="forge-challenge-detail">
                <FaBolt className="forge-text-red" />
                <span>Custom Nutrition Plan</span>
              </div>
              <div className="forge-challenge-detail">
                <FaFistRaised className="forge-text-red" />
                <span>Private Community Group</span>
              </div>
            </div>
            <button className="forge-btn-primary forge-btn-lg" onClick={() => handleBookClass('30-Day Challenge')}>
              Accept the Challenge <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE SCHEDULE */}
      <section className="forge-schedule" ref={scheduleRef}>
        <div className="forge-container">
          <div className="forge-section-header">
            <span className="forge-label">WEEKLY TIMETABLE</span>
            <h2>Class Schedule</h2>
            <p>Every session is designed to push you further. Book your spot now.</p>
          </div>
          <div className="forge-timeline">
            <div className="forge-timeline-line" />
            {gymData.classes.map((cls, i) => (
              <motion.div
                key={i}
                className={`forge-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="forge-timeline-dot" style={{ background: cls.color }} />
                <div className="forge-timeline-card">
                  <div className="forge-timeline-time" style={{ color: cls.color }}>{cls.time}</div>
                  <div className="forge-timeline-icon">{cls.icon}</div>
                  <h3>{cls.name}</h3>
                  <div className="forge-timeline-meta">
                    <span>{cls.duration}</span>
                    <span className="forge-intensity-badge" style={{ background: cls.color + '20', color: cls.color }}>
                      {cls.intensity}
                    </span>
                  </div>
                  <button className="forge-btn-small" onClick={() => handleBookClass(cls.name)}>
                    Book Now <FiChevronRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI CALCULATOR */}
      <section className="forge-bmi" ref={bmiRef}>
        <div className="forge-container">
          <div className="forge-bmi-wrap">
            <div className="forge-bmi-info">
              <span className="forge-label">KNOW YOUR BODY</span>
              <h2>BMI Calculator</h2>
              <p>Understanding your Body Mass Index is the first step toward a smarter fitness plan. Enter your details below.</p>
              <div className="forge-bmi-scale">
                <div className="forge-scale-bar">
                  <div style={{ background: '#3b82f6', flex: 1 }} />
                  <div style={{ background: '#22c55e', flex: 1 }} />
                  <div style={{ background: '#f97316', flex: 1 }} />
                  <div style={{ background: '#ef4444', flex: 1 }} />
                </div>
                <div className="forge-scale-labels">
                  <span>Underweight</span>
                  <span>Normal</span>
                  <span>Overweight</span>
                  <span>Obese</span>
                </div>
              </div>
            </div>
            <div className="forge-bmi-form">
              <div className="forge-bmi-input-group">
                <label>Height (cm)</label>
                <input
                  type="number"
                  placeholder="e.g. 175"
                  value={bmiHeight}
                  onChange={e => setBmiHeight(e.target.value)}
                />
              </div>
              <div className="forge-bmi-input-group">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  placeholder="e.g. 70"
                  value={bmiWeight}
                  onChange={e => setBmiWeight(e.target.value)}
                />
              </div>
              <button className="forge-btn-primary" onClick={calculateBMI}>
                Calculate BMI
              </button>
              {bmiResult && (
                <motion.div
                  className="forge-bmi-result"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="forge-bmi-number">{bmiResult}</div>
                  <div className="forge-bmi-cat" style={{
                    color: bmiCategory === 'Normal' ? '#22c55e' :
                      bmiCategory === 'Underweight' ? '#3b82f6' :
                      bmiCategory === 'Overweight' ? '#f97316' : '#ef4444'
                  }}>
                    {bmiCategory}
                  </div>
                  {bmiCategory !== 'Normal' && (
                    <p className="forge-bmi-cta-text">
                      Let our trainers help you reach your ideal BMI.
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRAINER PROFILES - CARDS WITH IMAGES */}
      <section className="forge-trainers" ref={trainersRef}>
        <div className="forge-container">
          <div className="forge-section-header">
            <span className="forge-label">MEET THE TEAM</span>
            <h2>Our Trainers</h2>
            <p>Certified experts who've walked the path. They'll guide you every rep of the way.</p>
          </div>
          <div className="forge-trainers-grid">
            {gymData.trainers.map((trainer, i) => (
              <motion.div
                key={i}
                className="forge-trainer-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="forge-trainer-img">
                  <div className="forge-trainer-img-placeholder">{trainer.img}</div>
                  <div className="forge-trainer-exp-badge">{trainer.exp}</div>
                </div>
                <div className="forge-trainer-body">
                  <h3>{trainer.name}</h3>
                  <span className="forge-trainer-title">{trainer.title}</span>
                  <p className="forge-trainer-specialty">{trainer.specialty}</p>
                  <p className="forge-trainer-bio">{trainer.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP - HORIZONTAL SCROLL */}
      <section className="forge-membership" ref={membershipRef}>
        <div className="forge-container">
          <div className="forge-section-header">
            <span className="forge-label">CHOOSE YOUR PATH</span>
            <h2>Membership Plans</h2>
            <p>Swipe to explore. Every plan comes with a 7-day free trial.</p>
          </div>
        </div>
        <div className="forge-membership-scroll">
          <div className="forge-membership-track">
            {gymData.memberships.map((plan, i) => (
              <motion.div
                key={i}
                className={`forge-plan-card ${plan.highlight ? 'forge-plan-highlight' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {plan.highlight && <div className="forge-plan-badge">MOST POPULAR</div>}
                <h3>{plan.name}</h3>
                <div className="forge-plan-price">
                  <span className="forge-rupee">₹</span>{plan.price}<span className="forge-plan-period">{plan.period}</span>
                </div>
                <ul>
                  {plan.perks.map((perk, j) => (
                    <li key={j}><FiCheck className="forge-check" /> {perk}</li>
                  ))}
                </ul>
                <button
                  className={plan.highlight ? 'forge-btn-primary forge-btn-full' : 'forge-btn-outline forge-btn-full'}
                  onClick={() => handlePurchase(plan.name)}
                >
                  Get Started <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="forge-testimonials" ref={testimonialsRef}>
        <div className="forge-container">
          <div className="forge-section-header">
            <span className="forge-label">REAL STORIES</span>
            <h2>What Members Say</h2>
          </div>
          <div className="forge-carousel">
            <button className="forge-carousel-btn" onClick={prevTestimonial}><FiChevronLeft /></button>
            <div className="forge-carousel-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="forge-testimonial-active"
                >
                  <div className="forge-testimonial-stars">
                    {Array.from({ length: gymData.testimonials[testimonialIdx].rating }).map((_, j) => (
                      <FiStar key={j} className="forge-star" />
                    ))}
                  </div>
                  <p className="forge-testimonial-text">"{gymData.testimonials[testimonialIdx].text}"</p>
                  <div className="forge-testimonial-author">
                    <div className="forge-testimonial-avatar">
                      {gymData.testimonials[testimonialIdx].name.charAt(0)}
                    </div>
                    <div>
                      <strong>{gymData.testimonials[testimonialIdx].name}</strong>
                      <span>{gymData.testimonials[testimonialIdx].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <button className="forge-carousel-btn" onClick={nextTestimonial}><FiChevronRight /></button>
          </div>
          <div className="forge-carousel-dots">
            {gymData.testimonials.map((_, i) => (
              <div
                key={i}
                className={`forge-dot ${i === testimonialIdx ? 'active' : ''}`}
                onClick={() => setTestimonialIdx(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="forge-contact" ref={contactRef}>
        <div className="forge-container">
          <div className="forge-section-header">
            <span className="forge-label">GET IN TOUCH</span>
            <h2>Contact Us</h2>
          </div>
          <div className="forge-contact-grid">
            <div className="forge-contact-cards">
              <div className="forge-contact-card">
                <FiMapPin className="forge-contact-icon" />
                <h4>Visit Us</h4>
                <p>{gymData.address}</p>
              </div>
              <div className="forge-contact-card">
                <FiPhone className="forge-contact-icon" />
                <h4>Call Us</h4>
                <p>{gymData.phone}</p>
              </div>
              <div className="forge-contact-card">
                <FiMail className="forge-contact-icon" />
                <h4>Email Us</h4>
                <p>{gymData.email}</p>
              </div>
              <div className="forge-contact-card">
                <FiClock className="forge-contact-icon" />
                <h4>Working Hours</h4>
                <p>{gymData.timing}</p>
              </div>
            </div>
            <div className="forge-contact-map-placeholder">
              <div className="forge-map-box">
                <FiMapPin />
                <span>Map Placeholder</span>
                <p>42 Steel Avenue, Andheri West, Mumbai</p>
              </div>
              <a
                href={`https://api.whatsapp.com/send?phone=919999999999&text=${encodeURIComponent('Hi! I want to join Iron Forge Gym.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="forge-btn-primary forge-btn-full forge-whatsapp-btn"
              >
                <FiMessageCircle /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name={gymData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

function FiCheck(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      strokeLinejoin="round" className={props.className} style={props.style}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight, FiMenu, FiX, FiInstagram, FiSend, FiUser, FiCalendar, FiMessageSquare } from 'react-icons/fi';
import { FaCut, FaSpa, FaHandSparkles, FaPaintBrush, FaUserTie, FaGem } from 'react-icons/fa';
import DemoModal from '../shared/DemoModal';
import Settings from '../shared/Settings';
import TemplateFooter from '../shared/TemplateFooter';
import './SalonTemplate.css';

const salonData = {
  name: "Glam Studio",
  tagline: "Redefine Your Beauty",
  description: "Where artistry meets self-care. Premium salon services crafted for the modern you.",
  phone: "+91 XXXXX XXXXX",
  email: "example@gmail.com",
  address: "78 Beauty Lane, Pune, Maharashtra 411001",
  timing: "Mon-Sun: 10:00 AM - 9:00 PM",
  instagram: "@mohammad_s4kib",
  services: [
    { icon: <FaCut />, name: "Hair Cut", price: "₹499", desc: "Precision cuts tailored to your style" },
    { icon: <FaSpa />, name: "Facial", price: "₹799", desc: "Glow-boosting facial treatments" },
    { icon: <FaHandSparkles />, name: "Manicure", price: "₹399", desc: "Nail care & artistry at its finest" },
    { icon: <FaPaintBrush />, name: "Pedicure", price: "₹499", desc: "Relaxing foot care & polish" },
    { icon: <FaUserTie />, name: "Hair Color", price: "₹1,499", desc: "Vibrant color transformations" },
    { icon: <FaGem />, name: "Bridal Makeup", price: "₹4,999", desc: "Flawless looks for your big day" },
  ],
  experts: [
    { name: "Ananya M.", role: "Hair Stylist", exp: "8 yrs" },
    { name: "Priya S.", role: "Skin Expert", exp: "6 yrs" },
    { name: "Rohit K.", role: "Color Specialist", exp: "10 yrs" },
    { name: "Meera D.", role: "Bridal Artist", exp: "7 yrs" },
    { name: "Arjun P.", nameShort: "Arjun", role: "Nail Artist", exp: "5 yrs" },
  ],
  packages: [
    {
      name: "Essential", price: "₹1,999", popular: false,
      features: [
        { text: "Hair Cut & Style", included: true },
        { text: "Basic Facial", included: true },
        { text: "Manicure", included: true },
        { text: "Pedicure", included: false },
        { text: "Hair Color", included: false },
        { text: "Bridal Makeup", included: false },
      ]
    },
    {
      name: "Glamorous", price: "₹4,999", popular: true,
      features: [
        { text: "Hair Cut & Style", included: true },
        { text: "Luxury Facial", included: true },
        { text: "Manicure", included: true },
        { text: "Pedicure", included: true },
        { text: "Hair Color", included: true },
        { text: "Bridal Makeup", included: false },
      ]
    },
    {
      name: "Royal", price: "₹9,999", popular: false,
      features: [
        { text: "Hair Cut & Style", included: true },
        { text: "Luxury Facial", included: true },
        { text: "Manicure & Pedicure", included: true },
        { text: "Full Hair Color", included: true },
        { text: "Bridal Makeup", included: true },
        { text: "Free Touch-ups (1 mo)", included: true },
      ]
    },
  ],
  beforeAfter: [
    { label: "Hair Transformation" },
    { label: "Bridal Glow" },
    { label: "Skin Revival" },
  ],
  instagramPosts: [1, 2, 3, 4, 5, 6],
};

export default function SalonTemplate() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('booking');
  const [modalItem, setModalItem] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', service: '', date: '', message: '' });

  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const beforeAfterRef = useRef(null);
  const expertsRef = useRef(null);
  const packagesRef = useRef(null);
  const bookRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleBookNow = (item) => {
    setModalType('booking');
    setModalItem(item);
    setShowModal(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleBookNow(`${formData.service || 'General'} Booking`);
  };

  if (showSettings) return <Settings onBack={() => setShowSettings(false)} />;

  return (
    <div className="gss">
      <DemoModal isOpen={showModal} onClose={() => setShowModal(false)} type={modalType} itemName={modalItem} />

      <nav className={`gss-nav ${scrolled ? 'gss-nav--scrolled' : ''}`}>
        <div className="gss-nav__inner">
          <div className="gss-nav__logo" onClick={() => scrollTo(homeRef)}>
            <FaCut /> <span>Glam Studio</span>
          </div>
          <button className="gss-nav__toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          <div className={`gss-nav__links ${mobileMenuOpen ? 'gss-nav__links--open' : ''}`}>
            <span onClick={() => scrollTo(homeRef)}>Home</span>
            <span onClick={() => scrollTo(servicesRef)}>Services</span>
            <span onClick={() => scrollTo(beforeAfterRef)}>Results</span>
            <span onClick={() => scrollTo(expertsRef)}>Experts</span>
            <span onClick={() => scrollTo(packagesRef)}>Packages</span>
            <span onClick={() => scrollTo(contactRef)}>Contact</span>
            <button className="gss-nav__cta" onClick={() => { handleBookNow('appointment'); setMobileMenuOpen(false); }}>
              Book Now
            </button>
          </div>
        </div>
      </nav>

      <section className="gss-hero" ref={homeRef}>
        <div className="gss-hero__overlay"></div>
        <div className="gss-hero__content">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="gss-hero__badge">
            Welcome to Glam Studio Salon
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            {salonData.tagline}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            {salonData.description}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="gss-hero__btns">
            <button className="gss-btn gss-btn--primary" onClick={() => scrollTo(bookRef)}>
              Book Appointment <FiArrowRight />
            </button>
            <button className="gss-btn gss-btn--glass" onClick={() => scrollTo(servicesRef)}>
              Explore Services
            </button>
          </motion.div>
        </div>
      </section>

      <section className="gss-services" ref={servicesRef}>
        <div className="gss-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Our Services
          </motion.h2>
          <p className="gss-sub">Curated beauty experiences with premium care</p>
          <div className="gss-services__grid">
            {salonData.services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gss-service-card"
              >
                <div className="gss-service-card__icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <div className="gss-service-card__price">{s.price}</div>
                <button className="gss-service-card__btn" onClick={() => handleBookNow(s.name)}>
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gss-before-after" ref={beforeAfterRef}>
        <div className="gss-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Before & After
          </motion.h2>
          <p className="gss-sub">Real transformations, real results</p>
          <div className="gss-ba__grid">
            {salonData.beforeAfter.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="gss-ba__card"
              >
                <div className="gss-ba__images">
                  <div className="gss-ba__img gss-ba__img--before">
                    <span>Before</span>
                  </div>
                  <div className="gss-ba__divider">
                    <div className="gss-ba__divider-line"></div>
                    <div className="gss-ba__divider-icon">VS</div>
                    <div className="gss-ba__divider-line"></div>
                  </div>
                  <div className="gss-ba__img gss-ba__img--after">
                    <span>After</span>
                  </div>
                </div>
                <p className="gss-ba__label">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gss-experts" ref={expertsRef}>
        <div className="gss-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Our Experts
          </motion.h2>
          <p className="gss-sub">Meet the artists behind your transformation</p>
        </div>
        <div className="gss-experts__scroll">
          <div className="gss-experts__track">
            {salonData.experts.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="gss-expert-card"
              >
                <div className="gss-expert-card__avatar">
                  {e.name.charAt(0)}
                </div>
                <h3>{e.name}</h3>
                <span className="gss-expert-card__role">{e.role}</span>
                <span className="gss-expert-card__exp">{e.exp} experience</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gss-packages" ref={packagesRef}>
        <div className="gss-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Packages
          </motion.h2>
          <p className="gss-sub">Choose the perfect plan for your beauty needs</p>
          <div className="gss-packages__table-wrapper">
            <table className="gss-packages__table">
              <thead>
                <tr>
                  <th className="gss-packages__feature-col">Features</th>
                  {salonData.packages.map((p, i) => (
                    <th key={i} className={`${p.popular ? 'gss-packages__col--popular' : ''}`}>
                      <span className="gss-packages__name">{p.name}</span>
                      <span className="gss-packages__price">{p.price}</span>
                      {p.popular && <span className="gss-packages__badge">Most Popular</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {salonData.packages[0].features.map((_, fi) => (
                  <tr key={fi}>
                    <td className="gss-packages__feature-name">{salonData.packages[0].features[fi].text}</td>
                    {salonData.packages.map((p, pi) => (
                      <td key={pi} className={`${p.popular ? 'gss-packages__cell--popular' : ''}`}>
                        {p.features[fi].included ? (
                          <span className="gss-packages__check">&#10003;</span>
                        ) : (
                          <span className="gss-packages__cross">&mdash;</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  {salonData.packages.map((p, i) => (
                    <td key={i} className={`${p.popular ? 'gss-packages__cell--popular' : ''}`}>
                      <button
                        className={`gss-btn gss-btn--sm ${p.popular ? 'gss-btn--primary' : 'gss-btn--outline'}`}
                        onClick={() => handleBookNow(p.name + ' Package')}
                      >
                        Book Now
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      <section className="gss-book" ref={bookRef}>
        <div className="gss-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Book Online
          </motion.h2>
          <p className="gss-sub">Schedule your appointment in seconds</p>
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gss-book__form"
            onSubmit={handleFormSubmit}
          >
            <div className="gss-book__row">
              <div className="gss-book__field">
                <label><FiUser /> Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="gss-book__field">
                <label><FiPhone /> Phone</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="gss-book__row">
              <div className="gss-book__field">
                <label><FaCut /> Service</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="">Select a service</option>
                  {salonData.services.map((s, i) => (
                    <option key={i} value={s.name}>{s.name} - {s.price}</option>
                  ))}
                </select>
              </div>
              <div className="gss-book__field">
                <label><FiCalendar /> Preferred Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="gss-book__field gss-book__field--full">
              <label><FiMessageSquare /> Message (Optional)</label>
              <textarea
                placeholder="Any special requests..."
                rows={3}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="gss-btn gss-btn--primary gss-btn--full">
              <FiSend /> Confirm Booking
            </button>
          </motion.form>
        </div>
      </section>

      <section className="gss-instagram">
        <div className="gss-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <FiInstagram /> Follow Us
          </motion.h2>
          <p className="gss-sub">{salonData.instagram} — See our latest work</p>
          <div className="gss-instagram__grid">
            {salonData.instagramPosts.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="gss-instagram__post"
              >
                <div className="gss-instagram__placeholder">
                  <FiInstagram />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gss-contact" ref={contactRef}>
        <div className="gss-container">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Get in Touch
          </motion.h2>
          <p className="gss-sub">We'd love to hear from you</p>
          <div className="gss-contact__grid">
            <div className="gss-contact__info">
              <div className="gss-contact__item">
                <FiMapPin />
                <div>
                  <strong>Visit Us</strong>
                  <span>{salonData.address}</span>
                </div>
              </div>
              <div className="gss-contact__item">
                <FiPhone />
                <div>
                  <strong>Call Us</strong>
                  <span>{salonData.phone}</span>
                </div>
              </div>
              <div className="gss-contact__item">
                <FiMail />
                <div>
                  <strong>Email Us</strong>
                  <span>{salonData.email}</span>
                </div>
              </div>
              <div className="gss-contact__item">
                <FiClock />
                <div>
                  <strong>Working Hours</strong>
                  <span>{salonData.timing}</span>
                </div>
              </div>
            </div>
            <div className="gss-contact__map">
              <iframe
                title="Glam Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <TemplateFooter name={salonData.name} onSettingsClick={() => setShowSettings(true)} />
    </div>
  );
}

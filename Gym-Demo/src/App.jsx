import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Classes = lazy(() => import('./pages/Classes'));
const Trainers = lazy(() => import('./pages/Trainers'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Membership = lazy(() => import('./pages/Membership'));
const Contact = lazy(() => import('./pages/Contact'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.body.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleDark = () => setIsDark(prev => !prev);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <ScrollToTop />
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
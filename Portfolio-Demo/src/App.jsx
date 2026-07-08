import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign'));
const VideoEditing = lazy(() => import('./pages/VideoEditing'));
const Thumbnails = lazy(() => import('./pages/Thumbnails'));
const Pricing = lazy(() => import('./pages/Pricing'));
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
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/thumbnails" element={<Thumbnails />} />
            <Route path="/pricing" element={<Pricing />} />
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
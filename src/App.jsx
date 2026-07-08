import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Loading from './components/Loading';
import ScreenProtection from './components/ScreenProtection';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const GraphicDesign = lazy(() => import('./pages/GraphicDesign'));
const Thumbnails = lazy(() => import('./pages/Thumbnails'));
const VideoEditing = lazy(() => import('./pages/VideoEditing'));
const About = lazy(() => import('./pages/About'));
const Process = lazy(() => import('./pages/Process'));
const Pricing = lazy(() => import('./pages/Pricing'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const GymTemplate = lazy(() => import('./templates/Gym'));
const RestaurantTemplate = lazy(() => import('./templates/Restaurant'));
const SalonTemplate = lazy(() => import('./templates/Salon'));
const HotelTemplate = lazy(() => import('./templates/Hotel'));
const RealEstateTemplate = lazy(() => import('./templates/RealEstate'));
const ClinicTemplate = lazy(() => import('./templates/Clinic'));
const CafeTemplate = lazy(() => import('./templates/Cafe'));
const EducationTemplate = lazy(() => import('./templates/Education'));
const EcommerceTemplate = lazy(() => import('./templates/Ecommerce'));
const TravelTemplate = lazy(() => import('./templates/Travel'));

export default function App() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [isLoading, setIsLoading] = useState(true);

  const isDemoRoute = location.pathname.startsWith('/demo/');

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
      <ScreenProtection />
      <ScrollToTop />
      {!isDemoRoute && <Navbar isDark={isDark} toggleDark={toggleDark} />}
      <main>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetails />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/thumbnails" element={<Thumbnails />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo/gym" element={<GymTemplate />} />
            <Route path="/demo/restaurant" element={<RestaurantTemplate />} />
            <Route path="/demo/salon" element={<SalonTemplate />} />
            <Route path="/demo/hotel" element={<HotelTemplate />} />
            <Route path="/demo/realestate" element={<RealEstateTemplate />} />
            <Route path="/demo/clinic" element={<ClinicTemplate />} />
            <Route path="/demo/cafe" element={<CafeTemplate />} />
            <Route path="/demo/education" element={<EducationTemplate />} />
            <Route path="/demo/ecommerce" element={<EcommerceTemplate />} />
            <Route path="/demo/travel" element={<TravelTemplate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isDemoRoute && <Footer />}
      {!isDemoRoute && <WhatsAppButton />}
    </div>
  );
}

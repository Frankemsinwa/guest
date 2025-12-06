import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Home',
      '/rooms': 'Rooms & Rates',
      '/facilities': 'Facilities',
      '/gallery': 'Gallery',
      '/about': 'About Us',
      '/contact': 'Contact & Booking',
      '/policies': 'Policies & FAQs',
      '/blog': 'Local Guide',
    };

    let title = titles[location.pathname];
    
    // Default title for unknown routes or dynamic routes handled by components
    if (!title) {
       if (location.pathname.startsWith('/rooms/')) {
         // Title will be set by RoomDetail component
         return; 
       }
       title = 'Welcome';
    }

    document.title = `${title} | GEO RIC OF METS GUEST INN`;
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-offWhite text-brand-dark">
      <ScrollToTop />
      <PageTitle />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
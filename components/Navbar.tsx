import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { COMPANY_NAME, COMPANY_PHONE } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className={`font-serif text-xl md:text-2xl font-bold tracking-tight z-50 relative ${
              scrolled || isOpen ? 'text-brand-teal' : 'text-white md:text-white' // Keep logo white on transparent header unless mobile menu open
            } ${isOpen ? '!text-brand-teal' : ''}`}>
               GEO RIC OF METS <span className="block text-xs font-sans font-normal tracking-widest uppercase opacity-80">Guest Inn</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`text-sm font-medium tracking-wide hover:text-brand-gold transition-colors ${
                    scrolled ? 'text-gray-800' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact">
                <Button size="sm" variant={scrolled ? 'primary' : 'secondary'}>
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden z-50 p-2 focus:outline-none ${scrolled || isOpen ? 'text-brand-teal' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-40 md:hidden flex flex-col justify-center items-center ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-2xl font-serif text-brand-teal hover:text-brand-gold"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="mt-4">
              <Button size="lg" variant="primary">Check Availability</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 md:hidden z-40 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="flex-1">
          <Button variant="outline" fullWidth size="sm" className="gap-2">
            <Phone size={16} /> Call
          </Button>
        </a>
        <Link to="/contact" className="flex-1">
           <Button variant="primary" fullWidth size="sm" className="gap-2">
            <Calendar size={16} /> Book
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
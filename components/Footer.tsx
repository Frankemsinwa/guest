import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_NAME, COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-teal text-white pt-16 pb-8 md:pb-8 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-sm">
              Your calm retreat in Abuja. Experience authentic hospitality, modern comfort, and a peaceful atmosphere in the heart of the city.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-brand-gold">Explore</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white hover:underline decoration-brand-gold underline-offset-4">Home</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-white hover:underline decoration-brand-gold underline-offset-4">Rooms & Rates</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-white hover:underline decoration-brand-gold underline-offset-4">Facilities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white hover:underline decoration-brand-gold underline-offset-4">Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white hover:underline decoration-brand-gold underline-offset-4">Local Guide</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white hover:underline decoration-brand-gold underline-offset-4">About Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-brand-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="flex-shrink-0 mt-1 text-brand-gold" size={20} />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="flex-shrink-0 text-brand-gold" size={20} />
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="hover:text-white">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="flex-shrink-0 text-brand-gold" size={20} />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white">{COMPANY_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link to="/policies" className="hover:text-white">Privacy Policy</Link>
             <Link to="/policies" className="hover:text-white">Policies & FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
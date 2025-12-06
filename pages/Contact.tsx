import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_PHONE_CLEAN, ROOMS } from '../constants';
import { MapPin, Phone, Mail, MessageCircle, Lock } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Contact: React.FC = () => {
  const location = useLocation();
  const initialState = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'Superior Double',
    message: ''
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      checkIn: initialState.checkIn || prev.checkIn,
      checkOut: initialState.checkOut || prev.checkOut,
      roomType: initialState.roomType || prev.roomType,
      guests: initialState.guests || prev.guests
    }));
  }, [initialState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your reservation request! \n\nWe have received your details. Our team will contact you shortly via email/phone to confirm room availability and provide payment details (Bank Transfer/Paystack).');
  };

  // Generate dynamic WhatsApp message
  const whatsappMessage = `Hello, I would like to inquire about a reservation at GEO RIC OF METS.
Name: ${formData.name || 'Guest'}
Room: ${formData.roomType}
Guests: ${formData.guests}
Dates: ${formData.checkIn || 'TBD'} to ${formData.checkOut || 'TBD'}
Message: ${formData.message || 'Please confirm availability.'}`;

  const dynamicWhatsappLink = `https://wa.me/${COMPANY_PHONE_CLEAN}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <div className="bg-brand-teal text-white py-24 md:py-32 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact & Booking</h1>
        <p className="text-gray-200">We're here to help you plan your stay.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl text-brand-teal mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our rooms, services, or location? Reach out to us directly or use the form to request a reservation.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-sand rounded-full flex items-center justify-center text-brand-teal shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-sand rounded-full flex items-center justify-center text-brand-teal shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <a href={`tel:${COMPANY_PHONE.replace(/\s/g, '')}`} className="text-gray-600 hover:text-brand-teal transition-colors">
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-sand rounded-full flex items-center justify-center text-brand-teal shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-600 hover:text-brand-teal transition-colors">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h4 className="font-bold text-green-800 mb-2">Quick Booking via WhatsApp</h4>
              <p className="text-sm text-green-700 mb-4">Prefer to chat? Fill out the details in the form to generate a pre-filled message, then click below.</p>
              <a href={dynamicWhatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 bg-green-600 hover:bg-green-700 text-white w-full border-transparent">
                  <MessageCircle size={20} /> Send WhatsApp Request
                </Button>
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-brand-offWhite p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="font-serif text-2xl text-brand-teal mb-6">Reservation Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="John Doe"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    placeholder="+234..."
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="john@example.com"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Check In</label>
                  <input 
                    type="date" 
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Check Out</label>
                  <input 
                    type="date" 
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Room Type</label>
                  <select 
                    name="roomType"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    onChange={handleChange}
                    value={formData.roomType}
                  >
                    {ROOMS.map(room => (
                      <option key={room.id} value={room.name}>{room.name}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Guests</label>
                  <select 
                    name="guests"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                    onChange={handleChange}
                    value={formData.guests}
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="family">Family</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Message (Optional)</label>
                <textarea 
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                  placeholder="Special requests, arrival time, etc."
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>

              <Button type="submit" fullWidth size="lg">Send Request</Button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4 bg-gray-100 p-2 rounded">
                 <Lock size={12} className="text-brand-teal" />
                 <span>Secure payment links (Paystack/Transfer) sent after confirmation.</span>
              </div>
            </form>
          </div>
        </div>
      </Section>
      
      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200">
        <img 
            src="https://picsum.photos/seed/mapwide/1920/600?grayscale" 
            className="w-full h-full object-cover opacity-80"
            alt="Map Location Wide"
        />
      </div>
    </>
  );
};

export default Contact;
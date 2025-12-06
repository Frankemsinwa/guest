import React, { useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const BookingWidget: React.FC = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contact', { state: { checkIn, checkOut, guests } });
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 -mt-16 relative z-10 max-w-5xl mx-auto border border-gray-100">
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-end">
        <div className="space-y-1">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Check In</label>
          <input 
            type="date" 
            required
            className="w-full border-b-2 border-gray-200 py-2 text-gray-800 focus:outline-none focus:border-brand-teal transition-colors font-medium bg-transparent"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Check Out</label>
          <input 
            type="date" 
            required
            className="w-full border-b-2 border-gray-200 py-2 text-gray-800 focus:outline-none focus:border-brand-teal transition-colors font-medium bg-transparent"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Guests</label>
          <select 
            className="w-full border-b-2 border-gray-200 py-2.5 text-gray-800 focus:outline-none focus:border-brand-teal transition-colors font-medium bg-transparent"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="family">Family (2+2)</option>
          </select>
        </div>

        <Button type="submit" fullWidth className="h-[46px]">
          Check Availability
        </Button>
      </form>
    </div>
  );
};

export default BookingWidget;
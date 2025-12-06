import React, { useState } from 'react';
import { ROOMS } from '../constants';
import Section from '../components/Section';
import RoomCard from '../components/RoomCard';
import { Check, Clock, AlertCircle, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms: React.FC = () => {
  const [filterGuests, setFilterGuests] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc'>('price_asc');

  const filteredRooms = ROOMS.filter(room => {
    if (filterGuests === 'all') return true;
    return room.capacity >= filterGuests;
  }).sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    return b.price - a.price;
  });

  return (
    <>
      {/* Page Header */}
      <div className="bg-brand-teal text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Accommodation</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Discover our range of comfortable, stylish rooms designed for your relaxation.
          </p>
        </div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2 text-gray-600 font-medium">
             <Filter size={18} />
             <span>Filter Rooms</span>
           </div>
           
           <div className="flex gap-4 w-full md:w-auto">
             <select 
               className="bg-brand-offWhite border-none rounded-md px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-brand-teal cursor-pointer flex-1 md:flex-none"
               value={filterGuests}
               onChange={(e) => setFilterGuests(e.target.value === 'all' ? 'all' : Number(e.target.value))}
             >
               <option value="all">All Capacities</option>
               <option value="2">2+ Guests</option>
               <option value="3">3+ Guests</option>
             </select>

             <select 
                className="bg-brand-offWhite border-none rounded-md px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-brand-teal cursor-pointer flex-1 md:flex-none"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
             >
               <option value="price_asc">Price: Low to High</option>
               <option value="price_desc">Price: High to Low</option>
             </select>
           </div>
        </div>
      </div>

      <Section>
        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>No rooms found matching your criteria.</p>
            <button 
              onClick={() => setFilterGuests('all')}
              className="mt-4 text-brand-teal underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </Section>

      <Section bgColor="sand">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div>
               <h3 className="font-serif text-2xl text-brand-teal mb-6">Included with Every Stay</h3>
               <div className="space-y-3">
                 {[
                   "Complimentary full breakfast",
                   "High-speed wireless internet",
                   "Daily housekeeping",
                   "24-hour power supply",
                   "Access to guest lounge",
                   "Secure parking space",
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3 text-gray-700">
                     <div className="w-5 h-5 rounded-full bg-brand-sand flex items-center justify-center text-brand-teal shrink-0">
                       <Check size={12} strokeWidth={3} />
                     </div>
                     <span>{item}</span>
                   </div>
                 ))}
               </div>
             </div>

             <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-12">
               <h3 className="font-serif text-2xl text-brand-teal mb-6">Good to Know</h3>
               <ul className="space-y-4">
                 <li className="flex gap-3">
                   <Clock className="text-brand-gold shrink-0" size={20} />
                   <div>
                     <span className="block font-bold text-gray-900">Check-in: 2:00 PM</span>
                     <span className="block font-bold text-gray-900">Check-out: 11:00 AM</span>
                   </div>
                 </li>
                 <li className="flex gap-3">
                   <AlertCircle className="text-brand-gold shrink-0" size={20} />
                   <div>
                     <span className="block font-bold text-gray-900">Cancellation Policy</span>
                     <span className="text-sm text-gray-600">Free cancellation up to 48 hours prior to arrival.</span>
                   </div>
                 </li>
               </ul>
               <div className="mt-8">
                 <Link to="/policies" className="text-brand-teal font-medium hover:underline decoration-brand-gold underline-offset-4">
                   View full policies & FAQs &rarr;
                 </Link>
               </div>
             </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default Rooms;
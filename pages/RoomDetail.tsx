import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ROOMS } from '../constants';
import Button from '../components/Button';
import Section from '../components/Section';
import { Wifi, Users, Maximize, Check, ArrowLeft, Star, AlertCircle } from 'lucide-react';

const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const room = ROOMS.find(r => r.id === id);

  useEffect(() => {
    if (room) {
      document.title = `${room.name} | GEO RIC OF METS GUEST INN`;
    }
  }, [room]);

  if (!room) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-2xl font-serif text-brand-teal mb-4">Room Not Found</h2>
        <Link to="/rooms">
          <Button variant="outline">Back to Rooms</Button>
        </Link>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate('/contact', { state: { roomType: room.name } });
  };

  return (
    <>
      {/* Back Button */}
      <div className="bg-brand-offWhite pt-24 pb-4">
        <div className="container mx-auto px-4 md:px-6">
           <Link to="/rooms" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-teal transition-colors">
             <ArrowLeft size={16} /> Back to Rooms
           </Link>
        </div>
      </div>

      <Section className="!py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Gallery / Image */}
          <div className="space-y-4">
             <div className="rounded-lg overflow-hidden shadow-md aspect-[4/3] relative">
               <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover" />
               {room.scarcityLabel && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 text-sm font-bold rounded-md shadow-md animate-pulse">
                    {room.scarcityLabel}
                  </div>
               )}
             </div>
             <div className="grid grid-cols-2 gap-4">
               {room.gallery.map((img, idx) => (
                 <div key={idx} className="rounded-lg overflow-hidden aspect-[4/3]">
                    <img src={img} alt={`${room.name} view ${idx+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                 </div>
               ))}
             </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-brand-teal mb-2">{room.name}</h1>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Users size={16} /> {room.capacity} Guests</span>
                  <span className="flex items-center gap-1"><Maximize size={16} /> {room.size}</span>
                </div>
              </div>
              <div className="text-left md:text-right">
                <span className="block text-3xl font-bold text-brand-gold">{room.currency}{room.price.toLocaleString()}</span>
                <span className="text-gray-400 text-sm">per night</span>
              </div>
            </div>

            <div className="w-16 h-1 bg-gray-200 mb-8"></div>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>{room.description}</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm mb-8">
              <h3 className="font-serif text-lg text-brand-teal mb-4 font-bold">Room Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                 {room.amenities.map((amenity, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                     <div className="text-brand-teal"><Check size={14} strokeWidth={3} /></div>
                     {amenity}
                   </div>
                 ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
               {room.scarcityLabel && (
                 <p className="text-red-600 font-medium flex items-center gap-2 text-sm">
                    <AlertCircle size={16} />
                    High demand: {room.scarcityLabel} at this price.
                 </p>
               )}
               <Button size="lg" onClick={handleBookNow}>Book This Room</Button>
               <p className="text-xs text-center text-gray-500">
                 <Star size={12} className="inline text-brand-gold mr-1" fill="currentColor"/>
                 Best rate guaranteed when booking directly.
               </p>
            </div>

          </div>
        </div>
      </Section>
    </>
  );
};

export default RoomDetail;
import React from 'react';
import { Room } from '../types';
import Button from './Button';
import { Users, Wifi, Maximize, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full relative">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={room.imageUrl} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-brand-teal rounded-full shadow-sm">
          {room.currency}{room.price.toLocaleString()} / night
        </div>
        {room.scarcityLabel && (
          <div className="absolute top-4 left-4 bg-red-600/90 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1">
             <Flame size={12} fill="currentColor" /> {room.scarcityLabel}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl mb-2 text-brand-teal">{room.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{room.shortDescription}</p>
        
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{room.capacity} Guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize size={16} />
            <span>{room.size}</span>
          </div>
           <div className="flex items-center gap-1">
            <Wifi size={16} />
            <span>Wifi</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link to={`/rooms/${room.id}`}>
            <Button fullWidth variant="outline">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
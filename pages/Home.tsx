import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Wifi, Coffee, Car, Plane } from 'lucide-react';
import Section from '../components/Section';
import RoomCard from '../components/RoomCard';
import Button from '../components/Button';
import BookingWidget from '../components/BookingWidget';
import { ROOMS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredRooms = ROOMS.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[85vh] md:h-[90vh] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hotelhero/1920/1080" 
            alt="Hotel Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-teal/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white mt-16">
          <div className="animate-fade-in-up">
            <h2 className="text-brand-gold font-medium tracking-widest uppercase text-sm md:text-base mb-4">Welcome to Abuja</h2>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Calm Retreat <br className="hidden md:block"/> in the City
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
              Comfortable rooms, warm hospitality, and easy access to the city. 
              Experience the best of local authenticity and boutique luxury.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link to="/rooms">
                <Button variant="secondary" size="lg">View Our Rooms</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-teal">Discover More</Button>
              </Link>
            </div>
          </div>
          
          {/* Features Ribbon */}
          <div className="hidden md:flex justify-center gap-8 mt-16 text-sm font-medium tracking-wide text-white/80 border-t border-white/20 pt-8 max-w-4xl mx-auto">
             <span className="flex items-center gap-2"><Coffee size={18} /> Free Breakfast</span>
             <span className="flex items-center gap-2"><Wifi size={18} /> Free Wi-Fi</span>
             <span className="flex items-center gap-2"><Plane size={18} /> Airport Transfer</span>
             <span className="flex items-center gap-2"><Car size={18} /> Secure Parking</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <BookingWidget />
      </div>

      {/* Intro Section */}
      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-teal mb-6">Experience True Comfort</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Located in the heart of Abuja, GEO RIC OF METS GUEST INN offers cozy, well-appointed rooms, 
            attentive staff, and a quiet garden perfect for relaxing after a day in the city. 
            Whether visiting for business or leisure, you’ll find delightful comfort and service 
            designed to make every stay easy.
          </p>
          <img 
            src="https://picsum.photos/seed/signature/100/60" 
            alt="Signature" 
            className="h-12 mx-auto opacity-60"
          />
        </div>
      </Section>

      {/* Featured Rooms */}
      <Section bgColor="offWhite">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-teal mb-2">Our Rooms</h2>
            <p className="text-gray-500">Designed for your relaxation</p>
          </div>
          <Link to="/rooms" className="hidden md:flex items-center gap-2 text-brand-gold hover:text-yellow-700 transition-colors font-medium">
            View All Rooms <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRooms.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Link to="/rooms">
             <Button variant="outline" fullWidth>View All Rooms</Button>
           </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bgColor="teal" className="relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Guest Reviews</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-brand-teal border border-white/10 p-8 rounded-lg relative">
              <div className="flex gap-1 mb-4 text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="text-gray-200 italic mb-6 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center font-serif text-brand-teal font-bold">
                   {t.name.charAt(0)}
                 </div>
                 <div>
                   <h4 className="font-bold text-white text-sm">{t.name}</h4>
                   <p className="text-xs text-gray-400 uppercase tracking-wider">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Location/CTA */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 h-96 bg-gray-200 rounded-lg overflow-hidden relative">
            {/* Embedded Google Map Placeholder - using an image for now as requested no external complex scripts */}
            <img 
               src="https://picsum.photos/seed/map/800/800?grayscale" 
               className="w-full h-full object-cover opacity-80"
               alt="Map Location"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
               <Button variant="primary">View on Google Maps</Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-teal mb-6">Stay in the Heart of Abuja</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are conveniently located in Wuse Zone 5, just minutes away from major business districts, shopping centers, and cultural landmarks. Enjoy the perfect balance of accessibility and serenity.
            </p>
            <ul className="space-y-4 mb-8 text-gray-600">
               <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-gold rounded-full"></div> 10 mins to Central Business District</li>
               <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-gold rounded-full"></div> 35 mins to Nnamdi Azikiwe Airport</li>
               <li className="flex items-center gap-3"><div className="w-2 h-2 bg-brand-gold rounded-full"></div> 5 mins to Wuse Market</li>
            </ul>
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
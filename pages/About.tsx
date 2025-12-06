import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <>
       <div className="relative h-[60vh] flex items-center justify-center">
        <img 
          src="https://picsum.photos/seed/reception/1920/800" 
          alt="Reception" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white p-4">
           <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
           <p className="text-xl max-w-2xl mx-auto text-gray-200">Rooted in Abuja, dedicated to your comfort.</p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
             <div className="flex-1">
                <h2 className="font-serif text-3xl text-brand-teal mb-6">A Boutique Experience</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  GEO RIC OF METS GUEST INN was born from a desire to create a sanctuary within the bustling city of Abuja. We noticed a gap between large, impersonal hotels and smaller guesthouses. We wanted to offer something different: the warmth of a family home with the standards of a luxury hotel.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every detail, from our locally sourced art to our garden courtyard, is curated to make you feel grounded and relaxed. Whether you are here for a critical business meeting or a weekend getaway, our mission is simple: to make your stay effortless.
                </p>
             </div>
             <div className="flex-1 relative">
                <div className="absolute top-4 -right-4 w-full h-full border-2 border-brand-gold rounded-lg hidden md:block"></div>
                <img src="https://picsum.photos/seed/staff/600/800" alt="Our Staff" className="rounded-lg shadow-lg relative z-10 w-full" />
             </div>
          </div>

          <div className="bg-brand-offWhite p-8 md:p-12 rounded-lg text-center">
             <h3 className="font-serif text-2xl text-brand-teal mb-6">Our Philosophy</h3>
             <blockquote className="text-xl italic text-gray-600 mb-6">
               "Hospitality is not just about a bed to sleep in. It's about how you feel when you walk through the door and how you feel when you leave. We want every guest to leave feeling refreshed and cared for."
             </blockquote>
             <cite className="not-italic font-bold text-brand-teal">— The Management</cite>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
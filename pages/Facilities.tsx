import React from 'react';
import Section from '../components/Section';
import { AMENITIES } from '../constants';

const Facilities: React.FC = () => {
  return (
    <>
      <div className="bg-brand-teal text-white py-24 md:py-32 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Services & Facilities</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Everything you need for a comfortable and convenient stay.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {AMENITIES.map((amenity, index) => {
             const Icon = amenity.icon;
             return (
              <div key={index} className="bg-brand-offWhite p-8 rounded-lg text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-brand-teal mb-6 shadow-sm">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-brand-teal mb-3">{amenity.name}</h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
             )
          })}
        </div>
      </Section>

      <Section bgColor="sand">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/seed/breakfast/800/600" 
                alt="Dining" 
                className="rounded-lg shadow-lg w-full mb-6"
              />
               <img 
                src="https://picsum.photos/seed/laundry/800/600" 
                alt="Laundry Service" 
                className="rounded-lg shadow-lg w-full hidden md:block"
              />
            </div>
            <div className="space-y-10">
               <div>
                 <h3 className="font-serif text-3xl text-brand-teal mb-4">Dining</h3>
                 <p className="text-gray-600 leading-relaxed">
                   Start your day right with our complimentary breakfast, featuring a selection of fresh fruits, local delicacies, and continental classics. 
                   For other meals, our staff can recommend excellent local restaurants or arrange for delivery from top city eateries.
                 </p>
               </div>
               
               <div>
                  <h3 className="font-serif text-3xl text-brand-teal mb-4">Laundry & Housekeeping</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Look your best during your stay. We offer reliable laundry and dry-cleaning services with same-day return options available. Daily housekeeping ensures your room remains a pristine sanctuary throughout your visit.
                  </p>
               </div>

               <div>
                 <h3 className="font-serif text-3xl text-brand-teal mb-4">Meetings & Events</h3>
                 <p className="text-gray-600 leading-relaxed">
                   Host your small business meetings or intimate gatherings in our dedicated meeting room. Equipped with high-speed internet and comfortable seating, we provide the perfect environment for productivity. Catering options are available upon request.
                 </p>
               </div>

               <div>
                 <h3 className="font-serif text-3xl text-brand-teal mb-4">Airport Transfers</h3>
                 <p className="text-gray-600 leading-relaxed">
                   We offer convenient airport pickup and drop-off services upon request. Let us take the stress out of your travel logistics so you can focus on your trip.
                   <br/><span className="text-sm italic text-gray-500">*Additional charges may apply.</span>
                 </p>
               </div>
            </div>
         </div>
      </Section>
    </>
  );
};

export default Facilities;
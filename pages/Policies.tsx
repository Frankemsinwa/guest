import React from 'react';
import Section from '../components/Section';
import { Clock, HelpCircle, ShieldAlert, CreditCard } from 'lucide-react';

const Policies: React.FC = () => {
  return (
    <>
      <div className="bg-brand-teal text-white py-24 md:py-32 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Policies & FAQs</h1>
        <p className="text-gray-200">Essential information for your stay.</p>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Policies Grid */}
          <div>
             <h2 className="font-serif text-3xl text-brand-teal mb-8 border-b pb-4">Guest Policies</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                   <div className="flex items-center gap-3 mb-4 text-brand-gold">
                      <Clock size={24} />
                      <h3 className="font-serif text-xl text-brand-teal font-semibold">Check-in & Check-out</h3>
                   </div>
                   <ul className="space-y-2 text-gray-600">
                      <li><strong>Check-in:</strong> From 2:00 PM</li>
                      <li><strong>Check-out:</strong> Until 11:00 AM</li>
                      <li className="text-sm italic mt-2">Early check-in and late check-out are subject to availability and may incur additional charges.</li>
                   </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                   <div className="flex items-center gap-3 mb-4 text-brand-gold">
                      <ShieldAlert size={24} />
                      <h3 className="font-serif text-xl text-brand-teal font-semibold">Cancellation</h3>
                   </div>
                   <p className="text-gray-600">
                      Free cancellation is available up to 48 hours before your scheduled arrival date. Cancellations made within 48 hours of arrival will be charged the first night's rate.
                   </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                   <div className="flex items-center gap-3 mb-4 text-brand-gold">
                      <HelpCircle size={24} />
                      <h3 className="font-serif text-xl text-brand-teal font-semibold">Children & Beds</h3>
                   </div>
                   <p className="text-gray-600">
                      Children of all ages are welcome. Kids under 6 stay free when using existing bedding. Extra beds/cots are available upon request for a fee.
                   </p>
                </div>

                 <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                   <div className="flex items-center gap-3 mb-4 text-brand-gold">
                      <CreditCard size={24} />
                      <h3 className="font-serif text-xl text-brand-teal font-semibold">Payment Methods</h3>
                   </div>
                   <p className="text-gray-600">
                      We accept cash, bank transfers, and major debit/credit cards (Visa, Mastercard, Verve). A deposit may be required to secure your booking during peak seasons.
                   </p>
                </div>
             </div>
          </div>

          {/* FAQs */}
          <div>
             <h2 className="font-serif text-3xl text-brand-teal mb-8 border-b pb-4">Frequently Asked Questions</h2>
             <div className="space-y-6">
                {[
                  { q: "Is breakfast included in the room rate?", a: "Yes, a complimentary full breakfast is included for up to two guests per room." },
                  { q: "Do you offer airport pickup?", a: "Yes, we can arrange airport transfer services upon request. Please contact us with your flight details at least 24 hours in advance." },
                  { q: "Is there secure parking?", a: "Absolutely. We provide a secure, guarded parking area within the property premises for all our guests." },
                  { q: "Are pets allowed?", a: "To ensure the comfort of all guests, we generally do not allow pets. Please contact management for special circumstances." },
                  { q: "Can I host a meeting at the inn?", a: "Yes, we have a small meeting room suitable for business discussions. Please inquire at reception for availability and rates." }
                ].map((item, idx) => (
                   <div key={idx} className="bg-brand-offWhite p-6 rounded-lg">
                      <h4 className="font-bold text-lg text-brand-teal mb-2">{item.q}</h4>
                      <p className="text-gray-600">{item.a}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </Section>
    </>
  );
};

export default Policies;
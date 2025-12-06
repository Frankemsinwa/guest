import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'sand' | 'offWhite' | 'teal';
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, bgColor = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    sand: 'bg-brand-sand',
    offWhite: 'bg-brand-offWhite',
    teal: 'bg-brand-teal text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bgColor]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
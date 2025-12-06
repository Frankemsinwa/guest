import React, { useState } from 'react';
import Section from '../components/Section';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = Array.from({ length: 9 }).map((_, i) => ({
    src: `https://picsum.photos/seed/hotel${i + 10}/1200/900`,
    category: i % 3 === 0 ? 'Rooms' : i % 3 === 1 ? 'Exterior' : 'Dining'
  }));

  const openLightbox = (src: string) => setSelectedImage(src);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <div className="bg-brand-teal text-white py-24 md:py-32 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-gray-200">A glimpse into our world.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer"
              onClick={() => openLightbox(img.src)}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                 <span className="text-white font-medium tracking-wider border border-white px-4 py-2">{img.category}</span>
                 <span className="text-white/80 text-sm flex items-center gap-1"><ZoomIn size={14}/> View Full</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Fullscreen" 
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
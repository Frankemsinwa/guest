import React from 'react';
import Section from '../components/Section';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Top 5 Restaurants in Wuse Zone 5",
      excerpt: "From authentic Jollof Rice to continental fine dining, discover the culinary gems just a short walk from our inn.",
      image: "https://picsum.photos/seed/foodng/800/600",
      date: "October 12, 2023",
      category: "Dining"
    },
    {
      id: 2,
      title: "A Weekend Guide to Abuja Arts & Crafts Village",
      excerpt: "Explore the vibrant local art scene and pick up unique souvenirs. A perfect cultural afternoon trip.",
      image: "https://picsum.photos/seed/artng/800/600",
      date: "September 28, 2023",
      category: "Culture"
    },
    {
      id: 3,
      title: "Hiking Zuma Rock: What You Need to Know",
      excerpt: "Planning to visit the iconic monolith? Here are our top tips for a safe and memorable adventure.",
      image: "https://picsum.photos/seed/zuma/800/600",
      date: "August 15, 2023",
      category: "Adventure"
    }
  ];

  return (
    <>
      <div className="bg-brand-teal text-white py-24 md:py-32 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Local Guide</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Explore the best of Abuja. Curated tips for our guests.
        </p>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                   <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                   <span className="bg-brand-sand text-brand-teal px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                </div>
                <h3 className="font-serif text-xl text-brand-teal mb-3 font-bold leading-tight">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                <button className="text-brand-gold font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      <Section bgColor="sand" className="text-center">
        <h2 className="font-serif text-3xl text-brand-teal mb-4">Need Personalized Recommendations?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Our front desk staff are locals who love their city. Ask us for hidden gems, taxi arrangements, or safety tips during your stay.
        </p>
        <div className="flex items-center justify-center gap-2 text-brand-teal font-medium">
           <MapPin size={20} /> We are here to help you navigate.
        </div>
      </Section>
    </>
  );
};

export default Blog;
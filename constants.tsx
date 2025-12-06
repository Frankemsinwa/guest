import { Wifi, Coffee, Car, Shield, Wind, Tv, Briefcase, MapPin, Shirt } from 'lucide-react';
import { Room, Testimonial, Amenity } from './types';

export const COMPANY_NAME = "GEO RIC OF METS GUEST INN";
export const COMPANY_ADDRESS = "123 Unity Street, Wuse Zone 5, Abuja, Nigeria";
export const COMPANY_PHONE = "+234 800 123 4567";
export const COMPANY_PHONE_CLEAN = "2348001234567"; // For links
export const COMPANY_EMAIL = "reservations@georicofmets.com";
export const WHATSAPP_LINK = `https://wa.me/${COMPANY_PHONE_CLEAN}`;

export const ROOMS: Room[] = [
  {
    id: 'superior-double',
    name: 'Superior Double',
    shortDescription: 'King bed, en-suite, complimentary breakfast.',
    description: 'Our Superior Double room offers a perfect blend of comfort and style. Featuring a spacious King-size bed, a modern en-suite bathroom, and a dedicated workspace, it is ideal for both business travelers and couples seeking a quiet retreat.',
    price: 45000,
    currency: '₦',
    capacity: 2,
    size: '30m²',
    amenities: ['King Bed', 'Free Wi-Fi', 'Breakfast Included', 'AC', 'Smart TV', 'Work Desk'],
    imageUrl: 'https://picsum.photos/seed/room1/800/600',
    gallery: ['https://picsum.photos/seed/room1a/800/600', 'https://picsum.photos/seed/room1b/800/600'],
    scarcityLabel: 'Best Seller'
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    shortDescription: 'Extra space, lounge area, premium amenities.',
    description: 'The Executive Suite is designed for those who value extra space and luxury. Includes a separate lounge area for relaxation or informal meetings, premium toiletries, and a balcony with city views.',
    price: 75000,
    currency: '₦',
    capacity: 2,
    size: '45m²',
    amenities: ['King Bed', 'Lounge Area', 'Balcony', 'Free Wi-Fi', 'Breakfast', 'Mini Bar', 'Bathtub'],
    imageUrl: 'https://picsum.photos/seed/room2/800/600',
    gallery: ['https://picsum.photos/seed/room2a/800/600', 'https://picsum.photos/seed/room2b/800/600'],
    scarcityLabel: 'Only 1 room left'
  },
  {
    id: 'deluxe-twin',
    name: 'Deluxe Twin',
    shortDescription: 'Two double beds, perfect for friends or family.',
    description: 'Spacious and versatile, the Deluxe Twin features two comfortable double beds. It comes equipped with all modern amenities to ensure a restful stay for friends or small families.',
    price: 55000,
    currency: '₦',
    capacity: 3,
    size: '35m²',
    amenities: ['2 Double Beds', 'Free Wi-Fi', 'AC', 'Tea/Coffee Maker', 'Shower'],
    imageUrl: 'https://picsum.photos/seed/room3/800/600',
    gallery: ['https://picsum.photos/seed/room3a/800/600', 'https://picsum.photos/seed/room3b/800/600'],
    scarcityLabel: 'Popular Choice'
  }
];

export const AMENITIES: Amenity[] = [
  { icon: Wifi, name: 'Free High-Speed Wi-Fi', description: 'Stay connected throughout the property.' },
  { icon: Coffee, name: 'Complimentary Breakfast', description: 'Start your day with local and continental options.' },
  { icon: Car, name: 'Secure Parking', description: '24/7 guarded parking space for guests.' },
  { icon: Shield, name: '24/7 Security', description: 'Your safety is our top priority.' },
  { icon: Wind, name: 'Air Conditioning', description: 'Climate control in every room.' },
  { icon: Tv, name: 'Smart TV', description: 'Entertainment at your fingertips.' },
  { icon: Briefcase, name: 'Meeting Room', description: 'Facilities for business discussions.' },
  { icon: Shirt, name: 'Laundry Service', description: 'Quick and professional laundry service.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chinedu O.',
    role: 'Business Traveler',
    content: 'A hidden gem in Abuja. The staff were incredibly welcoming, and the room was spotless. The breakfast was the highlight of my mornings.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah J.',
    role: 'Tourist',
    content: 'I loved the calm atmosphere. It felt like a home away from home. The courtyard is beautiful for evening relaxation.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ahmed K.',
    role: 'Guest',
    content: 'Great value for money. Secure, clean, and very comfortable beds. Will definitely stay here again.',
    rating: 4,
  },
];
export interface Room {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  capacity: number;
  size: string;
  amenities: string[];
  imageUrl: string;
  gallery: string[];
  scarcityLabel?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Amenity {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
}

export enum AvailabilityStatus {
  Available = 'Available',
  Limited = 'Limited',
  SoldOut = 'Sold Out'
}
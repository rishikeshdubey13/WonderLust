export interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  duration: string;
}

export interface Package {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  included: string[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface Booking {
  id: number;
  destinationId: number;
  date: string;
  guests: number;
  status: 'pending' | 'confirmed' | 'completed';
  totalPrice: number;
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  country?: string;
  bookings: Booking[];
  wishlist: number[];
}
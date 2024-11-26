import { Destination, Package, Testimonial, UserProfile } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini Sunset",
    location: "Greece",
    description: "Experience the magical sunsets of Santorini with its white-washed buildings and blue domes.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=2000",
    price: 1299,
    rating: 4.8,
    duration: "7 days"
  },
  {
    id: 2,
    name: "Machu Picchu Explorer",
    location: "Peru",
    description: "Discover the ancient Incan citadel set high in the Andes Mountains.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=2000",
    price: 1599,
    rating: 4.9,
    duration: "10 days"
  },
  {
    id: 3,
    name: "Bali Paradise",
    location: "Indonesia",
    description: "Immerse yourself in Bali's rich culture, pristine beaches, and lush landscapes.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=2000",
    price: 999,
    rating: 4.7,
    duration: "8 days"
  }
];

export const packages: Package[] = [
  {
    id: 1,
    title: "Luxury Island Escape",
    description: "All-inclusive luxury resort experience with private beach access",
    price: 2499,
    duration: "7 days",
    included: ["5-star accommodation", "All meals", "Spa treatment", "Private tours"],
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=2000"
  },
  {
    id: 2,
    title: "Adventure Expedition",
    description: "Action-packed adventure through mountains and forests",
    price: 1899,
    duration: "10 days",
    included: ["Guided treks", "Equipment rental", "Camping", "Local transport"],
    image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=2000"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment: "The best travel experience of my life! Everything was perfectly organized.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Michael Chen",
    comment: "Incredible value for money. The local guides were knowledgeable and friendly.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

// Mock user data
export const mockUser: UserProfile = {
  name: "Alex Thompson",
  email: "alex@example.com",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  phone: "+1 (555) 123-4567",
  country: "United States",
  bookings: [
    {
      id: 1,
      destinationId: 1,
      date: "2024-06-15",
      guests: 2,
      status: "confirmed",
      totalPrice: 2598
    },
    {
      id: 2,
      destinationId: 3,
      date: "2024-08-20",
      guests: 3,
      status: "pending",
      totalPrice: 2997
    }
  ],
  wishlist: [2]
};
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { mockUser, destinations } from '../data';
import DestinationCard from '../components/DestinationCard';

export default function Wishlist() {
  const wishlistItems = destinations.filter(dest => 
    mockUser.wishlist.includes(dest.id)
  );

  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-2" />
            <h1 className="text-3xl font-bold">My Wishlist</h1>
          </div>
          <p className="text-gray-600">Your dream destinations saved for later</p>
        </motion.div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Your wishlist is empty. Start exploring destinations!</p>
          </div>
        )}
      </div>
    </div>
  );
}
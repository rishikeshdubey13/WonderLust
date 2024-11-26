import { motion } from 'framer-motion';
import { destinations } from '../data';
import DestinationCard from '../components/DestinationCard';
import { MapPin } from 'lucide-react';

export default function Destinations() {
  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              <p className="text-xl">Discover amazing places around the world</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
}
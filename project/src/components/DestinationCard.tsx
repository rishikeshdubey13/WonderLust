import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Destination } from '../types';

interface Props {
  destination: Destination;
}

export default function DestinationCard({ destination }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48 sm:h-64">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{destination.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
            <p className="text-gray-600">{destination.location}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{destination.duration}</p>
            <p className="text-lg font-bold text-blue-600">${destination.price}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{destination.description}</p>
        
        <Link 
          to={`/destination/${destination.id}`}
          className="block w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}